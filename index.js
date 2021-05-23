const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    newTodo: null,
    editIndex: null
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
        if (this.editIndex === null) {
            this.editIndex = index
        }
    },

    update: function (index) {
        if (this.editIndex === index) {
            this.editIndex = null
        }
        this.save()
    },

    save: function () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
})
