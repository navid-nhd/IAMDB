<template>
    <div class="relative">
        <div class="movie-bg-img-holder"></div>
        <div class="movie-transparent-cover"></div>
    </div>
</template>
<script>

</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
    /* -----Movie Background Img----- */
    .movie-bg-img-holder{
        @apply bg-cover bg-no-repeat bg-top;
        background-image: url('@/assets/images/background.png'),
        linear-gradient(180deg, rgba(27, 23, 23, 0.3) 48%, rgba(27, 23, 23, 0.9) 60.23%, #1B1717 100%);
        height: 90vh;
    }
    .movie-transparent-cover{
        @apply bg-cover bg-no-repeat bg-top;
        background:linear-gradient(180deg, rgba(27, 23, 23, 0)93.33%, rgba(27, 23, 23, 0.8)98.23%, var(--bg-color) 100% );
        height: 90vh;
        width: 100vw;
        position: absolute;
        bottom: 0;
    }
</style>
