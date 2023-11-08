import RULE_CONSTANT from '../Constant/RuleConstant'
import NUMBER_CONSTANT from '../Constant/NumberConstant';
import ERROR_CONSTANT from '../Constant/ErrorConstant';
import DATATYPE_CONSTANT from '../Constant/DataTypeConstant';
import ValidationError from '../Error/ValidationError'
import Formattor from '../View/Formattor';

class MatchedNumber {
  #name
  #amountString
  #amount
  #count

  constructor({name, amountString, amount}) {
    if (typeof name !== DATATYPE_CONSTANT.STRING) {
      throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);
    }
    if (typeof amountString !== DATATYPE_CONSTANT.STRING) {
      throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);
    }
    if (!Number.isInteger(amount)) {
      throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
    }

    this.#name = name;
    this.#amountString = amountString;
    this.#amount = amount;
    this.#count = NUMBER_CONSTANT.ZERO;
  }
  setAddCount = () => {
    this.#count += NUMBER_CONSTANT.ONE;
  }
  getCount = () => this.#count;

  getTotalPurchase = () => (
    Formattor.multiplyValue(this.#count, this.#amount)
  );
  getTotalStatement = () => {
    const firstMessage = `${this.#name} ${this.#amountString} `;
    const secondMessage = `${RULE_CONSTANT.HYPON} ${this.#count}${RULE_CONSTANT.QUANTITY}`;

    return (firstMessage + secondMessage);
  }
}

export default MatchedNumber;