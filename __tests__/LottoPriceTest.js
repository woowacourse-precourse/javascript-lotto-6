import Validations from '../src/Validations';

describe('구입 금액 테스트', () => {
  test.each([['10 00', ' 2000 ', ' 30 000']])('공백이 없는지', lottoPrice => {
    expect(() => {
      Validations.hasSpace(lottoPrice);
    }).toThrow('[ERROR] 공백 없이 입력해 주세요.');
  });

  test.each([['1000s', '2s000', 's30000', '']])('숫자가 맞는지', lottoPrice => {
    expect(() => {
      Validations.isNumber(lottoPrice);
    }).toThrow('[ERROR] 숫자만 입력해 주세요.');
  });

  test.each([['0', '-1000', '-1']])('0원 보다 큰 금액인지', lottoPrice => {
    expect(() => {
      Validations.isPlus(lottoPrice);
    }).toThrow('[ERROR] 양수만 입력해 주세요.');
  });
});
