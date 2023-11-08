# 🚖 3주차 로또 미션

## 🚀 구현 기능 목록

## 💬 입력

### 로또 구입 금액

- [x] 로또 구입 금액을 입력 받는다.
  - [x] `구입금액을 입력해 주세요.` 메시지를 사용자에게 보여 준다.
  - [x] 1,000원으로 나누어 떨어지지 않은 경우 예외 처리한다.
  - [x] 0원을 입력한 경우 예외 처리한다.
  - [x] 숫자를 제외한 문자를 입력한 경우 예외 처리한다.

```
구입금액을 입력해 주세요.
8000
```

### 당첨 번호

- [x] 당첨 번호를 입력 받는다.
  - [x] `당첨 번호를 입력해 주세요.` 메시지를 사용자에게 보여 준다.
  - [x] 번호는 쉼표(,)를 기준으로 구분한다.
  - [x] 로또 번호의 숫자가 1~45 내에 없을 경우 예외 처리한다.
  - [x] 당첨 번호는 중복될 경우 예외 처리한다.
  - [x] 숫자와 콤마(,)를 제외한 문자를 입력한 경우 예외 처리한다.

```
당첨 번호를 입력해 주세요.
1,2,3,4,5,6
```

### 보너스 번호

- [x] 보너스 번호를 입력 받는다.
  - [x] `보너스 번호를 입력해 주세요.` 메시지를 사용자에게 보여 준다.
  - [x] 로또 번호의 숫자가 1~45 내에 없을 경우 예외 처리한다.
  - [x] 숫자를 제외한 문자를 입력한 경우 예외 처리한다.

```
보너스 번호를 입력해 주세요.
7
```

## 🎱 출력

### 로또 발행

- [x] 구입 금액에 해당하는 만큼 로또를 발행한다. (한 장 가격: 1,000)
- [x] 발행한 로또 수량 및 번호를 출력한다.
  - [x] 번호는 오름차순으로 정렬하여 보여 준다.

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

### 당첨 내역

- [x] 사용자가 구매한 로또 번호와 당첨 번호를 비교해 당첨 내역을 출력한다.
  - [x] 일치하는 복권의 숫자에 따라 당첨된 등수를 +1 카운트해 준다.

```
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
```

### 수익률

- [x] 사용자가 구매한 로또 번호와 당첨 번호를 비교해 수익률을 출력한다.
- [x] 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

```
총 수익률은 62.5%입니다.
```

## 💻 테스트 목록

## 💬 입력 테스트

### 로또 구입 금액

- [x] 숫자를 제외한 모든 문자가 들어오면 예외가 발생한다.
- [x] 금액이 1,000원 단위가 아니면 예외가 발생한다.
- [x] 금액이 0원이면 예외가 발생한다.

### 당첨 번호

- [x] 숫자와 콤마(,) 제외한 모든 문자가 들어오면 예외가 발생한다.
- [x] 당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.
- [x] 당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.
- [x] 당첨 번호의 숫자 범위가 1~45를 벗어나면 예외가 발생한다.

### 보너스 번호

- [x] 숫자를 제외한 모든 문자가 들어오면 예외가 발생한다.
- [x] 로또 번호의 숫자 범위가 1~45를 벗어나면 예외가 발생한다.

## 🎱 출력 테스트

### 로또 발행

- [x] 구매 금액에 따라 올바른 개수의 로또를 발행하는지 확인한다.
- [x] 로또 번호를 올바르게 정렬해 발행하는지 확인한다.
- [x] 유효한 로또 번호로만 이루어진 로또를 발행하는지 확인한다.

### 당첨 내역

- [x] 여러 로또에 대한 당첨 여부를 올바르게 계산하는지 확인한다.

### 수익률

- [x] 당첨 금액 계산 결과가 정상적으로 반환되는지 확인한다.
- [x] 수익률이 정상적으로 반환되는지 확인한다.

## 📂 디렉터리 구조

```
javascript-lotto-6
├─ __tests__
│  ├─ ApplicationTest.js
│  ├─ domain
│  │  ├─ LottoTest.js
│  │  └─ WinningTest.js
│  ├─ utils
│  │  └─ CirculateRateTest.js
│  └─ view
│     ├─ AmountTest.js
│     ├─ BonusNumTest.js
│     └─ WinningNumTest.js
├─ docs
│  └─ README.md
└─ src
   ├─ App.js
   ├─ constants
   │  ├─ messages.js
   │  ├─ number.js
   │  ├─ regexp.js
   │  ├─ symbol.js
   │  └─ winning.js
   ├─ controller
   │  └─ LottoController.js
   ├─ domain
   │  ├─ Lotto.js
   │  └─ Winning.js
   ├─ index.js
   ├─ utils
   │  ├─ CirculateRate.js
   │  ├─ Validate.js
   │  └─ Validator.js
   └─ view
      ├─ InputView.js
      └─ OutputView.js
```

