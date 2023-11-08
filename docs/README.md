## 3주차 미션 - 로또

### ⚙️ 구현 목록

메세지 출력

- `구입 금액을 입력해주세요.` 텍스트를 출력한다.
- `당첨번호를 입력해주세요.` 텍스트를 출력한다.
- `보너스 번호를 입력해주세요.` 텍스트를 출력한다.
- `\n당첨 통계\n—-\n` 텍스트를 출력한다.
- 당첨 결과를 출력한다.
- 총 수익률을 출력한다.

사용자 입력

- 사용자는 구입 금액을 입력할 수 있다.
- 사용자는 당첨번호를 입력할 수 있다.
- 사용자는 보너스 번호를 입력할 수 있다.

유틸 함수

- 구매한 금액만큼 로또를 뽑는다.
  - 6개의 번호를 뽑는 로또가 있다.
- 해당 로또가 몇 등에 해당하는지 알 수 있다.

Validator

- 양의 정수인지 검증
  - 숫자 검증
  - 소수 검증
  - 음수 검증
- 인자 a,b가 나누어 떨어지는지 검증
- `,`로 구분한 문자의 길이 검증
- 중복된 문자가 있는지 검증
- 숫자가 a 에서 b 사이에 존재하는 숫자인지 검증
- 특정 배열 내 같은 요소가 있는지 검증

ValidatorManager

- 로또 구매 금액 검증 함수
- 당첨 로또 번호 입력 값 검증 함수
- 당첨 보너스 로또 번호 입력 값 검증 함수

### 📑 테스트 케이스

<details>
<summary>Varification</summary>

- 유효한 숫자 (양의 정수)가 아닌지 검증하는 함수
  - 값이 양의 정수인 경우
  - 값이 음수인 경우
  - 값이 소수인 경우
  - 0인 경우
- 전달 받은 값이 기준 요금으로 나누어 떨어지는지 검증하는 함수
  - a는 b로 나누어 떨어진다.
  - a는 b로 나누어 떨어지지 않는다.
- 인자로 받은 값이 로또 번호 개수에 맞는지 검증하는 로직
  - 로또 번호 개수와 일치한다.
  - 로또 번호 개수와 일치하지 않는다.
- 배열 내 중복된 값이 존재하는지 검증하는 로직
  - 배열 내 중복 값이 존재한다.
  - 배열 내 중복 값이 존재하지 않는다.
- 숫자가 일정 범위 안에 존재하지 않는지 검증하는 로직
  - 일정 범위 안에 숫자가 존재한다.
  - 일정 범위 안에 숫자가 존재하지 않는다.
- 숫자가 배열 내에 존재하는지 검증하는 로직
  - 주어진 배열 내 숫자가 존재한다.
  - 주어진 배열 내 숫자가 존재하지 않는다.
  </details>

<details>
<summary>VarificationManager</summary>

- 입력한 구매 금액이 유효한지 테스트
  - 유효한 양의 정수 값이 들어오지 않으면 에러를 띄운다.
  - 로또 가격 (ex: 1000) 단위로 입력되지 않을 경우 에러를 띄운다.
  - 유효한 값이 들어오는 경우 정상 동작한다.
- 사용자가 입력한 로또 번호가 유효한지 테스트
  - 로또 번호 길이가 다를 경우 에러를 띄운다.
  - 중복된 값을 받은 경우 에러를 띄운다.
  - 로또 번호 최소값 보다 작은 값이 입력된 경우 에러를 띄운다.
  - 로또 번호 최대값 보다 큰 값이 입력된 경우 에러를 띄운다.
- 사용자가 입력한 보너스 로또 번호가 유효한지 테스트
  - 유효한 양의 정수 값이 들어오지 않으면 에러를 띄운다.
  - 로또 번호와 중복된 값이 있으면 에러를 띄운다.
  - 로또 번호 범위에 벗어나는 값이 들어오면 에러를 띄운다.
  </details>

<details>
<summary>Lotto Class</summary>

- 로또 번호가 지정된 로또 번호 개수와 일치하지 않으면 에러를 발생한다.
- 로또 번호 중 적절하지 않은 값이 들어있으면 에러를 발생한다. ( 문자, 음수, 소수, 0 )
- 로또 번호 중 로또 번호 범위를 벗어나지 않으면 에러를 발생한다.
- 로또 번호 중 중복된 값이 있는 경우 에러를 발생한다.
</details>

<details>
<summary>LottoBonus Class</summary>

- 보너스 로또 번호가 로또 번호와 중복된 경우 에러가 발생한다.
- 보너스 로또 번호가 적절하지 않은 값이면 에러를 발생한다. ( 문자, 음수, 소수, 0 )
  </details>

<details>
<summary>LottoCycle Class</summary>

- 로또 번호가 주어졌을 때 로또 번호의 등수를 계산할 수 있다.
- 로또 게임의 수익률을 구할 수 있다.
</details>

<details>
  <summary>LottoCheck Util</summary>

- 로또 당첨 번호와 일치하는 번호 개수를 구할 수 있다.
</details>

<details>
<summary>String Util</summary>

- 번호와 split 기준자로 이루어진 텍스트를 전달하면 숫자 배열을 반환한다.
</details>

<details>
<summary>Application Test ( PlayTest.js )</summary>

- 로또 구입 금액, 로또 번호, 보너스 번호 입력시, LottoCycle 인스턴스가 생성된다.
</details>

### 📂 폴더 구조

```
📂__test__
 ┣ 📜ApplicationTest.js
 ┣ 📜LottoBonusTest.js
 ┣ 📜LottoCheckTest.js
 ┣ 📜LottoCycleTest.js
 ┣ 📜LottoTest.js
 ┣ 📜PlayTest.js
 ┣ 📜StringUtilTest.js
 ┣ 📜VarificateTest.js
 ┗ 📜VarificationManagerTest.js

📂docs
 ┗ 📜README.md

📂src
 ┣ 📂Utils
 ┃ ┣ 📜MessageConstants.js // 메세지 텍스트를 관리합니다.
 ┃ ┗ 📜LottoConstants.js // 로또 관련 상수를 관리합니다.
 ┃ ┣ 📜Computer.js // Raodom 번호를 생성합니다.
 ┃ ┣ 📜LottoBonus.js // 보너스 로또 번호를 관리하는 Class 입니다.
 ┃ ┣ 📜LottoCycle.js // 로또 번호, 보너스 번호, 구매 금액을 받아 당첨 결과를 계산하고, 보여줍니다.
 ┃ ┗ 📜VarificationManager.js // 여러 검증 로직을 엮어 새로운 특정 값에 대한 검증 로직을 관리함니다.
 ┣ 📂View
 ┃ ┗ 📜InputOutputManager.js // 사용자 입력, 출력을 관리합니다.
 ┣ 📂Utils
 ┃ ┣ 📜LottoCheck.js // 로또 번호가 몇개 맞았는지 계산하는 함수입니다.
 ┃ ┣ 📜StringUtil.js // 문자열 관련 기능을 관리하는 유틸함수입니다.
 ┃ ┗ 📜Varification.js // 검증 함수를 관리하는 유틸함수입니다.
 ┣ 📜App.js
 ┣ 📜Lotto.js // 사용자가 입력한 로또 번호를 관리하는 클래스입니다.
 ┗ 📜index.js
```
