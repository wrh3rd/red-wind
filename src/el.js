
const addChild = ($el, child) => {

  if (Array.isArray(child)) {
    child.forEach((item, i) => {
      addChild($el, item);
    });
  } else if (child instanceof HTMLElement) {
    $el.appendChild(child);
  } else {
    $el.innerHTML += child;
  }

};

const addProps = ($el, props) => {

  if (props) {
    for (var prop in props) {
      if (props.hasOwnProperty(prop)) {
        if (prop === 'style' && typeof props[prop] === 'object') {
          for (var style in prop) {
            if (prop.hasOwnProperty(style)) {
              $el.style[style] = prop[style];
            }
          }
        } else {
          $el.setAttribute(prop, props[prop]);
        }
      }
    }
  }

};

const el = (tag, ...args) => {

  let $el = document.createElement(tag);

  if (args.length > 0) {
    args.forEach((arg, i) => {

      if (typeof arg === 'object' && !(arg instanceof HTMLElement || Array.isArray(arg))) {
        addProps($el, arg);
      } else {
        addChild($el, arg);
      }

    });
  }

  return $el;

};

export { el };
