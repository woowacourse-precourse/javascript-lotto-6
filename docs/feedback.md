# 2주차 공통 피드백

## 1. README.md를 상세히 작성한다.

미션 저장소의 README.md는 소스코드에 앞서 해당 프로젝트가 어떠한 프로젝트인지 마크다운으로 작성하여 소개하는 문서이다. 해당 프로젝트가 어떠한 프로젝트이며, 어떤 기능을 담고 있는지 기술하기 위해서 마크다운문법을 검색해서 학습해보고 적용해 본다.

## 2. 기능 목록을 재검토한다.

이번 기능 목록은 2차부터 너무 상세하게 작성하지 않았습니다.  
이전 미션에는 대략적인 클래스 이름과 함께 설계도를 그렸지만 이번에는 로직 순서도만 생각하고 진행하였습니다.  
실제 2차 구현 때 많은 부분이 바뀌어서 시간을 더 아낄 수 있었습니다.

예외적인 상황도 기능목록에 작성하여 유효성 검사 기능을 구현할 때 훨씬 구현하기 편리했습니다. 특히 공통적인 예외상을 한눈에 파악할 수 있어서 대략적인 설계를 머릿속에 그릴 수 있었습니다.
또한 중간 중간 추가되는 예외상황을 추가하면 기능을 구현하였습니다

ex)

### 기능 설계

- 1. 로또 구입금액을 입력 받는다.

  - [x] 로또 구입금액을 입력 받는다.
  - [x] [예외] 공백일 때 예외를 발생시킨다. (에러를 발생하고 에러 메시지를 출력한 뒤 해당 부분부터 다시 입력!)

- 2. 유저에게 구입한 로또 개수 만큼 로또 번호들을 보여준다.

  - [x] 로또 구입 금액을 유효성 체크 한다. (1,000원 단위)
    - [x] [예외] 숫자 외의 문자가 포함될 때
    - [x] [예외] 1000으로 나누어 떨어지지 않는 경우
    - [x] [예외] 최대 구매 금액 100,000원이 넘으면 예외를 발생시킨다. (스스로 결정)
  - [x] 로또 생성기를 구현한다.
  - [x] 구입한 금액 만큼 로또를 발행한다. (오름차순으로)
  - [x] 발행된 로또 데이터를 저장한다.
  - [x] 발행된 로또를 유저에게 보여준다.

## 3. 기능 목록을 업데이트 한다.

1차 구현을 하면서 기능 목록 대로 커밋을 하기 힘들다 생각하여 2차 구현하기 전에 기능 목록을 전체적으로 변경 및 업데이트하였습니다. 또한 구현하다 놓친 부분들은 변경및 삭제를 하며 구현했습니다.

## 4. 값을 하드 코딩 하지 않는다.

초기 구현하면서 하드코딩된 부분들은 상수처리 하였습니다.

```js
export const PURCHASE_AMOUNT = Object.freeze({
  divisor: 1_000,
  max: 100_000,
});

export const LOTTO = Object.freeze({
  delimiter: ',',
  numberRangeStart: 1,
  numberRangeEnd: 45,
  numberCount: 6,
  price: 1000,
  rank: Object.freeze({
    6: '1등',
    bonus: '2등',
    5: '3등',
    4: '4등',
    3: '5등',
    undefined: '꽝',
  }),
});

export const LOTTO_PROCESS = Object.freeze({
  bonus: 'bonus',
  winning: 'winning',
});
```

## 5. 구현 순서도 코딩 컨벤션이다.

지난 미션에서 신경쓰지 않은 구현 순서를 고려하여 구현하였습니다.  
클래스를 필드, 생성자, 메서드 순으로 작성하였습니다.

```js
class Lotto {
  /**
   * @private
   * @type {number[]}
   */
  #numbers;

  /**
   * @param {string} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = Lotto.convertNumber(numbers);
  }
  ...
```

## 6. 한 함수가 한 가지 기능만 담당하게 한다.

로또를 생성하는 메서드 오름차순으로 정렬하는 메서드 각각 한 가지 기능만 담당하도록 구현하였습니다.

```js
const LottoGenerator = {
  run(count) {
    return this.sortAscending(this.generate(count));
  },

  generate(count) {
    return Array.from({ length: count }, () =>
      Random.pickUniqueNumbersInRange(
        LOTTO.numberRangeStart,
        LOTTO.numberRangeEnd,
        LOTTO.numberCount,
      ),
    );
  },

  sortAscending(lottos) {
    return lottos.map((lotto) => lotto.sort((a, b) => a - b));
  },
};
```

## 7. 함수가 한 가지 기능을 하는지 확인하는 기준을 세운다.

`eslint`의 ` 'max-lines-per-function': ['error', 15]` 규칙을 사용하여 함수의 길이가 15라인을 넘지 않도록 의식하면서 구현하였고 만약 15줄이 넘을 때는 함수를 분리하였습니다.

### 1) 15줄 이하로 작성

15줄 이하로 작성하기 제일 쉬운 방법은 함수를 분리하는 것 입니다.  
실제로 `getWinningStatistics`메서드를 처음 구현할 때는 15줄이 훨씬 넘었고 매우 가독성이 떨어졌지만 아래처럼 한 가지 기능만 담당하도록 분리하고 또 분리하여 구현했습니다.

