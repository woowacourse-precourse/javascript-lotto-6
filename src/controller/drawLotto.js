import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_SETTINGS } from '../constant/LOTTO_SETTINGS';
import Lotto from '../model/Lotto';

const { Random } = MissionUtils;

const totalLotto = []; // 전체 로또 번호 보관

const drawLottoNumber = async () => {
  const lotto = Random.pickUniqueNumbersInRange(LOTTO_SETTINGS.LOTTO_MIN_NUMBER, LOTTO_SETTINGS.LOTTO_MAX_NUMBER, LOTTO_SETTINGS.LOTTO_LENGTH);
  const lottoNumber = new Lotto(lotto).getLottoNumber();
  totalLotto.push(lottoNumber);
};

export const drawLotto = async (progressNumber) => {
	// 번호 출력
	for (let i=0; i < progressNumber; i++) {
		await drawLottoNumber();
	}
	return totalLotto;
}