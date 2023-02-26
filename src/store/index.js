import Vuex from 'vuex'
import axios from 'axios'

const link = 'http://localhost:3000/books';

let store = new Vuex.Store({
    state: {
        books: []
    },
    mutations: {
        SET_BOOKS: (state, books) => {
            state.books = books;
        }
    },
    actions: {
        GET_BOOKS({commit}) {
            return axios(link, {
                method: "GET"
            })
                .then((books) => {
                    commit('SET_BOOKS', books.data);
                    return books;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        }
    },
    getters: {
        BOOKS(state) {
            return state.books
        }
    }
});

export default store;