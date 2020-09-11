import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CreateController extends Controller {
    @action
    create() {
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
}