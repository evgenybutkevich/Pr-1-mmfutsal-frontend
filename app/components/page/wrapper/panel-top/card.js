import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CardComponent extends Component {
    @action
    onCardClick(id) {
        this.args.onBestPlayerClick(id);
    }
}
