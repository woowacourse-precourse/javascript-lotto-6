import Lotto from "../src/Lotto.js";
import Ticket from "../src/ticket.js";
import { LOTTO_PRICE, MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, MAX_LOTTO_LENGTH } from "../src/Constatns.js";
import getLottos from "../src/getLottos.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 중복된 번호가 있습니다.");
  });

  test("로또 번호가 1부터 45의 범위를 넘으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR] 번호는 1부터 45 사이의 숫자여야 합니다");
  });

  test("구매 금액이 1000원 미만이면 예외가 발생한다.", () => {
    expect(() => {
      const ticket = new Ticket();
      ticket.validateTicketMoney(700);
    }).toThrow("[ERROR] 로또 구매 금액은 1000원 이상이어야 합니다.");
  });

  test("구매 금액이 1000원 단위가 아니면 예외가 발생한다", () => {
    expect(() => {
      const ticket = new Ticket();
      ticket.validateTicketMoney(1200);
    }).toThrow("[ERROR] 로또 구매 금액은 1000원 단위어야 합니다.");
  });

  test("티켓은 구매금액/1000개 만큼 생성이 되어야 한다", () => {
    const ticket = new Ticket();
    const numberOfTickets = ticket.purchase(10000);
    expect(numberOfTickets).toBe(10);
  });

  test("티켓은 1부터 45까지 범위의 수로 랜덤하게 생성되어야 한다", () => {
    const lottos = getLottos.getOneLotto();
    for (number of lottos) {
      expect(number).toBeGreaterThanOrEqual(MIN_LOTTO_NUMBER);
      expect(number).toBeLessThanOrEqual(MAX_LOTTO_NUMBER);
    }
  });

  test("로또 번호와 보너스 번호에 대한 당첨 티켓 순위 계산이 올바로 동작해야 한다", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottos = [1, 2, 3, 4, 5, 6];
    const lottos2 = [1, 2, 3, 4, 5, 7];
    const lottos3 = [1, 2, 3, 4, 42, 43];
    const lottos4 = [1, 2, 3, 41, 42, 43];
    const bonusLotto = 7;
    const bonusLotto2 = 45;

    const win = lotto.lottoRanksCount(lottos, bonusLotto);
    expect(win).toBe(1);

    const win2 = lotto.lottoRanksCount(lottos2, bonusLotto);
    expect(win2).toBe(3);

    const win3 = lotto.lottoRanksCount(lottos2, bonusLotto2);
    expect(win3).toBe(2);

    const win4 = lotto.lottoRanksCount(lottos3, bonusLotto);
    expect(win4).toBe(4);

    const win5 = lotto.lottoRanksCount(lottos4, bonusLotto);
    expect(win5).toBe(5);
  });

  test("로또 수익율은 소수점 둘째 자리에서 반올림 한다", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    let profit = lotto.getProfit(100000, [1, 1, 1, 1, 1]);
    profit = profit.toFixed(1);
    expect(profit).toBe("2031555.0");
  });
});
