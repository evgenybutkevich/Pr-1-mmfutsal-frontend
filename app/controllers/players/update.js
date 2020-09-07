import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UpdateController extends Controller {
    @action
    update() {
        const player = this.get('model');

        player.validate()
            .then(({ validations }) => {
                if (validations.get('isValid')) {
                    player.save()
                        .then(() => {
                            this.transitionToRoute('players.index');
                        }, () => {}
                        );
                }
            });
    }

    @action
    delete(id) {
        const player = this.store.peekRecord('player', id);
        
        player.destroyRecord()
            .then(() => {
                this.transitionToRoute('players.index');
            }, () => {}
            );
    }
};
