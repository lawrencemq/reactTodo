var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should store a stringified version if given an array', () => {
        const todos = [
          {
            id: 23,
            text: 'test all files',
            completed: false
          }
        ];

        TodoAPI.setTodos(todos);

        var actualTodos = JSON.parse(localStorage.getItem('todos'));
        expect(actualTodos).toEqual(todos);
    });

    it('should do nothing if not given an array', () => {
      const badData1 = 1;
      const badData2 = {hello: 'world'};

      TodoAPI.setTodos(badData1);
      expect(localStorage.getItem('todos')).toBe(null);

      TodoAPI.setTodos(badData2);
      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('getTodos', () => {

    it('should return an empty array if no data is stored', () => {
      expect(TodoAPI.getTodos()).toEqual([]);
    });

    it('should return an empty array if the stored data is bad', () => {
      localStorage.setItem('todos', JSON.stringify({hello: 'world'}));
      expect(TodoAPI.getTodos()).toEqual([]);
    });

    it('should return todos when stored', () => {
      const todos = [
        {
          id: 23,
          text: 'test all files',
          completed: false
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      expect(TodoAPI.getTodos()).toEqual(todos);
    });

  });
});
