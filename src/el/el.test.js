
import { el } from './el';

test('creates a div element', () => {
  let $div = el('div', { 'class': 'test', 'test': 'YES!!!', 'style': 'color:green;' }, 'testing', ' this ', el('span', 'element'));
  expect($div).toBeDefined();
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
  console.log($green.outerHTML);
});
