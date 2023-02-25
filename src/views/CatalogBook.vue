<template>
    <div class='CatalogBook'>
        <img class="CatalogBook-image" :src="require('../assets/images/' + book_data.image_link)" alt="img-book">
        <tittle class="CatalogBook-title">{{ book_data.title }}</tittle>
    </div>
</template>
  
<script>

    export default {
        name: 'CatalogBook',
        components: {

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

            }
        },
        computed: {},
        methods: {

        }
    }
</script>
  
<style lang="scss">
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
    }
    
</style>
  