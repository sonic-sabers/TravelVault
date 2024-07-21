const handleError = (error) => {
  if (error.response) {
    // Server responded with a status other than 200 range
    return error.response.data.message || 'Something went wrong';
  } else if (error.request) {
    // Request was made but no response received
    return 'No response from server';
  } else {
    // Something happened in setting up the request
    return error.message;
  }
};

export default handleError;
