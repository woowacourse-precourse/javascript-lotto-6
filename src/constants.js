const REWARD = {
  FIRST: 2_000_000_000,
  SECOND: 30_000_000,
  THIRD: 1_500_000,
  FOURTH: 50_000,
  FIFTH: 5_000,
};

const NUMBER = {
  SIX: '6',
  FIVE: '5',
  FOUR: '4',
  THREE: '3',
  ONE: '1',
};

const totalReward = [
  `${NUMBER.THREE}개 일치 (${REWARD.FIFTH.toLocaleString()}원) - `,
  `${NUMBER.FOUR}개 일치 (${REWARD.FOURTH.toLocaleString()}원) - `,
  `${NUMBER.FIVE}개 일치 (${REWARD.THIRD.toLocaleString()}원) - `,
  `${NUMBER.FIVE}개 일치, 보너스 볼 일치 (${REWARD.SECOND.toLocaleString()}원) - `,
  `${NUMBER.SIX}개 일치 (${REWARD.FIRST.toLocaleString()}원) - `,
];

export { REWARD, NUMBER, totalReward };
