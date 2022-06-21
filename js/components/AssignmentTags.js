export default {
    template: `
        <div class="flex gap-2">
            <button 
                @click="$emit('update:modelValue', tag)"
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': modelValue === tag
                }"
                v-for="tag in tags"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        modelValue: String
    },

    computed: {
        tags() {
            return ['All', ...new Set(this.initialTags)];
        }
    }
}