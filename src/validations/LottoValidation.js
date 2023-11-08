import Validation from "./hooks/Validation.js";

const LottoValidation = {
  checkLotto(numberList) {
    Validation.checkWrong(numberList);
    Validation.checkDuplicate(numberList);
  },

  checkLottoNumber(number) {
    Validation.checkOutOfRange(number);
  },
};

export default LottoValidation;
