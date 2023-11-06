import App from '../src/App';
import * as CalculateUtils from '../src/utils/Calculate';
import {
    LOTTO_PRICE,
    MATCH,
} from '../src/utils/Define';
import Lotto from '../src/Lotto';

jest.mock('../src/utils/Calculate');

describe('로또 앱 테스트', () => {
    let app;

    beforeEach(() => {
        app = new App();
        jest.spyOn(CalculateUtils, 'generateLotto').mockImplementation(() => new Lotto([1, 2, 3, 4, 5, 6]));
    });

    test('로또 구매 금액을 설정하고 로또를 생성한다.', () => {
        app.purchaseAmount = 5000;
        const expectedNumberOfLottos = app.purchaseAmount / LOTTO_PRICE;
        CalculateUtils.generateLotto = jest.fn(() => new Lotto([1, 2, 3, 4, 5, 6]));

        app.purchaseLottos();

        expect(CalculateUtils.generateLotto).toHaveBeenCalledTimes(expectedNumberOfLottos);
        expect(app.lottos).toHaveLength(expectedNumberOfLottos);
    });

    test('당첨 번호를 비교하여 맞춘 개수에 따라 결과를 업데이트한다.', () => {
        app.lottos = [
            new Lotto([1, 2, 3, 4, 5, 6]),
            new Lotto([7, 8, 9, 10, 11, 12]),
            new Lotto([1, 2, 3, 4, 5, 7]),
        ];
        CalculateUtils.calculateMatchCount = jest.fn()
            .mockReturnValueOnce(6)
            .mockReturnValueOnce(0)
            .mockReturnValueOnce(5);

        app.evaluateLottos({ winningNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 });

        expect(app.results[MATCH.THREE]).toBe(0);
        expect(app.results[MATCH.FOUR]).toBe(0);
        expect(app.results[MATCH.FIVE]).toBe(0);
        expect(app.results[MATCH.FIVE_BONUS]).toBe(1);
        expect(app.results[MATCH.SIX]).toBe(1);
    });

    test('보너스 번호가 포함되었을 때 결과를 정확히 업데이트한다.', () => {
        app.lottos = [
            new Lotto([1, 2, 3, 4, 5, 7]),
        ];
        CalculateUtils.calculateMatchCount = jest.fn(() => 5);
        CalculateUtils.checkBonus = jest.fn(() => true);

        app.evaluateLottos({ winningNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 });

        expect(app.results[MATCH.FIVE]).toBe(0);
        expect(app.results[MATCH.FIVE_BONUS]).toBe(1);
    });

    test('matchCount가 3 미만일 경우 결과를 업데이트하지 않는다.', () => {
        const app = new App();
        app.updateResults(2, false);

        expect(app.results).toEqual({"3": 0,"4": 0,"5": 0,"5+": 0, "6": 0,});
    });
});