import OutputView from '../views/OutputView.js';

async function retryOnError(callbackReadFunc, parameter) {
  try {
    return await callbackReadFunc(parameter);
  } catch (error) {
    OutputView.printErrorMessage(error.message);
    return retryOnError(callbackReadFunc, parameter);
  }
}

export default retryOnError;
