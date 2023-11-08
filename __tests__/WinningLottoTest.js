/* eslint-disable max-lines-per-function */
import WinningLotto from '../src/domain/WinningLotto';

describe('WinningLotto 도메인 로직 테스트', () => {
  test('로또 번호와 보너스 번호가 중복될 경우 예외가 발생한다.', () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 6;

    expect(() => new WinningLotto(lottoNumbers, bonusNumber)).toThrowError(
      '[ERROR]'
    );
  });

  test.each([0, 46, 3.5])(
    '보너스 번호가 1 ~ 45 사이 정수가 아닌 경우 예외가 발생한다.',
    (bonusNumber) => {
      const lottoNumbers = [1, 2, 3, 4, 5, 6];

      expect(() => new WinningLotto(lottoNumbers, bonusNumber)).toThrowError(
        '[ERROR]'
      );
    }
  );
});
