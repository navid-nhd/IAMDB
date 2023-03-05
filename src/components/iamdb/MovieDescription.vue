<template>
    <div class="movie-info-summary">
        <p>{{dataStore.plot}}</p>
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
    .movie-info-summary{
        @apply text-sm opacity-60 font-normal;
    }
    @media (min-width:992px) {
        .movie-info-summary{
            @apply text-base;
        }
    }
</style>
