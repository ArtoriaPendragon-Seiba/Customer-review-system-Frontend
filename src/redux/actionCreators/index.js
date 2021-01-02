import {
	getList_Start,
	getList_Success,
	getList_Failure,
} from "./actionCreator_getList";

import {
	get_Start,
	get_Success,
	get_Fail,
	clear_Memory,
} from "./actionCreator-getOne";
import {
	update_Start,
	update_Success,
	update_Fail,
} from "./actionCreator-update";

import axios from "axios";

// action creator for getting list
export function getList(search_key = null, pageNum = 1) {
	return (dispatch) => {
        dispatch(getList_Start());
        console.log(search_key);
		axios
			.get(`/api/items/list`, {
				params: {
					searchKey: search_key,
					pageNum: pageNum,
				},
			})
			.then((res) => {
				console.log(res);
				dispatch(getList_Success(res));
			})
			.catch((err) => {
				dispatch(getList_Failure(err));
			});
	};
}

// action creator for getting one
export function getOne(id) {
	return (dispatch) => {
		dispatch(get_Start());
		axios
			.get(`/api/items/${id}`)
			.then((res) => {
				dispatch(get_Success(res));
			})
			.catch((err) => {
				dispatch(get_Fail(err));
			});
	};
}

// action creator for clearing memory
export function clearGetOneReducer() {
	return (dispatch) => {
		dispatch(clear_Memory());
	};
}

// action creator for update one
export function updateOne(id, review) {
	return (dispatch) => {
		dispatch(update_Start());
		axios
			.put(`/api/items/${id}`, review)
			.then((res) => {
				dispatch(update_Success(res));
			})
			.catch((err) => {
				dispatch(update_Fail(err));
			});
	};
}
