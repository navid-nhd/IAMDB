<template>
    
</template>
<script>
    export default{
        props: {
            photoData : {
                type : Object,
            }
        }
    }
</script>
<style>
    .modal-picture{
        @apply fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-2/3 aspect-video z-50 hidden opacity-0;
    }
</style>