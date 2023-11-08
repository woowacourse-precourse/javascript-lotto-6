ver 1.0

## 참고

## 해당 프로그램은 함수형인 Functional, MVC 패턴을 적용한 MVC 모듈 두 가지 방식으로 play()를 구현하려 하였음

## 현재는 Functional의 play()만 검증되었음

## coverage
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------|---------|----------|---------|---------|-------------------
All files               |   85.38 |    97.36 |   83.58 |   85.53 |                   
 src                    |     100 |      100 |     100 |     100 |                   
  -App.js               |     100 |      100 |     100 |     100 |                   
  -Lotto.js             |     100 |      100 |     100 |     100 |                   
 src/constants          |     100 |      100 |     100 |     100 |                   
  -CONSTANTS.js         |     100 |      100 |     100 |     100 | 
  -NUMBERS.js           |     100 |      100 |     100 |     100 | 
  -STRINGS.js           |     100 |      100 |     100 |     100 | 
 src/functinoal         |     100 |      100 |     100 |     100 | 
  -Functional.js        |     100 |      100 |     100 |     100 | 
 src/functinoal/modules |   98.01 |    96.42 |   97.43 |    98.9 | 
  -ConvertInputTo.js    |     100 |      100 |     100 |     100 | 
  -ErrorCheck.js        |     100 |      100 |     100 |     100 | 
  -Get.js               |     100 |      100 |     100 |     100 | 
  -Is.js                |   94.11 |    92.85 |     100 |     100 | 7
  -Print.js             |   95.23 |      100 |   91.66 |   95.23 | 75
 src/mvc/model          |      80 |      100 |   66.66 |   78.57 | 
  -LottoModel.js        |      80 |      100 |   66.66 |   78.57 | 33~37,50
 src/mvc/model/utils    |   54.54 |      100 |    62.5 |      60 | 
  -Get.js               |   54.54 |      100 |    62.5 |      60 | 37~40,50
 src/mvc/view           |   21.05 |      100 |   33.33 |   21.05 | 
  -LottoOutputView.js   |   21.05 |      100 |   33.33 |   21.05 | 37~89


# `App`

로또 게임의 전반적인 흐름을 관리하는 함수인 `play()`가 있음

모든 입력 상황에서 잘못된 값을 입력 받으면 다시 입력 받음

Functional과 MVC 모두 다음과 같이 게임이 진행됨


1. 로또 구입 금액을(1000원 단위) 입력 받는다(1000 원에 1장)
2. 구입 금액에 맞게 로또를 구매한다
3. 구매한 로또를 출력한다
4. 당첨 번호와 보너스 번호를 입력받는다
5. 당첨 번호와 보너스 번호에 맞게 당첨 현황을 출력한다
6. 수익률을 출력한다.


# `Functional`

- 함수형으로 구현된 play가 있음

## 참고

- 모듈들의 이름은 동사, 모듈에 속한 함수들은 그 동사를 꾸며주는 이름으로 되어있음(ex: Get.)

- 모듈의 이름에서 모듈의 특징을 유추 가능(ex: Is는 `Boolean`을 반환하는 함수들이 있는 모듈)

- 이와 같은 특징에 따라 본 문서에서 제시된 모듈을 `import` 할 때, 모듈 하위 함수가 아닌 모듈 자체를 `import` 할 것을 권장

- 구현할 기능은 해당 설명의 최하단에 존재

```jsx
 import { linebreak } from 'PrintSource';
 linebreak();//bad

 import Print from 'PrintSource';
 Print.linebreak();//good
```

# `Lotto`

- 로또의 정보가 담긴 클래스

```jsx
const lotto = new Lotto([1,2,3,4,5,6]);
```

**매개변수**

`numbers`

1~45 범위의 중복되지 않은 정수 6개가 담긴 배열

**예외**

매개변수가 1~45 범위의 중복되지 않은 정수 6개가 담긴 배열이 아니면 예외를 던짐

**참고**

해당 프로그램은 이 클래스 생성자를 통해 직접 예외가 던져지지 않도록 설계되었음 

# `App`

로또 게임의 전반적인 흐름을 관리하는 play()가 있음

play()의 진행 과정은 문서 초입부에 제시되어 있음

```jsx
  const app=new App();
  await app.play();
```

## `ConvertInputTo`

사용자로부터 입력을 받아 특정한 값으로 바꾸어 주는 함수들

사용자로부터 동기적으로 입력을 받아야 하므로 해당 모듈의 모든 함수들 앞에는 async가 붙어있음

이 모듈의 `Object`형 반환 값은 모두 `Object.freeze()` 처리가 되어있음

### `async lottoArray()`

