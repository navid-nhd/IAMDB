<template>
    <button class="movie-thrailer-btn">    
        <span class="thrailer-btn-text">Watch thrailer</span>
        <img class="thrailer-btn-icon" src="@/assets/images/PlayIcon.png" alt="Play" >
    </button>
</template>
<script>

</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.movie-thrailer-btn{
    @apply w-44 h-11 py-2 px-6 bg-red-700 hover:bg-red-800 rounded-[100px] flex flex-row flex-nowrap justify-center items-center gap-3.5 transition-colors;
}
.thrailer-btn-text{
    @apply text-base font-normal;
}
.thrailer-btn-icon{
    @apply w-3 h-4 block;
}
@media (min-width:992px) {
    .movie-thrailer-btn{
        @apply w-56 h-16 py-5 px-8 ;
    }
    .thrailer-btn-text{
        @apply text-xl;
    }
    .thrailer-btn-icon{
        @apply w-4 h-5;
    }
}
</style>