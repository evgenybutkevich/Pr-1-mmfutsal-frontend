import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    get pageArray() {
        let array = []

        for (let index = 1; index <= Math.ceil(this.model.meta.count / this.limit); index++) {
            array.push(index);
        }

        return array;
    }

    queryParams = [
        'filterField',
        'filterValue',
        'sortField',
        'sortDirection',
        'page',
        'limit'
    ];

    @tracked filterField;
    @tracked filterValue;
    @tracked filter = "";
    @tracked sortField = 'id';
    @tracked sortDirection = 'ASC';
    @tracked page = 1;
    @tracked limit = 5;

    limitValues = [5, 10, 20, 50];

    @action
    onHeaderClick(sortField) {
        this.sortField = sortField;

        this.sortDirection = (this.sortDirection == "ASC") ? "DESC" : "ASC";
    }

    @action
    onPageClick(page) {
        this.page = page;
    }

    @action
    chooseLimit(limit) {
        this.limit = limit;
    }

    @action
    updateFilter() {
        this.filterField = this.field
        this.filterValue = this.value;
    }
}
