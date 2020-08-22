
import { el } from './el';
import { mod } from './mod';
import { mount } from './mount';

class RedWind {

  constructor() {

    this.mod = mod();
    this.mount = mount;

  }

  el(tag, ...args) {

    if (this.mod.has(tag)) {
      return this.mod.get(tag).apply(null, args);
    }

    args.splice(0, 0, tag);

    return el.apply(null, args);

  }

}

export { RedWind }
