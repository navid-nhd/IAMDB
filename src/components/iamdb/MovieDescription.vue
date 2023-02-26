<template>
    <div class="movie-info-summary">
        <p>After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.</p>
    </div>
</template>
<script>
    
</script>
<style>
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
