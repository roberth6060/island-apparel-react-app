const logger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("%ctype: ", "Color: pink;", action.type);
  next(action);
  console.log("%caction", "Color: red;", store.getState());
};

export default logger;
