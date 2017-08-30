jest.dontMock('../../src/App');
import testUtils from 'react-addons-test-utils';
import React from 'react';
import App from '../../src/App';

describe('the app module', () => {
  it('it should render heading', () => {
    const title = 'Welcome to Jest Testing';
    const app = testUtils.renderIntoDocument(
      <App title = {title} />
    );
    const titleFromComponent = testUtils.findRenderedDOMComponentWithTag(app, 'h2');
    expect(titleFromComponent.textContent).toEqual(title);
  })
});