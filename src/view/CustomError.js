class CustomError extends Error {
   constructor(message) {
    super(`${message}`);
  }
}
export default CustomError