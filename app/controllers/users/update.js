import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UpdateController extends Controller {
    @action
    update() {
        const user = this.get('model');

        user.validate()
            .then(({ validations }) => {
                if (validations.get('isValid')) {
                    if (!confirm('Are you sure?!')) {
                        return;
                    }
                }
            });

        user.save()
            .then(() => {
                this.transitionToRoute('users.index');
            }, () => { }
            );
    }

    @action
    delete(id) {
        if (!confirm('Are you sure?!')) {
            return;
        }

        const user = this.store.peekRecord('user', id);

        user.destroyRecord()
            .then(() => {
                this.transitionToRoute('users.index');
            }, () => { }
            );
    }
};
