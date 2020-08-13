
import { el } from './el/el';
import { mod } from './mod/mod';

let redwind = () => {

  let _mod = mod();

  let _el = (tag, props, ...children) => {

    if (_mod.has(tag)) {
      return _mod.get(tag)(props, children);
    }

    return el();

  };

  return {
    el: _el,
    mod: _mod
  };

};

export { el, mod, redwind }
