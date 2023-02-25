<template>
    <div>
        <div class="movie-bg-img-holder"></div>
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
        linear-gradient(180deg, rgba(27, 23, 23, 0) 58.33%, rgba(0, 0, 0, 0.8) 100%, #1B1717 100%);
        height: 90vh;
    }
</style>
