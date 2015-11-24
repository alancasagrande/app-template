import React from 'react'; //eslint-disable-line no-unused-vars
import {render} from './spec_helper';
import Main from 'main';


describe('Main', function () {
  describe('render', function () {
    beforeEach(function () {
      render(<Main />);
    });

    it('should display initial message', function () {
      expect(document.querySelector('.main').innerHTML).to.eq('App template is running.');
    });
  });
});
