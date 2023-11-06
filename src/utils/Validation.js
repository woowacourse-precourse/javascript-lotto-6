import { NUMBER } from "./Constans";

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

const isNumberLengthValid = (numbers) => {
    const numberArray = numbers.toString().split(",");
    const uniqueNumbers = [...new Set(numberArray)];
    if (uniqueNumbers.length !== NUMBER.SIX) {
        return false;
    }
    return true;
}

const isNumbersInRange = (numbers) => {
    return numbers.every(number => isNumberInRange(number));
}


const isNumberInRange = (number) => {
    return number >= NUMBER.ONE && number <= NUMBER.FORTY_FIVE;
}

export { isDivisibleByThousand, isNumber, isNumberInRange, isNumberLengthValid, isNumbersInRange };