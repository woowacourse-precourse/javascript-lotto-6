import { Console } from '@woowacourse/mission-utils';

const validator = {
  validatePrice(price) {
    if (!price || price % 1000 !== 0) {
      Console.print('[ERROR] 당첨 금액은 1000원 단위로 입력해주세요.');
      throw new Error('[ERROR] 당첨 금액은 1000원 단위로 입력해주세요.');
    }
  },
};

export default validator;
