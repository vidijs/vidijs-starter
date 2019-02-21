export default class VidiError extends Error {
  constructor(error) {
    super(error);
    this.name = 'VidiError';
    this.message = error.message;
    if (error.response) {
      const { data, statusText } = error.response;
      if (data) {
        this.message = JSON.stringify(data, (_k, v) => (v === null ? undefined : v));
      } else {
        this.message = statusText;
      }
    }
  }
}
