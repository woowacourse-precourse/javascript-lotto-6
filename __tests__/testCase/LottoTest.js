/* eslint-disable max-lines-per-function */
import Lotto from '../../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', async () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    await expect(Lotto.createLottoInstance(numbers)).rejects.toThrow('[ERROR]');
  });

  test('로또 번호가 중복됐을 때, 예외처리', async () => {
    const numbers = [1, 2, 3, 4, 6, 6];
    await expect(Lotto.createLottoInstance(numbers)).rejects.toThrow('[ERROR]');
  });

  test('로또 번호에 문자가 포함됐을 때, 예외처리', async () => {
    const numbers = [1, 2, 3, 4, 6, 'a'];
    await expect(Lotto.createLottoInstance(numbers)).rejects.toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개가 안되면 예외가 발생한다.', async () => {
    const numbers = [1, 2, 3, 4, 5];
    await expect(Lotto.createLottoInstance(numbers)).rejects.toThrow('[ERROR]');
  });

  test('로또 번호의 범위는 1부터 45 안되면 예외가 발생한다.', async () => {
    const numbers = [0, 2, 3, 4, 5, 6];
    await expect(Lotto.createLottoInstance(numbers)).rejects.toThrow('[ERROR]');
  });

  test('로또 번호의 범위는 1부터 45 안되면 예외가 발생한다.', async () => {
    const numbers = [1, 2, 3, 4, 5, 46];
    await expect(Lotto.createLottoInstance(numbers)).rejects.toThrow('[ERROR]');
  });
});
