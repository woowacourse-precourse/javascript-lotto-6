const HttpRequest = (restfulAPI, inputData) => {
  return {
    url: restfulAPI,
    type: 'POST',
    body: inputData,
  };
};

export default HttpRequest;
