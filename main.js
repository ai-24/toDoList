const app = Vue.createApp({
  data () {
    return {
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
    updateContents () {
      this.contents = JSON.parse(localStorage.getItem('toDoList'))
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
