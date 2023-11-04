import { countBy } from '../../utils/array.js';
import { isEmptyObject } from '../../utils/object.js';

const PRIZE_CATEGORY = Object.freeze({
  FIRST: '1st',
  SECOND: '2nd',
  THIRD: '3rd',
  FOURTH: '4th',
  FIFTH: '5th',
});

const calculatePrize = (prizeInfo, rewardInfo) =>
  Object.entries(rewardInfo).reduce(
    (prevPrize, [prizeCategory, count]) => prevPrize + (prizeInfo[prizeCategory] ?? 0) * count,
    0,
  );

const createPrizeCategory = ({ matchCount, hasBonusNumber }) => {
  if (matchCount === 6) return PRIZE_CATEGORY.FIRST;

  if (matchCount === 5 && hasBonusNumber) return PRIZE_CATEGORY.SECOND;

  if (matchCount === 5) return PRIZE_CATEGORY.THIRD;

  if (matchCount === 4) return PRIZE_CATEGORY.FOURTH;

  if (matchCount === 3) return PRIZE_CATEGORY.FIFTH;

  return null;
};

const createRewardInfo = (lottoMatchingResult) => {
  const matchedPrizeCategories = lottoMatchingResult.map(createPrizeCategory);

  return countBy(matchedPrizeCategories);
};

const winningResult = Object.freeze({
  constants: Object.freeze({
    prizeInfo: Object.freeze({
      [PRIZE_CATEGORY.FIRST]: 2_000_000_000,
      [PRIZE_CATEGORY.SECOND]: 30_000_000,
      [PRIZE_CATEGORY.THIRD]: 1_500_000,
      [PRIZE_CATEGORY.FOURTH]: 50_000,
      [PRIZE_CATEGORY.FIFTH]: 5_000,
    }),
  }),

  createWinningResult(lottoMatchingResult) {
    const rewardInfo = createRewardInfo(lottoMatchingResult);

    if (isEmptyObject(rewardInfo)) return { rewardInfo: null, prize: 0 };

    const prize = calculatePrize(this.constants.prizeInfo, rewardInfo);

    return { rewardInfo, prize };
  },
});

export default winningResult;
