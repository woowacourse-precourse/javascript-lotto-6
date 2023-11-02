import { MissionUtils } from '@woowacourse/mission-utils';

const MESSAGE = {
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
  PRINT_LOTTO_NUMBERS: (count) => `${count}개를 구매했습니다.`,
};

export const Message = Object.freeze({
  inputPurchasingAmount() {
    return MissionUtils.Console.readLineAsync(MESSAGE.INPUT_AMOUNT);
  },

  printNumberOfLottos(count) {
    MissionUtils.Console.print(MESSAGE.PRINT_LOTTO_NUMBERS(count));
  },

  printLottoNumber(lottoNumber) {
    MissionUtils.Console.print(lottoNumber);
  },
});