```js


  getWinningStatistics(winningNumbers, bonus) {
    const lottoResult = this.#checkLottoResult(winningNumbers, bonus);
    const ranks = LottoModel.#calculateRanks(lottoResult);
    const rateOfReturn = this.#calculateRateOfReturn(ranks);

    return { ranks, rateOfReturn };
  }

  #checkLottoResult(winningNumbers, bonus) {
    return this.#userLottos.map((userLotto) =>
      winningNumbers.compareWinningNumbers(userLotto, bonus.getBonusNumber()),
    );
  }

  static #calculateRanks(lottoResult) {
    return lottoResult.reduce((acc, cur) => {
      acc.set(cur, (acc.get(cur) || 0) + 1);

      return acc;
    }, new Map());
  }

  #calculateRateOfReturn(ranks) {
    const totalPrizeMoney = LottoModel.#calculateTotalPrizeMoney(ranks);

    return (totalPrizeMoney / (this.#userLottos.length * LOTTO.price)) * 100;
  }

  static #calculateTotalPrizeMoney(ranks) {
    let totalPrizeMoney = 0;

    ranks.forEach((count, rank) => {
      totalPrizeMoney += LottoModel.LOTTO_PRIZE[rank] * count;
    });

    return totalPrizeMoney;
  }
```

### 2) 중복되어 사용되는 코드

`catch` 아랫 부분이 중복되는 코드로 사용되어 `onError`라는 메서드로 분리하여 공통적으로 사용하였습니다.

```js
async #purchaseLotto() {
    try {
      const purchaseAmount = await InputView.readPurchaseAmount();
      const userLottos = this.#model.generateLotto(purchaseAmount);

      return userLottos;
    } catch ({ message }) {
      return this.#onError(message);
    }
  }
async #getWinningNumbers() {
    try {
      const winningNumbers = await InputView.readWinningNumbers();

      return Lotto.of(Converter.split(winningNumbers, LOTTO.delimiter));
    } catch ({ message }) {
      return this.#onError(message, LOTTO_PROCESS.winning);
    }
  }

  async #getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await InputView.readBonusNumber();

      return Bonus.of(bonusNumber, winningNumbers);
    } catch ({ message }) {
      return this.#onError(message, LOTTO_PROCESS.bonus, winningNumbers);
    }
  }
```

## 8. 테스트를 작성하는 이유에 대해 본인의 경험을 토대로 정리해 본다.

해당 내용은 [consider.md](./consider.md)에 기록되어 있습니다.

## 9. 처음부터 큰 단위의 테스트를 만들지 않는다.

기능을 구현할 때 작은 단위 테스트 먼저 구현을 하면 빠른 피드백을 받을 수 있게 때문에 더 쉽습니다.

> 작은 단위테스트

```js
import isNumber from './index.js';

describe('isNumber', () => {
  test.each([
    ['로또안삼', false],
    ['오000', false],
    ['%000', false],
  ])('숫자가 아닌 문자가 포함되어있으면 false를 리턴한다.', (input, expected) => {
    expect(isNumber(input)).toBe(expected);
  });

  test('숫자만 있는 문자열이면 true를 리턴한다. ', () => {
    // given
    const input = '5000';

    // when
    // then
    expect(isNumber(input)).toBe(true);
  });
});
```

> 큰 단위 테스트

```js
import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 문자가 존재하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, '얍']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1~45사이의 숫자가 존재하면 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 49, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2.2, 3, 4, 49, 6]);
    }).toThrow('[ERROR]');
  });

  describe.each([
    // winningNumbers, bonus, userLotto, matchCount, expectedRank]
    [[1, 2, 3, 4, 5, 7], 6, [1, 2, 3, 4, 5, 6], 5 + 1, '2등'],
    [[1, 2, 3, 4, 5, 6], 7, [1, 2, 3, 4, 5, 6], 6, '1등'],
    [[1, 2, 3, 4, 5, 6], 9, [1, 2, 3, 4, 5, 8], 5, '3등'],
    [[1, 2, 3, 4, 5, 6], 10, [1, 2, 3, 4, 8, 9], 4, '4등'],
    [[1, 2, 3, 4, 5, 6], 10, [1, 2, 3, 11, 18, 19], 3, '5등'],
  ])(
    'Lotto 클래스의 compareWinningNumbers 메서드',
    (winningNumbers, bonus, userLotto, matchCount, expectedRank) => {
      it(`${matchCount}개가 일치하면 ${expectedRank}을 반환해야 합니다`, () => {
        const lotto = Lotto.of(winningNumbers);
        const result = lotto.compareWinningNumbers(userLotto, bonus);
        expect(result).toBe(expectedRank);
      });
    },
  );

  describe('convertNumber', () => {
    test('배열을 안에 있는 string을 number로 바꿔줘야합니다. ', () => {
      // given
      const input = ['1', '2', '3', '4', '5', '6'];

      // when
      // then
      expect(Lotto.convertNumber(input)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
```
