// action to get data from api 
import { FETCH_FORUM_DATA_FAIL, FETCH_FORUM_DATA_START, FETCH_FORUM_DATA_SUCCESS } from '../constents/constents'
import { getForum } from '../services/services'

function fetchForumList(search, page, limit, sort, fields) {
    return async (dispatch) => {
        dispatch({ type: FETCH_FORUM_DATA_START });

        try {
            const { data } = await getForum(search, page, limit, sort, fields);
            console.log("action data", data)
            return dispatch({
                type: FETCH_FORUM_DATA_SUCCESS,
                payload: data[0]
            })
        } catch (ex) {
            return dispatch({
                type: FETCH_FORUM_DATA_FAIL,
                payload: ex.response.data
            })
        }
    }
} 

export { fetchForumList }