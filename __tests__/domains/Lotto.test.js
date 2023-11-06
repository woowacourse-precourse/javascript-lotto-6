import Lotto from '../../src/domains/Lotto.js';
import WinningLotto from '../../src/domains/WinningLotto.js';
import { LottoDuplicatedError, LottoLengthError, LottoRangeError, LottoTypeError } from '../../src/error/CustomErrors.js';

describe('Lotto - constructor 메소드 : 생성 lotto 번호 유효성 검사 테스트', () => {
  test.each([
    [[0, 1, 2, 3, 4, 5]],
    [[0, 6, 2, 47, 4, 2]],
    [[46, 47, 48, 100, 49, 50]],
  ])('로또는 1이상 45 이하여야 한다. 그렇지 않은 경우 LottoRangeError를 반환한다.', (numbers) => {
    const result = () => new Lotto(numbers);

    expect(result).toThrowError(LottoRangeError);
  });

  test.each([
    [[1, 2, 3]],
    [[1]],
    [[1, 2, 3, 4, 5, 6, 7]],
  ])('로또는 6개여야 한다. 그렇지 않은 경우 LottoLengthError를 반환한다.', (numbers) => {
    const result = () => new Lotto(numbers);

    expect(result).toThrowError(LottoLengthError);
  });

  test.each([
    [['일', 2, 3, 4, 5, 6]],
    [['a', 'b', 'c', 'd', 'e', 'f']],
    [[-1, 0, 3.14, 5, 6, 7]],
  ])('로또는 숫자로 이루어져야 한다. 그렇지 않은 경우 LottoTypeError를 반환한다.', (numbers) => {
    const result = () => new Lotto(numbers);

    expect(result).toThrowError(LottoTypeError);
  });

  test.each([
    [[1, 1, 3, 4, 5, 6]],
    [[30, 1, 3, 2, 30, 40]],
  ])('로또에 중복되는 숫자는 없어야 한다. 그렇지 않은 경우 LottoDuplicatedError를 반환한다.', (numbers) => {
    const result = () => new Lotto(numbers);

    expect(result).toThrowError(LottoDuplicatedError);
  });
});

describe('Lotto - getNumbers 메소드 : 로또 번호 반환값 테스트', () => {
  test.each([
    [[1, 2, 3, 4, 5, 6]],
    [[5, 10, 15, 20, 25, 30]],
  ])('lotto의 생성값과, getNumbers의 반환값이 동일해야 한다.', (input) => {
    const lotto = new Lotto(input);
    const result = lotto.getNumbers();

    expect(result).toEqual(input);
  });
});

describe('Lotto - getPrize 메소드 : 로또와 담첨번호 및 보너스 결과 테스트', () => {
  const winning = new WinningLotto();
  const INPUT_NUMBERS = '1,2,3,4,5,6';
  const INPUT_BONUS = '7';

  winning.setNumbers(INPUT_NUMBERS);
  winning.setBonus(INPUT_BONUS);

  test('lotto와 당첨번호가 모두 일치하는 경우 1등(1)을 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6])
    const result = lotto.getPrize(winning.getNumbers(), winning.getBonus())

    expect(result).toEqual(1);
  });

  test.each([
    [[1, 2, 3, 4, 5, 7]],
    [[1, 3, 4, 5, 6, 7]],
  ])('lotto와 당첨번호가 5개 일치하고, 보너스가 일치하는 경우 2등(2)을 반환한다.', (input) => {
    const lotto = new Lotto(input)
    const result = lotto.getPrize(winning.getNumbers(), winning.getBonus())

    expect(result).toEqual(2);
  });

  test.each([
    [[1, 2, 3, 4, 5, 20]],
    [[1, 3, 4, 5, 6, 20]],
  ])('lotto와 당첨번호가 5개 일치하고, 보너스가 일치하지 않는 경우 3등(3)을 반환한다.', (input) => {
    const lotto = new Lotto(input)
    const result = lotto.getPrize(winning.getNumbers(), winning.getBonus())

    expect(result).toEqual(3);
  });

  test.each([
    [[1, 2, 3, 4, 10, 20]],
    [[1, 3, 4, 5, 10, 20]],
  ])('lotto와 당첨번호가 4개 일치하고, 보너스가 일치하지 않는 경우 4등(4)을 반환한다.', (input) => {
    const lotto = new Lotto(input)
    const result = lotto.getPrize(winning.getNumbers(), winning.getBonus())

    expect(result).toEqual(4);
  });

  test.each([
    [[1, 2, 3, 10, 20, 30]],
    [[4, 5, 6, 10, 20, 30]]
  ])('lotto와 당첨번호가 3개 일치하고, 보너스가 일치하지 않는 경우 5등(5)을 반환한다.', (input) => {
    const lotto = new Lotto(input)
    const result = lotto.getPrize(winning.getNumbers(), winning.getBonus())

    expect(result).toEqual(5);
  });
});
