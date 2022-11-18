import { FETCH_LOACTION_FAIL, FETCH_LOACTION_START, FETCH_LOACTION_SUCCESS } from '../constents/constents'

const initialState = {
    loading: false,
    error: null,
    data: [],
    page: 1,
    limit: 10,
    search: '',
}

export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOACTION_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_LOACTION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                // page: action.payload.page,
                // limit: action.payload.limit,
                // search: action.payload.search,
            }
        case FETCH_LOACTION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default locationReducer