import Lotto from '../src/Lotto.js';
import { LOTTO } from '../src/config.js';
import WinningLotto from '../src/WinningLotto.js';

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

  describe('로또 번호 생성 테스트', () => {
    test('생성한 로또 번호 중복 테스트', () => {
      for (let i = 0; i < 50; i++) {
        const numbers = Lotto.generateLottoNumbers();
        const set = new Set(numbers);
        expect(set.size).toBe(numbers.length);
      }
    });
    test('생성한 로또 번호 길이 테스트', () => {
      const numbers = Lotto.generateLottoNumbers();
      expect(numbers.length).toBe(LOTTO.COUNT);
    });
    test('생성한 로또 번호 오름차순 테스트', () => {
      const numbers = Lotto.generateLottoNumbers();
      const sortedNumbers = numbers.sort((a, b) => a - b);
      expect(numbers).toEqual(sortedNumbers);
    });
  });

  test.each(['1000', '2000', '3000'])('금액에 따른 로또 발행 테스트', (input) => {
    const lottos = Lotto.createLottos(input);
    expect(lottos.length).toBe(input / LOTTO.PRICE);
  });

  test.each([
    [''],
    [1, 2, 3, '', 4, 5],
    [1, 2, 3, , 4, 5],
    [1000, 2, 3, 4, 5, 6],
    [-1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5],
  ])('로또 번호 유효성 검사 테스트', (input) => {
    expect(() => {
      new Lotto(input);
    }).toThrow('[ERROR]');
  });
});

describe('당첨 로또 클래스 테스트', () => {
  const { FIRST, SECOND, THIRD, FOURTH, FIFTH, NONE } = LOTTO.WIN;
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const winningLotto = new WinningLotto(winningNumbers);
  winningLotto.setBonusNumber(bonusNumber);

  test.each([
    [''],
    ['abcd'],
    [1, 2, 3, , 4, 5],
    [1, 2, 3, 'a', 4, 5],
    [1000, 2, 3, 4, 5, 6],
    [-1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5],
  ])('로또 번호 유효성 검사 테스트', (input) => {
    expect(() => {
      new WinningLotto(input);
    }).toThrow('[ERROR]');
  });

  test.each([1, 0, 46, -1, 'a', ''])('보너스 번호 유효성 검사 테스트', (input) => {
    expect(() => {
      winningLotto.setBonusNumber(input);
    }).toThrow('[ERROR]');
  });

  test.each([
    {
      numbers: [1, 2, 3, 4, 5, 6],
      result: FIRST,
    },
    {
      numbers: [1, 2, 3, 4, 5, 7],
      result: SECOND,
    },
    {
      numbers: [1, 2, 3, 4, 5, 8],
      result: THIRD,
    },
    {
      numbers: [1, 2, 3, 4, 8, 9],
      result: FOURTH,
    },
    {
      numbers: [1, 2, 3, 8, 9, 10],
      result: FIFTH,
    },
    {
      numbers: [1, 2, 8, 9, 10, 11],
      result: NONE,
    },
  ])('당첨 금액 계산 테스트', (input) => {
    const { numbers, result } = input;
    const lotto = new Lotto(numbers);

    const lottoResult = winningLotto.calculatePrizeAmount(lotto);
    expect(lottoResult).toBe(result);
  });

  test.each([
    {
      numbers: [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 7],
      ],
      result: {
        [FIRST]: 1,
        [SECOND]: 1,
        [THIRD]: 0,
        [FOURTH]: 0,
        [FIFTH]: 0,
      },
    },
    {
      numbers: [
        [1, 2, 3, 4, 5, 8],
        [1, 2, 3, 4, 8, 9],
      ],
      result: {
        [FIRST]: 0,
        [SECOND]: 0,
        [THIRD]: 1,
        [FOURTH]: 1,
        [FIFTH]: 0,
      },
    },
    {
      numbers: [
        [1, 2, 3, 8, 9, 10],
        [1, 2, 8, 9, 10, 11],
      ],
      result: {
        [FIRST]: 0,
        [SECOND]: 0,
        [THIRD]: 0,
        [FOURTH]: 0,
        [FIFTH]: 1,
      },
    },
  ])('통계 테스트', (input) => {
    const { numbers, result } = input;
    const lottos = numbers.map((numbers) => new Lotto(numbers));
    const lottoResult = winningLotto.getStatistics(lottos);
    expect(lottoResult).toEqual(result);
  });
});
