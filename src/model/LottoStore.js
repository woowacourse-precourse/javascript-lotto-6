import DATATYPE_CONSTANT from "../Constant/DataTypeConstant.js";
import RULE_CONSTANT from "../Constant/RuleConstant.js";
import ERROR_CONSTANT from "../Constant/ErrorConstant.js";
import ValidationError from "../Error/ValidationError.js";
import Formattor from "../View/Formattor.js";
import LottoSellectNumberCard from "./LottoSellectNumberCard.js";
import Lotto from "./Lotto.js";

const TRUE = true;

class LottoStore {
  #minNumber
  #maxNumber
  #expectedSellectNumberCount
  #LottoNumbers
  #name

  
  constructor(minNumber, maxNumber, expectedSellectNumberCount) {
    this.#name = 'LottoStore';
    if (!Number.isInteger(minNumber)) {
      throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
    }
    if (!Number.isInteger(maxNumber)) {
      throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
    }
    if (!Number.isInteger(expectedSellectNumberCount)) {
      throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
    }
    this.#minNumber = minNumber;
    this.#maxNumber = maxNumber;
    this.#expectedSellectNumberCount = expectedSellectNumberCount;
  }

  takeLottoSellectNumberCards (purchaseCount) {
    if (!Number.isInteger(purchaseCount)) {
      throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
    }
 
    const array = new Array(purchaseCount).fill(0);
    return (array.map((item) => new LottoSellectNumberCard()));
  }
  
  sellLottos(purchaseLottoSellectNumberCards) {
    if (!Array.isArray(purchaseLottoSellectNumberCards)) {
      throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
    }
    
    return (purchaseLottoSellectNumberCards.map((card) => this.#sellLotto(card)));
  }

  getName() {
    return (this.#name);
  }

  #sellLotto(purchaseLottoSellectNumberCard) {
    if (
      purchaseLottoSellectNumberCard !== DATATYPE_CONSTANT.OBJECT &&
      purchaseLottoSellectNumberCard.getName() !== RULE_CONSTANT.LOTTO_SELLECT_NUMBER_CARD
    ) { throw new ValidationError(ERROR_CONSTANT.IS_NOT_EXPECTED_OBJECT)
    }
    if (purchaseLottoSellectNumberCard.getAutoSignStatus() === TRUE) {
      return (new Lotto(this.#autoSellectLottoNumber()));
    } else {
      throw new ValidationError(ERROR_CONSTANT.IS_UNDEFINED_BEHAVIOR);
    }
  }

  #autoSellectLottoNumber() {
    this.#LottoNumbers = Formattor.getUniqueRandomNumbers(
      this.#minNumber,
      this.#maxNumber,
      this.#expectedSellectNumberCount
    );
    
    const AscendingArray = Formattor.sortAscendingArray(this.#LottoNumbers);
    return (AscendingArray);
  }


}

export default LottoStore;