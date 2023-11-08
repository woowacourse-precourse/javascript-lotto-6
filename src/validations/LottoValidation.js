import Validation from "./hooks/Validation.js";

const LottoValidation = {
  checkLotto(numberList) {
    Validation.checkWrong(numberList);
    Validation.checkDuplicate(numberList);
  },
};

export default LottoValidation;
