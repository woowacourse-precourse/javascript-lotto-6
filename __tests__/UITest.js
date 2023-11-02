import UI from "../src/UI";
import { mockQuestions } from "../test-utils";

describe("UI 클래스 테스트", () => {
  test("구매금액을 입력받으면 숫자로 변환된 금액을 반환한다", async () => {
    // given
    mockQuestions(["10000"]);

    // when
    const ui = new UI();
    const amount = await ui.askAmountForPurchase();

    // then
    expect(amount).toBe(10000);
  });
});
