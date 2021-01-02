// actions for get user list
export function getList_Start () {
    return {
        type: "GETTING_LIST_START",
    };
}

export function getList_Success(res) {
    return {
        type: "GETTING_LIST_SUCCESS",
        data: res.data,
    }
}

export function getList_Failure(err) {
    return {
        type: "GETTING_LIST_FAIL",
        error: err,
    }
}
