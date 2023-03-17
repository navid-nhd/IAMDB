<template>
    <main>
        <section class="movie-info">
            <MovieBgImage/>
            <div class="container">
                <div class="row movie-info-holder">
                    <div class="hidden lg:block col-lg-3">
                        <!------------ Movie Poster and Rating Graph -->
                        <div class="movie-poster-and-ratings">
                            <MoviePoster></MoviePoster>
                            <div class="movie-graph-and-votes flex flex-nowrap gap-x-5 items-center justify-start mt-9">
                                <RatingGraph></RatingGraph>
                                <VoteNumbers></VoteNumbers>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="movie-data lg:px-7">
                             <!------------ Movie primary Data ------------>
                            <MovieName class="lg:mt-12"></MovieName>
                            <DirectorName class="mt-1.5"></DirectorName>
                            <!------------ Movie Informations -->
                            <div class="movie-info-time my-4 lg:my-5">
                                <ul class="list-none flex gap-3">
                                    <li v-for="item in dataStore.timeInfo" class="list-items flex items-center">
                                        <TimeInfoItem>{{item}}</TimeInfoItem>
                                    </li>
                                </ul>
                            </div>
                            <!------------ Buttons ------------>
                            <div class="movie-btn-holder flex gap-4 lg:gap-5">
                                <a :href="dataStore.movieThrailer" target="_blank">
                                    <ThrailerPlayButton></ThrailerPlayButton>
                                </a>
                                <a href="https://twitter.com/i/flow/single_sign_on" target="_blank">
                                    <ShareButton></ShareButton>
                                </a>
                                <LikeButton></LikeButton>
                            </div>
                            <!------------ Description ------------>
                            <div class="movie-description my-10">
                                <MovieDescription></MovieDescription>
                            </div>
                            <PartTitle>Details</PartTitle>
                            <div class="details-table">
                                <DetailsTable v-for="(item,index) in detailedInfo" 
                                                :key="index" 
                                                :tableProperty="item"
                                                :tableIndex="index">
                                </DetailsTable>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <nav>
                            <PartTitle class="mt-14">Cast & Crew</PartTitle>
                            <ul>
                                <li v-for="(item,index) in dataStore.castShowNumber"
                                    :key="index"    
                                    class="mt-6 transition-all">
                                    <CastItem :personalInfo="item" :i="index"></CastItem>
                                </li>
                            </ul>
                            <ShowMoreBtn class="py-10"></ShowMoreBtn>
                        </nav>
                    </div>       
                </div>
            </div>
        </section>
        <section class="movie-gallery">
            <div class="container">
                <PartTitle class="mt-16 mb-6">Photos</PartTitle>
                <ul class="flex flex-wrap -mx-3">
                    <li v-for="(item,index) in 10" 
                                :key="index" 
                                class="gallery-item">
                        <MovieImageGallery :photoData="item" :i="index"></MovieImageGallery>                       
                    </li>
                </ul>
            </div>
        </section>
        <section class="similar-movies-offer">
            <div class="container mt-12 mb-6">
                <PartTitle>More like this</PartTitle>
                <!-- favorite List: {{ dataStore.favoriteList }} -->
            </div>
            <!-- <ul  class="list flex flex-nowrap shrink-0 basis-auto">
                <li v-for="(item,index) in 10"  
                        :key="index" 
                        class=" shrink-0 w-60 m-3 lg:w-72 " >
                    <SimilarMovie :similarMovieData="item" :i="index"></SimilarMovie>
                </li> 
            </ul> -->
            <nav>
                <Carousel  :items-to-show="6" :wrap-around="true">
                    <Slide  v-for="slide in 10" :key="slide">
                        <div class="carousel__item flex-wrap grow-0 shrink-0">
                            <MoreLikeThisItem :slideNum="slide"></MoreLikeThisItem>  
                        </div>
                    </Slide>
                    <template #addons>
                    <Navigation />
                    </template>
                </Carousel>
            </nav>
        </section>
        <section class="FAQs">
            <div class="container">
                <PartTitle class="mt-16 mb-6">FAQs</PartTitle>
                <ul class="mb-10">
                    <li v-for="(item,index) in 15"
                                :key="index" 
                                class="py-1.5">
                        <QuestionBox :questionData="item" :i="index" v-if="dataStore.movieQuestion[index]"></QuestionBox>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>
