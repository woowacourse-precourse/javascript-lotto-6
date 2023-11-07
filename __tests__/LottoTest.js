import { Lotto, MakeLotto, LottoResult } from '../src/Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { Outputs } from '../src/ui/Output.js';

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

  // 아래에 추가 테스트 작성 가능
  test('로또 번호는 정수로 이루어져야 한다.', () => {
    expect(() => {
      new Lotto(['k', 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호는 1보다 작고 45보다 크면 안된다.', () => {
    expect(() => {
      new Lotto([47, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('MakeLotto 클래스 테스트', () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');

  test('입력받은 amount의 값은 정수여야 한다.', () => {
    new MakeLotto([1, 2, 3, 4, 5, 6], '1000j');
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  // 후에 수정
  test('입력받은 amount의 값은 1000단위로 나누어 떨어져야합니다.', () => {
    new MakeLotto([1, 2, 3, 4, 5, 6], 1200);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('makeLottos()가 제대로 로또 번호를 만들어내는지 테스트', async () => {
    const makeLotto = new MakeLotto([1, 2, 3, 4, 5, 6], 3000);
    const myLottos = await makeLotto.makeLottos();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('3개를 구매했습니다.')
    );
    expect(myLottos.length).toBe(3);

    //  myLottos 배열 내부의 로또 값 배열들 중 중복된 값이 들어간 배열이 있는지 확인
    myLottos.forEach((item) => {
      const duplicatedArr = new Set(item).size !== item.length;
      expect(duplicatedArr.length).toBeFalsy();
      // 로또 번호가 6가지로 구성되어있는지 확인.
      expect(item.length).toBe(6);
      // 로또 번호가 1~45 사이의 값인지 확인
      item.forEach((item) => {
        expect(item).toBeGreaterThanOrEqual(1);
        expect(item).toBeLessThanOrEqual(45);
      });
    });
  });
});

describe('LottoResult 클래스 테스트', () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');

  test('bonusNum에 대한 테스트', () => {
    // bonusNum은 당첨번호와 중복되선 안된다.
    expect(() => {
      new LottoResult([1, 2, 3, 4, 5, 6], '6', 3000, [
        [1, 12, 32, 24, 27, 30],
        [11, 23, 42, 13, 33, 21],
        [1, 2, 31, 13, 24, 42],
      ]);
    }).toThrow('[ERROR]');

    // bonusNum은 1~45 사이의 값이여야한다.
    expect(() => {
      new LottoResult([1, 2, 3, 4, 5, 6], '47', 3000, [
        [1, 12, 32, 24, 27, 30],
        [11, 23, 42, 13, 33, 21],
        [1, 2, 31, 13, 24, 42],
      ]);
    }).toThrow('[ERROR]');

    // bonusNum은 하나의 숫자만 와야한다.
    expect(() => {
      new LottoResult([1, 2, 3, 4, 5, 6], '1,2', 3000, [
        [1, 12, 32, 24, 27, 30],
        [11, 23, 42, 13, 33, 21],
        [1, 2, 31, 13, 24, 42],
      ]);
    }).toThrow('[ERROR]');

    // bonusNum은 숫자여야 한다.
    expect(() => {
      new LottoResult([1, 2, 3, 4, 5, 6], 'l', 3000, [
        [1, 12, 32, 24, 27, 30],
        [11, 23, 42, 13, 33, 21],
        [1, 2, 31, 13, 24, 42],
      ]);
    }).toThrow('[ERROR]');
  });

  test('countMatchingNumbers 메서드 테스트', () => {
    // 당첨 번호, 보너스 번호가 로또 번호와 잘 매칭 되는지 확인.
    const lottoResult = new LottoResult([1, 2, 3, 4, 5, 6], '7', 1000, [
      [1, 2, 3, 4, 7, 42],
    ]);
    const myLottos = [[1, 2, 3, 4, 7, 42]];
    let count = 0;

    myLottos.forEach((currentLotto) => {
      count += lottoResult.countMatchingNumbers(currentLotto);
    });

    expect(count).toBe(5);
  });

  test('updateMatchesObj 메서드 테스트', () => {
    // count를 받아서 일치한 로또를 MatchesObj에 업데이트 해주는 메서드 테스트
    // 앞선 테스트와 해당 테스트에서 isMatch()의 테스트 또한 겸한다 생각하여 생략
    const lottoResult = new LottoResult([1, 2, 3, 4, 5, 6], '7', 1000, [
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 4, 13, 14],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 7, 42],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
    ]);
    const myLottos = [
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 4, 13, 14],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 7, 42],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
    ];
    const matchesObj = {
      three: 0,
      four: 0,
      five: 0,
      bonus: 0,
      six: 0,
    };

    myLottos.forEach((currentLotto) => {
      const count = lottoResult.countMatchingNumbers(currentLotto);
      lottoResult.updateMatchesObj(matchesObj, count, currentLotto);
    });

    expect(matchesObj).toStrictEqual({
      three: 1,
      four: 1,
      five: 1,
      bonus: 1,
      six: 2,
    });
  });

  test('calcRevenue 메서드 테스트', () => {
    // 제공된 객체를 토대로 총 이익을 계산해내는지 테스트
    const lottoResult = new LottoResult([1, 2, 3, 4, 5, 6], '7', 3000, [
      [1, 2, 3, 24, 27, 30],
      [1, 2, 3, 4, 20, 21],
      [1, 2, 31, 13, 24, 42],
    ]);
    const matchResultObj = {
      three: 1,
      four: 1,
      five: 0,
      bonus: 0,
      six: 0,
    };
    const matcheAmountObj = {
      three: 5000,
      four: 50000,
      five: 1500000,
      bonus: 30000000,
      six: 2000000000,
    };
    const revenue = lottoResult.calcRevenue(matchResultObj, matcheAmountObj);

    expect(revenue).toBe(55000);
  });

  test('isMatch 메서드와 getRateOfReturn 메서드의 값이 정확한지 테스트', async () => {
    // 해당 테스트와 앞선 테스트 들로 getRateOfReturn 메서드 개별 테스트는 필요하지 않다고 판단.
    const lottoResult = new LottoResult([1, 2, 3, 4, 5, 6], '7', 3000, [
      [1, 2, 3, 24, 27, 30],
      [1, 2, 3, 4, 20, 21],
      [1, 2, 31, 13, 24, 42],
    ]);

    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 1833.3%입니다.',
    ];

    await lottoResult.printResult();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
