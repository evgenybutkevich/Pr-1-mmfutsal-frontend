import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const ASCENDING_DIRECTION = 'ASC';
const DESCENDING_DIRECTION = 'DESC';

export default class IndexController extends Controller {
    get pageArray() {
        let array = []

        for (let index = 1; index <= Math.ceil(this.model.meta.count / this.limit); index++) {
            array.push(index);
        }

        return array;
    }

    @tracked filterField;
    @tracked filterValue;

    @tracked sortField = 'id';
    @tracked sortDirection = ASCENDING_DIRECTION;

    @tracked page = 1;
    @tracked limit = 5;

    resetPage() {
        this.page = 1;
    }

    filterFieldValues = [
        'firstName',
        'lastName'
    ]

    limitValues = [5, 10, 20, 50];

    @action
    selectFilterField(filterField) {
        this.filterField = filterField;
    }

    @action
    onFilterClick() {
        this.filterValue = this.value;
        this.resetPage();
    }

    @action
    onHeaderClick(sortField) {
        this.sortField = sortField;
        this.sortDirection = (this.sortDirection === ASCENDING_DIRECTION)
            ? DESCENDING_DIRECTION
            : ASCENDING_DIRECTION;
        this.resetPage();
    }

    @action
    onPageClick(page) {
        this.page = page;
    }

    @action
    selectLimit(limit) {
        this.limit = limit;
        this.resetPage();
    }
}
