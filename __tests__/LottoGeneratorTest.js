import LottoGenerator from "../src/LottoGenerator.js";
import {
  LOTTO_NUMBERS_COUNT,
  LOTTO_NUMBER_END,
  LOTTO_NUMBER_START,
} from "../src/utils/lottoConstants.js";
import {
  isArrayOfNumbersInRange,
  isArrayOfUniqueNumbers,
} from "../src/utils/numberArrayUtils.js";
import { mockReadLineAsync } from "../src/utils/testUtils.js";

let lottoGenerator;

beforeEach(() => {
  lottoGenerator = new LottoGenerator();
  jest.restoreAllMocks();
});

describe("getMoneyFromUserInput", () => {
  test("유효한 입력이 제공되면 유효한 숫자를 반환", async () => {
    const MONEY = "20000";
    mockReadLineAsync(MONEY);

    const money = await lottoGenerator.getMoneyFromUserInput();

    expect(money).toBe(20000);
  });
});

describe("calculateNumberOfLotto", () => {
  test("금액을 기반으로 로또 티켓 수를 정확하게 계산", () => {
    const MONEY = 20000;
    const numberOfLotto = lottoGenerator.calculateNumberOfLotto(MONEY);

    expect(numberOfLotto).toBe(20);
  });
});

describe("calculateNumberOfLotto", () => {
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
});

describe("getLottoTickets", () => {
  test("입력 금액을 기반으로 여러 개의 로또 티켓을 생성해야 함", async () => {
    const MONEY = "20000";
    mockReadLineAsync(MONEY);

    const lottoTickets = await lottoGenerator.getLottoTickets();

    const expectedNumberOfTickets = 20;
    expect(lottoTickets.length).toBe(expectedNumberOfTickets);
  });
});
