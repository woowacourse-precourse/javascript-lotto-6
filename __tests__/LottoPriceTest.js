import Validations from '../src/constants/Validations';

describe('구입 금액 테스트', () => {
  test.each([
    ['10 00', ' 2000 ', ' 30 000']
  ])('공백이 없는지', (lottoPrice) => {
    expect(() => { Validations.hasSpace(lottoPrice) }).toThrow('[ERROR] 공백 없이 입력해 주세요.');
  });
});
