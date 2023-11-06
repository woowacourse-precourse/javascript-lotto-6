/* eslint-disable lines-between-class-members */
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import PlayerLottoAmount from '../domain/PlayerLottoAmount';
import LottoNumbers from '../domain/LottoNumbers';
import Lotto from '../domain/Lotto';
import TYPE_CONVERTOR from '../utils/typeConvertor';

class LottoController{
  #inputView;
  #outputView;
  #playerLottoAmount
  #lottoNumbers
  #lotto

  constructor(){
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#playerLottoAmount = new PlayerLottoAmount();
    this.#lottoNumbers = new LottoNumbers();
  }

  async play(){
    await this.receivePlayerTotalMoney();
    
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
    this.#outputView.printLineBreak();
  }

  async receivePlayerLottoNums(){
    const lottoNums = await this.#inputView.receiveUserLotto();
    const numArr = TYPE_CONVERTOR.strToNumArr(lottoNums);
    this.#lotto = new Lotto(numArr);
  }
}

export default LottoController;