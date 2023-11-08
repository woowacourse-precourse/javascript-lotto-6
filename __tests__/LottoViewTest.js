import LottoView from '../src/LottoView.js';
import Lotto from '../src/Lotto.js';

describe('LottoView', () => {
    let lottoView;
    let mockConsolePrint;

    beforeEach(() => {
        mockConsolePrint = jest.spyOn(require('@woowacourse/mission-utils').MissionUtils.Console, 'print').mockImplementation();
        lottoView = new LottoView();
    });

    afterEach(() => {
        mockConsolePrint.mockRestore();
    });

    describe('displayLottoNumbers', () => {
        it('displayLottoNumbers 검증', () => {
            const lottos = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([7, 8, 9, 10, 11, 12])];

            lottoView.displayLottoNumbers(lottos);

            expect(mockConsolePrint).toHaveBeenCalledWith('2개를 구매했습니다.');
            expect(mockConsolePrint).toHaveBeenCalledWith('[1, 2, 3, 4, 5, 6]');
            expect(mockConsolePrint).toHaveBeenCalledWith('[7, 8, 9, 10, 11, 12]');
        });
    });

    describe('displayResults', () => {
        it('displayResults 검증', () => {
            const results = {3: 1, 4: 0, 5: 0, 5.1: 0, 6: 0};

            lottoView.displayResults(results);

            expect(mockConsolePrint).toHaveBeenCalledWith('당첨 통계\n---');
            expect(mockConsolePrint).toHaveBeenCalledWith('3개 일치 (5,000원) - 1개');
            expect(mockConsolePrint).toHaveBeenCalledWith('4개 일치 (50,000원) - 0개');
            expect(mockConsolePrint).toHaveBeenCalledWith('5개 일치 (1,500,000원) - 0개');
            expect(mockConsolePrint).toHaveBeenCalledWith('5개 일치, 보너스 볼 일치 (30,000,000원) - 0개');
            expect(mockConsolePrint).toHaveBeenCalledWith('6개 일치 (2,000,000,000원) - 0개');
        });
    });

    describe('displayTotalEarningsRate', () => {
        it('displayTotalEarningsRate 검증', () => {
            const totalEarningsRate = 25.5;

            lottoView.displayTotalEarningsRate(totalEarningsRate);

            expect(mockConsolePrint).toHaveBeenCalledWith('총 수익률은 25.5%입니다.');
        });
    });
});
