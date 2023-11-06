# 로또

## 구현할 기능 목록

- 구매한 로또의 갯수와 로또 번호를 저장하고 처리하는 LottoData 클래스
  - [x] inputPurchaseAmount : 구입 금액 입력
    - [x] isValidPurchaseAmount : 1000원 단위의 양수가 아닌 경우 예외처리, 에러 메시지 출력하고 다시 입력받도록
  - [x] pickRandomLotto : 로또 번호 생성 후 정렬
  - [x] iterRandomLottoAndSave: 구매한 개수에 맞게 로또 번호 뽑고 저장
  - [x] getLottoData : 로또 배열 반환
  - [x] getLottoPurchaseAmount : 로또 구입 금액 반환
  - [x] printLottoData : 로또 배열 출력
  - [x] printLottoCount : 로또 횟수 출력
- 당첨 번호와 보너스 번호를 입력받고 저장하는 WinNumber 클래스
  - [x] inputWinNumber : 당첨 번호 입력
    - [x] isValidLottoNumber : 1-45 사이의 중복되지 않은 정수 6개가 아닌 경우 예외처리, 에러 메시지 출력하고 다시 입력받도록
  - [x] inputBonusNumber : 보너스 번호 입력
    - [x] isValidBonusNumber : 1-45 사이의 로또 번호와 중복되지 않은 정수가 아닌 경우 예외처리, 에러 메시지 출력하고 다시 입력받도록
  - [x] getWinNumber : 당첨 번호 반환
  - [x] getBonusNumber : 보너스 번호 반환
- 상수들을 저장하는 Constant 클래스
  - [x] INPUT : 입력 메시지
  - [x] OUTPUT : 출력 메시지
  - [x] OPTION : 로또 번호의 범위, 개수 등
  - [x] ERROR : 에러 메시지
  - [x] MATCH : 맞춘 로또 번호
- 로또 번호를 비교하는 Lotto 클래스
  - [x] checkLottoNumbers : 당첨 번호, 보너스 번호와 뽑은 로또 번호를 비교하여 몇 개의 번호를 맞췄는지 반환
  - [x] validate : 1-45 사이의 중복되지 않은 정수 6개가 아닌 경우 예외처리, error throw
- 결과를 저장하고 출력하는 Result 클래스
  - [x] printStaticsMessage : 당첨 통계 메시지 출력
  - [x] countMatchingNumbers : 일치하는 로또의 개수 계산
  - [x] printResult : 일치하는 로또 결과 출력
  - [x] getWinningAmount : 당첨 금액 계산
  - [x] printRateOfReturn : 수익률 출력
- 예외를 처리하는 Validation 클래스
  - [x] isValidPurchaseAmount
  - [x] isValidLottoNumber
  - [x] isValidBonusNumber
- 로또를 실행하는 App 클래스

## 구현 과정

```
구입금액을 입력해 주세요.
8000
```

- LottoData 클래스의 inputPurchaseAmount 함수로 구입 금액을 입력받습니다.

```
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]
```

- LottoData 클래스의 pickRandomLotto, iterRandomLottoAndSave 함수로 무작위로 로또를 뽑고 저장합니다. 이후 printLottoCount 함수로 몇 장을 구매했는지 출력한 뒤 printLottoData 함수로 각각의 로또를 출력합니다.

```
당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7
```

- WinNumber 클래스의 inputWinNumber, inputBonusNumber 함수로 당첨 번호를 입력해 저장합니다.

```
당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

- Lotto 클래스의 checkLottoNumbers 함수로 무작위로 뽑은 로또 번호와 당첨 번호를 비교하고 Result 클래스에 당첨 결과를 저장합니다. 이후 Result클래스의 printResult 함수 및 printRateOfReturn 함수로 결과 및 수익률을 출력합니다.

## 추가로 고려할 사항

- [x] 클래스(객체)를 분리하는 연습
- [x] 도메인 로직에 대한 단위테스트 작성하는 연습
- [x] 값을 하드코딩 하지 않고 상수 쓰기
- [x] 변수, 함수명 명확하게
- [x] for 대신 forEach 사용하기
- [x] README.md 상세히 작성
- [x] 구현해야 할 기능과 예외적인 상황 기능 목록에 정리하고 기능 목록 업데이트하기
- [x] 구현 순서 신경쓰기
- [x] 한 함수가 한가지 기능만 담당하도록
- [x] 객체를 만드는 다양한 방법 이해하고 사용하기
- [x] 테스트를 작성하는 이유에 대해 경험을 토대로 정리
- [x] 테스트는 작은 단위부터

## 2주차 코드리뷰에서 받은 피드백

- [x] 상수의 객체명을 파스칼케이스로, key명을 소문자 스네이크케이스로
- [x] 상수를 각각 export
- [x] 고차함수 사용
- [x] 인덱스로 참조하지 않고 각자 멤버변수로 관리하거나 key를 통해 참조
- [x] 예외처리 더 생각해보기 (입력값이 소수인 경우 등등..)

## 테스트를 작성하는 이유에 대해 경험을 토대로 정리

이전에는 사실 테스트코드를 굳이 작성해야 하는 이유를 느끼지 못했다. 따로 테스트코드를 작성하지 않고 직접 출력해보면 충분히 알 수 있는것 아닌가 하는 생각이 있어서 테스트코드를 따로 시간투자를 해서 작성해야 하나 싶었다.
그러나 이번 주차에서 왜 테스트를 작성해야 하는지에 대해 많이 느꼈다.

먼저,

```javascript
test("예외 테스트", async () => {
  await runException("1000j");
});
```

위의 코드에서 1000j를 발생시켰을 때 예외 메세지를 출력하고 다시 입력받아야 했는데 요구사항을 제대로 읽어보지 않고 내 코드에서 에러를 throw 해서 종료시켰다. 왜 제대로 에러를 throw하는데 테스트는 못통과하지? 하면서 시간을 많이 쓰다가 테스트코드를 뜯어보니까 에러 메세지를 출력하는 것을 깨닫고 요구사항을 다시 읽어보고 수정 할 수 있었다.

그리고,

```javascript
printLottoData(lottoData) {
    Console.print(`[${lottoData.join(", ")}]`);
  }
```

로또 데이터를 출력할 때 string형태가 아닌 배열을 그냥 출력했었는데 이걸 콘솔창에서 확인할 때는 이 둘을 구분할 수 없어서 이 부분도 applicationTest를 했을 때 왜 맞는데 테스트는 통과하지 못하지? 했는데 이부분도 역시 테스트코드를 뜯어보니까 배열 형태를 출력하는게 아닌 문자열 형태로 출력한다는 것을 깨닫고 배열을 문자열 형태로 변환해서 출력하는 함수를 추가해서 수정 할 수 있었다.

또한,

```javascript
test.each([
  [[1, 2, 3, 4, 5, 6, 7]],
  [1, 2, 3, 4, 5, 46],
  [1, 2, 3, 4, 5, 5],
  [1, 2, 3, 4, 5, -6],
  [1, 2, 3, 4, 5, 6.5],
  [1, 2, 3, 4, 5, 0],
])("isValidLottoNumber 함수", async (inputs) => {
  await expect(() => Validation.isValidLottoNumber(inputs)).toThrow();
});
```

위의 코드와 같은 테스트 코드를 작성하면서 놓치고있던 예외 케이스들에 대해서도 생각해 볼 수 있었다.

마지막으로, 그냥 생각없이 사용했던 부분들. string 클래스의 split, substring과 같은 메소드들이 다양한 상황에서 어떻게 작동하는지에 대해 학습 테스트를 통해 파악 할 수 있었다.
