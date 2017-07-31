module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    var simplifiedSearchText = '';
    if(searchText){
      simplifiedSearchText = searchText.toLowerCase();
    }
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      const text = todo.text.toLowerCase();
      return simplifiedSearchText.length === 0 || text.indexOf(simplifiedSearchText) > -1;
    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
