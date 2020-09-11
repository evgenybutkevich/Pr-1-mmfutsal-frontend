import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    @action
    delete(id) {
        const player = this.store.peekRecord('player', id);

        const conf = confirm('Are you sure?!');
        
        if (conf) {
            player.destroyRecord();
        }
    }
};