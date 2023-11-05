import {
  Console,
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
        return answer.split(',');
      } catch (error) {
        Console.print(error.message);
      }
    }
  },

  async readBonusNumbers() {
    while (true) {
      try {
        const answer = await Console.readLineAsync(PLZ_BONUS_NUMBER);
        return answer;
      } catch (error) {
        Console.print(error.message);
      }
    }
  },
};

export default InputView;
