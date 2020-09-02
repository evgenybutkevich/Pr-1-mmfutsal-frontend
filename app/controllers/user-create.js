import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        create() {
            const userName = this.get('userName');
            const firstName = this.get('firstName');
            const lastName = this.get('lastName');
            const email = this.get('email');
            const telephone = this.get('telephone');
            const password = this.get('password');

            const newUser = this.store.createRecord('user', {
                userName,
                firstName,
                lastName,
                email,
                telephone,
                password,
            });

            newUser.save();
        },
    },
});
