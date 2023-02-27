<template>
    <div class="cast-info-holder flex justify-start items-center gap-3">
        <div class="cast-image-holder">
            <img class="cast-img w-20 h-20 rounded-full block" :src="`src/assets/images/${personalInfo.url}`" :alt="personalInfo.name">
        </div>
        <div class="cast-name-role">
            <div class="cast-name text-base">{{ personalInfo.name }}</div>
            <div class="cast-role text-sm opacity-60">as {{ personalInfo.role }}</div>
        </div>
    </div>
</template>
<script>
    export default{
        props : {
            personalInfo : {
                type : Object,
            }
        }
    }
</script>
<style>

    .cast-img{
        /* @apply ; */
        object-fit: cover;
    }
</style>