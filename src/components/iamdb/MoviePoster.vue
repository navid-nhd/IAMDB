<template>
    <div class="movie-poster-holder">
        <img class="movie-poster" src="@/assets/images/IronMan.jpg" alt="Iron Man Poster">
    </div>
</template>
<script>

</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.movie-poster{
    @apply rounded-xl w-full aspect-[2/3];
    box-shadow: 0px 6px 12px 0px var(--bg-color) ; 
}
</style>