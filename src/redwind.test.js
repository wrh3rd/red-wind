
import { JSDOM } from 'jsdom';
import { RedWind } from './redwind';

const app = new RedWind();
const dom = new JSDOM();

global.document = dom.window.document;
global.window = dom.window;

test('creates a div element', () => {
  let $div = app.el('div', { 'class': 'test', 'test': 'YES!!!', 'style': 'color:green;' }, 'testing', ' this ', app.el('span', 'element'));
  expect($div).toBeDefined();
  console.log($div.outerHTML);
});

test('adding and using a module', () => {
  app.mod.add('green', (props, ...children) => {
    if (!props) {
      props = {};
    }

    props['class'] = 'green';

    return app.el('div', props, children);
  });

  let $green = app.el('green');
  expect($green).toBeDefined();
  console.log($green.outerHTML);
});
