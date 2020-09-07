import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ViewController extends Controller {
    @action
    delete(id) {
        const user = this.store.peekRecord('user', id);
        
        user.destroyRecord()
            .then(() => {
                this.transitionToRoute('users.index');
            }, () => {}
            );
    }
};