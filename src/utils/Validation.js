const isDivisibleByThousand = (purchaseAmount) => {
    if (purchaseAmount % 1000 !== 0) {
        return false;
    }
    return true;
}

const isNumber = (purchaseAmount) => {
    if (isNaN(purchaseAmount)) {
        return false;
    }
    return true;
}

const isNumberLengthValid = (winningNumbers) => {
    const winningNumberArray = winningNumbers.split(",");
    const winningNumberSet = new Set(winningNumberArray);
    winningNumberArray.forEach((number)=>{
        if(isNumberInRange(number)){
            winningNumberSet.add(number);
        }
    })
    return winningNumberSet.size === 6;
}

const isNumberInRange = (number) => {
    return number >= 1 && number <= 45;
}

export { isDivisibleByThousand, isNumber, isNumberInRange, isNumberLengthValid };