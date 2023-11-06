import LotteryMachine from "../src/domain/LotteryMachine.js";

test("로또 티켓 발행기. 금액을 넣으면 올바른 수량의 로또가 발행 되었는가?", () => {
  const purchaseAmount = 10000;
  const lottoTicketLength = 10;
  const lotteryMachine = new LotteryMachine(purchaseAmount);
  
  expect(lotteryMachine.getTiket().length).toEqual(lottoTicketLength);
});