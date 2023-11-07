import { MissionUtils } from '@woowacourse/mission-utils';

const InputView = {
  async purchaseLotto() {
    let amount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    amount = Number(amount);
    return amount;
  },

  async readWinningNumbers() {
    let winningNumbers = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    winningNumbers = winningNumbers.split(',').map((number) => {
      return (number = Number(number));
    });
    return winningNumbers;
  },

  async readBonusNumbers() {
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    return bonusNumber;
  },
};

export default InputView;
