import {createStore} from "vuex";
import filters from "./modules/filters";
import products from "./modules/products";
import user from "./modules/user";


const store = createStore({
    modules:{
        filters,
        products,
        user,
    },
});

export default store;