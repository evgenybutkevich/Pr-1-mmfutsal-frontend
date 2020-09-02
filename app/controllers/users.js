import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        remove() {
            const id = this.get('id');

            const user = this.store.peekRecord('user', id);
            user.destroyRecord();
        },
    },
});
