<template>
    <div class="information-table border-b lg:border-b-2 border-zinc-500">
        <div class="table-row">
            <div class="first-column col-5 col-lg-4 ">
                {{ tableProperty.title }}
            </div>
            <div class="second-column col-7 col-lg-8">
                {{ dataStore.tableInfo[tableIndex]}}
            </div>
        </div>
    </div>
    
</template>
<script>
import { mapStores,mapActions } from 'pinia';
import { useMovieData } from '@/stores/counter';
    export default{
        props : {
            tableProperty : {
                type : Object,
            },
            tableIndex : {
                type : String,
            }
        },
        computed : {
            ...mapStores(useMovieData)
        }
    }
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
    .table-row{
        @apply flex py-2 items-center ;
    }
    .first-column{
        @apply text-base lg:text-lg font-bold;
    }
    .second-column{
        @apply text-sm lg:text-base font-normal opacity-60;
    }
</style>