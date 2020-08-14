
let addChild = (el, child) => {

  if (child instanceof HTMLElement) {
    el.appendChild(child);
  } else {
    el.innerHTML += child;
  }

};

let addChildren = (el, children) => {

  if (children) {
    children.forEach((child, i) => {
      if (Array.isArray(child)) {
        child.forEach((item, i) => {
          addChild(el, item);
        });
      } else {
        addChild(el, child);
      }
    });
  }

};

let addProps = (el, props) => {

  if (props) {
    for (var prop in props) {
      if (props.hasOwnProperty(prop)) {
        if (prop === 'style' && typeof props[prop] === 'object') {
          for (var style in prop) {
            if (prop.hasOwnProperty(style)) {
              el.style[style] = prop[style];
            }
          }
        } else {
          el.setAttribute(prop, props[prop]);
        }
      }
    }
  }

};

let el = (tag, props, ...children) => {

  if (typeof props === 'number' || typeof props === 'string' || props instanceof HTMLElement || Array.isArray(props)) {
    children.splice(0, 0, props);
    props = null;
  }

  let $el = document.createElement(tag);

  addChildren($el, children);
  addProps($el, props);

  return $el;

};

export { el };
