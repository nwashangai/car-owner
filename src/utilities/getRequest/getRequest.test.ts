import fetch from 'jest-fetch-mock';

// Function
import getRequest from '.';

describe('getTrips function', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('make a fake call', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    //assert on the response
    getRequest('http').then((res) => {
      expect(res.data).toEqual('12345');
    });

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
  });
});
