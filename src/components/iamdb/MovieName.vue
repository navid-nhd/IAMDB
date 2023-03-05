<template>
    <div class="movie-name">
        {{ dataStore.movieTitle}}
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

.movie-name{
    @apply text-4xl capitalize font-bold;
}

@media (min-width:992px) {
    .movie-name{
        @apply text-5xl;
    }
}
</style>