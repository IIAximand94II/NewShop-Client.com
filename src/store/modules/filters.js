import axios from "axios";

export default {
    state:{
        user:{
            name:'Aximand',
            age: 28
        },
        filters:null,

    },

    getters:{
        user: state =>{
            return state.user
        },

        filters: state => {
            return state.filters
        },
    },

    mutations:{
        setFilters(state, filters){
            state.filters = filters
        }
    },

    actions:{
        getFilters({state, commit, dispatch}){
            axios.get('http://127.0.0.1:8000/api/filters')
                .then(res => {
                    commit('setFilters', res.data)
                })
                .catch(error => {
                    console.log(error);
                })
        },
    },
};

