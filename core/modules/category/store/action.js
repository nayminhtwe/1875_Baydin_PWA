// eslint-disable-next-line no-unused-vars
import * as types from './mutation-types'
import {HTTP} from '@core/lib/http-common';

const actions = {
        allCategories ({commit}) {
            commit(types.ALL_CATEGORIES)
            HTTP.get(`category`).then(response => {
            commit(types.ALL_CATEGORIES_SUCCESS, response.data.data)
        })
  }
}

export default actions
