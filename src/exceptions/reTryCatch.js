import Message from '../utils/Message.js';

async function reTryCatch(callback, times = 10) {
  try {
    return await callback();
  } catch (error) {
    if (times > 0) {
      Message.error(error);
      return reTryCatch(callback, times - 1);
    }
    throw error;
  }
}

export default reTryCatch;
