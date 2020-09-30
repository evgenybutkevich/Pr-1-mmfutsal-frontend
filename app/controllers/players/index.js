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

    filterFieldValues = [
        'firstName',
        'lastName'
    ]

    @tracked filterField;
    @tracked filterValue;

    @tracked sortField = 'id';
    @tracked sortDirection = 'ASC';

    @action
    chooseFilterField(filterField) {
        this.filterField = filterField;
    }

    @action
    onFilterClick() {
        this.filterValue = this.value;
    }

    @action
    onHeaderClick(sortField) {
        this.sortField = sortField;

        this.sortDirection = (this.sortDirection == "ASC") ? "DESC" : "ASC";
    }
}
