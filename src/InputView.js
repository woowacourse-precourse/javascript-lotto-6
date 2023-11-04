import { MissionUtils } from '@woowacourse/mission-utils';

const InputView = {
  purchaseLotto(callback) {
    MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
  },
};

export default InputView;
