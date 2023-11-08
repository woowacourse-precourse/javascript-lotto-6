/* eslint-disable */
import Lotto from '../src/Lotto.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 오름차순이 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 6, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1~45 범위를 벗어난 번호가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('generateRandomLotto() - 1~45 범위의 6자리 번호를 가진 로또를 생성한다.', () => {
    // then
    expect(Lotto.generateRandomLotto()).toEqual({});
  });

  test('generateAndStoreLotto() - 생성된 로또가 배열에 순차적으로 저장한다.', () => {
    // given
    const arr = [];

    // when
    Lotto.generateAndStoreLotto(arr);

    // then
    expect(arr).toEqual([{}]);

    // when
    Lotto.generateAndStoreLotto(arr);

    // then
    expect(arr).toEqual([{}, {}]);
  });

  test('getLottoNumbers() - 생성된 로또의 번호들을 반환한다.', () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 6];

    // when
    const lotto = new Lotto(numbers);

    // then
    expect(lotto.getLottoNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
