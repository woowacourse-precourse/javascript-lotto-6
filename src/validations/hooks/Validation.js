import {
  INPUT_ERROR,
  NUMBER_CRITERIA,
  NUMBER_RANGE,
  UNIT,
} from "../../models/Constants.js";

const Validation = {
  checkNull(number) {
    if (number.length === 0) {
      throw new Error(INPUT_ERROR.null);
    }
  },

  checkBlank(number) {
    if (number.replaceAll(" ", "").length !== number.length) {
      throw new Error(INPUT_ERROR.blank);
    }
  },

  checkChar(number) {
    if (Number.isNaN(Number(number))) {
      throw new Error(INPUT_ERROR.char);
    }
  },

  checkIndivisible(cost) {
    if (Number(cost) % UNIT !== 0) {
      throw new Error(INPUT_ERROR.indivisible);
    }
  },

  checkEmpty(number) {
    if (number === "") {
      throw new Error(INPUT_ERROR.empty);
    }
  },

  checkWrong(numberList) {
    if (numberList.length !== NUMBER_CRITERIA) {
      throw new Error(INPUT_ERROR.wrong);
    }
  },

  checkOutOfRange(number) {
    if (number < NUMBER_RANGE.min || number > NUMBER_RANGE.max) {
      throw new Error(INPUT_ERROR.outOfRange);
    }
  },

  checkDuplicate(numberList) {
    if (new Set(numberList).size !== NUMBER_CRITERIA) {
      throw new Error(INPUT_ERROR.duplicate);
    }
  },
};

export default Validation;
