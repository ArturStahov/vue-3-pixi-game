<template>
    <div class="home-wrapper">
        <h1 class='logo'>Hero<span>last</span></h1>
        <AuthForm @submit:form="handlerRegistered" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthForm from "../../Components/AuthForm/AuthForm.vue";
export default defineComponent({
    name: 'HomePage',
    components: {
        AuthForm,
    },
    setup() {
       const handlerRegistered = (user: any) => {
        console.log(user)
       }

        return {handlerRegistered}
    }
})
</script>

<style scoped lang="scss">
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