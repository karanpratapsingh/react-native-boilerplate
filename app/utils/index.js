export const createAsyncDelay = duration =>
  new Promise((resolve, reject) => setTimeout(() => { resolve(); }, duration));