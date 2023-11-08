import { isValidLottoAmountInput } from '../src/utils/validation.js';

describe('로또 게임 입력값 유효성 검사 테스트', () => {
  test('로또 구입금액이 1000원으로 나누어 떨어지지 않았을 경우 테스트', () => {
    const lottoAmount = 1200;
    const result = isValidLottoAmountInput(lottoAmount);
    expect(result).toEqual(false);
  });
});
