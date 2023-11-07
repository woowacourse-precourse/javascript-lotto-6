import Lotto from "../../../src/Lotto";
import ReferenceLotto from "../../../src/lib/Domain/ReferenceLotto";
import InputHandler from "../../../src/lib/Handler/InputHandler";
import { mockQuestions, mockRandoms } from "../../ApplicationTest";

describe("InputHandler.lottoBundle - 기능", () => {
  test("구입 금액에 대한 잘못된 입력이 주어지면 올바른 입력이 주어질 때까지 다시 시도해야 한다.", async () => {
    // given
    const questions = ["2400", "0", "-1", "32500", "foo", "3000"];
    const randoms = [
      [1, 2, 3, 4, 5, 6],
      [4, 5, 6, 12, 13, 14],
      [3, 4, 5, 6, 12, 13],
      [2, 3, 4, 5, 6, 12],
      [2, 3, 4, 5, 6, 7],
    ];
    mockQuestions(questions);
    mockRandoms(randoms);

    // when
    const lottoBundle = await InputHandler.lottoBundle();

    // then
    expect(lottoBundle.purchaseHistory).toEqual(randoms.slice(0, 3));
  });
});

describe("InputHandler.referenceLotto - 기능", () => {
  test("당첨 번호에 대한 잘못된 입력이 주어지면 올바른 입력이 주어질 때까지 다시 시도해야 한다.", async () => {
    // given
    const questions = [
      "1000",
      "1,2,3,4",
      "1,2,3,4,5,46",
      "0,1,2,3,4,5",
      "1,2,3,4 ,5,6",
      "1,2,3,4,5,5",
      "1,2,3,4,5,-6",
      "1,2,3,foo,5,6",
      "1,2,3,4,5,6",
    ];
    const bonus = 7;
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    const expectedPrize = 1;
    mockQuestions(questions);

    // when
    const referenceLotto = await InputHandler.referenceLotto();
    referenceLotto.bonus = bonus;
    // lotto의 #numbers는 private 필드므로 이를 변경하거나, getter를 별도 설정하지 않는 한 검증할 방법이 없음.
    // 불변성 이외에 '보안' 역시 목적 중 하나라고 간주하여 getter로 우회하지 않고 등수 계산을 통해 값이 일치하는지 검증함
    const result = lotto.calcPrize(referenceLotto);

    // then
    expect(result).toEqual(expectedPrize);
  });
});

describe("InputHandler.injectBonus - 기능", () => {
  test("보너스 번호에 대한 잘못된 입력이 주어지면 올바른 입력이 주어질 때까지 다시 시도해야 한다.", async () => {
    // given
    const questions = [["0", "-1", "46", "foo", "", "1", "7"]].reduce(
      (acc, e) => acc.concat(e),
    );
    const numbers = [1, 2, 3, 4, 5, 6];
    const expected = 7;
    mockQuestions(questions);

    // when
    const referenceLotto = new ReferenceLotto(numbers);
    await InputHandler.injectBonus(referenceLotto);

    // then
    expect(referenceLotto.bonus).toEqual(expected);
  });
});

describe("InputHandler.injectBonus - 예외", () => {
  test("로또를 생성하지 않고 보너스 번호를 검증하려고 시도하면 에러를 발생시켜야 한다.", async () => {
    // given
    const questions = ["7"];
    mockQuestions(questions);

    // then
    await expect(() => InputHandler.injectBonus()).rejects.toThrow("[ERROR]");
  });
});
