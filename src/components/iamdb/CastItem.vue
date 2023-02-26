<template>
    <div class="cast-info-holder flex justify-start items-center gap-3">
        <div class="cast-image-holder">
            <img class="cast-img w-20 h-20 rounded-full block" src="@/assets/images/cast1.jpg" alt="`${info.name}`">
        </div>
        <div class="cast-name-role">
            <div class="cast-name text-base">{{ info.name }}</div>
            <div class="cast-role text-sm opacity-60">as {{ info.role }}</div>
        </div>
    </div>
</template>
<script>
    export default{
        props : {
            info : {
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