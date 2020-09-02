import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        update() {
            this.get('model').save();
        },
    },
});
