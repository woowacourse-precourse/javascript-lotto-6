import Validation from "./hooks/Validation.js";

const InputValidation = {
  checkMoney(money) {
    Validation.checkNull(money);
    Validation.checkBlank(money);
    Validation.checkChar(money);
    Validation.checkIndivisible(money);
  },

  checkNumbers(numberList) {
    Validation.checkNull(numberList);
    Validation.checkWrong(numberList);

    numberList.forEach((number) => {
      Validation.checkEmpty(number);
      Validation.checkBlank(number);
      Validation.checkChar(number);
      Validation.checkOutOfRange(number);
    });

    Validation.checkDuplicate(numberList);
  },

  checkBonusNumber(bonusNumber) {
    Validation.checkNull(bonusNumber);
    Validation.checkBlank(bonusNumber);
    Validation.checkChar(bonusNumber);
    Validation.checkOutOfRange(bonusNumber);
  },
};

export default InputValidation;
