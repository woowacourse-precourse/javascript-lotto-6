/* eslint-disable lines-between-class-members */
import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import PlayerLottoAmount from '../domain/PlayerLottoAmount';
import LottoNumbers from '../domain/LottoNumbers';

class LottoController{
  #inputView;
  #outputView;
  #playerLottoAmount
  #lottoNumbers

  constructor(){
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#playerLottoAmount = new PlayerLottoAmount();
    this.#lottoNumbers = new LottoNumbers();
  }

  async play(){
    await this.receivePlayerTotalMoney();
    this.showLottoAmount();
    this.issueLottosForAmount();
    this.showLottoArr();
  }
  
  async receivePlayerTotalMoney(){
    const totalMoney = await this.#inputView.receiveTotalMoney();
    this.#playerLottoAmount.validate(totalMoney);
    this.#playerLottoAmount.setVariables(totalMoney);
  }
  
  showLottoAmount(){
    const lottoAmount = this.#playerLottoAmount.getLottoAmount();
    this.#outputView.printTotalLotto(lottoAmount);
  }

  issueLottosForAmount(){
    const lottoAmount = this.#playerLottoAmount.getLottoAmount();
    this.#lottoNumbers.makeLottoListMap(lottoAmount);
  }

  showLottoArr(){
    const lottoMap = this.#lottoNumbers.getLottoNumbers();
    lottoMap.forEach(numsArr => this.#outputView.printInput(numsArr));
  }
}

export default LottoController;