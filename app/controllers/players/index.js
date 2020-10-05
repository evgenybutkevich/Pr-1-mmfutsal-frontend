import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const ASCENDING_DIRECTION = 'ASC';
const DESCENDING_DIRECTION = 'DESC';
const DOWN_ARROW = '&darr;';
const UP_ARROW = '&uarr;';

export default class IndexController extends Controller {
    get pageArray() {
        let array = new Array(Math.ceil(this.model.meta.count / this.limit)).fill().map((_, i) => i + 1);

        return array;
    }

    @tracked filterField;
    @tracked filterValue;

    @tracked sortField = 'id';
    @tracked sortDirection = ASCENDING_DIRECTION;
    @tracked sortDirectionArrow = DOWN_ARROW;

    @tracked page = 1;
    @tracked limit = 5;

    resetPage() {
        this.page = 1;
    }

    tableData = [
        {
            description: 'ID',
            fieldName: 'id'
        },
        {
            description: 'First name',
            fieldName: 'firstName'
        },
        {
            description: 'Last name',
            fieldName: 'lastName'
        }
    ]

    filterFieldValues = [
        'firstName',
        'lastName'
    ]

    limitValues = [5, 10, 20, 50];

    @action
    onFilterClick() {
        this.filterField = this.field;
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
    onPageDecrementClick() {
        if (this.page === 1) {
            return;
        }

        this.page -= 1;
    }

    @action
    onPageClick(page) {
        this.page = page;
    }

    @action
    onPageIncrementClick() {
        if (this.page === this.pageValues.length) {
            return;
        }

        this.page += 1;
    }

    @action
    onLimitClick(limit) {
        this.limit = limit;
        this.resetPage();
    }
}
