// eslint-disable-next-line no-unused-vars
import * as types from './mutation-types'
import axios from 'axios';

const actions = {
    async getAllCategories({ commit }, { username, password }) {
        let data = await axios.get('https://1875pb.blueplanet.com.mm/api/category', { 
            username,       
            password
        });
        commit('setAccount', data)
    }
}

export default actions
