app.component('to-do-list', {
  props: {
    contents: {
      type: Array,
      required: true
    }
  },
  emits: ['editedTodo', 'destroyTodo', 'changeCheck'],
  template:`
  <li v-for="(todo, index) in contents"
      :key="todo"
       class="frame">
      <div v-if="!todo.edit" class="todo">
          <div class="each-todo">
              <input v-if="todo.check"
                  checked="checked"
                  type="checkbox"
                  @click="checked(todo, index)">
              <input v-else
                  type="checkbox"
                  @click="checked(todo, index)">{{ todo.detail }}
          </div>
          <div class="buttons">
              <button
                  class="edit"
                  @click="editTodo(todo, index)"
              >編集</button>
              <button @click="destroyTodo(index)">削除</button>
          </div>
      </div>
      <to-do-list-edit-form
          :index="index"
          :todo="todo"
          :contents="contents"
          @edited-list="onEdit"
          @back-list="backList"
      ></to-do-list-edit-form>
  </li>`
  ,
  data () {
    return {
      todo: {},
      todos: [],
      index: '',
    }
  },
  methods: {
    destroyTodo (index) {
      const isDelete = confirm('削除しますか？')
      if (isDelete) {
        this.contents.splice(index, 1)
        localStorage.setItem('toDoList', JSON.stringify(this.contents))
        this.$emit('destroyTodo')
      }
    },
    onEdit () {
      this.$emit('editedTodo')
    },
    editTodo (todo, index) {
      this.todo = todo
      this.todo.edit = true
      this.index = index
    },
    backList() {
      this.todo.edit = false
    },
    checked (todo, index) {
      this.todos = this.contents
      if (todo.check === false) {
        todo.check = true
      } else {
        todo.check = false
      }
      this.todos.splice(index, 1, todo)
      localStorage.setItem('toDoList', JSON.stringify(this.todos))
      this.$emit('changeCheck')
    }
  }
})
