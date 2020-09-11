import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    @action
    delete(id) {
        const season = this.store.peekRecord('season', id);

        const conf = confirm('Are you sure?!');
        
        if (conf) {
            season.destroyRecord();
        }
    }
};