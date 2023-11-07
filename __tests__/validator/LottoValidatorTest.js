import { LOTTO_ERROR } from '../../src/constants/message/error';
import LottoValidator from '../../src/validator/LottoValidator';

describe('로또 검증 클래스 예외 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.validateCount([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(LOTTO_ERROR.count);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.validateDuplication([1, 2, 3, 4, 5, 5]);
    }).toThrow(LOTTO_ERROR.duplication);
  });

  test('보너스 번호가 당첨 번호에 포함되어 있으면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 6;

    expect(() => {
      LottoValidator.validateBonusNumberInLottoNumbers(
        winningNumbers,
        bonusNumber,
      );
    }).toThrow(LOTTO_ERROR.duplication);
  });
});
