<template>
    <div class="input" >
        <input class="small" type="text" placeholder="Type the name of your favorite movie ...">
        <input class="large" type="text" placeholder="Your favorite movie ...">
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{       
            
        },
        computed:{
            
        }
    }
</script>
<style scoped>
    input[type=text]{
        @apply w-full rounded-[100px] py-3 px-8 border-2 border-zinc-500;
        background-color: var(--bg-color);
    }
    input[type=text]::placeholder{
        @apply text-base font-normal;
    }
    input.large { 
        @apply inline-block;
    }
    input.small { 
        @apply hidden; 
    }
    @media (min-width: 992px) {
        input.large { 
            @apply hidden;  
        }
        input.small { 
            @apply inline-block; 
        }
    }
</style>