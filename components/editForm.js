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
  <form v-if="this.todo.edit" class="new-list" @submit="onChange">
  　　  <input type="text" id="editContent" v-model="editContent">
  　　  <input class="button" type="submit" value="編集する"/>
  　　  <button @click="$emit('back-list')">キャンセル</button>
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
