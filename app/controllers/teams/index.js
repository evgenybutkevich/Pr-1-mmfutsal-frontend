import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    @action
    delete(id) {
        const team = this.store.peekRecord('team', id);

        const conf = confirm('Are you sure?!');
        
        if(conf) {
            team.destroyRecord();
        }
    }
};
