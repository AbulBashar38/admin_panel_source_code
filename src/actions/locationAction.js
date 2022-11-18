// action to get data from api 
import { FETCH_LOACTION_FAIL, FETCH_LOACTION_START, FETCH_LOACTION_SUCCESS } from '../constents/constents'
import { getVendorLocation } from '../services/services'

function fetchAllLocation(search, page, limit) {
    return async (dispatch) => {
        dispatch({ type: FETCH_LOACTION_START });

        try {
            const { data } = await getVendorLocation(search, page, limit);
            return dispatch({
                type: FETCH_LOACTION_SUCCESS,
                payload: data
            })
        } catch (ex) {
            return dispatch({
                type: FETCH_LOACTION_FAIL,
                payload: ex.response.data
            })
        }
    }
}

export { fetchAllLocation }