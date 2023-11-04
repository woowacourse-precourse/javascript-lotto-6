import { MissionUtils } from '@woowacourse/mission-utils';

const InputView = {
  purchaseLotto(callback) {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', callback);
  },

  getWinningNumbers(callback) {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', callback);
  },
};

export default InputView;
