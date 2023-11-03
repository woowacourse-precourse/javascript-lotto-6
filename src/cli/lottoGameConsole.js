import systemConsole from './systemConsole.js';
import { validatePurchasedLottoAmount } from '../validations/purchasedLottoAmountValidation.js';

const lottoGameConsole = Object.freeze({
  input: Object.freeze({
    messages: Object.freeze({
      purchasedLottoAmount: '구입금액을 입력해 주세요.\n',
    }),

    async readPurchasedLottoAmount() {
      const purchasedLottoAmount = await systemConsole.read(this.messages.purchasedLottoAmount);
      validatePurchasedLottoAmount(Number(purchasedLottoAmount));
      return purchasedLottoAmount;
    },
  }),
});

export default lottoGameConsole;
