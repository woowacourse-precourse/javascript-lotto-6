# 우테코 3주차 미션

## 목적

우아한 테크 코스 미션용 과제(3주차)

## 설치 및 실행 방법

```shell
git clone https://github.com/thumbthing/javascript-lotto-6.git thumbthing
npm install
node index.js
```

## 요구사항

1. 함수의 길이가 15라인을 넘어가지 않도록 구현
2. 함수가 한가지 기능만을 담당하도록 구현
3. else를 지양
4. 단위 테스트를 구현
5. 핵심 로직 / UI 담당 코드를 분리

## 기타


## 프로젝트 구조

```shell
__tests__
├── ApplicationTest.js
├── LottoTest.js
├── integration
│   ├── getBonusNumberTest.js
│   ├── getLottoNumberTest.js
│   ├── getPurchaseTest.js
│   ├── lottoCompareServiceTest.js
│   └── validate
│       ├── bonusNumberValidServiceTest.js
│       └── purchaseValidServiceTest.js
└── unit
    ├── createPurchaseDataTest.js
    ├── lottoMatcherTest.js
    └── validTest.js
docs
└── README.md
src
├── App.js
├── Lotto.js
├── index.js
├── service
│   ├── getBonusNumber.js
│   ├── getLottoNumber.js
│   ├── getPurchase.js
│   ├── lottoCompareService.js
│   └── validate
│       ├── bonusNumberValidService.js
│       └── purchaseValidService.js
└── util
    ├── UI
    │   ├── gameResult
    │   │   └── winningStatisticsUI.js
    │   └── gameStart
    │       ├── purchaseAmountUI.js
    │       ├── purchaseResultUI.js
    │       ├── receiveBonusNumberUI.js
    │       └── receiveWinningLottoUI.js
    ├── error
    │   └── errorCode.js
    ├── libararyFeatures
    │   └── MissionUtilHandler.js
    ├── matcher
    │   └── lottoMatcher.js
    ├── parse
    │   ├── ascendingSortList.js
    │   ├── divideInput.js
    │   ├── parseToMap.js
    │   ├── parseToMatchedCount.js
    │   ├── parseToNumberArray.js
    │   └── splitInput.js
    ├── purchase
    │   └── createPurchaseData.js
    ├── validate
    │   ├── checkHasDuplicate.js
    │   ├── checkHasNoRemainder.js
    │   ├── checkIsEmpty.js
    │   ├── checkIsInWinningNumber.js
    │   ├── checkIsNaN.js
    │   ├── checkIsNotInRange.js
    │   └── checkisInteger.js
    └── yield
        └── getRateOfReturn.js

```

## 기능

---

### service

기능: 모듈화된 기능들의 실행

- getBonusNumber.js
- getLottoNumber.js
- getPurchase.js
- lottoCompareService.js

- bonusNumberValidService.js
- purchaseValidService.js

---

### UI

기능: input, 결과를 출력

 사용자의 입력을 반환

- purchaseAmounUI.js

 > 기능: 구매 금액에 대한 안내 문구를 출력 후 입력 받은 값을 반환

- receiveWinnigLottoUI.js  

 > 기능: 당첨 번호에 대한 안내 문구를 출력 후 입력 받은 당첨 번호를 반환

- receiveBonusNumberUI.js

> 기능: 보너스 번호에 대한 안내 문구를 출력 후 입력 받은 보너스 번호를 반환

 결과를 출력

- purchaseResultUI.js

> 기능: 구매 금액으로 로또의 구매 내역을 출력

- winningStatisticsUI.js

> 기능: 생성된 당첨 등수의 갯수, 수익률으로 구매 결과를 출력

---

### error

> 기능: 예외처리의 에러 메시지

- errorCode.js

```javascript
export const PURCHASE_ERROR_CODE = {
  purchaseAmount: '[ERROR] 입력을 받는 중에 예상치 못한 에러가 발생 했습니다.',
  isDuplicated: '[ERROR] 로또 번호에 중복된 숫자가 존재합니다',
  hasRemainder: '[ERROR] 구입 금액이 1000으로 나누어 떨어지지 않습니다.',
  valueIsNaN: '[ERROR] 입력값이 유효하지 않습니다.',
  valueIsEmpty: '[ERROR] 입력값에 빈값이 존재합니다.',
  valueIsTooSmall: '[ERROR] 로또를 구매할 수 없습니다.',
};

export const LOTTO_ERROR_CODE = {
  failToCreateLotto: '[ERROR] 로또 번호를 생상하는 도중에 예상치 못한 에러가 발생 했습니다.',
  valueIsEmptyOrZero: '[ERROR] 로또 번호에 빈값 또는 0이 존재 합니다.',
  valueIsOutOfRange: '[ERROR] 로또 번호는 1 ~ 45 까지의 숫자로 이루어져야 합니다.',
  valueIsNotInteger: '[ERROR] 로또 번호는 정수로만 이루어져야 합니다.',
};

export const BONUS_ERROR_CODE = {
  valueMatchesLotto: '[ERROR] 보너스 번호가 로또번호 중 하나 입니다.',
};
```

