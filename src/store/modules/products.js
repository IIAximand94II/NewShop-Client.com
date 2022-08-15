import axios from "axios";

export default {
    state:{
        products:{},

        hits:{},
    },

    getters:{
        products: state => {
            return state.products
        },

        hits: state => {
            return state.hits
        },
    },

    mutations:{
        setProducts(state, products){
            state.products = products
        },

        setHits(state, hits){
            state.hits = hits
        }
    },

    actions:{
        getProducts({state, commit, dispatch}){
            axios.get('http://127.0.0.1:8000/api/products')
                .then(res => {
                    commit('setProducts', res.data.data)
                })
                .catch(error => {
                    console.log(error);
                })
        },

        async getHits({state, commit, dispatch}){
            await axios.get('http://127.0.0.1:8000/api/products/hits')
                .then(res => {
                    commit('setHits', res.data.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
};

