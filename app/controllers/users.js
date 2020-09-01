import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        create() {
            const userName = this.get('userName');
            const email = this.get('email');
            const telephone = this.get('telephone');
            const password = this.get('password');
            const firstName = this.get('firstName');
            const lastName = this.get('lastName');

            const newUser = this.store.createRecord('user', {
                userName,
                email,
                telephone,
                password,
                firstName,
                lastName,
            });

            newUser.save();
        },
        update() {
            const id = this.get('updateId');
            const userName = this.get('newUserName');
            const email = this.get('newEmail');
            const telephone = this.get('newTelephone');
            const password = this.get('newPassword');
            const firstName = this.get('newFirstName');
            const lastName = this.get('newLastName');

            const user = this.store.peekRecord('user', id);

            if (userName) { user.set('userName', userName); }
            if (email) { user.set('email', email); }
            if (telephone) { user.set('telephone', telephone); }
            if (password) { user.set('password', password); }
            if (firstName) { user.set('firstName', firstName); }
            if (lastName) { user.set('lastName', lastName); }

            user.save();
        },
        remove() {
            const id = this.get('id');

            const user = this.store.peekRecord('user', id);
            user.destroyRecord();
        },
    },
});
