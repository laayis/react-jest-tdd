import axios from 'axios';

const asyncHandler = {
  get: (link) => {
    return axios.get(link);
  }
};

module.exports = asyncHandler;