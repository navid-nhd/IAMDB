<template>
    <div class="share-btn-holder">
        <img class="share-btn-icon" src="@/assets/images/ShareIcon.png" alt="Share Icon">
    </div>
</template>
<script>

</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

    .share-btn-holder{
        width: 44px;
        height: 44px;
        background-color: var(--bg-color);
        border: 2px solid var(--primary-text-color);
        border-radius: 50%;
    }
    .share-btn-icon{
        width: 18px;
        height: 18px;
    }
    @media (min-width:992px)  {
        .share-btn-holder{
            width: 61px;
            height: 61px;
        }
        .share-btn-icon{
            width: 21px;
            height: 21px;
        }
    }
</style>