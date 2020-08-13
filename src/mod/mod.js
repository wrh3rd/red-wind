
let mod = () => {

  let addModule, getModule, hasModule;
  let list = {};

  addModule = (name, cb) => {
    name = name.toLowerCase();
    list[name] = cb;
  };

  getModule = (name) => {
    name = name.toLowerCase();

    if (hasModule(name)) {
      return list[name];
    }

    return null;
  };

  hasModule = (name) => {
    if (name) {
      name = name.toLowerCase();
      return list[name] !== null && list[name] !== undefined;
    }

    return false;
  };

  return {
    'add': addModule,
    'get': getModule,
    'has': hasModule
  }

};

export { mod }
