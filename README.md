# 미션 - 로또

[우테코 6기 3주차 미션 저장소 바로가기](https://github.com/woowacourse-precourse/javascript-lotto-6)

## 소개

로또과제에 필요한 [기능](https://github.com/BadaHertz52/javascript-lotto-6/blob/badahertz52/docs/README.md)들을 세부적을 나누어 클래스를 생성하고, 이를 App에서 다시 로또의 진행과정인 "구입", "당첨 번호 뽑기", "당첨 여부 확인", "당첨 결과 출력"으로 묶어서 메서드를 만든 후, App의 play 메서드에서 실행하도록 해 과제를 구현했습니다.

<details>
<summary> 🗂️ 파일 구조 보기</summary>
<div markdown="1">

```
📦src
 ┣ 📂constant
 ┃ ┣ 📜index.js
 ┃ ┣ 📜Message.js
 ┃ ┗ 📜Rule.js
 ┣ 📂utils
 ┃ ┣ 📜index.js
 ┃ ┣ 📜Input.js
 ┃ ┣ 📜MessageFactory.js
 ┃ ┣ 📜Money.js
 ┃ ┣ 📜RandomNumbers.js
 ┃ ┣ 📜Sort.js
 ┃ ┣ 📜Validate.js
 ┃ ┗ 📜WinningResult.js
 ┣ 📜App.js
 ┣ 📜BonusBall.js
 ┣ 📜Calculator.js
 ┣ 📜Cashier.js
 ┣ 📜Checker.js
 ┣ 📜DrawingMachine.js
 ┣ 📜index.js
 ┣ 📜Lotto.js
 ┣ 📜Statistic.js
 ┗ 📜User.js
```

</div>
</details>

| 클래스         | 소개                                                                                                                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| App            | <ul><li>로또 구입당첨 번호 뽑기</li> <li>당첨 여부 검사</li> <li>결과 출력</li> <li>로또 진행</li> </ul>                                                                                      |
| BonusBall      | <ul><li>보너스 번호에 대한 유효성 검사</li> <li>보너스 번호 반환</li></ul>                                                                                                                    |
| Calculator     | <ul><li>로또 당첨 결고에 따른 수익률 계산</li></ul>                                                                                                                                           |
| Cashier        | <ul><li>구매 금액에 대한 유효성 검사 진행</li><li>구매 금액에 따른 로또 발행</li></ul>                                                                                                        |
| Checker        | <ul><li>사용자가 구매한 로또들과 당첨 번호들 비교</li> <li>당첨 결과 반환</li></ul>                                                                                                           |
| DrawingMachine | <ul><li>당첨 번호와 보너스 번호 입력값 받기</li> <li>당첨 번호와 보너스 번호에 대한 유효성 검사</li> <li>당첨 번호와 보너스 번호를 당첨 로또와 보너스 볼 형태로 변환 후 이들을 반환</li></ul> |
| Lotto          | <ul><li>로또 번호에 대한 유효성 검사</li> <li>로또 번호 반환</li></ul>                                                                                                                        |
| Printer        | <ul><li>당첨 결과를 통계 형식에 따라 화면에 출력</li></ul>                                                                                                                                    |
| User           | <ul><li>로또 구매 금액 입력값을 가져와 반환</li> <li>발행된 로또들 저장 및 화면 출력</li></ul>                                                                                                |

## 설치 및 테스트

#### 설치

```bash
npm i
```

#### 테스트

```bash
npm run test
```

## 공부

### throw 후 다시 진행하기

이번 과제 미션 중 사용자 입력값에 오류가 있을 경우, throw로 오류를 발생시킨 후에 관련 오류를 출력하고 오류가 일어난 부분을 다시 실행시키는 것이 있습니다.
이를 구현하기 위해 사용한 방법은 반복문과 try catch 조합이다.

```js
const getValue = () => {
  let done = false;
  while (!done) {
    try {
      // 입력값 가져오기
      // 입력값에 대한 유효성 검사
      // 입력값 검사 실패시 throw Error
      done = true;
    } catch (e) {
      done = false;
      //오류 메세지 출력
    }
  }
};
```

try cath는 try문 안의 코드를 실행 시키다가 오류가 발생하면 catch 문이 실행되기때문에 이를 이용하면 오류가 발생하면 throw문으로 오류를 던지고 난후에 오류 메세지를 출력할 수 있고,
반복문을 통해 입력값에 오류가 없을 때 까지 입력값을 다시 받을 수 있습니다.

### beforeEach를 활용해 반복되는 코드 줄이기

코드 리뷰를 통해서 클래스를 호출하는 반복적인 테스트 코드들을 "beforeEach"를 활용해 간결하게 작성하는 법을 알게 되었습니다.

```js
describe('App 테스트', () => {
  let app;
  beforeEach(() => {
    app = new App();
  });

  test('play 테스트', async () => {
    //...
    await app.play();
  });
});
```

### 비동기 테스트 코드

단위 테스트를 짜면서 배운 jest의 비동기 테스트 코드를 다음과 같습니다.

```js
test('비동기 테스트1', async () => {
  //....
  await expect(비동기()).reject.toThrow();
});

test('비동기 테스트2', async () => {
  //....
  const value = await getValue();
  expect(value).toBe('');
});

test('비동기 테스트3', () => {
  //....
  testArray.forEach(async () => {
    await expect(비동기()).resolves.toBe('');
  });
});
```

## Prettier와 함수(매서드)길이

Prettier에서 "max-lines-per-function"를 이용해 함수의 최대 길이를 제한 할 수 있습니다.

```
"max-lines-per-function": ["error", { "max": 15 }]
```

## 도메인 로직이란?

도메인 로직에 대해 공부한 후 정리한 제가 생각하는 도메인 로직이란 "코드로 구현하고자 하는 핵심 기능을 이루는 단계/의사결정" 입니다. 그외의 메세지를 출력,입력하는 것들은 애플리케이션 로직입니다.

제가 생각한 로또 과제에서의 도메인 로직은 다음과 같습니다.

- 사용자가 입력한 구매 금액을 로또를 구별할 수 있는 지 판단
- 사용자가 입력한 구매 금액에 따라 로또들을 생성
- 사용자가 입력한 당첨 로또 번호, 보너스 번호가 유효한 지 판단
- 사용자 로또들의 당첨 여부와 수익률을 계산

---

#### 참고 자료

[비즈니스 로직, 도메인 로직이 도대체 뭐지?](https://velog.io/@eddy_song/domain-logic)
