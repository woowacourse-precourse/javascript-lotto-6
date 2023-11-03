const HttpResponse = (status, message) => {
  return {
    status,
    responseData: message,
  };
};

export default HttpResponse;
