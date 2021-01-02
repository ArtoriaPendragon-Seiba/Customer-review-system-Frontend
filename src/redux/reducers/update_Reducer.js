const initialValue = { isFetching: false, data: {}, error: null};

const update_Reducer = (state = initialValue, action) => {
    switch (action.type) {
        case "UPDATE_ONE_START": 
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case "UPDATE_ONE_SUCCESS":
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case "UPDATE_ONE_FAIL":
            return {
                ...state,
                isFetching: true,
                error: action.error,
            }
        default: return state;
    }
}

export default update_Reducer;