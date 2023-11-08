import { MissionUtils } from "@woowacourse/mission-utils";
import Validations from '../src/Validations.js';
import Customer from '../src/models/Customer.js';
import LottoGameController from '../src/controllers/LottoGameController.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('사용자 로또 번호 목록 테스트', () => {
  test.each([
    [[1, 2, 'e', 4, 5, 6]],
    [['s', 3, 5, 7, 8]],
    [[ '', ' ', '', ' ', '', 'ff']],
  ])('숫자가 맞는지', lottoNumbers => {
    mockRandoms(lottoNumbers);

    LottoGameController.generateCustomerNumbers(lottoNumbers).
      forEach((lottoNumber) => {
      expect(() => {
        lottoNumber.forEach((number) => { Validations.isNumber(number) });
      }).toThrow('[ERROR] 숫자만 입력해 주세요.');
    });
  });

  test.each([
    [[1, 2, 3, 4, 5, 6, 56]],
    [[60, 59, 58, 57]],
    [[ 0, 3, 5]],
  ])('1~45 사이의 숫자가 맞는지', lottoNumbers => {
    mockRandoms(lottoNumbers);

    LottoGameController.generateCustomerNumbers(lottoNumbers).
      forEach((lottoNumber) => {
      expect(() => {
        lottoNumber.forEach((number) => { Validations.isInRange(number) });
      }).toThrow('[ERROR] 1~45 사이의 숫자만 입력해주세요.');
    });
  });
});

