export default class Checker {
  checkPrice(price) {
    const isInvalidPrice = [
      isNaN(price),
      !Number.isInteger(price),
      price === 0,
      price % 1000,
    ].some(Boolean);

    if (isInvalidPrice) {
      throw new Error("[ERROR] : 잘못된 구입금액입니다.");
    }
  }
  checkWinningNumber(winningNumbers) {
    const uniqueWinningNumber = new Set(winningNumbers);

    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] : 6개의 숫자를 입력해주세요");
    }

    if (uniqueWinningNumber.size !== 6) {
      throw new Error("[ERROR] : 중복된 숫자가 있습니다");
    }

    winningNumbers.forEach((winningNumber) => {
      if (
        isNaN(winningNumber) ||
        !Number.isInteger(winningNumber) ||
        winningNumber < 1 ||
        winningNumber > 45
      ) {
        throw new Error("[ERROR] : 잘못된 로또 입력값입니다");
      }
    });
  }
  checkBonus(winningNumbers, bonusNumber) {
    const uniqueWinningNumber = new Set(winningNumbers);

    if (
      isNaN(bonusNumber) ||
      !Number.isInteger(bonusNumber) ||
      uniqueWinningNumber.has(bonusNumber) ||
      bonusNumber < 1 ||
      bonusNumber > 45
    ) {
      throw new Error("[ERROR] : 잘못된 로또 입력값입니다");
    }
  }
}
