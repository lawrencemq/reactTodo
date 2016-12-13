var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Search = require('Search');

describe('Search', () => {
  it('should exist', () => {
    expect(Search).toExist();
  });

  it('should call handleSearch when entered search text',  () => {
    const searchText = 'Bend Gurter';
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search handleSearch={spy}/>);
    search.refs.searchTodo.value = searchText;

    TestUtils.Simulate.change(search.refs.searchTodo);

    expect(spy).toHaveBeenCalledWith(searchText, false);
  });

  it('should call handleSearch when checked', () => {
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search handleSearch={spy}/>);
    search.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(search.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith('', true);
  });

});
