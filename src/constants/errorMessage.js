import CONFIG from './config.js';

const ERROR_MESSAGES = Object.freeze({
  error: '[ERROR]',
  buyLottoPriceError: `로또 구매 금액은 ${CONFIG.lottoPrice} 단위로 입력해주세요`,
  numberTypeError: '숫자가 잘못된 형식입니다',
  numberOutOfRange: `로또번호 및 보너스번호는 ${CONFIG.minLottoNumber} ~ ${CONFIG.maxLottoNumber} 사이의 값을 입력해주세요`,
  isSameLottoNumber:
    '로또 번호에 중복이 있습니다 로또 번호와 보너스번호를 포함하여 중복없게 작성해주세요',
  numberOverLength: `로또 번호의 갯수는 ${CONFIG.lottoLength}개로 입력해주세요`,
});

export default ERROR_MESSAGES;
