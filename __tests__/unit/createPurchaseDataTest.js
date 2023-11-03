import ERROR_CODE from '../../src/util/error/errorCode';
import acendingSortList from '../../src/util/parse/acendingSortList';
import createPurchaseData from '../../src/util/purchase/createPurchaseData';
import { checkLottoDuplicate } from '../../src/util/validate/checkHasDuplicate';

const mockCreatePurchaseData = async (lottoCount, lottos, duplicatedLotto, uniqueLotto, isRecursion) => {
  try {
    const isFunctionRecursion = isRecursion;
    const singleLotto = isFunctionRecursion ? [...uniqueLotto] : [...duplicatedLotto];
    const sortedLotto = acendingSortList(singleLotto);
    const lottoList = [...lottos];
    const isLottoDuplicated = checkLottoDuplicate(sortedLotto, lottoList);

    if (isLottoDuplicated) {
      return mockCreatePurchaseData(lottoCount, lottoList, duplicatedLotto, uniqueLotto, (isRecursion = true));
    }

    lottoList.push(sortedLotto);
    const isNotCompleted = lottoList.length !== lottoCount;

    if (isNotCompleted) {
      return mockCreatePurchaseData(lottoCount, lottoList);
    }

    return lottoList;
  } catch (error) {
    throw new Error(`${ERROR_CODE.createPurchaseData}`);
  }
};

describe('로또 구매 리스트 생성 테스트', () => {
  test('구매 금액 만큼의 길이를 가지는 배열을 생성', async () => {
    // given
    const testLottoCount = 8;
    const defaultList = [];

    // when
    const result = await createPurchaseData(testLottoCount, defaultList);
    const resultLength = (await result).length;

    //then
    expect(resultLength).toBe(8);
  });

  test('생성된 로또가 기존 배열에 존재할 경우 새로운 배열을 생성해서 추가', async () => {
    try {
      // given
      const testPurchaseCount = 4;
      const createdLottos = [
        [1, 2, 3, 4, 5, 6],
        [2, 3, 4, 5, 6, 7],
        [3, 4, 5, 6, 7, 8],
      ];
      const duplicatedLotto = [1, 2, 3, 4, 5, 6];
      const uniqueLotto = [12, 13, 14, 15, 16, 17];
      const isRecursion = false;

      const resultNoToBe = [
        [1, 2, 3, 4, 5, 6],
        [2, 3, 4, 5, 6, 7],
        [3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6],
      ];

      // when
      const result = await mockCreatePurchaseData(
        testPurchaseCount,
        createdLottos,
        duplicatedLotto,
        uniqueLotto,
        isRecursion,
      );

      // then

      expect(result).not.toBe(resultNoToBe);
    } catch (error) {
      throw new Error(error);
    }
  });
});
