<template>
    <div class="flex transition duration-150 shadow-sm hover:shadow-md hover:shadow-sky-400 hover:text-slate-600 shadow-sky-300 pl-12 grow rounded border border-sky-300 bg-white text-slate-500">
        <div class="py-4" v-if="!editting">
            {{ todo.value }}
        </div>
        <div class="flex grow mr-4" v-else>
            <input type="text" class="p-2 -ml-2 border rounded-md my-auto border-slate-300 focus:border-slate-400 focus:outline-none grow" @keypress.enter="edit()" ref="edit" v-model="todoValue">
        </div>
        <div class="ml-auto">
            <button @click="showEdit()" class="rounded-sm p-4 text-yellow-400 transition duration-150 hover:text-white hover:bg-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            </button>
            <button @click="$emit('done')" class="rounded-sm ml-auto p-4 text-green-400 transition duration-150 hover:text-white hover:bg-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import { required, minLength} from 'vuelidate/lib/validators'

export default {
    data: () => {
        return {
            editting: false,
            todoValue: ''
        }
    },
    computed: {
    },
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        edit() {
            if (!this.$v.$invalid) {
                this.$store.dispatch('editTodo', {
                    index: this.index,
                    todo: {
                        value: this.todoValue
                    }
                });
                this.$emit('editted');
                this.editting = false;
            }
        },
        showEdit() {
            this.editting = !this.editting;
            if (this.editting) {
                this.$nextTick(() => this.$refs.edit.focus());
            }   
        }
    },
    validations: {
        todoValue: {
            required,
            minLength: minLength(3)
        }
    },
    mounted() {
        this.todoValue = this.todo.value;
    }
}
</script>

<style scoped>

</style>