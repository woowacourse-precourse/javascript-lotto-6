import LottoGenerator from "../src/LottoGenerator.js";
import {
  LOTTO_NUMBERS_COUNT,
  LOTTO_NUMBER_END,
  LOTTO_NUMBER_START,
  LOTTO_PRICE,
} from "../src/utils/lottoConstants.js";
import {
  isArrayOfNumbersInRange,
  isArrayOfUniqueNumbers,
} from "../src/utils/numberArrayUtils.js";

let lottoGenerator;

beforeEach(() => {
  lottoGenerator = new LottoGenerator();
});

describe("로또 발행 테스트", () => {
  test("금액을 기반으로 로또 티켓 수를 정확하게 계산", () => {
    const MONEY = 20000;
    const NUMBER_OF_LOTTO = MONEY / LOTTO_PRICE;

    const numberOfLotto = lottoGenerator.calculateNumberOfLottoTickets(MONEY);

    expect(numberOfLotto).toBe(NUMBER_OF_LOTTO);
  });

  test("유일한 번호로 구성된 단일 로또 티켓을 생성", () => {
    const lottoTickets = lottoGenerator.generateSingleLottoTicket();

    expect(lottoTickets.length).toBe(LOTTO_NUMBERS_COUNT);

    expect(isArrayOfUniqueNumbers(lottoTickets)).toBe(true);

    expect(
      isArrayOfNumbersInRange(
        lottoTickets,
        LOTTO_NUMBER_START,
        LOTTO_NUMBER_END
      )
    ).toBe(true);
  });

  test("입력 금액을 기반으로 여러 개의 로또 티켓을 생성해야 함", async () => {
    const MONEY = 20000;

    const lottoTickets = await lottoGenerator.getLottoTickets(MONEY);

    const expectedNumberOfTickets = 20;
    expect(lottoTickets.length).toBe(expectedNumberOfTickets);
  });
});
