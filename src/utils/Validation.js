const isDivisibleByThousand = (purchaseAmount) => {
    if (purchaseAmount % 1000 !== 0) {
        return false;
    }
    return true;
}

const isNumber = (purchaseAmount) => {
    if (isNaN(Number(purchaseAmount))) {
        return false;
    }
    return true;
}

const isNumberLengthValid = (number) => {
    const numberArray = number.toString().split(",");
    const NumberSet = new Set(numberArray);
    numberArray.forEach((number)=>{
        if(isNumberInRange(number)){
            NumberSet.add(number);
        }
    });
    return NumberSet.size === 6;
}

const isNumberInRange = (number) => {
    return number >= 1 && number <= 45;
}

export { isDivisibleByThousand, isNumber, isNumberInRange, isNumberLengthValid };