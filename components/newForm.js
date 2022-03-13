app.component('new-form', {
  template: `
  <form class="new-list" @submit.prevent="onSubmit">
        <input type="text" id="content" v-model="content" placeholder="新しいTo doを作成">
        <input class="button" type="submit" value="To Doを作成"/>
    </form>`,
  data () {
    return {
      content: '',
      contents: []
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
      this.$emit('save-to-do')
    }
  }
})