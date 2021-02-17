import greeting from '../greeting';

describe('greeting', () => {
  it('passes', () => {
    expect(greeting()).toBeTruthy();
  });
});
