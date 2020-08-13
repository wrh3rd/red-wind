
import { el } from './el/el';
import { modules } from './modules/modules';

test('creates a div element', () => {
  let $div = el('div', { 'class': 'test', 'test': 'YES!!!', 'style': 'color:green;' }, 'testing', ' this ', el('span', 'element'));
  expect($div).toBeDefined();
  console.log($div.outerHTML);
});

test('adding and using a module', () => {
  el.modules.add('green', (props, ...children) => {
    if (!props) {
      props = {};
    }

    props['class'] = 'green';

    return el('div', props, children);
  });

  let $green = el('green');
  expect($green).toBeDefined();
  console.log($green.outerHTML);
});
