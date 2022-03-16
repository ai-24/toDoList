app.component('edit-form', {
  props: {
    index: {
      type: Number,
      required: true
    },
    todo: {
      type: Object,
      required: true
    },
    contents: {
      type: Array,
      required: true
    }
  },
  template: `
  <form class="edit-form" v-if="this.todo.edit" @submit="onChange">
  　　  <input type="text" id="editContent" v-model="editContent">
  　　  <input class="edit-button" type="submit" value="編集する"/><button class="cancel" @click="$emit('back-list')">キャンセル</button>
  </form>`,
  data () {
    return {
      editContent: '',
      contentsArray: [],
      editDetail: {}
    }
  },
  mounted () {
    this.editContent = this.todo.detail
    this.contentsArray = this.contents
  },
  methods: {
    onChange () {
      this.editDetail.edit = false
      this.editDetail.detail = this.editContent
      this.contentsArray.splice(this.index, 1, this.editDetail)
      localStorage.setItem('toDoList', JSON.stringify(this.contentsArray))
      this.edited()
    },
    edited () {
      this.$emit('edited-list')
    }
  }
})
