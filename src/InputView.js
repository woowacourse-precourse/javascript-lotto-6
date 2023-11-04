import { Console, PLZ_PURCHASE_AMOUNT } from './Constant';

const InputView = {
  async readPurchaseAmount() {
    const answer = await Console.readLineAsync(PLZ_PURCHASE_AMOUNT);
    return answer;
  },
};

export default InputView;
