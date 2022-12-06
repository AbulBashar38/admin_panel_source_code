import { FETCH_FORUM_DATA_FAIL, FETCH_FORUM_DATA_START, FETCH_FORUM_DATA_SUCCESS } from '../constents/constents'

const initialState = {
    loading: false,
    error: null,
    data: [],
    page: 1,
    limit: 10,
    search: '',
    sort: "-like",
    fields: "experience_description",
    total:0
}

export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FORUM_DATA_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_FORUM_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                total: action.payload.metadata[0].total,
                // page: action.payload.page,
                // limit: action.payload.limit,
                // search: action.payload.search,
            }
        case FETCH_FORUM_DATA_FAIL:
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