var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {Search} from 'Search';

describe('Search', () => {
  it('should exist', () => {
    expect(Search).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change',  () => {
    const searchText = 'Bend Gurter';
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);
    search.refs.searchTodo.value = searchText;

    TestUtils.Simulate.change(search.refs.searchTodo);

    const expectedAction = {
      type: 'SET_SEARCH_TEXT',
      searchText: searchText
    };
    expect(spy).toHaveBeenCalledWith(expectedAction);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when clicked', () => {
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);
    search.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(search.refs.showCompleted);

    const expectedAction = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    expect(spy).toHaveBeenCalledWith(expectedAction);
  });

});
