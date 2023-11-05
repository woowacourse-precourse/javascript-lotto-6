import {
  Console,
  ERROR_PURCHASE_AMOUNT_STRING,
  ERROR_PURCHASE_AMOUNT_UNIT,
  PAYMENT_UNIT,
  PLZ_PURCHASE_AMOUNT,
} from './Constant';

const InputView = {
  async readPurchaseAmount() {
    while (true) {
      try {
        const answer = await Console.readLineAsync('로또 구입 금액을 입력하세요: ');
        this.paymentAmountNumberValidator(answer);
        this.paymentUnitValidator(answer);
        return answer;
      } catch (error) {
        Console.print(error.message);
      }
    }
  },

  paymentAmountNumberValidator(answer) {
    const purchaseAmount = Number(answer);
    if (isNaN(purchaseAmount) || purchaseAmount % 1000 !== 0) {
      throw new Error(ERROR_PURCHASE_AMOUNT_STRING);
    }
  },

  paymentUnitValidator(answer) {
    const purchaseAmount = Number(answer);
    if (purchaseAmount % PAYMENT_UNIT !== 0) {
      throw new Error(ERROR_PURCHASE_AMOUNT_UNIT);
    }
  },
};

export default InputView;
