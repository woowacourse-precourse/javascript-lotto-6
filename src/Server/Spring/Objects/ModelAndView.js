class ModelAndView {
  model;

  view;

  setViewName(viewName) {
    this.view = viewName;
  }

  addObject(key, value) {
    this.model = { [key]: value };
  }
}

export default ModelAndView;
