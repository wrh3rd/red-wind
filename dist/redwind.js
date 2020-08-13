var redwind = (function () {
  'use strict';

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

    if (typeof props == 'string' || props instanceof HTMLElement || Array.isArray(props)) {
      children.splice(0, 0, props);
      props = null;
    }

    let $el = document.createElement(tag);

    addChildren($el, children);
    addProps($el, props);

    return $el;

  };

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

  let mount = (target, source) => {

    if (target.tagName === 'BODY') {
      if (source.tagName !== 'BODY') {
        source = el('body', source);
      }

      target.parentNode.replaceChild(source, target);
    } else {
      target.appendChild(source);
    }

  };

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

  return redwind;

}());
