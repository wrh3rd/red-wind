
import { el } from './el';

const mount = (target, source) => {

  if (target.tagName === 'BODY') {
    if (source.tagName !== 'BODY') {
      source = el('body', source);
    }

    target.parentNode.replaceChild(source, target);
  } else {
    target.appendChild(source);
  }

};

export { mount }
