<template>
    <div class="flex transition duration-150 shadow-sm hover:shadow-md hover:shadow-sky-400 hover:text-slate-600 shadow-sky-300 pl-12 grow rounded border border-sky-300 text-slate-500">
        <div class="py-4">
            {{ todo.value }}
        </div>
        <button @click="$emit('done')" class="rounded-sm ml-auto p-4 text-green-400 transition duration-150 hover:text-white hover:bg-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>