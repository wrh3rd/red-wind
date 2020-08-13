
import { el } from './el';
import { mod } from './mod';
import { mount } from './mount';

class RedWind {

  constructor() {

    this.mod = mod();
    this.mount = mount;

  }

  el(tag, props, ...children) {

    if (this.mod.has(tag)) {
      return this.mod.get(tag)(props, children);
    }

    return el(tag, props, children);

  }

}

export { RedWind }
