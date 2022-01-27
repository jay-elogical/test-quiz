import axios from "axios";

const initialState = {
    user_name: '',
    user_email: '',
    isUserRegistered: false,
    hasUserAttemptedTest: false
}


const reducer = (state = initialState, action) => {
    let type = action.type;
    switch (type) {
        case (user - change): {
            return {
                ...state,
                user_name: action.paylaod
            }
        }
        case (email - change): {
            return {
                ...state,
                user_email: action.payload
            }
        }
        case (setIsUserRegisteredFalse): {
            return {
                ...state,
                isUserRegistered: false
            }
        }
        case (setIsIserRegisteredTrue): {
            return {
                ...state,
                isUserRegistered: true
            }
        }
        default:
            return state
    }
}
