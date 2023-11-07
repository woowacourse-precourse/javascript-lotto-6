import InputHandler from './InputHandler';

class User {
  async purchaseLotto() {
    const amount = await InputHandler.inputPurchaseAmount();
    //유효성 검사 해야함.
    const ticketCount = amount / 1000;
    return ticketCount;
  }

  async enterWinningNumbers() {
    const winningNumbers = await InputHandler.inputWinningNumbers();

    return winningNumbers;
  }

  async enterBonusNumber() {
    const bonusNumber = await InputHandler.inputBonusNumber();

    return bonusNumber;
  }
}

export default User;
