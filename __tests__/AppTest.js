import App from "../src/App.js";
import Lotto from "../src/Lotto.js";
import IO from "../src/Util/IOHandler.js";

const mockRandom = [1, 2, 3, 4, 5, 6];
const mockLotto = [new Lotto(mockRandom)];

const logs = [
  "3개 일치 (5,000원) - 0개",
  "4개 일치 (50,000원) - 0개",
  "5개 일치 (1,500,000원) - 0개",
  "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
  "6개 일치 (2,000,000,000원) - 0개",
];

test("당첨 횟수에 따라 올바른 메시지가 출력되어야 한다.", () => {
  //given
  const logSpy = jest.spyOn(IO, "print");
  const prize = {
    line: [1, 2, 3, 4, 5, 16],
    bonus: 6,
  };

  //when
  const app = new App(1000);
  const result = app.compare(mockLotto, prize);
  app.printResult(result);

  //then
  logs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(log);
  });
});
