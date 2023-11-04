import { countBy } from '../../utils/array.js';
import { isEmptyObject } from '../../utils/object.js';

const PRIZE_CATEGORY = Object.freeze({
  first: '1st',
  second: '2nd',
  third: '3rd',
  fourth: '4th',
  fifth: '5th',
});

const calculatePrize = (prizeInfo, rewardInfo) =>
  Object.entries(rewardInfo).reduce(
    (prevPrize, [prizeCategory, count]) => prevPrize + (prizeInfo[prizeCategory] ?? 0) * count,
    0,
  );

const createPrizeCategory = ({ matchCount, hasBonusNumber }) => {
  if (matchCount === 6) return PRIZE_CATEGORY.first;

  if (matchCount === 5 && hasBonusNumber) return PRIZE_CATEGORY.second;

  if (matchCount === 5) return PRIZE_CATEGORY.third;

  if (matchCount === 4) return PRIZE_CATEGORY.fourth;

  if (matchCount === 3) return PRIZE_CATEGORY.fifth;

  return null;
};

const createRewardInfo = (lottoMatchingResult) => {
  const matchedPrizeCategories = lottoMatchingResult.map(createPrizeCategory);

  return countBy(matchedPrizeCategories);
};

const winningInfo = Object.freeze({
  constants: Object.freeze({
    prizeInfo: Object.freeze({
      [PRIZE_CATEGORY.first]: 2_000_000_000,
      [PRIZE_CATEGORY.second]: 30_000_000,
      [PRIZE_CATEGORY.third]: 1_500_000,
      [PRIZE_CATEGORY.fourth]: 50_000,
      [PRIZE_CATEGORY.fifth]: 5_000,
    }),
  }),

  createWinningInfo(lottoMatchingResult) {
    const rewardInfo = createRewardInfo(lottoMatchingResult);

    if (isEmptyObject(rewardInfo)) return { rewardInfo: null, prize: 0 };

    const prize = calculatePrize(this.constants.prizeInfo, rewardInfo);

    return { rewardInfo, prize };
  },
});

export default winningInfo;
