import Lotto from './Lotto';
import { generateLottoNumber } from './utils';

class LottoShop {
  createLotto(tickets) {
    const lottos = [];
    while (lottos.length < tickets) {
      const lottoNumbers = generateLottoNumber().sort((a, b) => a - b);
      const lotto = new Lotto(lottoNumbers);
      lottos.push([...lotto.numbers]);
    };
    return lottos;
  }
}

export default LottoShop;