<script >
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    import { mapStores,mapActions } from 'pinia';
    import { useMovieData } from '@/stores/counter';

    import PartTitle from '@/components/iamdb/PartTitle.vue'
    import MovieBgImage from '@/components/iamdb/MovieBgImage.vue'
    import MoviePoster from '@/components/iamdb/MoviePoster.vue'
    import RatingGraph from '@/components/iamdb/RatingGraph.vue'
    import VoteNumbers from '@/components/iamdb/VoteNumbers.vue'
    import MovieName from '@/components/iamdb/MovieName.vue'
    import DirectorName from '@/components/iamdb/DirectorName.vue'
    import TimeInfoItem from '@/components/iamdb/TimeInfoItem.vue'
    import ThrailerPlayButton from '@/components/iamdb/ThrailerPlayButton.vue'
    import ShareButton from '@/components/iamdb/ShareButton.vue'
    import LikeButton from '@/components/iamdb/LikeButton.vue'
    import MovieDescription from '@/components/iamdb/MovieDescription.vue'
    import DetailsTable from '@/components/iamdb/DetailsTable.vue'
    import CastItem from '@/components/iamdb/CastItem.vue'
    import ShowMoreBtn from '@/components/iamdb/ShowMoreBtn.vue'
    import MovieImageGallery from '@/components/iamdb/MovieImageGallery.vue'
    import SimilarMovie from '@/components/iamdb/SimilarMovie.vue'
    import HeartIcon from '@/components/iamdb/HeartIcon.vue'
    import MoreLikeThisItem from '@/components/iamdb/MoreLikeThisItem.vue'
    import QuestionBox from '@/components/iamdb/QuestionBox.vue'

    export default{
        name: 'App',
        components : {
            MovieBgImage,MoviePoster,RatingGraph,VoteNumbers,MovieName,DirectorName,TimeInfoItem,ThrailerPlayButton,ShareButton,LikeButton,MovieDescription,DetailsTable,PartTitle,CastItem,ShowMoreBtn,MovieImageGallery,QuestionBox,SimilarMovie,Carousel,Slide,Pagination,Navigation,HeartIcon,MoreLikeThisItem,
        },
        data() {            
            return{
                settings: {
                    itemsToShow: 4,
                    snapAlign: 'center',
                    },
                    // breakpoints are mobile first
                    // any settings not specified will fallback to the carousel settings
                    breakpoints: {
                    // 700px and up
                    700: {
                        itemsToShow: 5,
                        snapAlign: 'center',
                    },
                    // 1024 and up
                    1024: {
                        itemsToShow: 6,
                        snapAlign: 'center',
                    },
                },
                detailedInfo : [
                    {
                        title : 'Writers',
                    },
                    {
                        title : 'Genres',
                    },
                    {
                        title : 'Awards',
                    },
                    {
                        title : 'Country of Origin',
                    },
                    {
                        title : 'IMDB Rating',
                    },
                ],
            }
        },
        methods : {
            ...mapActions(useMovieData,['increment']),
        },
        computed : {
            ...mapStores(useMovieData)
        }
    }
</script>
<style>
    .details-table .information-table:last-child{
        @apply border-b-0;
    }
    .gallery-item{
        @apply flex-grow-0 flex-shrink-0 basis-auto w-3/6 lg:w-1/5;
    }
    .list{
        overflow-x: auto;
    }
    .list::-webkit-scrollbar{
        @apply w-3 h-4 rounded-xl bg-transparent;
    }
    .list::-webkit-scrollbar-thumb{
        @apply rounded-xl border-4 border-solid border-transparent bg-clip-content;
        background-color: rgba(238, 235, 221, 0.1);
    }
    
    .carousel__item {
        height: 100%;
        width: 100%;
        background-color: rgba(141, 141, 141, 0);
        color: var(--vc-clr-white);
        font-size: 20px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carousel__slide {
        padding: 10px;
        min-width: 270px;
    }

    .carousel__prev,
    .carousel__next {
        color: white;
        box-sizing: content-box;
        border: 3px solid white;
        border-radius: 50%;
    }
    
    

    @import '@/assets/css/font.css';  
    @import '@/assets/css/bootstrap-grid.css';
    
    /* -----Movie Info----- */
    .movie-info-holder{
        margin-top: -40vh;
        @apply relative z-50;
    }
    /* -----Bullets in time list----- */
    .list-items::after {
        content: "";
        width: 6px;
        height: 6px;
        background-color: white;
        margin-left: 12px;
        border-radius: 50%;
    }
    .list-items:last-child::after {
        display: none;
    }
    
    @media (min-width: 992px) {
        .carousel__slide {
            padding: 10px;
            min-width: 320px;
        }
    }

</style>