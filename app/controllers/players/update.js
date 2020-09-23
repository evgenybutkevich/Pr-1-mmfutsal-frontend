import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UpdateController extends Controller {
    @action
    update() {
        const player = this.get('model');

        player.validate()
            .then(({ validations }) => {
                if (validations.get('isValid')) {
                    if (!confirm('Are you sure?!')) {
                        return;
                    }

                    player.save()
                        .then(() => {
                            this.transitionToRoute('players.index');
                        });
                }
            });
    }
};