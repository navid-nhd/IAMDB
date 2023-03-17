<template>
    <main class="error-msg">
        <div class="num">404</div>
        <div class="txt">Movie not found</div>
        <div class="num" @click="num()">req</div>
    </main>
</template>
<script>
export default{
    data(){
        return{
           number: '123456789',
           numArray : [],
        }
    },
    methods: {
        num(){
            this.numArray = this.number.toString().split('')
            console.log(this.numArray.reverse() )
        }
    }
}   
</script>
<style>
    .error-msg{
        @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center;
    }
    .num{
        @apply text-8xl font-bold;
        color: var(--primary-text-color);
    }
    .txt{
        @apply text-4xl font-bold text-red-600;
    }
    .num{
        cursor: pointer;
    }
    @media (min-width: 992px) {
        .num{
            @apply text-9xl;
        }
        .txt{
            @apply text-5xl;
        }
    }
</style>