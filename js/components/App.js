import Assignments from "./Assignments.js";
import Card from "./card.js";

export default  {
    components: {
        Assignments,
        Card
    },

    template: `
        <div class="grid gap-6">
            <assignments></assignments>
            
            <card>
                <template v-slot:heading>
                    Hello World
                </template>
                Content
                <template v-slot:footer>
                    Footer
                </template>
            </card>
            <card theme="light">
                <template v-slot:heading>
                    Hello World
                </template>
                Content
                <template v-slot:footer>
                    Footer
                </template>
            </card>
        </div>
    `,
};