import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  actions: {
    getTodos({state}) {
      let todos = localStorage.getItem('todos') == null ? JSON.stringify(new Array()) : localStorage.getItem('todos');
      state.todos = JSON.parse(todos);
    },
    addTodo({state}, todo) {
      let newTodo = {
        value: todo.value
      }
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo({state}, index) {
      state.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    editTodo({state}, data) {
      state.todos[data.index] = data.todo;
      localStorage.setItem('todos', JSON.stringify(state.todos));
    }
  }
})
