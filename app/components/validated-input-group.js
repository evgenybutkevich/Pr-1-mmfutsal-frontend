import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ValidatedInputGroupComponent extends Component {
    @tracked isFocused = false;

    @action
    setFocused() {
        this.isFocused = true;
    }
}
