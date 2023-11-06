
const errorMessage = (message) => `[ERROR] ${message}`
export class PriceError extends Error {
    constructor(input) {
        super(errorMessage(input))
    }
}
export class bonusError extends Error {
    constructor(input) {
        super(errorMessage(input))
    }
}


export class LengthError extends Error {
    constructor (input) {
        super(errorMessage(input))
    }
}

