import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock('@woowacourse/mission-utils', () => ({
    MissionUtils: {
      Random: {
        pickUniqueNumbersInRange: jest.fn(),
      },
      Console: {
        print: jest.fn(),
        readLineAsync: jest.fn(),
      }
    }
  }));

describe("App", () => {
let app;

const setupMockForPlay = (purchaseAmount) => {
  MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
  MissionUtils.Console.readLineAsync.mockResolvedValueOnce(purchaseAmount);
};

const verifyLottoGeneration = (expectedLottoCount) => {
  expect(app.lottos.length).toBe(expectedLottoCount);
  app.lottos.forEach(lotto => {
    expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(`${expectedLottoCount}개를 구매했습니다.\n`);
};
  
beforeEach(() => {
    app = new App();
  });

afterEach(() => {
  jest.clearAllMocks();
})
  
it("입력한 금액에 해당하는 로또를 발행한다", async () => {
    const purchaseAmount = "5000";
    const expectedLottoCount = 5;

    setupMockForPlay(purchaseAmount);

    await app.play();

    verifyLottoGeneration(expectedLottoCount);
  });
});

