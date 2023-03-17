<template>
    <h1 class="SiteTitle">
        iamdb
    </h1>
</template>
<script>

</script>
<style>
.SiteTitle{
    @apply uppercase text-5xl font-bold xl:pt-80 2xl:pt-96 w-full text-center;
    color: var(--primary-text-color);
    padding-top: 340px;
}
@media (min-width: 450px) {
    .SiteTitle{
        padding-top: 350px;
    }
}
@media (min-width: 768px) {
    .SiteTitle{
        padding-top: 500px;
    }
}
@media (min-width: 992px) {
    .SiteTitle{
        @apply  text-8xl font-bold text-right;
        padding-top: 430px;
    }
}
@media (min-width: 1200px) {
    .SiteTitle{
        padding-top: 270px;
    }
}
@media (min-width: 1700px) {
    .SiteTitle{
        padding-top: 450px;
    }
}
</style>