- 사용자로부터 입력을 받아 Lotto 들이 담긴 배열을 반환
- 현재는 구매 금액만 입력받아 구매 금액에 맞는 무작위 Lotto 배열을 반환
- 로또 구매금액이 1000 단위가 아니면 오류 메세지를 출력 후 다시 입력 받음

```jsx
const lottoArray = await ConvertInputTo.lottoArray();
```

### `async purchasePrice()`

- 로또 구매금액을 입력받아 해당 금액을 `Number` 형으로 반환
- 로또 구매금액이 1000 단위가 아니면 오류 메세지를 출력 후 다시 입력 받음

```jsx
const purchasePrice = await ConvertInputTo.purchasePrice();
```


**입출력예시**

```
구입금액을 입력해 주세요.
8000
```

```
구입금액을 입력해 주세요.
9554
[ERROR] 딱 떨어지는 수가 아닙니다.
구입금액을 입력해 주세요.
1.1
[ERROR] 정수가 아닙니다.
구입금액을 입력해 주세요.
1000
```

### `async lottoBoard()`

- 로또 당첨번호와 보너스 번호를 입력받아 로또 번호의 상태 ( `MISS_STATE` , `BONUS_STATE` , `HIT_STATE` ) (0, 1, 2) 가 담겨있는 lottoBoard를 반환
- 
- 입력 값이 `async winningNumbersArray()` 와 `async bonusNumber` 의 입력 오류에 해당한다면 값을 다시 입력 받음

```jsx
const lottoBoard = ConverInputTo.lottoBoard();
```

### `async lottoNumbersArray()`

- `','` 로 구분되는 로또 수(1~45사이의 정수) 6개를 입력받아 해당 값들이 `Number` 형으로 담긴 배열로 반환
- `','` 로 구분되는 로또 수 6개가 아니면 오류 메세지를 출력 후 다시 입력 받음

```jsx
const winningNumber = await ConverInputTo.lottoNumbersArray();
```

**입출력예시**

```
당첨 번호를 입력해 주세요.
1,2,3,4,5,6
```

```
당첨 번호를 입력해 주세요.
1,2,3,4,5,6666
[ERROR] 범위 바깥의 숫자입니다.
당첨 번호를 입력해 주세요.
1,2,3,4,5,1.2
[ERROR] 양의 정수가 아닙니다.
당첨 번호를 입력해 주세요.
,,,,,,
[ERROR] 양의 정수가 아닙니다.
당첨 번호를 입력해 주세요.
1,1,1,1,1,1
[ERROR] 중복된 요소가 존재합니다.
당첨 번호를 입력해 주세요.
1,2,3,4
[ERROR] 잘못된 길이입니다.
당첨 번호를 입력해 주세요.
1,2,3,4,5,6
```

### `async bonusNumber(winningNumbers)`

- 보너스 숫자를 입력받아, 입력 받은 값에 해당되는 `Number` 형 숫자를 반환

- 로또 수(1~45사이의 정수)가 아니거나, lottoBoard에 `MISS_STATE` (0)이 아닌 값을 입력 받으면 에러 메세지를 입력받은 후 다시 입력받음

```jsx
const bonusNumber = await ConvertInputTo.bonusNumber(lottoBoard);
```

**매개변수**

`winningNumbers`

길이가 `LOTTO_NUMBER_UPPER` (45)+1이면서 번호 상태( `MISS_STATE` , `BONUS_STATE` , `HIT_STATE` ) 들이 담긴 배열

**입출력예시**

인자에 값이 `[1,2,3,4,5,6]` 인 `winningNumbers`가 들어와있다 가정

```
보너스 번호를 입력해 주세요.
7
```

```
보너스 번호를 입력해 주세요.
1
[ERROR] 중복된 요소가 존재합니다.
보너스 번호를 입력해 주세요.
-1
[ERROR] 양의 정수가 아닙니다.
보너스 번호를 입력해 주세요.
1.1
[ERROR] 양의 정수가 아닙니다.
보너스 번호를 입력해 주세요.
100
[ERROR] 범위 바깥의 숫자입니다.
보너스 번호를 입력해 주세요.
7
```

## `Print`

출력을 담당하는 함수들

### `purchasedLotto(lottoArray)`

- 로또 구매내역을 출력

```jsx
const lottoArray = await ConvertInputTo.lottoArray();
Print.purchasedLotto(lottoArray);
```

**매개변수**

`lottoArray`

`Lotto` 클래스로 생성된 객체들이 들어가있는 배열

**출력 예시**

