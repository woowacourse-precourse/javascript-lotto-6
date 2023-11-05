## 로또

요구사항 정리

- indent depth가 3이 넘지 않아야 한다.
- Jest 라이브러리로 도메인 로직에 대한 테스트 코드를 작성한다.
- 함수 길이가 15라인을 넘지 않아야 한다. (함수 하나가 하나의 일을 하도록 구현한다.)
- else를 지양한다.
- UI, Domain 코드를 구분하여, Domain 코드에 대한 단위 테스트만 진행한다.
- 제시된 Lotto 클래스를 활용해야 하고, 추가적인 멤버 변수 설정은 불가하다.

<br />

- [x] Controller

  - 유저 입력을 받아서 Domain 로직 처리 요청을 하는 클래스
  - [x] domain - 주요 로직을 처리하는 Domain 인스턴스 : `Domain`

  메서드

  - [x] purchaseLottos - `async` 로또 구매 금액을 입력받아 domain의 purchaseLotto 메서드를 호출
  - [x] setWinnings - `async` 로또 당첨 번호를 입력받아 domain의 setWinnings 메서드를 호출
  - [x] setBonus - `async` 로또 보너스 번호를 입력받아 domain의 setBonus 메서드를 호출
  - [x] announceLottery - domain의 announceLottery 메서드를 호출
  - [x] announceProfit - domain의 announceProfit 메서드를 호출

--

- [x] Domain

  필드

  - [x] view - 입력, 반환할 View 인스턴스 : `View`
  - [x] #winnings - 당첨 번호 : `Array<number>`
  - [x] #bonus - 보너스 번호 : `number`
  - [x] #lottos - 생성된 로또(들) : `Array<Lotto>`
  - [x] #lotteryResults - 로또 당첨 결과 배열 : `Array<number>`

  메서드

  - [x] purchaseLottos - 입력받은 금액만큼 로또 인스턴스를 생성하여 배열로 할당
  - [x] setWinnings - `async` 입력받은 문자열 숫자 조합을 당첨 번호 숫자 배열로 할당
  - [x] setBonus - `async` 입력받은 문자열 숫자를 보너스 번호 숫자로 할당
  - [x] setLottoResults - 로또 배열을 순환하면서 로또 인스턴스의 matchWinnings 메서드를 호출하여 lotteryResults 배열 상태 업데이트
  - [x] announceLottery - lottery 메서드 호출, 로또 결과 발표
  - [x] announceProfit - 로또 수익률 발표

  getter

  - [x] getWinnings() - 당첨 번호 반환
  - [x] getBonus() - 보너스 번호 반환
  - [ ] getLottos() - 구매한 로또 인스턴스 배열 반환

--

- [x] View

  - [x] printConsole
  - [x] announcePurchasing
  - [x] announceLottery
  - [x] announceProfit
  - [x] errorNoInput
  - [x] errorPurchaseCost
  - [x] errorWinnings
  - [x] errorBonus

--

- [x] Lotto

  - [x] getNumbers (getter) - 로또 번호 배열을 반환하는 게터
  - [x] matchWinnings(winnings, bonus) - 생성된 로또 번호를 당첨 번호, 보너스 번호와 비교한 결과를 반환

--

- [x] Validation

  - [x] isEmpty(input) - 입력값이 비어있는지 확인
  - [x] isCorrectLength(input, length) - 입력값을 배열로 변환하였을 때, 길이가 맞는지 확인
  - [x] isNumber(input, length) - 입력값을 배열로 변환하였을 때, 요소가 전부 숫자형인지 확인
  - [x] isRepeatation(input) - 입력값을 배열로 변환하였을 때, 요소 중 중복값이 있는지 확인
  - [x] isCorrectWinnings(input) - 입력값이 올바른 당첨 번호인지 확인 (boolean)
  - [x] validateBonus(input) - 입력값이 올바른 보너스 번호인지 확인 (boolean)
  - [x] isCorrectCost(input) - 입력값이 올바른 구매액인지 확인 (boolean)

--

- [x] Utils
  - [x] genRandomLottoNumber - 로또를 생성할 6개의 난수 배열을 반환
  - [x] rankLottos(winning, bonus) - matchWinnings 메서드 내에서 호출될 로또 당첨 순위 반환 메서드 (5등부터 0으로 시작해서 1등 4까지 배열의 인덱스 번호를 반환)
  - [x] calculateProfit(rankArray, purchaseAmount) - 획득한 당첨금 / 구매 비용 으로 수익률을 계산하여 반환하는 메서드
