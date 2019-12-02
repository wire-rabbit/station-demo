export const getComponentByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
};
