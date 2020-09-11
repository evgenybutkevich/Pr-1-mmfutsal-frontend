import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UpdateController extends Controller {
    @action
    update() {
        const team = this.get('model');

        team.validate()
            .then(({ validations }) => {
                if (validations.get('isValid')) {
                    const conf = confirm('Are you sure?!');

                    if (conf) {
                        team.save()
                            .then(() => {
                                this.transitionToRoute('teams.index');
                            }, () => {}
                            );
                    }
                }
            });
    }

    @action
    delete(id) {
        const team = this.store.peekRecord('team', id);
        
        const conf = confirm('Are you sure?!');

        if (conf) {
            team.destroyRecord()
                .then(() => {
                    this.transitionToRoute('teams.index');
                }, () => {}
                );
        }
    }
};
