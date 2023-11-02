import { MissionUtils } from '@woowacourse/mission-utils';

const MESSAGE = {
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
};

export const Message = Object.freeze({
  inputPurchasingAmount() {
    return MissionUtils.Console.readLineAsync(MESSAGE.INPUT_AMOUNT);
  },
});