```
10개를 구매했습니다.
[8, 12, 22, 29, 31, 35]
[3, 4, 10, 18, 37, 44]
[6, 7, 9, 14, 22, 24]
[12, 15, 19, 32, 37, 39]
[4, 11, 21, 24, 30, 42]
[3, 5, 23, 33, 41, 45]
[25, 26, 30, 31, 34, 40]
[1, 4, 9, 31, 35, 42]
[1, 14, 15, 30, 34, 45]
[4, 7, 12, 37, 38, 41]
```

### `lottoNumbers(lotto)`

- `Lotto` 클래스로 생성된 객체를 인자로 받아 해당 객체의 `lottoNumbers`를 출력

```jsx
Print.lottoNumbers(new Lotto([1,2,3,4,5,6]));
```

**출력 예시**

```
[8, 12, 22, 29, 31, 35]
```

### `errorMessage(error)`

- `Error` 형 객체를 인자로 입력받아 해당 에러의 메세지를 출력

```jsx
Print.errorMessage(new Error('[ERROR]'));
```

### `lottoResult(resultArray)`

- `Get.lottoResult()` 를 통해 얻어진 `resultArray` 를 출력 

```jsx
Print.lottoResult(Get.lotoResult(lottoArray, lottoBoard));
```


**출력 예시**

```
당첨 통계
---
3개 일치 (5,000원) - 463개
4개 일치 (50,000원) - 42개
5개 일치 (1,500,000원) - 2개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
```

### `returnRatio(returnRatio)`

- `Number` 형 수익률을 인자로 받아 소수점 첫 째 자리까지 반올림한 값을 출력

```jsx
Print.returnRatio(12.12);
```

**출력 예시**

```
총 수익률은 11.2%입니다.
```

```
총 수익률은 12.0%입니다.
```

### `fifthPlaceResult(resultArray)`, `forthPlaceResult(resultArray)`, `thirdPlaceResult(resultArray)`, `SecondPlaceResult(resultArray)`, `firstPlaceResult(resultArray)` 

- `Get.lottoResult()` 를 통해 얻어진 `resultArray` 의 값에 따라 각 등수 별 당첨 기준, 당첨 금액, 당첨 횟수를 출력

```jsx
Print.fifthPlaceResult(resultArray);
Print.forthPlaceResult(resultArray);
Print.thirdPlaceResult(resultArray);
Print.secondPlaceResult(resultArray);
Print.firstPlaceResult(resultArray);
```

**출력 예시**

```
3개 일치 (5,000원) - 12개
```

```
4개 일치 (50,000원) - 1개
```

```
5개 일치 (1,500,000원) - 2개
```

```
5개 일치, 보너스 볼 일치 (30,000,000원) - 1개
```

```
6개 일치 (2,000,000,000원) - 0개
```

### `lineBreak()`

- 출력 창을 개행해줌

```jsx
Print.lineBreak();
```

## `Get`

매개변수를 바탕으로 특정한 값을 가져오는 함수들

### `randomLottoArray(numberOfLotto)`

- `numberOfLotto` 의 길이를 갖는, 무작위 값이 들어간 `Lotto` 클래스로 생성되는 객체를 요소로 갖는 배열을 반환

```jsx
Get.randomLottoArray(10);// [ Lotto {}, Lotto {}, ... ] (10)
```

### `randomLotto()`

- 무작위 `lottoNumbers` 를 갖는 `Lotto` 객체 반환

```jsx
Get.randomLotto();
```

### `lottoBoard(winningNumbers, bonusNumber)`

- 길이가 `LOTTO_NUMBER_UPPER` (45)+1이면서 번호 상태( `MISS_STATE` , `BONUS_STATE` , `HIT_STATE` ) 들이 담긴 배열을 반환

```jsx
const lottoBoard = Get.lottoBoard([1,2,3,4,5,6], 7);
```

**매개변수**

`winningNumbers`

당첨 번호가 담긴 배열

`bonusNumber`

보너스 번호

`winningNumbers` 에 담겨있지 않은 번호여야 함(중복이 발생하는 경우 winningNumber의 중복 값이 무시됨)


### `lottoResult(lottoArray, lottoBoard)`

- 로또 결과를 담은 배열을 반환

```jsx
const lottoArray = Get.randomLottoArray();
Get.lottoResult(lottoArray, lottoBoard);
```

**매개변수**

`lottoArray`

`Lotto` 객체들이 담긴 배열

`lottoBoard`

길이가 `LOTTO_NUMBER_UPPER` (45)+1이면서 번호 상태( `MISS_STATE` , `BONUS_STATE` , `HIT_STATE` ) 들이 담긴 배열

**반환**

`lottoArray` 요소들의 가치를 요소로 갖는 배열

`Lotto` 의 가치는 `lottoBoard` 의  `lottoNumbers` 각 요소의 값 합과 같음

