<template>
    <main>
        <section class="movie-info">
            <MovieBgImage />
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
                                    <li v-for="item in timeInfo" class="list-items flex items-center">
                                        <TimeInfoItem>{{item}}</TimeInfoItem>
                                    </li>
                                </ul>
                            </div>
                            <!------------ Buttons ------------>
                            <div class="movie-btn-holder flex gap-4 lg:gap-5">
                                <ThrailerPlayButton></ThrailerPlayButton>
                                <ShareButton></ShareButton>
                                <LikeButton></LikeButton>
                            </div>
                            <!------------ Description ------------>
                            <div class="movie-description my-10">
                                <MovieDescription></MovieDescription>
                            </div>
                            <PartTitle>details</PartTitle>
                            <div class="details-table">
                                <DetailsTable v-for="item in detailedInfo" :tableProperty="item"></DetailsTable>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3">
                        <PartTitle class="mt-14">Cast & Crew</PartTitle>
                        <ul>
                            <li v-for="item in castInfo" class="mt-6">
                                <CastItem :personalInfo="item"></CastItem>
                            </li>
                        </ul>
                        <ShowMoreBtn class="py-10"></ShowMoreBtn>
                    </div>       
                </div>
            </div>
        </section>
        <section class="movie-gallery">
            <div class="container">
                <PartTitle class="mt-16 mb-6">Photos</PartTitle>
                <ul class="flex flex-wrap -mx-3">
                    <li v-for="item in galleryList" class="gallery-item">
                        <MovieImageGallery :photoData="item"></MovieImageGallery>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>
<script >
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

    export default{
        components : {
            MovieBgImage,MoviePoster,RatingGraph,VoteNumbers,MovieName,DirectorName,TimeInfoItem,ThrailerPlayButton,ShareButton,LikeButton,MovieDescription,DetailsTable,PartTitle,CastItem,ShowMoreBtn,MovieImageGallery,
        },
        data() {
            return{
                timeInfo: ['2008','PG-13','2h 6m'],
                detailedInfo : [
                    {
                        title : 'Writers',
                        amount : 'Mark Fergus, Hawk Ostby, Art Marcum',
                    },
                    {
                        title : 'Genres',
                        amount : 'Action, Adventure, Sci-Fi',
                    },
                    {
                        title : 'Awards',
                        amount : 'Nominated for 2 Oscars, 21 wins & 73 nominations total',
                    },
                    {
                        title : 'Country of Origin',
                        amount : 'USA, Canada',
                    },
                    {
                        title : 'IMDB Rating',
                        amount : '7.9',
                    },
                ],
                castInfo : [
                    {
                        name : 'Robert Downey Jr.',
                        role : 'Tony Stark',
                        url : 'cast1.jpg',
                    },
                    {
                        name : 'Terrence Howard',
                        role : 'Rhodey',
                        url : 'cast2.jpg',
                    },
                    {
                        name : 'Jeff Bridges',
                        role : 'Obadiah Stane',
                        url : 'cast3.jpg',
                    },
                    {
                        name : 'Gwyneth Paltrow',
                        role : 'Pepper Potts',
                        url : 'cast4.jpg',
                    },
                    {
                        name : 'Leslie Bibb',
                        role : 'Christine Everhart',
                        url : 'cast5.jpg',
                    },
                ],
                galleryList: [
                    {
                        url : 'photos1.jpg'
                    },
                    {
                        url : 'photos2.jpg'
                    },
                    {
                        url : 'photos3.jpg'
                    },
                    {
                        url : 'photos4.jpg'
                    },
                    {
                        url : 'photos5.jpg'
                    },
                    {
                        url : 'photos6.jpg'
                    },
                    {
                        url : 'photos7.jpg'
                    },
                    {
                        url : 'photos8.jpg'
                    },
                    {
                        url : 'photos9.jpg'
                    },
                    {
                        url : 'photos10.jpg'
                    },
                ]
            }
        },
        methods : {

        },
        computed : {

        }
    }
</script>
<style>

   
    @import '@/assets/css/font.css';  
    @import '@/assets/css/bootstrap-grid.css';
    
    /* -----Movie Info----- */
    .movie-info-holder{
        margin-top: -27vh;
        @apply relative z-50;
    }
    .list-items::after {
        content: "";
        @apply w-1.5 h-1.5 rounded-full bg-white ml-3;
        width: fit-content;
    }
    .list-items:last-child::after {
        @apply hidden;
    }
    .details-table .information-table:last-child{
        @apply border-b-0;
    }
    .gallery-item{
        @apply flex-grow-0 flex-shrink-0 basis-auto w-3/6 lg:w-1/5;
    }
</style>