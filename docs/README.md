# 🚀 기능 구현 목록

- [x] 구입금액 만큼 로또 티켓을 발행한다. - `LottoShop.issueLottoTickets(buyingPrice)`
- [x] 로또 티켓 1장을 발행한다. - `LottoShop.#issueLottoTicket()`
- [x] 로또 번호를 생성한다. - `LottoShop.#createLottoNumbers()`

- [x] 로또 당첨을 확인한다. - `LottoResultChecker.checkLottoResult(lottoTickets)`
- [x] 당첨 번호와 로또 티켓 번호를 비교한다. - `LottoResultChecker.#matchLottoBalls(lottoTicket)`
- [x] 로또 번호에서 당첨 번호와 일치하는 숫자의 개수를 계산한다. - `LottoResultChecker.#countSameNumber(lottoTicket)`
- [x] 로또 번호에 보너스 번호가 있는지 확인한다. - `LottoResultChecker#hasBonusNumber(lottoTicket)`
- [x] 인수로 전달한 등수에 당첨된 로또의 개수를 계산한다. - `LottoResultChecker#getResultCount(count, flag)`

- [x] 수익률을 계산한다. - `LottoReturnRateCalculator.calculateReturnRate()`
- [x] 총 수익을 계산한다. - `LottoReturnRateCalculator.#calculateTotalProfit()`

<br />

# ⚠ 입력 예외 처리

### 구입 금액

- [x] 숫자만 입력 받는다.
- [x] 0보다 커야 한다.
- [x] 1,000원 단위이어야 한다.

### 당첨 번호

- [x] 숫자만 입력 받는다.
- [x] 6개여야 한다.
- [x] 1보다 크거나 같고 45보다 작거나 같아야 한다.
- [x] 중복 숫자가 없어야 한다.

### 보너스 번호

- [x] 숫자만 입력 받는다.
- [x] 1보다 크거나 같고 45보다 작거나 같아야 한다.
- [x] 당첨 번호와 중복 숫자가 있으면 안 된다.
