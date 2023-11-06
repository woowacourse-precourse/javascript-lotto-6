import { MissionUtils } from '@woowacourse/mission-utils';

const InputView = {
  purchaseLotto() {
    const amount = MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return amount;
  },

  readWinningNumbers() {
    const winningNumbers = MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return winningNumbers;
  },

  readBonusNumbers() {
    const bonusNumber = MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    return bonusNumber;
  },
};

export default InputView;
