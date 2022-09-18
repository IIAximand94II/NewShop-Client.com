import api from "../../api";

export default {
    state:{

    },

    mutations:{

    },

    getters:{

    },

    actions:{
        getUserProfile(){
            api.get(`http://127.0.0.1:8000/api/client/profile/${JSON.parse(localStorage.getItem('user_id'))}`)
                .then(res => {
                    //let u = res.data.user_info;
                    localStorage.setItem('user', JSON.stringify(res.data.user_info))
                    //console.log('user setted!')
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}