import Utils from './Utils.js';

const QUESTIONS = {
  purchaseLottoPrice: '구입금액을 입력해 주세요.',
};

class PurchasingLotto {
  static async getUserCost() {
    const userCost = await Utils.ask(QUESTIONS.purchaseLottoPrice);
    const costStringToNumber = Number(userCost);
    return costStringToNumber;
  }
}

export default PurchasingLotto;
