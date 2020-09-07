import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CreateController extends Controller {
    @action
    create() {
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
}