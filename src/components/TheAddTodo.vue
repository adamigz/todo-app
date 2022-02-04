<template>
    <input type="text" class="rounded-lg grow border-2 border-sky-300 text-slate-500 placeholder:text-sky-300 placeholder:text-2xl focus:border-sky-500 focus:outline-none px-4 pt-4 pb-2 transition duration-150" v-model="todo.value" placeholder="Add some important stuff" @keypress.enter="add()"/>
</template>

<script>
import { required, minLength} from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            todo: {
                value: ''
            }
        }
    },
    computed: {
        todoValue() {
            return this.todo.value;
        }
    },
    methods: {
        add() {
            if (!this.$v.$invalid) {
                this.$store.dispatch('addTodo', this.todo);
                this.todo.value = '';
            }
        }
    },
    validations: {
        todoValue: {
            required,
            minLength: minLength(3)
        }
    }
}
</script>

<style>

</style>