<template>
    <div class="input">
        <input type="text" placeholder="Your favorite movie ...">
    </div>
</template>
<script>
    export default{

        // const text = (screen.width < 992) ? 'Join our newsletter' : 'Your email' ,
        data(){
            return{

            }
        },
        methods:{


            
        },
    }
</script>
<style>
    input[type=text]{
        @apply w-full rounded-[100px] py-3 px-8 border-2 border-zinc-500;
        background-color: var(--bg-color);
    }
    input[type=text]::placeholder{
        @apply text-base font-normal;
        
    }

    @media (min-width: 992px) {

    }
</style>