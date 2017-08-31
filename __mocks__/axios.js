const axios = jest.genMockFromModule('axios');

axios.get.mockImplementation(function(link){
  return new Promise((resolve, reject) => {
    resolve({statusCode: 200});
  })
});

module.exports = axios;