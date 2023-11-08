import Validation from "./hooks/Validation.js";

const InputValidation = {
  checkCost(cost) {
    Validation.checkNull(cost);
    Validation.checkBlank(cost);
    Validation.checkChar(cost);
    Validation.checkIndivisible(cost);
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
