import {
  Console,
  ERROR_LOTTO_RANGE,
  ERROR_LOTTO_TYPE,
  ERROR_PURCHASE_AMOUNT_PRICE,
  ERROR_PURCHASE_AMOUNT_STRING,
  ERROR_PURCHASE_AMOUNT_UNIT,
  PLZ_BONUS_NUMBER,
  PLZ_PURCHASE_AMOUNT,
  PLZ_WINNING_NUMBERS,
  PRICE_UNIT,
} from './Constant';

const InputView = {
  async readPurchaseAmount() {
    while (true) {
      try {
        const answer = await Console.readLineAsync(PLZ_PURCHASE_AMOUNT);
        this.priceNumberValidator(answer);
        this.priceCheckValidator(answer);
        this.priceUnitValidator(answer);
        return answer;
      } catch (error) {
        Console.print(error.message);
      }
    }
  },

  priceNumberValidator(answer) {
    const purchaseAmount = Number(answer);
    if (isNaN(purchaseAmount)) {
      throw new Error(ERROR_PURCHASE_AMOUNT_STRING);
    }
  },

  priceUnitValidator(answer) {
    const purchaseAmount = Number(answer);
    if (purchaseAmount % PRICE_UNIT !== 0) {
      throw new Error(ERROR_PURCHASE_AMOUNT_UNIT);
    }
  },

  priceCheckValidator(answer) {
    const purchaseAmount = Number(answer);
    if (purchaseAmount < PRICE_UNIT || purchaseAmount === 0) {
      throw new Error(ERROR_PURCHASE_AMOUNT_PRICE);
    }
  },

  async readWinningNumbers() {
    while (true) {
      try {
        const answer = await Console.readLineAsync(PLZ_WINNING_NUMBERS);
        return answer.split(',').map(Number);
      } catch (error) {
        Console.print(error.message);
      }
    }
  },

  async readBonusNumbers() {
    try {
      const answer = await Console.readLineAsync(PLZ_BONUS_NUMBER);
      this.typeCheckValidator(answer);
      this.rangeCheckValidator(answer);
      return answer;
    } catch (error) {
      Console.print(error.message);
    }
  },

  rangeCheckValidator(answer) {
    const answerNumber = Number(answer);
    if (answerNumber < 1 || answerNumber > 45) {
      throw new Error(ERROR_LOTTO_RANGE);
    }
  },

  typeCheckValidator(answer) {
    const answerNumber = Number(answer);
    if (isNaN(answerNumber)) {
      throw new Error(ERROR_LOTTO_TYPE);
    }
  },
};

export default InputView;
