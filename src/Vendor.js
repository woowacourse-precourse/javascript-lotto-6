import InputView from './views/InputView';

class Vendor {
  isssueTickets() {}

  async getUserPaid() {
    const paid = await InputView.getPurchaseAmount();
    if (!Number.isInteger(paid)) {
      throw new Error('[ERROR] 정수만 입력 가능합니다.');
    }
    if (paid < 1000 || paid % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 구매 가능합니다.');
    }
    return paid;
  }
}
