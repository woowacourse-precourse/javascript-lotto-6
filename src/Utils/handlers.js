import LottoGenerator from '../Domain/LottoGenerator';
import LottoCalculator from '../Domain/LottoCalculator';
import InputView from '../View/InputView';
import OutputView from '../View/OutputView';

const ErrorHandlerAndRetry = async (handler, retry) => {
  try {
    return await handler();
  } catch (err) {
    OutputView.printError({ message: err.message });
    if (err) return await retry();
    throw err;
  }
};

const lottoGeneratorHandler = async () =>
  ErrorHandlerAndRetry(async () => {
    const response = await InputView.purchaseAmount();
    return new LottoGenerator(response);
  }, lottoGeneratorHandler);

const lottoCalculatorHandler = async () =>
  ErrorHandlerAndRetry(async () => {
    const response = await InputView.winningNumbers();
    return new LottoCalculator(response);
  }, lottoCalculatorHandler);

const bonusNumberHandler = async (lottoCalculator) =>
  ErrorHandlerAndRetry(
    async () => {
      const response = await InputView.bonusNumber();
      lottoCalculator.bonus = response;
    },
    () => bonusNumberHandler(lottoCalculator),
  );

export { lottoGeneratorHandler, lottoCalculatorHandler, bonusNumberHandler };
