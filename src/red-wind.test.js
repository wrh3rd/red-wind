
import { JSDOM } from 'jsdom';
import { RedWind } from './red-wind';

const app = new RedWind();
const dom = new JSDOM();

global.document = dom.window.document;
global.window = dom.window;

test('create an element', () => {
  let $div = app.el('div');
  expect($div).toBeDefined();
});

test('create an element with green text \'TEST\'', () => {
  let $div = app.el('div', { 'style': 'color:green;' }, 'TEST');
  expect($div).toBeDefined();
  expect($div.style.color).toBe('green');
  expect($div.innerHTML).toBe('TEST');
});

test('create an element and mounts to body', () => {
  let $div = app.el('div', { 'style': 'color:green;' }, 'TEST');
  expect($div).toBeDefined();
  app.mount(document.body, $div);
  expect(document.body.innerHTML).toBe('<div style="color:green;">TEST</div>');
});

test('create an element with one child element', () => {
  let $div = app.el('div', app.el('span', 'TEST'));
  expect($div).toBeDefined();
  expect($div.innerHTML).toBe('<span>TEST</span>');
});

test('create an element with more than one children', () => {
  let $div = app.el('div', app.el('span', 'TEST'), ' ', app.el('span', 'ME'));
  expect($div).toBeDefined();
  expect($div.innerHTML).toBe('<span>TEST</span> <span>ME</span>');
});

test('create an element with more than one children and one is clickable', () => {
  let $span = app.el('span', 'TEST');
  $span.click = () => { return true; }

  let $div = app.el('div', $span, ' ', app.el('span', 'ME'));
  expect($div).toBeDefined();
  expect($div.innerHTML).toBe('<span>TEST</span> <span>ME</span>');
  expect($div.children[0].click).toBeDefined();
});

test('create and use a module', () => {
  app.mod.add('green', (...args) => {
    let props = { 'class': 'green' };

    args.splice(0, 0, 'div');
    args.splice(1, 0, props);

    return app.el.apply(app, args);
  });

  let $green = app.el('green', 'This is green');
  expect($green).toBeDefined();
  expect($green.outerHTML).toBe('<div class="green">This is green</div>');
});
