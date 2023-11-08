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

  test.each([
    [[1, 2, 3, 4.5, 33]],
    [[40, 39.1, 43]],
    [[2, 3, 5.3]],
  ])('소수점이 없는지', lottoNumbers => {
    mockRandoms(lottoNumbers);

    LottoGameController.generateCustomerNumbers(lottoNumbers).
      forEach((lottoNumber) => {
      expect(() => {
        lottoNumber.forEach((number) => { Validations.isInteger(number) });
      }).toThrow('[ERROR] 정수만 입력해주세요.');
    });
  });

  test.each([
    [[1, 2, 3, 3, 4]],
    [[40, 39, 39]],
    [[1, 5, 5]],
  ])('중복된 숫자가 없는지', lottoNumbers => {
    mockRandoms(lottoNumbers);

  LottoGameController.generateCustomerNumbers(lottoNumbers).
    forEach((lottoNumber) => {
    expect(() => {
      Validations.isNotDuplicated(lottoNumber)}).toThrow('[ERROR] 중복된 숫자가 없이 입력해주세요.');
    });
  });

  test.each([
    [[1, 2, 3, 3, 4]],
    [[40, 39, 39]],
    [[1, 5, 5]],
  ])('길이가 6인지', lottoNumbers => {
    mockRandoms(lottoNumbers);

  LottoGameController.generateCustomerNumbers(lottoNumbers).
    forEach((lottoNumber) => {
    expect(() => {
      Validations.isNotProperLength(lottoNumber)}).toThrow('[ERROR] 길이가 6이어야 합니다.');
    });
  });

  test.each([
    [[1, 2, 3, 5, 4]],
    [[40, 39, 39, 46, 45]],
    [[1, 5, 6, 7, 8, 2]],
  ])('오름차순으로 정렬되어 있는지', lottoNumbers => {
    mockRandoms(lottoNumbers);

  LottoGameController.generateCustomerNumbers(lottoNumbers).
    forEach((lottoNumber) => {
    expect(() => {
      Validations.isNotSorted(lottoNumber)}).toThrow('[ERROR] 오름차순으로 정렬되어 있어야 합니다.');
    });
  });
});

