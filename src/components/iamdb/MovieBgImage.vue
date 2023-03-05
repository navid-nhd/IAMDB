<template>
    <div class="relative">
        <div class="movie-bg-img-holder" :style="`background-image: url(${dataStore.bgImage})`"></div>
        <div class="movie-transparent-cover"></div>
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
    /* -----Movie Background Img----- */
    .movie-bg-img-holder{
        @apply bg-cover bg-no-repeat bg-top;
        background-image:linear-gradient(180deg, rgba(27, 23, 23, 0.3) 48%, rgba(27, 23, 23, 0.9) 60.23%, #1B1717 100%);
        height: 90vh;
    }
    .movie-transparent-cover{
        @apply bg-cover bg-no-repeat bg-top;
        background:linear-gradient(180deg, rgba(27, 23, 23, 0)50.33%, rgba(27, 23, 23, 0.8)70.23%, var(--bg-color) 100% );
        height: 90vh;
        width: 100vw;
        position: absolute;
        bottom: 0;
    }
</style>
