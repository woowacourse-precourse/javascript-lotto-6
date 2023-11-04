export class InputConverter {
  moneyConverter(money) {
    return Number(money);
  }
}

const inputConverter = new InputConverter();
console.log(inputConverter.moneyConverter("3000"));
