<template>
    
    
</template>
<script>
  import { mapStores,mapActions } from 'pinia';
  import { useMovieData } from '@/stores/counter';
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


                fetch('https://imdb-api.com/en/API/Posters/k_73l2tbte/tt1375666', {
                    method: 'GET',
                    redirect: 'follow'
                })
                .then( response => response.text())
                .then( res => JSON.parse(res))
                .then( res => {
                    console.log(res)
                    this.dataStore.posterImage = res.posters[0].link
                    this.dataStore.bgImage = res.backdrops[0].link
                })
                .catch(error => {
                    window.location.href = 'http://localhost:5173/error'
                    console.log('error', error)
                });
                }
        },
        computed:{
            ...mapStores(useMovieData),
            inputUpdate(){
                return this.dataStore.searchInput = input
            }
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