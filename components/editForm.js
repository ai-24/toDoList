app.component('edit-form', {
  props: {
    index: {
      type: Number,
      required: true
    },
    edit: {
      type: Boolean,
      required: true
    },
    todo: {
      type: String
    },
    contents: {
      type: Array,
      required: true
    }
  },
  template: `
  <form class="new-list" @submit="onChange">
  　　  <input type="text" id="editContent" v-model="editContent">
  　　  <input class="button" type="submit" value="編集する"/>
  　　  <button @click="editCancel">キャンセル</button>
  </form>`,
  data () {
    return {
      editContent: '',
      contentsArray: []
    }
  },
  mounted () {
    this.editContent = this.todo
    this.contentsArray = this.contents
  },
  methods: {
    onChange () {
      this.contentsArray.splice(this.index, 1, this.editContent)
      localStorage.setItem('toDoList', JSON.stringify(this.contentsArray))
    },
    editCancel () {
      this.$emit('back-list')
    }
  }
})