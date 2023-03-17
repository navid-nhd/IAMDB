<template>
        <div class="w-full" >
            <div class="similar-image-holder basis-auto w-full">
                <img class="similar-img w-full" :src="dataStore.similarImage[slideNum]" :alt="dataStore.similarTitle[slideNum]">
            </div>
            <div class="flex justify-between pr-2 py-2 w-full">
                
                    <router-link :to="`/result/${dataStore.similarTitle[slideNum]}`" target="_self" class="sm-name" @click="dataStore.fetchInput(dataStore.similarTitle[slideNum])">{{dataStore.similarTitle[slideNum]}}</router-link>
                
                <div class="sm-rating flex gap-2 pr-3 items-center">
                    <HeartIcon :slideNum="slideNum"></HeartIcon>
                    <img class="star-icon" src="@/assets/images/StarIcon.png" alt="add to favorite">
                    {{dataStore.similarRating[slideNum]}}
                </div>
            </div>
        </div>
    
</template>
<script>
import { mapStores,mapActions } from 'pinia';
import { useMovieData } from '@/stores/counter';


import HeartIcon from '@/components/iamdb/HeartIcon.vue'
export default{
    props:{
        slideNum: {
            type: Number,
        }
    },
    components: {
        HeartIcon,
    },
    methods: {
        ...mapActions(useMovieData,['addOrRemoveFavList']),
    },
    computed: {
        ...mapStores(useMovieData)
    }
}
</script>
<style>
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
    }
</style>