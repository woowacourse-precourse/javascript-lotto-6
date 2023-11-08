import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn().mockImplementationOnce(() => numbers);
};

describe("generateLottos() 테스트", () => {
  test("금액에 맞는 로또를 구매한다.", async () => {
    const app = new App();
    app.cost = 3000;
    app.generateLottos();
    expect(app.lottos).toHaveLength(3);
  });
});
describe("makeLotto() 테스트", () => {
  test("1~45 사이의 6자리 숫자를 생성한다.", () => {
    const app = new App();
    mockRandoms([1, 2, 3, 4, 5, 6]);
    expect(app.makeLotto().getNumbers()).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
  });
});
