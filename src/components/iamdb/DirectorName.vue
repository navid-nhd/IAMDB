<template>
    <div class="director-name">
        Directors: {{dataStore.directors}}
    </div>
</template>
<script>
import { mapStores,mapActions } from 'pinia';
import { useMovieData } from '@/stores/counter';
    export default{
        computed : {
            ...mapStores(useMovieData)
        }
    }
</script>
<style scoped>
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