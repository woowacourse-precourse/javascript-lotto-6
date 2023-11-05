export const checkErrorInstance = (e) => {
  expect(e).toBeInstanceOf(CustomError);
  expect(e.message).toContain('[ERROR]');
};
