import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CreateController extends Controller {
    @action
    create() {
        const team = this.get('model');

        team.validate()
            .then(({ validations }) => {
                if (validations.get('isValid')) {
                    if (!confirm('Are you sure?!')) {
                        return;
                    }
                }
            });

        team.save()
            .then(() => {
                this.transitionToRoute('teams.index');
            }, () => { }
            );
    }
}
