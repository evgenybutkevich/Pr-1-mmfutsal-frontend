import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    @action
    delete(id) {
        const user = this.store.peekRecord('user', id);

        const conf = confirm('Are you sure?!');
        
        if(conf) {
            user.destroyRecord();
        }
    }
};
