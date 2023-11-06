# 고려사항 및 이슈

## 1. 테스트 코드 덕분에 빠르게 실수 찾기

(주의 : 1차 구현은 쓰레기라도 동작하게 만드는게 우선이라 리팩터링 되지 않은 부분이 많습니다.)

테스트를 하는데 계속 특정한 곳에서 에러가 발생하였습니다.
바로 `validate`의 `numbers.every(isNumberInValidScope)` 이 부분입니다.

`isNumberInValidScope` 함수는 인수로 들어오는 값이 특정 범위내에 있는 숫자인지 유효성을 검사하는 역할을 합니다. 그런데 확장성을 위해 범위의 시작점과 끝점도 매개변수로 설정해 놓았습니다.

하지만 놓친게 하나 있습니다.

```js
export default function isNumberInValidScope(input, start = 1, end = 45) {
  return input >= start && input <= end;
}
```

위 위코드는 `isNumberInValidScope`의 코드인데 매개변수가 3개입니다.
즉 범위가 바뀌면 인수로 넣어주는 `start`와 `end`의 값을 변경해주면 됩니다. (지금은 일단 디폴트 값으로 해놓았습니다. 2차 구현때 인수로 직접 넣어줄 예정)
하지만 여기서 놓친게 있습니다. 바로 `every` `함수는 callbackFn`을 첫 번째 인수로 받는데 그 `callbackFn`은 [3개의 인수를 받습니다.](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

- element : 배열에서 처리되는 현재 요소
- index : 처리되는 현재 요소의 인덱스
- array : every()를 호출한 배열

따라서 3개의 인수를 받는 `isNumberInValidScope`는 만약 예시로 `numbers`가 `[1,2,3,4,5,6]`이라면 첫 번째 인수는 `1`이 되고 두 번째 인수는 `0`이되고 세 번째 인수는 `[1,2,3,4,5,6]`이 되어서 제가 의도한 대로 동작하지 않게 됩니다. 이 부분을 테스트 코드를 만들고 테스트 할 때 발견되었고 다행히 고칠 수 있게 되었습니다. 그래서 현재는 `numbers.every((number)  => isNumberInValidScope(number))`로 수정되어 있습니다.

기능을 구현하면서 놓쳤던 부분이고 테스트 코드가 아니였다면 정말 시간을 오래사용해서 발견했을 것 같습니다.
조금 시간이 더 걸려도 테스트 코드가 꼭 필요하다는 걸 다시 한 번 느꼈습니다.

```js
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  #validate(numbers) {
    if (!numbers.every(isNumber)) throw new Error('[ERROR] 숫자이외의 문자가 존재합니다.');
    if (isDuplication(numbers)) throw new Error('[ERROR] 중복되는 숫자가 존재합니다.');
    if (!numbers.every(isNumberInValidScope)) {
      throw new Error('[ERROR] 숫자 1~45 만 입력이 가능합니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static of(numbers) {
    return new Lotto(numbers);
  }

  checkUniqueNumber(number) {
    if (this.#numbers.includes(number)) {
      throw new Error(`[ERROR] ${number}는 당첨 번호에 이미 포함되어 있습니다.`);
    }
  }
}

export default Lotto;
```

## 2 유효성 확인 위치 변경

이번 미션에는 `Lotto` 클래스를 사용해야된다는 조건이 추가 되었습니다.

```js
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
}
```

이 코드를 보면 유효성 검사가 포함되어있고 필드도 더 이상 추가되지 않았습니다. 물론 `validate`를 삭제하지 말라는 조건은 없었지만 최대한 활용하고 싶었습니다.  
따라서 기존 view에서 하던 유효성 검사를 간단한 빈문자열 검사만 `view`에서 하고 나머지를 모두 model에서 하기로 마음먹었습니다. 유효성 검사를 어디서할지는 토론에서도 주제로나올만큼 분분합니다.  
저는 `view`가 올바른 값을 가져오는 것 까지가 `view`의 책임이라 생각하고 올바르지 않은 값을 `controller` or `model`로 가지고 갈 필요가 없다고 생각하지만 무조건 `view`에서 해야한다는 고정관념은 없기 때문에 이번에는 `model`에서 유효성 검사를 하기로 하였습니다. `view`가 아니면 데이터를 가지고 있는 `model`에서 항상 무결성을 유지하는 게 가장 좋다고 생각했습니다.([Reference](https://stackoverflow.com/questions/5305854/best-place-for-validation-in-model-view-controller-model))

> 이전 미션 코드
> InputView.js

```js
const InputView = {
  /**
   * @param {string} vehicle
   * @returns {string}
   */
  async readRacingVehicleName(vehicle) {
    const racingVehicleName = await Console.readLineAsync(INPUT_MESSAGE_FUNCTION.name(vehicle));
    Validators.checkRacingVehicleName(racingVehicleName);
    return racingVehicleName;
  },
  ...
}
```

> 이번 미션 코드
> InputView.js

```js
import { Console } from '@woowacourse/mission-utils';
import InputMessage from '../message/Input.js';
import { validateEmptyString } from '../utils/validators/index.js';

const InputView = {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(InputMessage.PurchaseAmount);

    validateEmptyString(purchaseAmount);

    return purchaseAmount;
  },
  ...
}
```

> Lotto.js (1차 구현)

```js
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  #validate(numbers) {
    if (!numbers.every(isNumber)) throw new Error('[ERROR] 숫자이외의 문자가 존재합니다.');
    if (isDuplication(numbers)) throw new Error('[ERROR] 중복되는 숫자가 존재합니다.');
    if (!numbers.every((number) => isNumberInValidScope(number))) {
      throw new Error('[ERROR] 숫자 1~45 만 입력이 가능합니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
  ....
}
```

## 3. 한 번에 한 가지 일만 하도록

> RacingController

```js
#raceAndPrintProgress(racingCount) {
    OutputView.printProgress();
    for (let count = 1; count <= racingCount; count += 1) {
      this.#racingModel.race();
      OutputView.printRacingResult(this.#racingModel.getData());
    }
  }
```

이 코드는 저번미션 최악의 코드 1위입니다.  
이 메서드는 결과물을 출력도하고 레이싱을 진행하기도 합니다.  
즉 결과를 계산 메서드와 출력하는 메서드는 따로 분리가 되어야 하는데 그렇게 하지 못 했습니다.

```js
  getResult(winning, bonus) {
    return this.#userLottos.map((userLotto) =>
      winning.calculateResult(userLotto, bonus.getBonusNumber()),
    );
  }
```

해서 이번에는 결과물을 계산하는 메서드와 출력하는 메서드를 따로 분리하여 하나의 메서드가 한 가지일만 하도록 하였습니다.

## 4. 최상위 추상층은 최대한 흐름을 이해하기 쉽게

> LottoController.js (1차))

```js
  async startGame() {
    const userLottos = await this.#purchaseLotto();

    OutputView.printUserLottos(userLottos);

    const { winningNumbers, bonusNumber } = await this.#drawLottery();
    const winningResult = this.#lottoModel.getResult(winningNumbers, bonusNumber);

    OutputView.printResult(this.#lottoModel.calculateResult(winningResult));
  }
```

최상위 추상층이기 때문에 이 부분만 보고 로또 게임의 전체 흐름을 알수 있도록 코드를 작성하였습니다.  
현재 1차구현이기 때문에 아직 메서드 명이랑 변수명이 확정되지 않아 미흡하지만 winningResult는 불필요한 로컬변수인 것 같아서 2차 구현에서는 이 부분을 제거한다면 조금 더 좋을 것 같습니다.  
따라서 `model`에 `winningNumbers`와 `bonusNumber`을 전달해주면 바로 결과값이 나오도록 구현해야할 것 같습니다.
