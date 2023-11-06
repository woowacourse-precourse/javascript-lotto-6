import PurchaseAmount from '../../src/PurchaseAmount.js';
import LottoGenerator from '../../src/model/LottoGenerator.js';
import LottoModel from '../../src/model/index.js';

// Mock the dependencies
jest.mock('../../src/PurchaseAmount.js', () => {
  return {
    of: jest.fn().mockReturnThis(),
  };
});

jest.mock('../../src/model/LottoGenerator.js', () => {
  return {
    run: jest.fn(),
  };
});

describe('LottoModel', () => {
  let lottoModel;

  beforeEach(() => {
    lottoModel = new LottoModel();
  });

  describe('generateLotto', () => {
    test('오름차순으로 정렬된 로또를 count 횟수만큼 발행한다.', () => {
      const purchaseAmount = 10000;
      const lottoCount = 2;

      PurchaseAmount.of.mockReturnValueOnce({
        getLottoCount: jest.fn().mockReturnValueOnce(lottoCount),
      });

      LottoGenerator.run.mockReturnValueOnce([1, 2, 3, 4, 5, 6], [6, 4, 3, 2, 1, 7]);

      const result = lottoModel.generateLotto(purchaseAmount);

      expect(PurchaseAmount.of).toHaveBeenCalledWith(purchaseAmount);
      expect(LottoGenerator.run).toHaveBeenCalledWith(lottoCount);

      expect(result).toEqual([1, 2, 3, 4, 5, 6], [6, 4, 3, 2, 1, 7]);
    });
  });
});
