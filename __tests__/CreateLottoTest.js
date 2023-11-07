import GameModel from "../src/LottoGame/GameModel.js";

describe("로또 생성 및 출력 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("BUYING_MONEY 상수 확인", async () => {
    const mockData = "3000";
    // when
    const model = new GameModel();
    await model.lottoCount(mockData);

    // then
    expect(model.LOTTO_COUNT).toBe(3);
  });
});