---

### libaray features

- MissionUtilsHandler.js  

> 기능: MissionUtils 라이브러리의 기능을 반환
> Console.print
> Console.readLindAsync
> Random.pickUniqueNumbersInRange

---

### matcher

- lottoMatcher.js

> 기능: 구매내역을 당첨번호와 비교하여 당첨 등수를 반환

---

### parse

- ascendingSortList.js

> 기능: 배열을 오름차순으로 정렬하여 반환

- divideInput.js

> 기능: 구매액을 1000으로 나눈 값을 반환

- parseToMap.js

> 기능: 등수에 해당하는 구매내역의 갯수를 Map으로 count 하여 반환
> Map 자료구조를 선언해서 변환된 구매내역에 해당 key가 존재할 경우 value를 1 증가

- parseToMatchedCount.js

> 기능: 구매내역을 당첨 등수로 변환하여 반환
> 당첨 번호와 구매 내역을 Set 자료구조를 통해 중복 값을 재거
> 중복되지 않은 값을 판단하여 구매내역의 당첨 등수를 반환

- parseToNumberArray.js

> 기능: 입력 받은 당첨 번호를 number 형태의 element로 변환하여 반환


- splitInput.js

> 기능: 입력 받은 당첨 번호 문자열을 배열로 변환하여 반환

---

### purchase

- createPurchaseData.js

> 기능: 입력받은 구매액을 기준으로 구매 내역을 생성하여 반환  
> 생성된 6개의 숫자를 오름차순으로 정렳하여 2차원 배열에 저장
> 2차원 배열의 길이가 구매 갯수랑 같지 않을 경우 재귀로 함수를 호출

---

### validate

- checkHasDuplicate.js

> 기능:  
> 입력 받은 당첨 번호에 중복된 숫자가 존재할 경우 예외 처리

- checkHasNoRemainder.js

> 기능:  
> 입력 받은 구매액이 1000으로 나누어 떨어지지 않을 경우 예외 처리

- checkIsEmpty.js

> 기능:  
> 입력받은 구매액, 당첨 번호가 빈값이 존재할 경우 예외 처리

- checkIsInteger.js

> 기능:  
> 입력받은 구매액, 당첨 번호가 정수가 아닐 경우 예외 처리

- checkIsInWinningNumber.js

> 기능:  
> 입력받은 보너스 번호가 당첨 번호에 포함된 숫자일 경우 예외 처리

- checkIsNaN.js

> 기능:  
> 입력받은 구매액, 당첨번호, 보너스 번호가 숫자가 아닐 경우 예외 처리

- checkIsNotInRange.js

> 기능:  
> 입력받은 당첨번호, 보너스 번호가 1 ~ 45 사이의 값이 아닐 경우 예외 처리

---

### yeild

- getRateOfReturn.js

> 기능:
> count 된 구매내역의 당첨 등수로 수익률을 반환

---

### test

- unit
    - createPurchaseDataTest.js
    - lottoMatcherTest.js
    - validTest.js

통합 기능의 새부 기능, 모듈화된 함수의 작동을  
기능의 순서에 따른 unit 테스트 케이스 작성후  
최하단에 기능의 통합 테스트 케이스 작성

- integration
    - getBounusNumberTest.js
    - getLottoNumberTest.js
    - getPurchaseTest.js
    - lottoCompareServiceTest.js
    - bonusNumberValidServiceTest.js
    - purchaseValidServiceTest.js

---

## Commit Convertion

| Type 키워드 | 사용 시점                                                             |
| ----------- | --------------------------------------------------------------------- |
| feat        | 새로운 기능 추가                                                      |
| fix         | 버그 수정                                                             |
| docs        | 문서 수정                                                             |
| style       | 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)기능 수정이 없는 경우 |
| design      | 사용자 UI 디자인 변경 (CSS 등)                                        |
| test        | 테스트 코드, 리팩토링 테스트 코드 추가                                |
| refactor    | 코드 리팩토링                                                         |
| build       | 빌드 파일 수정                                                        |
| ci          | CI 설정 파일 수정                                                     |
| chore       | 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등)                |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                                     |
| remove      | 파일을 삭제만 한 경우                                                 |