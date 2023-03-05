<template>
    <div class="graph-details">
        <div class="graph-details-number">{{dataStore.imDbRatingVotes}}</div>
        <div class="graph-details-text">ratings on IMDB</div>
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
.graph-details{
    @apply flex flex-col justify-center items-start;
}
.graph-details-number{
    @apply text-lg font-bold mb-1.5;
}
.graph-details-text{
    @apply text-base font-normal;
}
</style>