# 미션 - 로또

## 순서

-[X] play()
    - 게임을 시작함
-[X] Lotto.js
    - 로또 객체 생성
-[X] buyLottoTickets()
    - 로또 구입 금액을 입력 받는다.
    - 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
-[X] getMaxPurchasedTickets()
    - 로또 티켓의 최대 구매 가능 개수를 계산하고 반환한다.
-[X] randomInt()
    - 랜덤한 값 반환
-[X] generateRandomNumbers()
    - 랜덤한 로또 번호를 생성하고 반환한다.
-[X] getLottoNumbersArray()
    - 로또 티켓의 최대 구매 가능 개수만큼 랜덤한 로또 번호 배열을 만들고 반환한다.
-[X] inputWinningNumbers()
    - 당첨 번호를 입력 받는다.
    - 번호는 쉼표(,)를 기준으로 구분한다.
-[X] inputBonusNumber()
    - 보너스 번호를 입력 받는다.

-[X] displayLottoNumbers()
    - 발행한 로또 수량 및 번호를 출력한다.
    - 로또 번호는 오름차순으로 정렬하여 보여준다.
-[X] printResults()
    - 당첨 내역을 출력한다.
-[X] printTotalEarningsRate()
    - 총 수익률을 출력한다.
    - 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)
-[X] 예외 상황 처리
    - 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.
