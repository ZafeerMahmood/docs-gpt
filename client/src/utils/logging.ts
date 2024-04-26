const logError = (error: Error, info: React.ErrorInfo) => {
  console.error(error, info);
  //send error to a logging service
};

export { logError };
