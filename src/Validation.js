import { ERROR } from "./env/Message.js";

export default function Validation() {
  this.DuplicationBonusNumber = (numbers, value) => {
    if (numbers.includes(value)) {
      throw new Error(ERROR.INVALID_DUPLICATE_BONUS);
    }
  };
  this.InvalidUnits = (value) => {
    if (parseInt(value) % 1000 !== 0) {
      throw new Error(ERROR.INCORRECT_UNIT);
    }
  };
  this.InvalidValue = (value) => {
    if (isNaN(value)) {
      throw new Error(ERROR.INVALID_INPUT_VALUE);
    }
  };
}
