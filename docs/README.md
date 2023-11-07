## 📂 파일 구조

```
src
 ┣ constants
 ┃ ┗ constants.js
 ┣ controller
 ┃ ┗ LottoGameController.js
 ┣ model
 ┃ ┗ LottoTicket.js
 ┣ service
 ┃ ┗ LottoService.js
 ┣ utils
 ┃ ┣ RandomGenerator.js
 ┃ ┗ Validator.js
 ┣ views
 ┃ ┣ InputView.js
 ┃ ┗ OutputView.js
 ┣ App.js
 ┣ Lotto.js
 ┗ index.js

```

<br>

## 🚀 구현 기능 목록

1. 구입금액을 입력받는 기능
   - (예외) 1,000원 단위가 아닌 경우
   - (예외) 1,000원 이하인 경우
   - (예외) 숫자가 아닌 경우
2. 구입금액에 맞게 로또 번호를 발행하는 기능
   - 1,000원 단위로 로또 1장씩 발행
   - 1~45 사이의 숫자, 중복 숫자 없음, 총 6개의 번호
3. 로또 번호를 출력하는 기능
   - 오름차순으로 정렬하여 출력
4. 당첨 번호를 입력하는 기능
   - 쉼표로 구분
   - (예외) 숫자가 아닌 경우
   - (예외) 번호가 6개가 아닌 경우
   - (예외) 1~45 사이의 숫자가 아닌 경우
   - (예외) 중복되는 숫자가 존재하는 경우
5. 보너스 번호를 입력하는 기능
   - (예외) 숫자가 아닌 경우
   - (예외) 1~45 사이의 숫자가 아닌 경우
   - (예외) 당첨 번호와 중복되는 숫자인 경우
6. 일치하는 번호 개수를 구하는 기능
7. 당첨통계를 구하고 출력하는 기능
   - 1등: 6개 번호 일치
   - 2등: 5개 번호, 보너스 번호 일치
   - 3등: 5개 번호 일치
   - 4등: 4개 번호 일치
   - 5등: 3개 번호 일치
8. 수익률을 구하고 출력하는 기능
   - 소숫점 둘째 자리에서 반올림

<br>

## 🔍 Description

### LOTTO 프로젝트 소개

구입금액을 입력하면 1,000원에 1장씩 로또가 발행됩니다. <br> 당첨 번호와 보너스 번호를 입력하면 발행된 로또와 일치하는 번호 개수를 구합니다. <br> 구입금액과 일치하는 번호 개수에 따른 상금 금액으로 수익률을 계산합니다. <br> <br>

## 🔗 Class Diagram

```mermaid

classDiagram
  class LottoGameController {
    -lottoService
    +run()
    -takePurchaseMoneyStage()
    -issueTicketStage(purchaseMoney)
    -takeWinningNumberStage()
    -takeBonusNumberStage(winningLotto)
    -checkPrizeStage(winningNumbers, bonusNumber)
    -printResultStage()
  }

  class LottoService {
    -purchaseMoney
    -tickets
    -prize
    +constructor(purchaseMoney)
    +issueTickets()
    +calculatePrizeResult(winningNumbers, bonusNumber)
    +calculateProfitRate()
  }

  class InputView {
    +readPurchaseMoney()
    +readWinningNumbers()
    +readBonusNumber(winningLotto)
  }

  class OutputView {
    +printTickets(tickets)
    +printPrizeTitle()
    +printPrizeResult(result)
    +printProfitRate(profitRate)
  }

  class LottoTicket {
    +issueTickets(purchaseMoney)
    -createLotto()
  }

  class Lotto {
    -numbers
    +constructor(numbers)
    +getWinningNumbers()
    +checkPrize(winningNumbers, bonusNumber)
    -checkMatchNumbers(winningNumbers)
    -hasBonusNumber(bonusNumber)
  }

  LottoGameController --> LottoService : 로또 게임 결과 생성
  LottoGameController --> InputView : 입력값 반환
  LottoGameController --> OutputView : 데이터 출력
  LottoService --> Lotto : 당첨 결과 생성
  LottoService --> LottoTicket : 랜덤 로또 생성

```

<br>

## 📈 Flow Chart

```mermaid

flowchart TB

    A[게임 시작 <br> App] --> B(구입금액 입력 <br> InputView)
    B --> C{구입금액 유효성 검사 <br> Validator}
    C -->|yes| D[랜덤 로또 발행 <br> LottoTicket]
    C --> |no| B
    D --> E(당첨 번호 입력 <br> InputView)
    E --> F{당첨 번호 유효성 검사 <br> Validator}
    F -->|yes| G(보너스 번호 입력 <br> InputView)
    F --> |no| E
    G --> H{보너스 번호 유효성 검사 <br> Validator}
    H --> |yes| I[등수 결정 <br> Lotto]
    H --> |no| G
    I --> J[당첨통계 및 수익률 계산 <br> LottoService]
    J --> K(결과 출력 <br >OutputView)
    K --> L[게임 종료]

```
