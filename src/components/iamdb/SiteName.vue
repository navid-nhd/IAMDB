<template>
    <h1 class="SiteTitle">
        iamdb
    </h1>
</template>
<script>

</script>
<style>
.SiteTitle{
    @apply uppercase text-5xl font-bold pt-72 xl:pt-80 2xl:pt-96 w-full text-center;
    color: var(--primary-text-color);
}
@media (min-width: 992px) {
    .SiteTitle{
        @apply  text-8xl font-bold pt-56 text-right;
    }
}
</style>