let log = false;
let loggedReducer = (state =log, action) => {
    switch (action.type) {
        case "LOG_IN":
            return true
            case "LOG_OUT":
            return false
        default:
            return state
    }
}

export default loggedReducer