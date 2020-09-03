import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UserCreateController extends Controller {
    @action
    create() {
        const userName = this.get('userName');
        const firstName = this.get('firstName');
        const lastName = this.get('lastName');
        const email = this.get('email');
        const telephone = this.get('telephone');
        const password = this.get('password');

        const user = this.store.createRecord('user', {
            userName,
            firstName,
            lastName,
            email,
            telephone,
            password,
        });

        user.save()
            .then(() => {
                this.transitionToRoute('users');
            }, () => {}
            );
    }
}
