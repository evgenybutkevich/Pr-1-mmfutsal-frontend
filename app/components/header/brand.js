import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BrandComponent extends Component {
    @service router;

    @action
    onBrandClick(route) {
        this.router.transitionTo(route);
    }
}
