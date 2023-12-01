import { ERROR } from '../constants/messages.js'

class CustomError extends Error {
    constructor(messsage) {
        super(`${ERROR.errorHeader} ${messsage}`)        
    }
}

export default CustomError