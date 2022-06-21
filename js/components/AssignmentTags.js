export default {
    template: `
        <div class="flex gap-2">
            <button 
                @click="$emit('changeTag', tag)"
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': currentTag === tag
                }"
                v-for="tag in tags"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        tags() {
            return ['All', ...new Set(this.initialTags)];
        }
    }
}