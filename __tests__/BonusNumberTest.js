import { BonusNumber } from "../src/LottoInput/BonusNumber.js";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.spyOn(MissionUtils.Console, 'readLineAsync');

describe("보너스 번호 입력 테스트", () => {
    let bonusNumber;

    beforeEach(() => {
        const winNumbers = [1, 2, 3, 4, 5, 44];
        bonusNumber = new BonusNumber(winNumbers);
    });

    test("보너스 번호가 로또 번호와 중복되면 예외가 발생한다.", async () => {
        MissionUtils.Console.readLineAsync.mockImplementation(() => Promise.resolve(6));
        try {
            await bonusNumber.bonusNumber();
        } catch (error) {
            expect(error.message).toBe("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
        }
    });

    test("보너스 번호가 로또 번호와 중복되지 않으면 보너스 번호를 반환한다.", async () => {
        MissionUtils.Console.readLineAsync.mockImplementation(() => Promise.resolve(30));
        const expectedBonusNumber = 30;
        expect(await bonusNumber.bonusNumber()).toBe(expectedBonusNumber);
    });
});
