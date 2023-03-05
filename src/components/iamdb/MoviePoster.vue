<template>
    <div class="movie-poster-holder">
        <img class="movie-poster" :src="dataStore.posterImage" :alt="dataStore.movieTitle">
    </div>
</template>
<script>
    import { mapStores,mapActions } from 'pinia';
    import { useMovieData } from '@/stores/counter';
    export default{
        computed : {
            ...mapStores(useMovieData)
        }
    }
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;


.movie-poster{
    @apply rounded-xl w-full aspect-[2/3];
    box-shadow: 0px 6px 12px 0px var(--bg-color) ; 
}
</style>