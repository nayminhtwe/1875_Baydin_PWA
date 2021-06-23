import * as types from './mutation-types'
import { HTTP } from "@core/lib/http-common";

const actions = {
    async login ({ commit }, token) {
        commit(types.CUST_REQUEST)
        await HTTP
            .post('user/user_info', {
                access_token: token
            })
            .then(response => {
                console.log(response.data)
                // localStorage.setItem('access_token', response.data.access_token)
                commit(types.CUST_SUCCESS, response.data)
            })
            .catch(err => {
                console.log(err.response.data)
                commit(types.CUST_ERROR, err.response.data)
                localStorage.removeItem('access_token') // if the request fails, remove any possible user token if possible
            })
    }
}

export default actions