예를 들어, `[0,2,2,2,0,0,0,0...]` 값을 갖는 `lottoBoard` 가 있고, `Lotto` 의 `numbers` 는 `[1,2,3,4,5,6]` 이라면, 해당 `Lotto` 의 가치는 `6`

반환하는 배열의 길이는 13
*  ( `HIT_STATE` ) * ( `NUMBER_OF_LOTTO_NUMBERS` ) + 1 = 13 이기 때문

길이가 2인 `lottoArray` 의 요소로 있는 로또 가치가 각각 `2`와 `10`이라면,

반환하는 배열은 `[0,0,1,0,0,0,0,0,0,0,1,0,0]`

### `lottoValue(lotto, lottoBoard)`

- `lottoBoard`에 의한, `Lotto` 객체인 `lotto`의 가치를 반환하는 함수

- `Lotto` 의 가치는 `lottoBoard` 의  `lottoNumbers` 각 요소의 값 합과 같음

- 예를 들어, `[0,2,2,1,0,0,0,0...]` 값을 갖는 `lottoBoard` 가 있고, `Lotto` 의 `numbers` 는 `[1,2,3,4,5,6]` 이라면, 해당 `Lotto` 의 가치는 `5`

```jsx
const lottoBoard = Get.lottoBoard([1,2,3,4,5,6],10);
Get.lottoValue(new Lotto([10,11,12,13,14,15]), lottoBoard);
```

**매개변수**

`lotto`

Lotto 객체

`lottoBoard`

`Get.lottoBoard()`로 만들어진 배열

### `lottoReturnRatio(resultArray, numberOfLotto)`

- `Get.resultArray()`에서 얻어지는 `resultArray`에 의한 로또 수익률을 반환

```jsx
const returnRatio = lottoReturnRatio([0,0,0,0,0,0,1,3,0,0,0,0,0],4);
```

**매개변수**

`'매개변수'`

'매개변수 설명'

**반환**

'반환 값'

**예외**

'예외 경우'


구현해야할 기능
- [x] 구입 금액 입력
  - [x] 양의 정수 확인
  - [x] 1000단위 숫자인지 확인
  - [x] 잘못된 입력 시 다시 입력 받기

- [x] 구매한 만큼 랜덤으로 로또 번호 생성
- [x] 생성한 번호 출력

- [x] 당첨번호 입력
  - [x] ,로 구분되는 문자열이 6개인지 확인
  - [x] ,로 구분된 문자열이 양의 정수인지 확인
  - [x] 구분된 숫자가 1에서 45사이의 값인지 확인
  - [x] 구분된 숫자 안에 중복 숫자가 있는지 확인
  - [x] 잘못된 입력 시 다시 입력 받기
- [x] 보너스 번호 입력
  - [x] 양의 정수 확인
  - [x] 당첨번호와 중복되었는지 확인
  - [x] 보너스 번호가 1에서 45사이의 값인지 확인
  - [x] 잘못된 입력 시 다시 입력 받기

- [x] 당첨 여부 확인
- [x] 당첨 출력

- [x] 수익률 계산

- [x] 수익률 출력

---

mvc 패턴(예외사항은 함수형과 같게 처리했으므로, 구현 기능에 포함 X)

- [x] model
  - [x] 수에 맞게 purchasedLottoArray 랜덤으로 채워넣기
  - [x] 입력한 값에 맞게 lottoBoard 만들기
  - [x] purchasedLottoArray와 lottoBoard에 맞는 lottoResult 값 생성 
- [x] view
  - [x] input
    - [x] 로또 구입 금액 입력
    - [x] 당첨번호 입력
    - [x] 보너스 번호 입력
  - [x] output
    - [x] 발행한 로또 수량 및 번호 출력
    - [x] 당첨통계 출력
    - [x] 수익률 출력
    - [x] 예외상황 출력
- [x] controller
  - [x] input view로부터 구매번호 입력 받아오기
    - [x] 구매 금액이 예외 상황이면 다시 받기
  - [x] 구입 금액에 맞춰 model의 purchasedLottoArray 업데이트
  - [x] 업데이트 한 purchasedLottoArray를 output view로 출력 지시
  
  - [x] model의 lottoBoard 업데이트
    - [x] input view로부터 당첨번호 입력 받아오기
      - [x] 당첨 번호 예외 상황이면 에러 출력 후 다시 받기
    - [x] input view로부터 보너스 번호 입력 받아오기
      - [x] 보너스 번호 예외 상황이면 에러 출력 후 다시 받기
  
  - [x] model의 lottoResult로 당첨통계 output view로 출력 지시

  - [x] model의 lottoResult로 수익률 만들기
  - [x] 만든 수익률로 output view로 출력 지시