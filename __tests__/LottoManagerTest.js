import LottoManager from "../src/LottoManager.js";
import { getLogSpy, mockQuestions, mockRandoms } from "./ApplicationTest.js";

describe("로또 매니저 클래스 테스트", () => {
  test("당첨 번호와 보너스 번호를 입력하고 출력한다.", async () => {
    //given
    const lottoManager = new LottoManager(2);

    mockQuestions(["1,2,3,4,5,6", "7"]);

    //when
    await lottoManager.runLottoWithNumbers();

    // then
    expect(lottoManager.winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    expect(lottoManager.bonusNumber).toBe(7);
  });

  test("당첨 번호와 보너스 번호가 같으면 에러가 일어난다.", async () => {
    //given
    const lottoManager = new LottoManager(2);
    mockQuestions(["1,2,3,4,5,6", "6"]);

    // when & then
    await expect(async () => {
      await lottoManager.runLottoWithNumbers();
    }).rejects.toThrowError("[ERROR] 겹치는 숫자가 있습니다.");
  });

  test("로또 수만큼 랜덤한 숫자가 출력된다.", async () => {
    //given
    const logSpy = getLogSpy();

    const lottoManager = new LottoManager(2);

    const RANDOM_NUMBERS_TO_END = [
      [1, 2, 3, 4, 5, 6],
      [11, 12, 13, 14, 15, 16],
    ];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];

    mockRandoms(RANDOM_NUMBERS_TO_END);
    mockQuestions(INPUT_NUMBERS_TO_END);

    const logs = ["[1, 2, 3, 4, 5, 6]", "[11, 12, 13, 14, 15, 16]"];
    lottoManager.makeLottoAndPrint();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
