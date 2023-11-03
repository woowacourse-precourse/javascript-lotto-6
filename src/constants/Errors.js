const PREFIX = '[ERROR]';

const EXCEPTION = Object.freeze({
  lottoLength : `${PREFIX} 로또 번호는 6개여야 합니다.`,
  lottoRange : `${PREFIX} 로또 번호는 1 이상 45 이하여야 합니다.`,
  lottoType : `${PREFIX} 로또 번호는 자연수여야 합니다.`,
  lottoDuplicated : `${PREFIX} 로또 번호는 중복 없이 모두 다른수여야 합니다.`,
  balanceType : `${PREFIX} 구입금액은 1000의 배수인 자연수여야 합니다.`,
});

export default EXCEPTION;
