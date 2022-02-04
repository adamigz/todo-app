<template>
  <main class="grid bg-cover bg-gradient-to-b from-sky-100">
    <transition name="fade" appear>
      <div v-show="showAlert" @click="showAlert = false" class="absolute place-self-center bg-white top-4 mx-auto rounded shadow-sm border border-green-400 text-green-500 text-xl py-4 px-24 hover:font-semibold hover:border-2 transition duration-150">
        Done!
      </div>
    </transition>
    <div class="flex md:py-8 md:px-52 p-4">
      <TheAddTodo/>
    </div>
    <div class="flex">
      <div class="text-center mx-auto px-12 py-4 animate-pulse placeholder:text-sky-300 shadow-md shadow-sky-500 rounded border-sky-300 border" v-show="!todos.length">
        <h3 class="text-2xl text-sky-500">
          It's so empty here... 
        </h3>
        <p class="text-sky-500 mt-2">
          Add some todo's
        </p>
      </div>
      <transition-group name="fade" v-show="todos.length" class="grid grow mx-auto gap-y-4 md:px-64 py-4 px-8">
        <Todo v-for="(todo, index) in todos" :key="index" :todo="todo" @done="remove(index)"/>
      </transition-group>
    </div>
  </main>
</template>

<script>
import TheAddTodo from '../components/TheAddTodo.vue'
import Todo from '../components/Todo.vue'

export default {
  name: 'Home',
  data() {
    return {
      showAlert: false
    }
  },
  components: {
    TheAddTodo,
    Todo
  },
  methods: {
    remove(index) {
      this.$store.dispatch('removeTodo', index);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false
      }, 5000);
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  created() {
    this.$store.dispatch('getTodos');
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-2rem);
}
</style>