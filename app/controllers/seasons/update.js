import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UpdateController extends Controller {
    @action
    update() {
        const season = this.get('model');

        season.validate()
            .then(({ validations }) => {
                if (validations.get('isValid')) {
                    const conf = confirm('Are you sure?!');

                    if (conf) {
                        season.save()
                            .then(() => {
                                this.transitionToRoute('seasons.index');
                            }, () => {}
                            );
                    }
                }
            });
    }

    @action
    delete(id) {
        const season = this.store.peekRecord('season', id);
        
        const conf = confirm('Are you sure?!');

        if (conf) {
            season.destroyRecord()
                .then(() => {
                    this.transitionToRoute('seasons.index');
                }, () => {}
                );
        }
    }
};
