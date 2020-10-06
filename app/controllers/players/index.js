import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const ASCENDING_DIRECTION = 'ASC';
const DESCENDING_DIRECTION = 'DESC';
const DOWN_ARROW = '&darr;';
const UP_ARROW = '&uarr;';

export default class IndexController extends Controller {
    get pageValues() {
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

    resetPage() {
        this.page = 1;
    }

    movePage(amount) {
        this.page += amount;
    }

    limitValues = [5, 10, 20, 50];

    @action
    onFilterClick() {
        this.filterField = this.field;
        this.filterValue = this.value;
        this.resetPage();
    }

    @action
    onHeaderClick(sortField) {
        if (this.sortField === sortField) {
            this.sortDirection = (this.sortDirection === ASCENDING_DIRECTION)
                ? DESCENDING_DIRECTION
                : ASCENDING_DIRECTION;
            this.sortDirectionArrow = (this.sortDirection === ASCENDING_DIRECTION)
                ? DOWN_ARROW
                : UP_ARROW;
        } else {
            this.sortField = sortField;
        }

        this.resetPage();
    }

    @action
    onPageClick(page) {
        this.page = page;
    }

    @action
    onPageArrowClick(amount) {
        if (this.page === 1 && amount === -1) {
            return;
        }

        if (this.page === this.pageValues.length && amount === 1) {
            return;
        }

        this.movePage(amount);
    }

    @action
    onLimitClick(limit) {
        this.limit = limit;
        this.resetPage();
    }
}
