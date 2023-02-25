<template>
    <div class="time-item">
        <slot/>
    </div>
</template>
<script>
    export default{

    }
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
   
.time-item{
    @apply text-sm;
}

@media (min-width:992px) {
    .time-item{
        @apply text-lg;
    }
}
</style>