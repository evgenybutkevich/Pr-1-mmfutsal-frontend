import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UpdateController extends Controller {
    @action
    update() {
        const season = this.get('model');

        season.validate()
            .then(({ validations }) => {
                if (validations.get('isValid')) {
                    if (!confirm('Are you sure?!')) {
                        return
                    }
                }
            });

        season.save()
            .then(() => {
                this.transitionToRoute('seasons.index');
            }, () => { }
            );
    }

    // @action
    // delete(id) {
    //     if (!confirm('Are you sure?!')) {
    //         return;
    //     }

    //     const season = this.store.peekRecord('season', id);

    //     season.destroyRecord()
    //         .then(() => {
    //             this.transitionToRoute('seasons.index');
    //         }, () => { }
    //         );
    // }
};
