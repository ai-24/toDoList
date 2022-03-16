app.component('new-form', {
  props: {
    contents: {
      type: Array,
      required: true
    }
  },
  template: `
  <form @submit.prevent="onSubmit">
      <input type="text" id="content" v-model="content" placeholder="新しいTo doを作成">
      <input class="button" type="submit" value="To Doを作成"/>
    </form>`,
  data () {
    return {
      content: '',
      contentsArray: [],
      eachTodo: { edit: false}
    }
  },
  methods: {
    onSubmit() {
      if (!this.content) {
        return
      }
      this.eachTodo.detail = this.content
      this.contentsArray = this.contents
      this.contentsArray.push(this.eachTodo)
      this.eachTodo = { edit: false}
      this.content = ''
      this.saveTodo()
    },
    saveTodo () {
      localStorage.setItem('toDoList', JSON.stringify(this.contentsArray))
      this.$emit('saveTodo')
    }
  }
})
