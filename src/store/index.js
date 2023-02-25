import Vuex from 'vuex'
import axios from 'axios'

let store = new Vuex.Store({
    state: {
        books: []
    },
    mutations: {
        SET_BOOKS_TO_STATE: (state, books) => {
            state.books = books;
        }
    },
    actions: {
        GET_BOOKS_FROM_API({commit}) {
            return axios('http://localhost:3000/books', {
                method: "GET"
            })
                .then((books) => {
                    commit('SET_BOOKS_TO_STATE', books.data);
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