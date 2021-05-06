const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    editIndex: -1
  },
  mounted () {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.todos)
    }
  },
  methods: {
    doAdd: function () {
      const comment = this.$refs.comment
      if (!comment.value.length) {
        return
      }
      this.todos.push({ comment: comment.value })
      comment.value = ''
      this.doSave()
    },

    doRemove: function (index) {
      this.todos.splice(index, 1)
      this.doSave()
    },

    doEdit: function (index) {
      this.editIndex = this.editIndex >= 0 ? -1 : index
      this.doSave()
    },

    doSave: function () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
})
