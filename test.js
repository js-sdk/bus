/* @jest-environment jsdom */

const bus = require('./index.js');

describe('using bus', () => {
  let b;

  beforeEach(() => {
    b = bus();
  });

  it('publish an event', () => {
    const f = jest.fn();
    b.subscribe('test', f);
    b.publish('test', {});
    expect(f).toHaveBeenCalled();
  });

  it('publish an event must not reach after unsibscribe', () => {
    const f = jest.fn();
    b.subscribe('test', f);
    b.unsubscribe('test', f);
    b.publish('test', {});
    expect(f).not.toHaveBeenCalled();
  });
});
