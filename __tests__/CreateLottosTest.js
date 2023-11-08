import App from '../src/App';
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
    MissionUtils: {
        Random: {
            pickUniqueNumbersInRange: jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6])
        },
        Console: {
            print: jest.fn(),
        }
    }
}));

function expectLottosToMatchMockNumbers(app, mockNumbers) {
    expect(app.lottos.length).toBe(5);
    app.lottos.forEach(lotto => {
        expect(lotto.numbers).toEqual(mockNumbers);
    });

    expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(5);
    expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledWith(1, 45, 6);
}

describe('App', () => {
    let app;

    beforeEach(() => {
        app = new App();
        app.purchaseAmount = 5000;
    });

    describe('generateLottos()', () => {
      it('1과 45 사이의 중복되지 않는 숫자를 생성해야 한다', () => {
        const mockNumbers = [1, 2, 3, 4, 5, 6];
        MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValue(mockNumbers);

        app.generateLottos();

        expectLottosToMatchMockNumbers(app, mockNumbers);
      });
    });
});