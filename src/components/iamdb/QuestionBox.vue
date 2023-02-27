<template>
    <details class="faq-holder">
        <summary class="faq-question">{{ questionData.question }}</summary>
        <p class="faq-answer">{{ questionData.answer }}</p>
    </details>
</template>
<script>
    export default{
        props: {
            questionData: {
                type: Object,
            }
        }
    }
</script>
<style>
.faq-question{
    @apply text-xl -ml-5;
}
.faq-answer{
    @apply text-base text-zinc-400 px-7 py-2 border-l-2 border-red-600;
}
summary::marker {
    color: rgba(255, 255, 255, 0);
}
</style>