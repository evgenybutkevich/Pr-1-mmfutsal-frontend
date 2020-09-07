import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CreateController extends Controller {
    @action
    create() {
        const user = this.get('model');

        user.validate()
            .then(({ validations }) => {
                if (validations.get('isValid')) {
                    user.save()
                        .then(() => {
                            this.transitionToRoute('users.index');
                        }, () => {}
                        );
                }
            });
    }
}
