export default function throwInputErrors(trialFunction, inputStep) {
  try {
    trialFunction();
  } catch (error) {
    throw Error(`${inputStep}: ${error.message}`);
  }
}
