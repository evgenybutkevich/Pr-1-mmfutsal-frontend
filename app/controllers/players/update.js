import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UpdateController extends Controller {
    @tracked showAllValidationErrors = false;

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
                } else {
                    this.showAllValidationErrors = true;
                }
            });
    }

    @action
    onCancelButtonClick() {
        const player = this.get('model');
        
        player.rollbackAttributes();
        this.transitionToRoute('players.index');
    }
};
