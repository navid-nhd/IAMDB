<template>
    <div class="graph">
        <div class="ratings">7.9</div>
    </div>
</template>
<script>

</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* movie rating-graph and number of votes */

.graph{
    @apply w-20 h-20 rounded-full relative text-2xl font-bold;
    background: conic-gradient(var(--accent-color) 0deg,var(--accent-color) 284deg, rgba(238, 235, 221, 0.4) 284deg,  rgba(238, 235, 221, 0.4) 360deg);
}
.ratings {
    @apply absolute top-2/4 left-2/4;
    transform: translate(-50%,-50%);
}
.graph:before{
    content:"";
    @apply absolute inset-1.5 rounded-full;
    background-color: var(--bg-color);
}
</style>