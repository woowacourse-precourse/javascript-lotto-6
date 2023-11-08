# 🛠️ 이번 주 미션에서 개선해야 할 점

2주차 미션이 끝나고 코드 리뷰를 하고 피드백 받은 내용을 공부 및 회고와 다른 분들 코드 리뷰를 보면서 이번 미션에서 적용 및 개선해야할 점을 정리해보았습니다.

## 📌 2주 차 공통 피드백 기반

1. [기능 목록 작성법 수정](#1-기능-목록-작성법-수정)
2. [구현 순서 잘 지키기](#2-구현-순서-잘-지키기)
3. [한 함수가 한 가지 기능만 담당하게 하기](#3-한-함수가-한-가지-기능만-담당하게-하기)
4. [테스트를 작성하는 이유에 대해 본인의 경험을 토대로 정리](#4-테스트를-작성하는-이유에-대해-본인의-경험을-토대로-정리)

## 📌 1주 차 공통 피드백 기반

5. [커밋 메시지를 의미 있게 작성하기](#5-커밋-메시지를-의미-있게-작성하기)
6. [공백도 코딩 컨벤션으로 취급하기](#6-공백도-코딩-컨벤션으로-취급하기)

## 📌 코드 리뷰 및 회고 기반

7. [test.each 가독성 개선](#7-test.each-가독성-개선)
8. [메서드와 상수 분리](#8-메서드와-상수-분리)
9. [소수점 체크](#9-소수점-체크)
10. [극단적으로 연습](#10-극단적으로-연습)
11. [의존 관계 주입 더 연습](#11-의존-관계-주입-더-연습)

<br>

## 1. 기능 목록 작성법 수정

공통 피드백에서는 기능 목록을 너무 상세하게 작성하지 않는 것을 추천한다.
why? 변경될 수도 있기 때문이다.  
아래는 저번주 나의 기능 목록이다.
구현 단계에서 요약문 처럼 전체 로직을 파악하고 설계 부분에서 자세히 볼 수 있다.
여기에 예외적인 상황이 없는데 이 부분을 추가해주면 좋을 것 같다.

<details>
<summary>접기/펼치기 버튼</summary>
<div markdown="1">

### 2차 구현

- [x] 1. 경주할 자동차 이름을 입력 받는다.
- [x] 2. 차수를 시도할 횟수를 입력 받는다.
- [x] 3. 입력한 횟수 만큼 go or stop을 한다.
- [x] 4. 최종 우승자를 출력한다.

### 2차 설계

1. 경주할 자동차 이름을 입력 받는다.

   - [x] InputView 입력 받기
   - [x] Input에서 validator 체크
     - [x] 이름은 쉼표 기준으로 구분 (구분점 바뀔 수 있으니 상수로)
     - [x] 자동차 이름 2자 이상 5자 이하 (최소 글자 길이는 정해진게 없기 때문에 2자로 [스스로 결정])
     - [x] 자동차 최소 2대 이상부터 6대까지 (기록 레이싱이아닌 상대적 경쟁이기에 최소 2명이상 부터 [스스로 결정])
     - [x] 자동차 이름에 사용할 수 있는 문자 한국어와 영어만 허용 (대신 나중에 언어를 확장할 수 있도록 구현하기[스스로 결정])
     - [x] 자동차 이름을 중복으로 명명할 수 없다. ( 보통 닉네임은 중복허용하지 않음 [스스로 결정])

2. 시도할 횟수를 입력받는다.

   - [x] InputView 입력 받기
   - [x] Input에서 validator 체크
     - [x] 횟수 1~9회 제한 (제한이 정해지지 않았기 때문에 스스로 결정, 무한으로 할 수 없기 때문에) (언제든 변경하기 쉽도록)

3. 입력한 횟수 만큼 자동차 경주를 한다.
   - [x] '실행 결과' 메시지 출력
   - [x] 1. 랜덤한 숫자를 생성한다. (특정 숫자 이상이면 전진을 하기 위해)
   - [x] 2. 특정 숫자가 넘으면 차를 한 칸 앞으로 전진시킨다.
   - [x] 3. 한 경기가 끝날 때마다 결과를 출력한다.
   - [x] 입력 횟수 만큼 1~3를 반복한다.
4. 최종 우승자를 출력한다.
   - [x] 최종 우승자를 가려내다.
   - [x] 최종 우승자를 출력하다.

### 테스트

1. 경주할 자동차 이름을 입력 받는다.

   - [x] InputView에서 validator 체크
     - [x] 쉼표 기준으로 구분되는지
     - [x] 자동차 이름이 2자 이상 5자 이하인지
     - [x] 자동차 최소 2대 이상부터 6대 이하
     - [x] 자동차 이름에 한국어와 영어만 허용
     - [x] 자동차 이름 중복 확인

2. 시도할 횟수를 입력받는다.

   - [x] InputView에서 validator 체크
     - [x] 횟수 1~9회 인지 확인

3. 입력한 횟수 만큼 go or stop를 한다.

   - [x] 의도한 범위내에서 숫자가 생성되는지 확인
   - [x] 특정 숫자가 넘으면 차를 한 칸 앞으로 전진되는지 확인

4. 최종 우승자를 출력한다.
   - [x] 의도한대로 최종 우승자를 잘가려내는지 확인

### 유효성 검사

1. 경주할 자동차 이름을 입력 받는다.
   - [x] 구분자가 있는지 확인
   - [x] 자동차 이름 n자 이상 m 이하인지 확인
   - [x] 한글과 영어만 포함이 되어있는지
   - [x] n대 이상 부터 m대 이하인지
   - [x] 중복되는 이름이 존재하는지
2. 시도할 횟수를 입력받는다.
   - [x] 숫자 범위에 해당되는지 확인

</div>
</details>

<br>

## 2. 구현 순서 잘 지키기

이전 미션에서 아래 코드 처럼 구현해서 리뷰를 받은적이 있습니다.  
이번 미션부터는 반드시 필드, 생성자, 메서드 순서로 작성할 것을 기억해야합니다.

```js
class Car {
  /**
   * @type {Map}
   * @private
   */
  #carData;

  constructor() {
    this.#carData = new Map();
  }

  /** @type {string} */
  static blank = '';

  /**
```

<br>

## 3. 한 함수가 한 가지 기능만 담당하게 하기

이전에 미션을 하면서 제일 마음에 들지 않았던 코드입니다.
그 당시에는 어떻게든 분리하려고 했지만 생각해내지 못해서 이렇게 작성했던 기억이 있습니다.

```js
 #raceAndPrintProgress(racingCount) {
    OutputView.printProgress();
    for (let count = 1; count <= racingCount; count += 1) {
      this.#racingModel.race();
      OutputView.printRacingResult(this.#racingModel.getData());
    }
```

다행히도 코드리뷰 받을 때 진영님이 좋을 솔루션을 주셔서 아래처럼 구현해볼 수 있었습니다.
매번 데이터를 받아서 프린트하는 것보다는 이렇게 데이터를 모아서 한 번에 한 다면 UI와 비즈니스 로직을 나누어서 훨씬 효과적으로 코드를 작성할 수 있고 함수가 한 가지 일만 한다는 규칙을 더 잘 지킬 수 있다고 생각합니다.

```js
#raceProgress(racingCount) {
    return Array.from({ length: racingCount }).forEach(() => this.#racingModel.race());
}

#printResult(result) {
    OutputView.printProgress();
    OutputView.printRacingResult(result);
}
```

추가적으로 설계할 당시에는 데이터를 한 번에 모아서 print하는 것 보다는 바로 print하는게 더 효율적이라고 생각했는데 다른 분들 코드리뷰를 보면 공부하던 중 명확하게 답변을 남겨주신 분이 있어서 링크를 남깁니다.

- https://github.com/woowacourse-precourse/javascript-racingcar-6/pull/283#discussion_r1380468945

<br>

## 4. 테스트를 작성하는 이유에 대해 본인의 경험을 토대로 정리

단지 기능을 점검하기 위한 목적으로 테스트를 작성하는 것은 아니다. 테스트를 작성하는 과정을 통해서 나의 코드에 대해 빠르게 피드백을 받을 수 있을 뿐만 아니라 학습 도구(학습테스트를 통해 JUnit 학습하기.pdf)로도 활용할 수 있다. 이런 경험을 통해 테스트에 대해 어떤 유용함을 느꼈는지 알아본다.

이번주에도 테스트 관련 유용함을 정리해 나가면서 진행하면 될 것 같다.  
추가적으로 3주차 미션 바로 시작 안 하고 다른 분들 코드보고, 다른 분들의 코드 리뷰도 같이 보면서 좋았다고 생각되었던 테스트 코드도 적용해 보면서 느낀점을 남기면 좋을 것 같다.

> 지난 미션에서 테스트에 관련된 글을 아래와 같습니다.

<details>
<summary>접기/펼치기 버튼</summary>
<div markdown="1">

## 7. TDD의 효과

2회차 구현부터는 TDD를 해보고 있습니다.  
물론 처음이라 어려운점도 많고 시간도 오래걸리기는 합니다.
그래도 직접 느껴본 장점 몇 가지가 있습니다.

### 1. 유효성 검사 코드를 만들 때 정말 편리하다

이전에는 유효성 검사 코드를 만들고 직접 코드에 적용하고 node를 통해서 여러가지 값을 넣어보면서 제대로 동작하나 테스트를 했는데 실패하는 테스트 코드를 먼저 만들고 그 테스트를 통과하도록 만드니 코드 기능 테스트도 바로 할 수 있어서 너무 편리했습니다.

### 2. 예상치 못한 버그 잡기

1차 구현할 때는 기능 먼저 구현하고 전체 테스트로 통과하는 거보고 잘 만들어졌구나 판단했는데 이번에 실패하는 테스트 코드 먼저 만들고 성공하도록 테스트를 만드는 과정에서 실수하는 부분을 발견할 수 있었습니다.
즉 이전에 테스트 통과는 운으로 통과했던 것이었습니다.

> 이전 코드 (기능 먼저 구현후 전체 테스트 통과로 정상 동작한다고 판단)
> 첫 레이싱 자동차의 전진 길이가 제일 길때만 정상 동작함

```js
const FinalWinnerSelector = {
  evaluate(data) {
    const winners = [];
    let winnerScore = 0;

    data.forEach((progress, name) => {
      winnerScore = Math.max(winnerScore, progress.length);
      if (winnerScore === progress.length) {
        winners.push(name);
      }
    });

    return winners;
  },
};

export default FinalWinnerSelector;
```

> 현재 코드 (TDD로 실패하는 테스트 코드 만들고 성공하도록 하나하나 만들어감, 오류 발견후 수정)

```js
const FinalWinnerSelector = {
  /**
   * @param {Map} data
   * @returns {string[]}
   */
  evaluate(data) {
    const winners = [];
    const winnerScore = this.getWinnerScore(data);

    data.forEach((progress, name) => {
      if (winnerScore !== progress.length) return;
      winners.push(name);
    });

    return winners;
  },

  /**
   * @param {Map} data
   * @returns {number}
   */
  getWinnerScore(data) {
    let winnerScore = 0;

    data.forEach((progress) => {
      winnerScore = Math.max(winnerScore, progress.length);
    });

    return winnerScore;
  },
};

export default FinalWinnerSelector;
```

TDD가 아직 익숙하지 않아 어렵고 시간이 정말 오래걸리고 잘못 설계하면 갈아 엎는데 엄청난 비용이 들어가지만 그만큼 장점도 존재해서 더 많이 연습을 해야할 것 같습니다.

</div>
</details>

<br>

## 5. 커밋 메시지를 의미 있게 작성한다.

지난 미션에서 커밋을 200개 정도 하면서 많이 연습해보았다.  
<img width="464" alt="image" src="https://github.com/Ryan-Dia/javascript-racingcar-6/assets/76567238/25f20516-d0ed-4636-b12e-28992af1c075">
하지만 그래도 많이 부족한 것 같다. 더 연습해야한다. 코드 리뷰 하면서 다른 분들의 커밋을 보았을 때 훨씬 이해가 쉬웠다.

<img width="645" alt="image" src="https://github.com/Ryan-Dia/javascript-racingcar-6/assets/76567238/50b4bdf6-afe9-40c4-bf50-0f5b1e2b3807">
조금 더 이런식으로 작업한 내용에 대해 이해가 가능하도록 노력해보면 좋을 것 같다.

<br>

## 6. 공백도 코딩 컨벤션이고 공백 라인을 의미 있게 사용한다.

저번 미션 코드에서 공백라인을 신경쓰긴 했지만 모든 곳에는 신경쓰지 못한 것 같아서 아쉽다.  
확실히 이번에 다른 분들 코드리뷰 하면서 공백을 명확히 두면 가독성이 올라간다는 것을 직접느꼈기에 이번 미션에서는 공백도 정말 신경쓰면서 코드를 해야겠다고 느꼈습니다.

> 저번 미션 코드

```js
run() {
    const randomNumber = Random.pickNumberInRange(SYSTEM.randomNumberMin, SYSTEM.randomNumberMax);
    Validators.checkRandomNumber(randomNumber, SYSTEM.randomNumberMin, SYSTEM.randomNumberMax);
    return randomNumber;
 },

saveNames(carNames) {
    const carNamesArray = Converter.splitStringToArrayByDelimiter(carNames, SYSTEM.delimiter);
    carNamesArray.forEach((carName) => {
      this.#carData.set(carName, Car.blank);
    });
}
```

> 위 코드도 아래처럼 공백을 주면 더 가독성이 좋다

```js
run() {
    const randomNumber = Random.pickNumberInRange(SYSTEM.randomNumberMin, SYSTEM.randomNumberMax);

    Validators.checkRandomNumber(randomNumber, SYSTEM.randomNumberMin, SYSTEM.randomNumberMax);

    return randomNumber;
  },

saveNames(carNames) {
    const carNamesArray = Converter.splitStringToArrayByDelimiter(carNames, SYSTEM.delimiter);

    carNamesArray.forEach((carName) => {
      this.#carData.set(carName, Car.blank);
    });
}
```

<br>

## 7. test.each 가독성 개선

이전 미션에서 `test.each`를 아래와 같이 사용하였습니다.

```js
  test.each([
    [1, true],
    [9, true],
  ])('입력값 %s 는 유효한 값이기에 %s 를 return 합니다.', (input, expected) => {
```

그리고 이런 코드리뷰가 달렸습니다.
<img width="680" alt="image" src="https://github.com/Ryan-Dia/javascript-racingcar-6/assets/76567238/771a5c4b-8554-4d72-9e5a-a64a350bc900">

확실히 객체로 작성하면 가독성이 훨씬 좋았고 전달 값도 명확하기 때문에 개선하지 않을 이유가 없었습니다.

<br>

## 8. 메서드와 상수 분리

저는 `constants`폴더에 아래처럼 모두 넣어놓았습니다.

```js
export const OUTPUT_MESSAGE = {
  count: '\n시도할 횟수는 몇 회인가요?\n',
  blink: '',
  progress: '\n실행 결과',
};

export const OUTPUT_MESSAGE_FUNCTION = Object.freeze({
  finalWinner(finalWinner) {
    return `최종 우승자 : ${finalWinner.join(', ')}`;
  },
});

export const ERROR_MESSAGE = Object.freeze({
  prefix: '[ERROR]',
  duplication: '중복되는 이름은 사용할 수 없습니다.',
});

export const ERROR_MESSAGE_FUNCTION = Object.freeze({
  delimiterError(delimiter) {
    return `올바른 구분자가 아닙니다. ${delimiter} 구분자를 사용해 주세요`;
  },
  nameLength(min, max) {
    return `이름의 길이는 ${min}자 ~ ${max}자사이 여야 합니다.`;
  },
  ...
});
```

그런데 다른 분 코드에 달린 리뷰를 보고 다시 생각하게 되었습니다.
<img width="800" alt="image" src="https://github.com/Ryan-Dia/javascript-racingcar-6/assets/76567238/e2af8c93-d725-4a2d-bba2-90b1af8342ea">

실제로 바로 next.js, react, eslint 레포를 찾아봤는데 정말로 상수는 폴더에는 상수만 있고 에러메시지 같은 메시지는 메서드로 관리되고 있었습니다.  
해서 이 분도 바로 이번 미션에 적용하면 좋을 것 같습니다.

- https://github.com/vercel/next.js/blob/canary/packages/next/src/lib/typescript/diagnosticFormatter.ts
- https://github.com/vercel/next.js/blob/canary/packages/next/src/build/webpack/config/blocks/css/messages.ts#L3

<br>

## 9. 소수점 체크

다른 분들 코드보다가 "아 맞다 소수점을 체크 안 했구나" 싶었습니다.  
유효성체크 정말 많이 생각했는데 역시 끝가지 고민해야할 것 같습니다.  
소수점 체크는 `Number.isIntegar`을 사용하는 게 좋습니다.

<br>

## 10. 극단적으로 연습

이번 미션에서 아래의 사항들을 조금 더 연습해보고 개선해보고자 합니다.

- 1 메소드 분리
  - 한 메서드에 오직 한 단계의 들여쓰기만 하기
  - else 예약어를 쓰지 않는다.
  - 메서드가 한 가지 일만 하도록 구현하기
    - 이 부분이 이전 미션에서 몇몇의 메서드들을 줄일 수 없어서 아쉬웠는데 이번에는 최대한 모든 메서드에 적용해보자!
  - 로컬 변수가 꼭 필요한지 확인
  - compose method 패턴 적용
    - 할 수 있는 만큼 적용해보기
- 2 클래스 분리
  - 모든 원시값과 문자열을 포장한다.
  - 3개 이상의 인스턴스 변수를 가진 클래스를 쓰지 않는다.

📌 Reference

- [[OKKYCON: 2018] 박재성 - 의식적인 연습으로 TDD, 리팩토링 연습하기](https://www.youtube.com/watch?v=cVxqrGHxutU&t=1716s)
- [원시 타입을 포장해야 하는 이유](https://tecoble.techcourse.co.kr/post/2020-05-29-wrap-primitive-type/)

<br>

## 11. 의존 관계주입 더 연습해보기

이전 미션에서 처음 적용하다보니 어색 한 부분도 많았고 의존 관계 주입으로 인해 setter, getter도 생겨서 그렇게 잘 적용했다고 생각이 들지 않았다. 그래서 이번에 조금 더 공부해보았는데 해당 내용을 가지고 적용해보고 느낀점도 써보자
특히 setter, getter보다 객체에 메시지를 보내서 구현한는 방법을 조금 더 연구해보자

📌 Reference

- [의존관계 주입 쉽게 이해하기](https://tecoble.techcourse.co.kr/post/2021-04-27-dependency-injection/)
- [getter를 사용하는 대신 객체에 메시지를 보내자](https://tecoble.techcourse.co.kr/post/2020-04-28-ask-instead-of-getter/)
