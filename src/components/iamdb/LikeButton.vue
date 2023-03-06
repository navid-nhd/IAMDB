<template>
    <button class="share-btn-holder" @click="changeFavStatus(),dataStore.addOrRemoveFavList(this.dataStore.movieTitle)">
        <svg v-if="!checkingInFavlist" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-heart heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
        <svg v-if="checkingInFavlist" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill heart" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
    </button>
</template>
<script>
import { mapStores,mapActions } from 'pinia';
import { useMovieData } from '@/stores/counter';
    export default{
        data() {
            return{
                isFavorite : false,
            }
        },
        methods: {
            ...mapActions(useMovieData,['addOrRemoveFavList']),
            changeFavStatus(){
                this.isFavorite = this.isFavorite ? false : true
                
                console.log(this.dataStore.movieTitle,this.dataStore.favoriteList)
            }
        },
        components:{

        },
        computed: {
            ...mapStores(useMovieData),
            checkingInFavlist(){
            if(this.dataStore.favoriteList){
                return  this.dataStore.favoriteList.some(item => item === this.dataStore.movieTitle)
            }else{
                return false;
            }
        }
        }
    }
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

    .share-btn-holder{
        @apply w-11 h-11 border-2 border-solid border-zinc-200 rounded-full flex justify-center items-center transition-colors;
        background-color: var(--bg-color);
    }
    .share-btn-holder:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }
    .share-btn-icon{
        @apply  w-4 h-4;
    }
    .heart{
        @apply w-4 h-4;
    }
    @media (min-width:992px)  {
        .share-btn-holder{
            @apply  w-16 h-16;
        }
        .share-btn-icon{
            @apply  w-5 h-5;
        }
        .heart{
            @apply w-5 h-5;
        }
    }
</style>