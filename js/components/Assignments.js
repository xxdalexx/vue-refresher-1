import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList
    },

    template: `
        <section class="space-y-6">
            <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
            <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>
        </section>
    `,

    data() {
        return {
            assignments: [
                {
                    id: 1,
                    name: 'Finish Project',
                    complete: false
                },
                {
                    id: 2,
                    name: 'Read Chapter 4',
                    complete: false
                },
                {
                    id: 3,
                    name: 'Turn in Homework',
                    complete: false
                }
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    }
}