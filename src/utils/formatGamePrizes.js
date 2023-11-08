import { GAME_REWARD } from '../constants/gameRule.js';

const prizeFormats = [
  { key: 'three', count: 3, hasBonus: false },
  { key: 'four', count: 4, hasBonus: false },
  { key: 'five', count: 5, hasBonus: false },
  { key: 'bonus', count: 5, hasBonus: true },
  { key: 'six', count: 6, hasBonus: false },
];

/**
 * @param {{ three: number, four: number, five: number, bonus: number, six: number }} matchCounts - key : 로또가 몇 개 일치하는지, value: 일치하는 로또 개수
 * @return {string} - 포맷팅 로또 당첨 금액 및 일치 로또 개수 결과
 */
const formatGamePrizes = (matchCounts) => {
  return prizeFormats
    .reduce((acc, cur) => {
      return [
        ...acc,
        `${cur.count}개 일치${
          cur.hasBonus ? ', 보너스 볼 일치' : ''
        } (${GAME_REWARD[cur.key].toLocaleString()}원) - ${
          matchCounts[cur.key]
        }개`,
      ];
    }, [])
    .join('\n');
};

export default formatGamePrizes;
