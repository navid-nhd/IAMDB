<template>
    <h1 class="SiteTitle">
        iamdb
    </h1>
</template>
<script>

</script>
<style>
.SiteTitle{
    @apply uppercase text-5xl font-bold pt-56 w-full;
    color: var(--primary-text-color);
    text-align: center;
}
@media (min-width: 992px) {
    .SiteTitle{
        @apply  text-8xl font-bold pt-56;
        text-align: right;
    }
}
</style>