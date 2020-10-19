import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MenuSectionComponent extends Component {
    @service router;

    @action
    onItemClick(route) {
        this.router.transitionTo(route);
    }
}
