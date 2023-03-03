<template>
    <div class="movie-name">
        iron man
    </div>
</template>
<script>

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