# 프리코스 3주차 미션 - :gift: 로또

### :ocean: USER APP FLOW

1. 로또 구입 금액, 당첨 번호, 보너스 번호 입력하기
2. 발행한 로또 수량 및 로또 번호 출력
3. 당첨 내역 및 수익률 출력

---

### :clipboard:구현 기능 목록

[ 입력 기능 ]

각 기능을 벗어나는 입력에 대한 예외처리 후 재입력

- 로또 구입 금액 입력
  - 1,000 단위의 입력
- 당첨 번호 입력
  - 쉼표(,)를 기준으로 구분
- 보너스 번호 입력

[ 로또 번호 결정 기능 ]

- 6개의 랜덤 번호를 결정한다. 오름차순으로 정렬하여 출력한다.
  - 한 로또 내에서 중복 숫자는 존재해선 안된다.
  - 범위를 벗어나는 숫자는 존재해선 안된다. (1~45)

[ 당첨 여부 판별 기능 ]

- 각 로또별로 당첨 여부를 판별한다.
  - `3 개 일치 (5,000원)`
  - `4개 일치 (50,000원)`
  - `5개 일치 (1,500,000원)`
  - `5개 일치, 보너스 볼 일치 (30,000,000원)`
  - `6개 일치 (2,000,000,000원)`

[ 수익률 판별 기능 ]

- 구매 로또에 대한 수익률을 계산하여 출력한다.

---

### :page_facing_up: 파일 구조도

- src
  - constants
    - ErrorMessage.js
    - InputMessage.js
    - LottoSettings.js
    - OutputMessage.js
  - controllers
    - LottoController.js
  - models
    - Lotto.js
    - PurchasedLottos.js
    - Result.js
  - utils
    - messages.js
    - Validator.js
  - views
    - InputView.js
    - OutputView.js
  - App.js
  - index.js

---
