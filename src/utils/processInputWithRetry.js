const processInputWithRetry = async (inputCallback, processInputCallback, errorCallback) => {
  try {
    const input = await inputCallback();
    processInputCallback(input);
  } catch (error) {
    errorCallback(error.message);
    await processInputWithRetry(inputCallback, processInputCallback, errorCallback);
  }
};

export default processInputWithRetry;
