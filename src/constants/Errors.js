import SETTINGS from './Settings.js';

const PREFIX = '[ERROR]';

const EXCEPTION = Object.freeze({
  lottoLength: `${PREFIX} 로또 번호는 ${SETTINGS.lottoLength}개여야 합니다.`,
  lottoRange: `${PREFIX} 로또 번호는 ${SETTINGS.minimumLottoRange} 이상 ${SETTINGS.maximumLottoRange} 이하여야 합니다.`,
  lottoType: `${PREFIX} 로또 번호는 자연수여야 합니다.`,
  lottoDuplicated: `${PREFIX} 로또 번호는 중복 없이 모두 다른수여야 합니다.`,
  balanceType: `${PREFIX} 구입금액은 ${SETTINGS.lottoPrice}의 배수인 자연수여야 합니다.`,
  bonusType: `${PREFIX} 보너스 번호는 자연수여야 합니다.`,
  bonusRange: `${PREFIX} 보너스 번호는 ${SETTINGS.minimumLottoRange} 이상 ${SETTINGS.maximumLottoRange} 이하여야 합니다.`,
  bonusIncluded: `${PREFIX} 보너스 번호는 당첨 번호에 없는 번호여야 합니다.`,
});

export default EXCEPTION;
