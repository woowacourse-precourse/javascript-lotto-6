import { Console, Random } from '@woowacourse/mission-utils';
import Game from '../src/Game.js';

const spyFn = jest.spyOn(Console, "print");
const mockInput = (inputs) => {
  Console.readLineAsync = jest.fn(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};
const mockRandom = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
}

describe("게임 클래스 테스트", () => {
  test("로또 한장을 구매하여 모든 숫자가 맞는다", async () => {
    mockRandom([[1, 2, 3, 4, 5, 6]]);
    mockInput(["1000", "1,2,3,4,5,6", "7"]);

    const game = new Game();
    await game.play();

    const logs = [
      "1개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 2000000000.0%입니다.",
    ];

    logs.forEach((log) => {
      expect(spyFn).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});