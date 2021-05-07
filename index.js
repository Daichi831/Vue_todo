const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    newTodo: null,
    editIndex: -1
  },
  mounted () {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.todos)
    }
  },
  methods: {
    add: function () {
      if (!this.newTodo) {
        return
      }
      this.todos.push({ comment: this.newTodo })
      this.newTodo = ''
      this.save()
    },

    remove: function (index) {
      this.todos.splice(index, 1)
      this.save()
    },

    edit: function (index) {
      this.editIndex = this.editIndex >= 0 ? -1 : index
      this.save()
    },

    save: function () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
})
