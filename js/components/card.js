export default {
    template: `
        <div :class="{
            ' p-4 border rounded-lg': true,
            'bg-gray-700 border-gray-600 text-white': theme === 'dark',
            'bg-white border-gray-300 text-black': theme === 'light'
        }">
            <h2 v-if="$slots.heading" class="font-bold mb-2">
                <slot name="heading" />
            </h2>
            <slot />
            
            <div v-if="$slots.footer" class="border-t border-gray-600 mt-4 pt-4 text-sm">
                <slot name="footer" />
            </div>
        </div>
    `,

    props: {
        theme: {
            type: String,
            default: 'dark'
        }
    }
}