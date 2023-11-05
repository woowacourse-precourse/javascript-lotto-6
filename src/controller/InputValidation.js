 export default InputValidation = (input) => {
    
    this.input = input;

    InputValidation.prototype.isNumber = () => {
       return Number.isNaN(this.input) ? false : true
    }

    InputValidation.prototype.isNumberArray = () => {
        const isNotLengthSix = input.length !== 6
        const isNotNumberArray = input.every((element)=>typeof element === 'number')

        if (isNotLengthSix) return false
        if (isNotNumberArray) return false

        return true
    }
}
