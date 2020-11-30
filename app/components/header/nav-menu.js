import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

const DROPDOWN_VISIBLE_CLASS = "nav-menu__item nav-menu__1 dropdown visible";
const DROPDOWN_INVISIBLE_CLASS = "nav-menu__item nav-menu__1 dropdown invisible";

export default class NavMenuComponent extends Component {
    @service router;

    @tracked dropdownClass = DROPDOWN_INVISIBLE_CLASS;

    @action
    onItemClick(route) {
        this.router.transitionTo(route);
    }

    @action
    onDropdownClick() {
        this.dropdownClass = (this.dropdownClass === DROPDOWN_INVISIBLE_CLASS)
            ? DROPDOWN_VISIBLE_CLASS
            : DROPDOWN_INVISIBLE_CLASS;
    }
}
