<template>
    <div class="similar-movies">
        <div class="similar-image-holder">
            <img class="similar-img" :src="dataStore.similarImage[i]" :alt="dataStore.similarTitle[i]">
        </div>
        <div class="similar-movie-description">
            <div class="sm-name">{{dataStore.similarTitle[i]}}</div>
            <div class="sm-status flex  gap-2 items-center">
                <div class="sm-favorite">
                    <svg v-if="similarMovieData.favorite" @click="addToFavs()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" :class="`bi ${favClass}`" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                    <svg v-if="!similarMovieData.favorite" @click="addToFavs()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                </div>
                <div class="sm-star">
                    <img class="star-icon" src="src/assets/images/StarIcon.png" alt="add to favorite">
                </div>
                <div class="sm-rating">
                    {{dataStore.similarRating[i]}}
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
import { mapStores,mapActions } from 'pinia';
import { useMovieData } from '@/stores/counter';
    export default{
        props: {
            similarMovieData : {
                type : Object,
            },
            i: {
                type: Number,
            }
        },
        data(){
            return{

            }
        },  
        methods:{
            addToFavs(){
                this.similarMovieData.favorite = this.similarMovieData.favorite ? false : true
            }
        },
        computed : {
            ...mapStores(useMovieData)
        }
    }
</script>
<style>
    .similar-image-holder{
        width: 230px;
        height: 342px
    }
    .similar-img{
        @apply w-full rounded-xl block;
        width: 230px;
        height: 342px
    }
    .similar-movie-description{
        @apply p-3 flex justify-between items-center;
        
    }
    .sm-status{
        
    }
    .sm-name{
        max-width: 70%;
        max-height: 30px; 
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        /* position: relative */
    }
    .sm-name,.sm-rating{
        @apply text-base font-bold;
    }
    .favorite-icon,.star-icon{
        @apply w-4 h-4;
    }
    @media (min-width: 992px) {
        .sm-name,.sm-rating{
            @apply text-lg;
        }
        .similar-image-holder{
            width: 276px;
            height: 409px
        }
        .similar-img{
            width: 276px;
            height: 409px
        }
    }

</style>