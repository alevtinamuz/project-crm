<template>
    <div class='сatalog'>
        <div class="сatalog-list">
        <CatalogBook
            v-for="book in BOOKS"
            :key="book.id"
            :book_data="book"
        />
        </div>
    </div>
</template>
  
<script>
import CatalogBook from './CatalogBook';
import {mapActions, mapGetters} from 'vuex';
    export default {
        name: 'Catalog',
        components: {
            CatalogBook
        },
        props: {},
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters([
                'BOOKS'
            ])
        },
        methods: {
            ...mapActions([
                'GET_BOOKS_FROM_API'
            ])
        },
        mounted() {
            this.GET_BOOKS_FROM_API()
            .then((response) => {
                if (response.data) {
                    console.log('The download is finished.')
                }
            })
        }
    }
</script>
  
<style lang="scss">
    .сatalog {
        background: #f9e7c9;
        &-list {
            flex-wrap: wrap;
            display: flex;
            justify-content: center;
            align-items: left;
        }
    }
</style>
  