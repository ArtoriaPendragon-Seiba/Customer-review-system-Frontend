export function update_Start () {
    return {
        type: "UPDATE_ONE_START"
    }
}

export function update_Success (res) {
    return {
        type: "UPDATE_ONE_SUCCESS",
        data: res.data,
    }
}

export function update_Fail (err) {
    return {
        type: "UPDATE_ONE_FAIL",
        error: err,
    }
}