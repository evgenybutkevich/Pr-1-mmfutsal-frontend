import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UpdateController extends Controller {
    @action
    update() {
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

    // @action
    // delete(id) {
    //     if (!confirm('Are you sure?!')) {
    //         return;
    //     }

    //     const team = this.store.peekRecord('team', id);

    //     team.destroyRecord()
    //         .then(() => {
    //             this.transitionToRoute('teams.index');
    //         }, () => { }
    //         );
    // }
};
