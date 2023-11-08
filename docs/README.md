## 구현 기능 목록

- [x] 구입금액 입력 받기
  - [x] 숫자가 아닐 시 예외 처리
- [x] 구입금액에 따른 사야 할 로또 개수 계산하기
  - [x] 구입금액 1000원 단위 아래로 내림 처리
- [x] 로또 번호 생성
  - [x] 로또 번호 오름차순 정렬
- [x] 당첨 번호 및 보너스 번호 입력 받기
  - [x] 숫자가 아닐 시 예외 처리
- [x] 로또번호와 당첨번호 비교하기
- [x] 당첨 통계 계산하기
- [x] 수익률 계산하기
  - [x] 소수점 둘째 자리에서 반올림
- [x] 최종 결과 출력하기

## 예외사항 정리

**1. 구입 금액**

- [x] 구입 금액 숫자가 아닌 경우
- [x] 구입 금액이 1000원 단위가 아닌 경우

**2. 로또 번호**

- [x] 로또 번호가 6개가 아닌 경우
- [x] 로또 번호가 1~45사이가 아닌 경우
- [x] 로또 번호가 중복되는 경우

**3. 보너스 번호**

- [x] 보너스 번호가 숫자가 아닌 경우
- [x] 보너스 번호가 1~45사이가 아닌 경우
- [x] 보너스 번호가 로또 번호에 중복되는 경우

## 관심사 분류에 따른 클래스, 함수 정리

```
관심사 분리를 Domain과 View로 분리하였습니다.
Domain : 로또 관련 메인 담당 (src 하위 view,errors 폴더를 제외한 나머지)
View : 데이터 입출력을 담당 폴더
errors: 예외 처리 함수들을 관리 폴더
```

**1. Domain**

- 1-1. 'Lotto' : 로또 번호 표시 클래스
  - 'Numbers' : 로또 번호
  - 'validate' : 로또 번호 6글자 외 길이 예외 처리 함수
  - 'compareNumbers' : 로또번호와 당첨번호 비교하는 함수
- 1-2. 'CalculateLottoNumber' : 사야하는 로또 개수 계산하는 함수
- 1-3. 'makeRandomNumbers' : 로또 번호 생성하는 함수
- 1-4. 'CalculateProfit': 수익률 계산하는 함수
- 1-5. 'calculateRank': 로또 등수를 결정하는 함수
- 1-6. 'buyLotto': 로또 클래스를 리스트에 저장하는 함수
- 1-7. 'getStatistics': 등수 결과들을 통계내주는 함수

**2. View**

- 2-1. 'AmountInput' : 구입금액 입력 받는 함수
- 2-2. 'NumberInput' : 당첨 번호 및 보너스 번호 입력 받는 함수
- 2-3. 'printResult' 당첨 결과 출력하는 함수

**3. errors**

- 3-1. 'amountInputError' : 구입 금액 예외 처리 함수
- 3-2. 'winningNumbersError' : 당첨 번호 예외 처리 함수
- 3-3. 'bonusNumberError' : 보너스 번호 예외 처리 함수

## 폴더 구조

```
📦src
 ┣ 📂errors
 ┃ ┣ 📜amountInputError.js
 ┃ ┣ 📜bonusNumberError.js
 ┃ ┗ 📜winningNumbersError.js
 ┣ 📂View
 ┃ ┣ 📜AmountInput.js
 ┃ ┣ 📜numberInput.js
 ┃ ┗ 📜printResult.js
 ┣ 📜App.js
 ┣ 📜buyLotto.js
 ┣ 📜calculateLottoNumber.js
 ┣ 📜calculateProfit.js
 ┣ 📜calculateRank.js
 ┣ 📜getStatistics.js
 ┣ 📜index.js
 ┣ 📜Lotto.js
 ┗ 📜makeRandomNumbers.js
```
