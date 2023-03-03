<template>
    <button class="share-btn-holder">
        <img class="share-btn-icon" src="@/assets/images/ShareIcon.png" alt="Share Icon">
    </button>
</template>
<script>

</script>
<style  scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

    .share-btn-holder{
        @apply w-11 h-11 border-2 border-solid border-zinc-200 rounded-full flex justify-center items-center transition-colors;
        background-color: var(--bg-color);
    }
    .share-btn-holder:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }
    .share-btn-icon{
        @apply  w-4 h-4;
    }
    @media (min-width:992px)  {
        .share-btn-holder{
            @apply  w-16 h-16;
        }
        .share-btn-icon{
            @apply  w-5 h-5;
        }
    }
</style>