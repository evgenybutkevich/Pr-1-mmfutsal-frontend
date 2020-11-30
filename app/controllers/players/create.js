import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CreateController extends Controller {
    @tracked showAllValidationErrors = false;

    @action
    create() {
        const player = this.get('model');

        player.validate()
            .then(({ validations }) => {
                if (validations.get('isValid')) {
                    player.save()
                        .then(() => {
                            this.transitionToRoute('players.index');
                        });
                } else {
                    this.showAllValidationErrors = true;
                }
            });
    }

    @action
    onCancelButtonClick() {
        this.transitionToRoute('players.index');
    }
}
