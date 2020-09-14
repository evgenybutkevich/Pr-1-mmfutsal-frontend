import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ViewController extends Controller {
    @action
    delete(id) {
        if (!confirm('Are you sure?!')) {
            return;
        }

        const team = this.store.peekRecord('team', id);

        team.destroyRecord()
            .then(() => {
                this.transitionToRoute('teams.index');
            }, () => { }
            );
    }
};