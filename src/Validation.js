export const isValidAmount = amount => {
  const regex = /^\d+$/;
  const numErr = regex.test(amount);
  const limitErr = amount >= 1000;
  const remainErr = amount % 1000 === 0;
  return numErr && limitErr && remainErr;
};
