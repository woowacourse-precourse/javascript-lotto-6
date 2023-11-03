import { Console } from '@woowacourse/mission-utils';

const validator = {
  validatePrice(price) {
    if (!price || price % 1000 !== 0) {
      Console.print('[ERROR] 당첨 금액은 1000원 단위로 입력해주세요.');
      return 1;
    }
    return 0;
  },
};

export default validator;
