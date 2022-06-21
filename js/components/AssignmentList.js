import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags
    },

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>
                    ({{ assignments.length }})
                </span>
            </h2>
            
            <assignment-tags 
                @changeTag="currentTag = $event" 
                :current-tag="currentTag"
                :initial-tags="assignments.map(a => a.tag)"
            ></assignment-tags>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment 
                    v-for="assignment in filteredAssignments"
                    :assignment="assignment"
                    :key="assignment.id"
                >
                </assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String,
    },

    data() {
        return {
            currentTag: 'All'
        }
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'All') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        }
    }
}