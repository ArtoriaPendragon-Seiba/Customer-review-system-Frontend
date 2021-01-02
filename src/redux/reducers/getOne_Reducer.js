const initialValue = { isFetching: false, data: {}, error: null };

const getOne_Reducer = (state = initialValue, action) => {
	switch (action.type) {
		case "FIND_ONE_START":
			return {
				...state,
				isFetching: true,
				error: null,
			};
		case "FIND_ONE_SUCCESS":
			return {
				...state,
				isFetching: false,
				data: action.data,
			};
		case "FIND_ONE_FAIL":
			return {
				...state,
				isFetching: true,
				error: action.error,
			};
		case "CLEAR_MEMORY":
			return {
				...initialValue,
			};
		default:
			return state;
	}
};

export default getOne_Reducer;
