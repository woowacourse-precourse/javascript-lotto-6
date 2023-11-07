import OutputView from '../views/OutputView.js';

async function retryOnError(callbackReadFunc) {
  try {
    return await callbackReadFunc();
  } catch (error) {
    OutputView.printErrorMessage(error.message);
    return this.retryOnError(callbackReadFunc);
  }
}

export default retryOnError;
