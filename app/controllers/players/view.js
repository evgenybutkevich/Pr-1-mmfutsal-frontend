import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ViewController extends Controller {
    @action
    onCancelButtonClick() {
        this.transitionToRoute('players.index');
    }
}
