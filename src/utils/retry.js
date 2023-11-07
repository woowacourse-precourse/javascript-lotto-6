import OutputView from '../views/Output.js';

async function retryOnError(callbackReadFunc) {
  try {
    return await callbackReadFunc();
  } catch (error) {
    OutputView.printErrorMessage(error.message);
    return this.retryOnError(callbackReadFunc);
  }
}

export default retryOnError;
