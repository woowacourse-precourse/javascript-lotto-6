# Lotto-Game

### 로또 게임은 구입 금액에 따른 수익률을 예측하는 프로그램입니다.

> 1. 한 장의 로또는 서로 다른 6개의 숫자로 이루어져 있습니다.
> 2. 숫자의 범위는 1에서부터 45까지 입니다.
> 3. 장당 로또의 가격은 1,000원 입니다.
> 4. 구매할 로또의 금액을 입력하면 구매한 로또를 보여줍니다.
> 5. 당첨 번호와 보너스 번호를 입력하면 등수별로 당첨된 수량과 수익률을 보여줍니다.

### 기능 목록

- [x] 구입금액을 입력 받는다. request.money
    - [x] 입력값이 유효한지 확인한다. validate.money
    - [x] 유효하지 않으면 [ERROR]를 출력하고, 해당 부분에서 다시 진행한다.
        - [x] request.money 테스트 진행 
    - [x] 금액에 맞는 복권의 매수를 계산해서 값을 넣는다. - calculate.countFrom();

- [x] 구입한 로또의 수만큼 로또를 발행한다. lottoMachine.make();
    - [x] 로또의 발행은 pickUniqueNumbersInRange()을 사용하고, 그 값을 정렬한다.
    - [x] Lotto 클래스를 사용해서 필드값에 넣는다.

- [x] 구입한 수량을 출력한다. prompt.out(lottoCount());
- [x] 구입한 로또를 출력한다. prompt.out(#lottos);

- [x] 당청 번호를 입력 받는다. request.winningNumber 
    - [x] 입력값이 적당한지 확인한다. validate.winningNumber()
    - [x] 유효하지 않으면 [ERROR]를 출력하고, 해당 부분에서 다시 진행한다.
    - [x] 당첨번호를 정렬한 후 값으로 저장한다.
- [x] 보너스 번호를 입력 받는다. request.bonusNumber
    - [x] 입력값이 적당한지 확인한다. validate.bonusNumber()
    - [x] 유효하지 않으면 [ERROR]를 출력하고, 해당 부분에서 다시 진행한다.
    - [x] 보너스 번호를 값으로 저장한다.

- [x] 구입한 로또와 당첨번호를 비교해서 당첨결과를 만든다. lottoMachine.read();
- [x] 수익률을 계산한다. calculate.profitFrom();

- [x] 수익률과 당첨결과를 받아서 당첨 통계를 출력한다. prompt.out(statistic());
