const app = Vue.createApp({
  data () {
    return {
      content: '',
      contents: [],
      edit: false,
      editContent: '',
      index: ''
    }
  },
  mounted () {
    if (localStorage.getItem('toDoList')) {
      try {
        this.contents = JSON.parse(localStorage.getItem('toDoList'))
      } catch (e) {
        console.log(e)
      }
    }
  },
  methods: {
      onSubmit() {
        if (!this.content) {
          return
        }
        this.contents.push(this.content)
        this.content = ''
        this.saveTodo()
      },
    saveTodo () {
      localStorage.setItem('toDoList', JSON.stringify(this.contents))
    },
    destroyTodo (index) {
        const isDelete = confirm('削除しますか？')
      if (isDelete) {
        this.contents.splice(index, 1)
        localStorage.setItem('toDoList', JSON.stringify(this.contents))
      }
    },
    editTodo (todo, index) {
        this.edit = true
      this.editContent = todo
      this.index = index
    },
    onChange () {
      this.contents.splice(this.index, 1, this.editContent)
      localStorage.setItem('toDoList', JSON.stringify(this.contents))
    },
    editCancel () {
        this.edit = false
    }
  }
})
