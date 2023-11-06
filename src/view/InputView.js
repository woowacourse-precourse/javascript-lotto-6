import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readPurchaseAmount() {
    const money = Console.readLineAsync('구입금액을 입력해 주세요.');
    return money;
  },
  async readWinningNumbers() {
    const winningNumbers = Console.readLineAsync('당첨 번호를 입력해 주세요.');
    return winningNumbers;
  },
  async readBonusNumber() {
    const bonusNumber = Console.readLineAsync('보너스 번호를 입력해 주세요.');
    return bonusNumber;
  },
};

export default InputView;
