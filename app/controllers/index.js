import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    @tracked filterField;
    @tracked filterValue;

    @tracked page = 1;
    @tracked limit = 5;

    @action
    onItemClick(value) {
        this.filterField = 'name';
        this.filterValue = value;
    }

    @action
    onResetClick() {
        this.filterField = null;
        this.filterValue = null;
    }

    @action
    updatePaginationGroup(newPage, newLimit) {
        this.page = newPage;
        this.limit = newLimit;
    }
}
