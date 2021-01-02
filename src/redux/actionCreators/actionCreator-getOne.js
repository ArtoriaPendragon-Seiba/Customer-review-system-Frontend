export function get_Start () {
    return {
        type: "FIND_ONE_START"
    }
}

export function get_Success (res) {
    return {
        type: "FIND_ONE_SUCCESS",
        data: res.data,
    }
}

export function get_Fail (err) {
    return {
        type: "FIND_ONE_FAIL",
        error: err,
    }
}

export function clear_Memory(){
    return {
        type:"CLEAR_MEMORY",
    }
}