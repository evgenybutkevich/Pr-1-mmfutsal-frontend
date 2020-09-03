import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UserUpdateController extends Controller {
    @action
    update() {
        const user = this.get('model');

        user.validate()
            .then(({ validations }) => {
                if (validations.get('isValid')) {
                    user.save()
                        .then(() => {
                            this.transitionToRoute('users');
                        },() => {}
                        );
                }
            });
    }

    @action
    delete(id) {
        const user = this.store.peekRecord('user', id);
        
        user.destroyRecord();
    }
};
