import ModelController from './ModelController';
import InputController from './InputController';
import OutputController from './OutputController';
import Validator from '../View/Validator';
import RULE_CONSTANT from '../Constant/RuleConstant';

const lottopurchaseController = async () => {
  const purchaseCount = (await InputController.controllerLottoPurchase()).getLottoTicketCount();
  OutputController.outputPurchaseCount(purchaseCount);
  const lottoCards = ModelController.lottoCardsController(purchaseCount).getLottoCard();
  OutputController.outputLottoNumbers(lottoCards);
  const getLottoCards = () => lottoCards;
  return {
    getLottoCards,
  };
}

const lottoCheckWinningController = async () => {
  const commonLottoNumbers = (
    (await InputController.controllerCommonLottoWinningNumbers())
    .getlottoCommonWinningNumbersArray()
  );
  const bonusLottoNumber = (
    (await InputController.controllerBonusLottoWinningNumber(commonLottoNumbers)).getlottoBonusWinningNumber()
  );
  Validator.assertNotInDuplicateInputValueInArray(commonLottoNumbers, bonusLottoNumber);
  const checker = (ModelController.WinningNumbersCheckerController(
    commonLottoNumbers,
    bonusLottoNumber,
  )).getWinningNumbersChecker();
  const getChecker = () => checker;
  return {
    getChecker,
  };
}

const lottoController = async () => {
  const lottoCards = (await lottopurchaseController()).getLottoCards();
  const winningCheker = (await lottoCheckWinningController()).getChecker();
  const winningStatistics = (ModelController.winningStatistics()).getWinningStatistics();
  lottoCards.forEach((card) => {
    const index = winningCheker.checkWinningRank(card.getLottoNumbers());
    if (index === RULE_CONSTANT.OPTION_NONE) {
      winningStatistics[index] += 1;
    } else {
      (winningStatistics[index]).setAddCount();
    }
  });
  OutputController.outputTotalStatistics(winningStatistics);
}

export default lottoController;