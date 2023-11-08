ver 0.1

## 참고

## 해당 프로그램은 함수형인 Functional, MVC 패턴을 적용한 MVC 모듈 두 가지 방식으로 play()를 구현하려 하였음

## 현재는 Functional의 play()만 검증되었음

## coverage
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------|---------|----------|---------|---------|-------------------
All files               |   85.38 |    97.36 |   83.58 |   85.53 |                   
 src                    |     100 |      100 |     100 |     100 |                   
  App.js                |     100 |      100 |     100 |     100 |                   
  Lotto.js              |     100 |      100 |     100 |     100 |                   
 src/constants          |     100 |      100 |     100 |     100 |                   
  CONSTANTS.js          |     100 |      100 |     100 |     100 | 
  NUMBERS.js            |     100 |      100 |     100 |     100 | 
  STRINGS.js            |     100 |      100 |     100 |     100 | 
 src/functinoal         |     100 |      100 |     100 |     100 | 
  Functional.js         |     100 |      100 |     100 |     100 | 
 src/functinoal/modules |   98.01 |    96.42 |   97.43 |    98.9 | 
  ConvertInputTo.js     |     100 |      100 |     100 |     100 | 
  ErrorCheck.js         |     100 |      100 |     100 |     100 | 
  Get.js                |     100 |      100 |     100 |     100 | 
  Is.js                 |   94.11 |    92.85 |     100 |     100 | 7
  Print.js              |   95.23 |      100 |   91.66 |   95.23 | 75
 src/mvc/model          |      80 |      100 |   66.66 |   78.57 | 
  LottoModel.js         |      80 |      100 |   66.66 |   78.57 | 33-37,50
 src/mvc/model/utils    |   54.54 |      100 |    62.5 |      60 | 
  Get.js                |   54.54 |      100 |    62.5 |      60 | 37-40,50
 src/mvc/view           |   21.05 |      100 |   33.33 |   21.05 | 
  LottoOutputView.js    |   21.05 |      100 |   33.33 |   21.05 | 37-89


# App

로또 게임의 전반적인 흐름을 관리하는 함수인 `play()`가 있음

모든 입력 상황에서 잘못된 값을 입력 받으면 다시 입력 받음

Functional과 MVC 모두 다음과 같이 게임이 진행됨


1. 로또 구입 금액을(1000원 단위) 입력 받는다(1000 원에 1장)
2. 구입 금액에 맞게 로또를 구매한다
3. 구매한 로또를 출력한다
4. 당첨 번호와 보너스 번호를 입력받는다
5. 당첨 번호와 보너스 번호에 맞게 당첨 현황을 출력한다
6. 수익률을 출력한다.


# Functional

- 함수형으로 구현된 play가 있음

## 참고

- 모듈들의 이름은 동사, 모듈에 속한 함수들은 그 동사를 꾸며주는 이름으로 되어있음(ex: Get.)

- 모듈의 이름에서 모듈의 특징을 유추 가능(ex: Is는 `Boolean`을 반환하는 함수들이 있는 모듈)

- 이와 같은 특징에 따라 본 문서에서 제시된 모듈을 `import` 할 때, 모듈 하위 함수가 아닌 모듈 자체를 `import` 할 것을 권장

```jsx
 import { linebreak } from 'PrintSource';
 linebreak();//bad

 import Print from 'PrintSource';
 Print.linebreak();//good
```

# Lotto

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

# App

로또 게임의 전반적인 흐름을 관리하는 play()가 있음

play()는 문서 초입부에 제시되어 있음

```jsx
  const app=new App();
  await app.play();
```

## ConvertInputTo

사용자로부터 입력을 받아 특정한 값으로 바꾸어 주는 함수들

사용자로부터 동기적으로 입력을 받아야 하므로 해당 모듈의 모든 함수들 앞에는 async가 붙어있음

### async lottoArray()

- 사용자로부터 입력을 받아 Lotto 들이 담긴 배열을 반환
- 현재는 구매 금액만 입력받아 구매 금액에 맞는 무작위 Lotto 배열을 반환
- 로또 구매금액이 1000 단위가 아니면 오류 메시지를 출력 후 다시 입력 받음

```jsx
const lottoArray = await ConvertInputTo.lottoArray();
```

### 'async purchasePrice()'

- 로또 구매금액을 입력받아 해당 금액을 `Number` 형으로 반환
- 로또 구매금액이 1000 단위가 아니면 오류 메시지를 출력 후 다시 입력 받음

```jsx
const purchasePrice = await ConvertInputTo.purchasePrice();
```


**입출력예시**

```
구입금액을 입력해 주세요.
8000
------
구입금액을 입력해 주세요.
9554
[ERROR] 딱 떨어지는 수가 아닙니다.
구입금액을 입력해 주세요.
1.1
[ERROR] 정수가 아닙니다.
구입금액을 입력해 주세요.
1000
```

### 'async lottoBoard()'

- 로또 당첨번호와 보너스 번호를 입력받아 로또 번호의 상태 ( `MISS` , `BONUS` , `HIT` )가 담겨있는 lottoBoard를 반환
- 입력 값이 `async winningNumbersArray()` 와 `async bonusNumber` 의 입력 오류에 해당한다면 값을 다시 입력 받음

```jsx
const lottoBoard = ConverInputTo.lottoBoard();
```

### 'async lottoNumbersArray()'

- `','` 로 구분되는 로또 수(1~45) 6개를 입력받아 해당 값들이 `Number` 형으로 담긴 배열로 반환
- `','` 로 구분되는 로또 수(1~45) 6개가 아니면 다시 입력 받음

```jsx
const winningNumber = await ConverInputTo.lottoNumbersArray();
```

**입출력예시**

```

```



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