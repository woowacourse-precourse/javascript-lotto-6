// const isBlank = (input) => input.trim() === '';
// const isNegative = (input) => input <= 0;
// const isNumbers = (input) => Number.isNaN(input);
// const hasRemainder = (input) => input % 1000 === 0;
// const hasDecimal = (input) => input.include('.');

class MoneyValid {
    moneyisValid(money) {
        if (money % 1000 !== 0){
            throw new Error('[ERROR]'); // 임시
        }
    }
}

export default MoneyValid;