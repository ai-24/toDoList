app.component('to-do-list', {
  props: {
    contents: {
      type: Array,
      required: true
    }
  },
  emits: ['edited-todo', 'destroyTodo'],
  template:`
  <li v-for="(todo, index) in contents" :key="todo">
      <div v-if="!todo.edit">
          <input type="checkbox">{{ todo.detail }}
          <button @click="editTodo(todo, index)">編集</button>
          <button @click="destroyTodo(index)">削除</button>
      </div>
      <edit-form :index="index" :todo="todo" :contents="contents" @edited-list="onEdit" @back-list="backList"></edit-form>
  </li>`
  ,
  data () {
    return {
      todo: {},
      index: ''
    }
  },
  methods: {
    destroyTodo (index) {
      const isDelete = confirm('削除しますか？')
      if (isDelete) {
        this.contents.splice(index, 1)
        console.log(this.contents)
        localStorage.setItem('toDoList', JSON.stringify(this.contents))
        this.$emit('destroyTodo')
      }
    },
  editTodo (todo, index) {
    this.todo = todo
    this.todo.edit = true
    this.index = index
  },
    onEdit () {
      this.$emit('edited-todo')
    },
    backList() {
      this.todo.edit = false
    }
  }
})
