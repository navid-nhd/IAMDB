<template>
    <details class="faq-holder">
        <summary class="faq-question">{{dataStore.movieQuestion[i]}}</summary>
        <p class="faq-answer">{{dataStore.movieAnswere[i]}}</p>
    </details>
</template>
<script>
import { mapStores,mapActions } from 'pinia';
import { useMovieData } from '@/stores/counter';
    export default{
        props: {
            questionData: {
                type: Object,
            },
            i: {
                type: Number,
            }
        },
        computed : {
            ...mapStores(useMovieData)
        }
    }
</script>
<style scoped>
.faq-question{
    @apply text-xl -ml-5;
    cursor: pointer;
}
.faq-answer{
    @apply text-base text-zinc-400 px-7 py-2 border-l-2 border-red-600;
}
summary::marker {
    color: rgba(255, 255, 255, 0);
}
</style>