const initialValue = { isFetching: false, data: [], error: null };

const getList_Reducer = (state = initialValue, action) => {
    switch (action.type) {
        case "GETTING_LIST_START":
            return {
                ...state,
                isFetching : true,
            };
        case "GETTING_LIST_SUCCESS":
            return {
                ...state,
                data: action.data,
                isFetching: false,
                error: null,
            };
        case "GETTING_LIST_FAIL":
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
}

export default getList_Reducer;