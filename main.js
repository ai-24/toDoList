const app = Vue.createApp({
  data () {
    return {
      contents: [],
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
    }
  }
})
