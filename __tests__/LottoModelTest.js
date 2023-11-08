import LottoModel from '../src/LottoModel.js';
import Lotto from '../src/Lotto.js';

describe('LottoModel', () => {
    describe('generateLottos', () => {
        it('should generate lottos based on the purchase amount', () => {
            const lottoModel = new LottoModel();
            const purchaseAmount = 14000; // Example purchase amount

            const lottos = lottoModel.generateLottos(purchaseAmount);

            expect(Array.isArray(lottos)).toBe(true);
            expect(lottos.length).toBe(14);
            for (const lotto of lottos) {
                expect(lotto instanceof Lotto).toBe(true);
            }
        });
    });

    describe('countResults', () => {
        it('countResults 검증', () => {
            const lottoModel = new LottoModel();
            const lottos = [
                new Lotto([1, 2, 3, 4, 5, 6]),
                new Lotto([7, 8, 9, 10, 11, 12]),
            ];
            const winningNumbers = [1, 2, 3, 4, 5, 6];
            const bonusNumber = 7;

            const results = lottoModel.countResults(lottos, winningNumbers, bonusNumber);

            expect(typeof results).toBe('object');
            expect(results[3]).toBe(0);
            expect(results[4]).toBe(0);
            expect(results[5]).toBe(0);
            expect(results[5.1]).toBe(0);
            expect(results[6]).toBe(1);
        });
    });

    describe('calculateTotalPrize', () => {
        it('calculateTotalPrize 검증', () => {
            const lottoModel = new LottoModel();
            const countResults = { 3: 1, 4: 0, 5: 0, 5.1: 0, 6: 0 };

            const totalPrize = lottoModel.calculateTotalPrize(countResults);

            expect(totalPrize).toBe(5000);
        });
    });

    describe('calculateTotalEarningsRate', () => {
        it('calculateTotalEarningsRate 검증', () => {
            const lottoModel = new LottoModel();
            const totalPrize = 5000;
            const purchaseAmount = 10000;

            const totalEarningsRate = lottoModel.calculateTotalEarningsRate(totalPrize, purchaseAmount);

            expect(totalEarningsRate).toBe(50);
        });
    });
});
