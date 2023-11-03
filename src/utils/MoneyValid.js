// const isBlank = (input) => input.trim() === '';
// const isNegative = (input) => input <= 0;
// const isNumbers = (input) => Number.isNaN(input);
// const hasRemainder = (input) => input % 1000 === 0;
// const hasDecimal = (input) => input.include('.');

class MoneyValid {
  moneyIsValid(money) {
    if (!Number.isInteger(Number(money))) {
      throw new Error("[ERROR] 문자가 포함되어 있습니다.");
    }
    if (money.includes(" ")) {
      throw new Error("[ERROR] 공백이 포함되어 있습니다.");
    }
    if (money.includes(".")) {
      throw new Error("[ERROR] 소수점이 입력되었습니다.");
    }
    if (money < 1000) {
      throw new Error("[ERROR] 1000원 이상 입력해주세요.");
    }
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    }
    return true;
  }
}

export default MoneyValid;
