import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NavMenuComponent extends Component {
    @service router;

    @action
    onItemClick(route) {
        this.router.transitionTo(route);
    }
}
