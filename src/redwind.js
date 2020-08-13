
import { el } from './el';
import { mod } from './mod';
import { mount } from './mount';

let redwind = () => {

  let _el;
  let _mod = mod();
  let _mount = mount;

  _el = (tag, props, ...children) => {

    if (_mod.has(tag)) {
      return _mod.get(tag)(props, children);
    }

    return el(tag, props, children);

  };

  return {
    el: _el,
    mod: _mod,
    mount: _mount
  };

};

export { redwind }
