import { MissionUtils } from "@woowacourse/mission-utils";
import InputVeiw from "../src/veiw/input-veiw";

const mockInput = (input) => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockResolvedValue(input);
};

describe("입력값 테스트", () => {
    test("구입금액 입력 테스트", async () => {
        //given
        const input = 14000;
        mockInput(input);

        //when
        const inputValue = new InputVeiw()
        const output = await inputValue.readPurchaseAmount();

        //then
        expect(output).toEqual(14);
    });
});
  