<template>
    <div class="home-wrapper">
        <h1 class="logo">Hero<span>last</span></h1>
        <AuthForm @submit:form="handlerAuth" />
    </div>
</template>

<script lang="ts">
import { IFormPayload } from '@/interface/auth-form.interface';
import { defineComponent } from 'vue';
import AuthForm from '../../Components/AuthForm/AuthForm.vue';
import { useUserStore } from '../../stor/userStor';
import { authService } from '../../services/auth.service';
import { IUser } from '@/interface/user.interface';
import { Pages } from '../../constants/pages';

export default defineComponent({
    name: 'HomePage',
    components: {
        AuthForm,
    },
    data() {
        return {
            Pages: Pages,
        };
    },
    setup() {
        const userStor = useUserStore();

        return { userStor };
    },
    methods: {
        async handlerAuth(formData: IFormPayload) {
            await authService(formData);
        },
    },
    computed: {
        user() {
            return this.userStor.getUser;
        },
    },
    watch: {
        user: {
            handler(user: IUser) {
                if (user) {
                    this.$router.push({ name: Pages.GAME });
                }
            },
        },
    },
});
</script>

<style scoped lang="scss">
.home-wrapper {
    background-image: url('https://cdn.pixabay.com/photo/2016/03/18/15/02/ufo-1265186_960_720.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.logo {
    display: inline-flex;
    flex-direction: column;
    font-size: 76px;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(244, 244, 244);
    span {
        -webkit-text-stroke-width: 0px;
        font-size: 30px;
        color: rgb(247, 162, 34);
        align-self: flex-end;
        transform: translateY(-23px);
    }
}
</style>