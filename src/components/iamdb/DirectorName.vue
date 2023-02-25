<template>
    <div class="director-name">
        Directors: Jon Favreau
    </div>
</template>
<script>

</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.director-name{
    @apply text-base;
}

@media (min-width:992px) {
    .director-name{
        @apply text-lg;
    }
}
</style>