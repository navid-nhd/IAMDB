<template>
    <div v-if="dataStore.actorsName[i]" class="cast-info-holder flex justify-start items-center gap-3 transition-all">
        <div class="cast-image-holder w-20 h-20 rounded-full">
            <img class="cast-img w-20 h-20 rounded-full block" :src="dataStore.actorsImages[i]" :alt="dataStore.actorsName[i]">
        </div>
        <div class="cast-name-role">
            <div class="cast-name text-base">{{dataStore.actorsName[i]}}</div>
            <div class="cast-role text-sm opacity-60">as {{dataStore.actorsRole[i]}}</div>
        </div>
    </div>
</template>
<script>
import { mapStores,mapActions } from 'pinia';
import { useMovieData } from '@/stores/counter';
    export default{
        props : {
            personalInfo : {
                type : Object,
            },
            i: {
                type : String,
            }
        },
        computed : {
            ...mapStores(useMovieData)
        }
    }
</script>
<style scoped>

    .cast-img{
        /* @apply ; */
        object-fit: cover;
    }
</style>