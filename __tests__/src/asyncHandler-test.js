describe('the asynchandler' ,function() {
  let asyncHandler = require.requireActual('../../src/asyncHandler');
  let axios = require('axios');

  it("should call axios with the link", () => {
    asyncHandler.get('http://google.com');
    expect(axios.get).toBeCalledWith('http://google.com');
  });

  it("should call axios with the link", (done) => {
    const data = asyncHandler.get('http://google.com');
    data.then((data) => {
      expect(data.statusCode).toEqual(200);
      done();
    })
  });
});

