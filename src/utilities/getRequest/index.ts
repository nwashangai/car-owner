export default (url: string, method = 'get', body = {}) => {
  let options: any = {
    method,
    credentials: 'omit',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  if (method === 'post') {
    options = { ...options, body: JSON.stringify(body) };
  }
  return fetch(url, options).then((obj: any) => {
    return obj.json();
  });
};
