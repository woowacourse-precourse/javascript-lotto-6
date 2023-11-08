## 기능 구현 목록

핵심 목표 : 당첨 확인.

[x] 로또 구입 금액을 입력 받는다.<br>
[x] 입력받은 금액에 대한 유효성 검사.<br>
[x] 입력 받은 금액에 대한 갯수만큼 랜덤 6자리 숫자 배열 생성.<br>
[x] 번호를 출력한다.<br>
[x] 당첨 번호를 입력 받는다.<br>
[x] 입력된 당첨 번호에 대해서 유효성 검사를 한다.<br>
[x] 보너스 번호를 입력 받는다.<br>
[x] 보너스 번호에 대한 유효성 검사를 한다.<br>
[x] 당첨 번호와 로또 번호를 비교 한다.<br>
[x] 수익률을 구한다.<br>
[x] 당첨 내역을 출력한다.<br>

---

## 예외사항

- 입력된 구입 금액.

  1. 금액이 1000원 단위인가.
  2. 금액이 숫자인가.

- 입력된 당첨 번호.

  1. 번호가 모두 숫자인가.
  2. 번호에 0이 포함됐는가.
  3. 번호가 6자리인가.
  4. 번호가 중복됐는지.

- 입력된 보너스 번호.

  1. 번호가 숫자인가.
  2. 번호가 1에서 45사이 숫자인가.

---

## MVC 패턴

- Model : Lotto(Class), BonusNumber(Class), PurchaseMoney(Class), PurchasedNumbers(Class)
- Controller : LottoGame(Class)
- View : View(Class)
- domain : LottoResult(Object)

핵심목표인 당첨 확인을 위해 당첨에 의사결정을 가진 로직을 domain으로 별도 분리.<br>

### Model

- Lotto

  - 당첨 번호 6자리 유효성 검사.
  - 당첨 번호 6자리 생성.

- PurchaseMoney

  - 구매 금액 유효성 검사.
  - 구매 금액 생성.

- PurchasedNumber

  - 사용자 번호 랜덤 6자리 숫자 생성.

- BonusNumber

  - 보너스 번호 유효성 검사.
  - 보너스 번호 생성.

### View

- View

  - 로또 구입 금액을 입력 받는다.
  - 당첨 번호를 입력 받는다.
  - 보너스 번호를 입력 받는다.
  - 번호를 출력한다.
  - 당첨 내역을 출력한다.
  - 게임 진행 메세지 출력.

### Controller

- LottoGame
  - 사용자로부터 입력받은 값을 View로 전달한다.
  - 출력될 결과를 Model로 부터 받아와 계산 로직을 처리한후 View로 전달한다.

### Domain

- LottoResult
  - 당첨 번호와 로또 번호를 비교.
  - 수익률을 구한다.

### Util

- RandomNumber : 범위 내의 숫자를 랜덤으로 정해진 길이만큼 생성하고 정렬하여 반환한다.

- ValidationUtils : 유효성 검사 유틸리티 함수.

---

## Test

> 테스트 코드는 Model, Controller, Domain 테스트를 진행했습니다.

### ModelValidationTest

각 입력받은 모델들의 예외사항에 대한 유효성 검사를.

### LottoGameTest

컨트롤러인 LottoGame 클래스 내부 메소드와 컨트롤러 테스트를 진행했습니다.

### LottoResultTest

컨트롤러에서 사용되는 메인 도메인 로직 테스트를 진행했습니다.
