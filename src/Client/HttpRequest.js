const HttpRequest = (restfulAPI, inputData) => {
  return {
    url: restfulAPI,
    type: 'POST1',
    body: inputData,
  };
};

export default HttpRequest;
