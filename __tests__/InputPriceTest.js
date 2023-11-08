import { PurChasePrice } from "../src/LottoInput/PurChasePrice.js";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.spyOn(MissionUtils.Console, 'readLineAsync');

describe("구매 가격 입력 테스트", () => {
    let purchasePrice;

    beforeEach(() => {
        purchasePrice = new PurChasePrice();
    });

    test("입력 값이 1,000으로 나누어 떨어지지 않으면 예외가 발생한다.", async () => {
        MissionUtils.Console.readLineAsync.mockImplementation(() => Promise.resolve(1500));
        try {
            await purchasePrice.inputPrice();
        } catch (error) {
            expect(error.message).toBe("[ERROR] 입력 값이 1,000으로 나누어 떨어지지 않습니다.");
        }
    });

    test("입력 값이 1,000으로 나누어 떨어지면 로또 구매 개수를 반환한다.", async () => {
        MissionUtils.Console.readLineAsync.mockImplementation(() => Promise.resolve(2000));
        const lottoCount = await purchasePrice.inputPrice();
        expect(lottoCount).toBe(2);
    });
});
