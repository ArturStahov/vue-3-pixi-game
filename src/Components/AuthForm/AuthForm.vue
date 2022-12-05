<template>
    <form @submit.prevent="handleSubmit" class="auth-form">
        <p-select-btn
            v-model="action"
            :options="options"
            :unselectable="false"
            aria-labelledby="single"
            class="p-button-secondary action-select"
        />

        <span class="p-float-label auth-form__field">
            <p-input id="email" type="email" v-model="state.email" />
            <label for="email">Email</label>
        </span>
        <span v-if="action === 'sign-in'" class="p-float-label auth-form__field">
            <p-input id="username" type="text" v-model="state.name" />
            <label for="username">Username</label>
        </span>
        <span class="p-float-label auth-form__field">
            <p-input id="password" type="password" v-model="state.password" />
            <label for="password">Password</label>
        </span>
        <span v-if="action === 'sign-in'" class="p-float-label auth-form__field">
            <p-input id="password" type="password" v-model="state.repeatPassword" />
            <label for="password">Repeat password</label>
        </span>
        <p-button
            :disabled="action === 'sign-in' ? validSignIn : validLogIn"
            type="submit"
            class="auth-form__submit-button p-button-secondary"
            >Submit</p-button
        >
    </form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, computed } from 'vue';
import { IFormPayload, formAction, authAction } from '@/interface/auth-form.interface';
export default defineComponent({
    name: 'AuthForm',
    setup(props, { emit }) {
        const state = reactive({
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
        });

        const action = ref<formAction>(authAction.SIGN_IN);
        const options = ref<formAction[]>([authAction.SIGN_IN, authAction.LOGIN]);

        const validSignIn = computed(() => {
            return !(state.password && state.name && state.email && state.password === state.repeatPassword);
        });

        const validLogIn = computed(() => {
            return !(state.password && state.email);
        });

        const handleSubmit = () => {
            const payload: IFormPayload = {
                action: action.value,
                value: {
                    email: state.email,
                    name: state.name,
                    password: state.password,
                },
            };
            emit('submit:form', payload);
            resetForm();
        };

        const resetForm = () => {
            state.name = '';
            state.email = '';
            state.password = '';
            state.repeatPassword = '';
        };

        return {
            state,
            handleSubmit,
            validSignIn,
            options,
            action,
            validLogIn,
        };
    },
});
</script>


<style scoped lang="scss">
.auth-form {
    width: 500px;
    margin: 0 auto;
    background-color: #0d4552;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 4px 4px 15px 4px #cbcbcb6e;
    &__title {
        margin-bottom: 2rem;
    }

    label {
        color: #a5a5a5;
    }
    .action-select {
        width: 80%;
        display: flex;
        margin: 0 auto 50px;
        &::v-deep .p-button {
            width: 50%;
        }
        &::v-deep div:hover {
            background-color: rgb(0, 27, 134);
        }
        &::v-deep .p-highlight {
            background-color: #2a3040;
        }
    }

    &__field {
        width: 80%;
        display: flex;
        margin: 0 auto;
        .p-inputtext {
            width: 100%;
        }
        &:not(:last-child) {
            margin-bottom: 2rem;
        }
        .p-inputtext {
            background: #d1d1d1;
        }
    }

    &__submit-button {
        width: 80%;
        margin: 0 auto;
        justify-content: center;
    }
}
</style>