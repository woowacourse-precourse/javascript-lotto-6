const CustomError = class {
  constructor(errorMsg) {
    throw new Error(`[ERROR] ${errorMsg}`);
  }
};

export default CustomError;
