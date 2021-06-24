import * as types from './mutation-types'
import { HTTP } from "@core/lib/http-common";

const actions = {
    async queryCustInfo ({ commit }, token) {
        commit(types.CUST_REQUEST)
        //Local Test
        // console.log(token)
        // const res = {
        //     "response": {
        //         "result": "SUCCESS",
        //         "customer_info": {
        //             "openID": "7249594a4d466c6b416e686e465857596e6d457239476944314843614f77436e766a704132722b477636343d"
        //         },
        //         "nonce_str": "E4678D4990B742DEA8BE492F7818BC6C",
        //         "sign_type": "SHA256",
        //         "sign": "FAD2301D5B94D804A7B18D01039EE76B3324CF5E1165A13B4D39883FE00C8B65"
        //     },
        //     "openID": "7249594a4d466c6b416e686e465857596e6d457239476944314843614f77436e766a704132722b477636343d"
        // }
        // commit(types.CUST_SUCCESS, res)
        //Local Test


        await HTTP
            .post('user/user_info', {
                access_token: token
            })
            .then(response => {
                // localStorage.setItem('access_token', response.data.access_token)
                commit(types.CUST_SUCCESS, response.data)
            })
            .catch(err => {
                localStorage.removeItem('access_token') // if the request fails, remove any possible user token if possible
                commit(types.CUST_ERROR, err.response.data)
            })

    },
    async login ({ commit, dispatch, getters }, token) {
        commit(types.AUTH_REQUEST);
        await dispatch("queryCustInfo", token);

        HTTP
            .post('user/authenticate', {
                email: getters.getOpenID,
                password: '12345678'
            })
            .then(response => {
                localStorage.setItem('access_token', response.data.access_token)
                commit(types.AUTH_SUCCESS, response.data)
            })
            .catch(err => {
                commit(types.AUTH_ERROR, err.response.data)
                localStorage.removeItem('access_token') // if the request fails, remove any possible user token if possible
            })
    },
}

export default actions
