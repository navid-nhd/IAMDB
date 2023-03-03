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
                            <PartTitle>Details</PartTitle>
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
        <section>
            <div class="container mt-12 mb-6">
                <PartTitle>More like this</PartTitle>
            </div>
            
        </section>
        <section class="FAQs">
            <div class="container">
                <PartTitle class="mt-16 mb-6">FAQs</PartTitle>
                <ul class="mb-10">
                    <li v-for="item in questionArray" class="py-1.5">
                        <QuestionBox :questionData="item"></QuestionBox>
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
    import QuestionBox from '@/components/iamdb/QuestionBox.vue'

    export default{
        components : {
            MovieBgImage,MoviePoster,RatingGraph,VoteNumbers,MovieName,DirectorName,TimeInfoItem,ThrailerPlayButton,ShareButton,LikeButton,MovieDescription,DetailsTable,PartTitle,CastItem,ShowMoreBtn,MovieImageGallery,QuestionBox
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
                ],
                questionArray: [
                    {
                        question: `Which characters were adapted from Marvel's Iron Man comic books?`,
                        answer : `For this list only the creators of the characters first appearances are listed. As with all comic book characters, Iron Man and his supporting cast have had several reinventions and different contributions from different writers. Theses include different iterations in different mediums that all have added different concepts to the overall mythology of the characters.Theirs Anthony Edward "Tony" Stark, referred to as Tony Stark. He made his first appearance in the comic story "Iron Man Is Born!" Tales of Suspense #39 (March 1963) by writers & Larry Lieber and artists Don Heck & Jack Kirby.Colonel James Rupert "Rhodey" Rhodes, referred to as Rhodey Rhodes on screen. He made his first appearance in the comic story "At the Mercy of My Foes Friends!" from Iron Man #118 (January 1979) by writer David Michelinie, writer/artist Bob Layton and artist John Byrne.Obadiah Stane, who made his first appearance in the comic story "Knight's Errand" from Iron Man #163 (October 1982) by writer Denny O'Neil and artist Luke McDonnell.Virginia "Pepper" Potts, referred to as Pepper Potts on screen. She made her first appearance in the comic story "The Icy Fingers of Jack Frost!" from Tales of Suspense #45 (September 1963) by writers Stan Lee & Robert Bernstein and artist Don Heck.Christine Everhart, who made her first appearance in the comic story "The Best Defense - Part Three: Technology" from Iron Man Volume 3 #75 by writer John Jackson Miller and artist Jorge Lucas.J.A.R.V.I.S. (Just A Rather Very Intelligent System) is based on the comic book character of Edwin Jarvis. Edwin Jarvis made his first appeared in the comic story "Captain America" from Tales of Suspense #59 (November 1964) by writer Stan Lee and artist Jack Kirby.Harold Joseph "Happy" Hogan, referred to as Happy Hogan on screen. He made his first appearance in the comic story "The Icy Fingers of Jack Frost!" from Tales of Suspense #45 (September 1963) by writers Stan Lee & Robert Bernstein and artist Don Heck.Howard Anthony Walter Stark, referred to as Howard Stark on screen. He made his first appearance in the comic story "The Controller Lives!" from Iron Man #28 (August 1970) by writer Archie Goodwin and artist Don Heck.and Nicholas Joseph "Nick" Fury, referred to as Nick Furry on screen. He made his first appearance in the comic story Sergeant Fury and his Howling Commandos #1 (May 1963) by writer Stan Lee and artist Jack Kirby.All other characters were created just for the film by the movie's writers.`,
                    },
                    {
                        question: `Why was the fighter pilot's chute jammed during the "training exercise" scene ?`,
                        answer : ``,
                    },
                    {
                        question: `Which characters were adapted from Marvel's Iron Man comic books?`,
                        answer : `For this list only the creators of the characters first appearances are listed. As with all comic book characters, Iron Man and his supporting cast have had several reinventions and different contributions from different writers. Theses include different iterations in different mediums that all have added different concepts to the overall mythology of the characters.Theirs Anthony Edward "Tony" Stark, referred to as Tony Stark. He made his first appearance in the comic story "Iron Man Is Born!" Tales of Suspense #39 (March 1963) by writers & Larry Lieber and artists Don Heck & Jack Kirby.Colonel James Rupert "Rhodey" Rhodes, referred to as Rhodey Rhodes on screen. He made his first appearance in the comic story "At the Mercy of My Foes Friends!" from Iron Man #118 (January 1979) by writer David Michelinie, writer/artist Bob Layton and artist John Byrne.Obadiah Stane, who made his first appearance in the comic story "Knight's Errand" from Iron Man #163 (October 1982) by writer Denny O'Neil and artist Luke McDonnell.Virginia "Pepper" Potts, referred to as Pepper Potts on screen. She made her first appearance in the comic story "The Icy Fingers of Jack Frost!" from Tales of Suspense #45 (September 1963) by writers Stan Lee & Robert Bernstein and artist Don Heck.Christine Everhart, who made her first appearance in the comic story "The Best Defense - Part Three: Technology" from Iron Man Volume 3 #75 by writer John Jackson Miller and artist Jorge Lucas.J.A.R.V.I.S. (Just A Rather Very Intelligent System) is based on the comic book character of Edwin Jarvis. Edwin Jarvis made his first appeared in the comic story "Captain America" from Tales of Suspense #59 (November 1964) by writer Stan Lee and artist Jack Kirby.Harold Joseph "Happy" Hogan, referred to as Happy Hogan on screen. He made his first appearance in the comic story "The Icy Fingers of Jack Frost!" from Tales of Suspense #45 (September 1963) by writers Stan Lee & Robert Bernstein and artist Don Heck.Howard Anthony Walter Stark, referred to as Howard Stark on screen. He made his first appearance in the comic story "The Controller Lives!" from Iron Man #28 (August 1970) by writer Archie Goodwin and artist Don Heck.and Nicholas Joseph "Nick" Fury, referred to as Nick Furry on screen. He made his first appearance in the comic story Sergeant Fury and his Howling Commandos #1 (May 1963) by writer Stan Lee and artist Jack Kirby.All other characters were created just for the film by the movie's writers. `,
                    },
                    {
                        question: `What is 'Iron Man' about?`,
                        answer : ``,
                    },
                    {
                        question: `Is "Iron Man” based on a book?`,
                        answer : ``,
                    },
                    {
                        question: `Who or what is the Invincible Iron Man?`,
                        answer : ``,
                    },
                    {
                        question: `Can Iron Man be considered a cyborg?`,
                        answer : ``,
                    },
                    {
                        question: `What kind of jet is Tony Stark's private jet?`,
                        answer : ``,
                    },
                    {
                        question: `Who are the villain(s) in 'Iron Man'?`,
                        answer : ``,
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
    .details-table .information-table:last-child{
        @apply border-b-0;
    }
    .gallery-item{
        @apply flex-grow-0 flex-shrink-0 basis-auto w-3/6 lg:w-1/5;
    }
</style>