
const errorMessage = (message) => `[ERROR] ${message}`
export class TypeError extends Error {
    constructor(input) {
        super(errorMessage(input))
    }
}

export class LengthError extends Error {
    constructor (input) {
        super(errorMessage(input))
    }
}

