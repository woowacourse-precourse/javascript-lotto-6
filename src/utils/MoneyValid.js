// const isBlank = (input) => input.trim() === '';
// const isNegative = (input) => input <= 0;
// const isNumbers = (input) => Number.isNaN(input);
// const hasRemainder = (input) => input % 1000 === 0;
// const hasDecimal = (input) => input.include('.');

class MoneyValid {
    moneyIsValid(money) {
        if (isNaN(Number(money))) {
            throw new Error('[ERROR] 문자가 포함되어 있습니다.');
        }
        return true;
    }
}

export default MoneyValid;