<template> 
    <div class='CatalogBook'>
        <BookPage
            v-if="isBookPage"
            @closeBookPage="closeInfoBookPage"
            
        >
            <img class="CatalogBook-img" :src="book_data.image_link" alt="img-book">
            <div>
                <tittle class="CatalogBook-title">{{ book_data.title }}</tittle>
                <p>id: {{ book_data.id }}</p>
                <p>Описание: {{ book_data.description }}</p>
                <p>Год: {{ book_data.year }}</p>
                <p>ISBN: {{ book_data.ISBN }}</p>
                <p>Количество страниц: {{ book_data.number_page }}</p>
                <p>Жанр: {{ book_data.genre }}</p>
            </div>
        </BookPage>
        <img class="CatalogBook-image" :src="book_data.image_link" alt="img-book">
        <tittle class="CatalogBook-title">{{ book_data.title }}</tittle>
        <button @click="showInfo">Информация о книге</button>
    </div>
</template>
  
<script>
import BookPage from './BookPage.vue';

    export default {
        name: 'CatalogBook',
        components: {
            BookPage
        },
        props: {
            book_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                isBookPage: false
            }
        },
        computed: {},
        methods: {
            showInfo() {
                this.isBookPage = true;
            },
            closeInfoBookPage() {
                this.isBookPage = false;
            }
        }
    }
</script>
  
<style lang="scss">
    button {    
        padding: 19px 39px 18px 39px;
        color: #FFF;    
        background: #B7647C;
        font-size: 18px;    
        text-align: center;
        font-style: normal;    
        border-radius: 5px;
        width: 100%;    
        border-width: 1px 1px 3px;
        box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;    
        margin-bottom: 10px;
    }
    .CatalogBook {
        box-shadow: 0 0 20px 0 #eccab7;
        &-title {
            font-family: "Playfair Display";
            font-size: 32px;
            text-align: center;
            display: block;
            font-weight: bold;
            color: black;
        }
        &-image {
            width: 150px;
            height:250px;
            padding-top: 40px;
            margin-right: 40px;
            margin-left: 40px;
        }
        &-img {
            width: 150px;
            height:250px;
            padding-top: 40px;
            margin-right: 10%;
            margin-left: 10%;

        }
    }
p {
    font-family: "Playfair Display";
    font-size: 20px;
    text-align: center;
    display: block;
    color: black;
}
</style>
  