### 📺 View Directory

**InputView.js (사용자 입력 View)**

> `readPurchaseAmount()`: 구입 금액을 입력 받는 메소드  
> `readWinningNumbers()`: 당첨 번호를 입력 받는 메소드  
> `readBonusNumber()`: 보너스 번호를 입력 받는 메소드

**OutputView.js (출력 View)**

> `printLotto(purchaseLotto)`: 발행한 로또를 출력하는 메소드
> `printWinningStatistics(winnings)`: 로또 당첨 내역을 출력하는 메소드
> `printRevenueRate(rate)`: 수익률을 출력하는 메소드

### ⭐️ Domain Directory

**Lotto.js (로또 발행)**

> `generateLottoNumber(numbers)`: 구입 금액에 해당하는 만큼 로또를 발행하는 매소드

**Winning.js (로또 당첨)**

> `countMatchNumber(lottos, winningNumbers, bonusNumber)`: 당첨 번호와 일치하는 번호가 몇 개인지 반환하는 메소드  
> `countWinning(lottoss, winningNumbers, bonusNumber)`: 당첨 횟수를 카운트하는 메소드

### 💡 Utils Directory

**Validate.js (사용자 입력 검증)**

> `numberValidate(value)`: 숫자를 제외한 문자를 입력한 경우에 대해 예외 처리하는 메소드
> `bonusValidate(value)`: 숫자와 콤마(,)를 제외한 문자를 입력한 경우에 대해 예외 처리하는 메소드

> `divisionValidate(value)`: 구입 금액이 1,000원으로 나누어 떨어지지 않은 경우에 대해 예외 처리하는 메소드  
> `quantityValidate(value)`: 구입 금액에 0원을 입력한 경우에 대해 예외 처리하는 메소드

> `rangeValidate(value)`: 당첨 번호의 숫자가 1-45 내에 없을 경우에 대해 예외 처리하는 메소드  
> `lengthValidate(value)`: 로또 번호의 개수가 6개가 아닌 경우에 대해 예외 처리하는 메소드  
> `duplicateValidate(value)`: 중복된 로또 번호가 있을 경우에 대해 예외 처리하는 메소드

**Validator.js (사용자 입력 검증)**

> `amountValidator(purchaseAmount)`: 입력 받은 구입 금액을 검증하는 메소드  
> `winningNumberValidator(winningNumbers)`: 입력 받은 당첨 번호를 검증하는 메소드  
> `bonusNumberValidator(bonusNumber)`: 입력 받은 보너스 번호를 검증하는 메소드

**CirculateRate.js (수익률 계산)**

> `winningReword(winnings)`: 총 당첨 금액을 계산하는 메소드  
> `calculateRevenueRate(reword, purchaseAmount)`: 수익률을 계산하는 메소드  
> `revenueRate(winnings, purchaseAmount)`: 수익률을 반환하는 메소드

### 🕹️ Controller Directory

**LottoController.js (로또 게임 Controller)**

> `gameStart()`: 로또 게임을 진행하는 메소드

### 📦 Constants Directory

**messages.js (메시지 상수화)**

> `INPUT_MESSAGE`: 입력 시 가이드 메시지들을 객체로 상수화  
> `OUTPUT_MESSAGE`: 출력 시 보여 주는 메시지들을 객체로 상수화  
> `ERROR_MESSAGE`: 에러 처리 시 보여 주는 메시지들을 객체로 상수화

**winning.js (당첨 관련 배열 상수화)**

> `WINNING_DESCRIPTION`: 당첨 내역 출력 시 보여 줄 메시지를 담은 배열 상수화  
> `WINNING_AMOUNTS`: 당첨 금액 배열 상수화

**symbol.js (심볼 상수화)**

> `SYMBOL`: 코드에서 사용되는 심볼 상수화

**regexp.js (정규식 상수화)**

> `REGEXP`: 정규식들을 객체로 상수화

**number.js (기타 숫자 상수화)**

> `MAGIC_NUMBER`: 매직 넘버 객체로 상수화  
> `MATCH_NUMBER`: 로또 번호와 당첨 번호가 일치하는 개수 객체로 상수화 (3, 4, 5, 6)
> `WINNING_INDEX`: 당첨 내역 배열 인덱스 번호 객체로 상수화
