<template>
    <div class=" flex flex-wrap lg:flex-nowrap  items-center">
        <div class="input flex-shrink-0 flex-grow-0 basis-auto w-full lg:w-4/5   lg:pr-3" >
            <input class="small" type="text" placeholder="Type the name of your favorite movie ..." v-model="input">
            <input class="large" type="text" placeholder="Your favorite movie ..." v-model="input">
        </div>
        <div class="search-btn flex-shrink-0 flex-grow-0 basis-auto w-full lg:w-1/5">
            <button class="text" @click="gettingInput">
                <span>Search</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
        </div>
    </div>
    
</template>
<script>
    export default{
        data(){
            return{
                input : '',
            }
        },
        methods:{       
            gettingInput(){
                this.$emit('gettingInput',this.input),
                this.input = ''
            }
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
    .search-btn {
        @apply py-4;
    }
    .text{
        @apply flex justify-center items-center gap-3 w-full text-base rounded-[100px] bg-red-700 hover:bg-red-800 py-3 px-8;
        text-align: center;
    }
    @media (min-width: 992px) {
        input.large { 
            @apply hidden;  
        }
        input.small { 
            @apply inline-block; 
        }
        .text{
            @apply text-xl;
        }
    }
    
    
</style>