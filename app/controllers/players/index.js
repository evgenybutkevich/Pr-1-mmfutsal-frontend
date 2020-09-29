import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    queryParams = [
        'filterField',
        'filterValue',
        'sortField',
        'sortDirection'
    ];

    @tracked filterField;
    @tracked filterValue;
    @tracked filter = "";
    @tracked sortField = 'id';
    @tracked sortDirection = 'ASC';

    @action
    onHeaderClick(sortField) {
        this.sortField = sortField;

        this.sortDirection = (this.sortDirection == "ASC") ? "DESC" : "ASC";
    }

    @action
    updateFilter() {
        this.filterField = this.field
        this.filterValue = this.value;
    }
}
