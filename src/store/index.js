import {createStore} from "vuex";
import filters from "./modules/filters";
import products from "./modules/products";


const store = createStore({
    modules:{
        filters,
        products,
    },
});

export default store;