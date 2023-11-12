import CONFIG from './config.js';

const MATCHES = Object.freeze({
  threeMatch: {
    reward: 5000,
    message: '3개 일치 (5,000원)',
  },
  fourMatch: {
    reward: 50000,
    message: '4개 일치 (50,000원)',
  },
  fiveMatch: {
    reward: 1500000,
    message: '5개 일치 (1,500,000원)',
  },
  [CONFIG.bonusMatchKey]: {
    reward: 30000000,
    message: `${CONFIG.bonusNumberMatch}개 일치, 보너스 볼 일치 (30,000,000원)`,
  },
  sixMatch: {
    reward: 2000000000,
    message: '6개 일치 (2,000,000,000원)',
  },
});

export default MATCHES;
