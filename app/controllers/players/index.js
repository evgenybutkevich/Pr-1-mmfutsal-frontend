import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const ASCENDING_DIRECTION = 'ASC';
const DESCENDING_DIRECTION = 'DESC';
const DOWN_ARROW = '&darr;';
const UP_ARROW = '&uarr;';

export default class IndexController extends Controller {
    get pageValues() {
        const pages = Array.from({ length: Math.ceil(this.model.meta.count / this.limit) }, (_, i) => i + 1);

        return pages;
    }

    @tracked filterField;
    @tracked filterFieldContent = this.filterField;
    @tracked filterValue;
    @tracked filterValueContent = this.filterValue;

    @tracked sortField = 'id';
    @tracked sortDirection = ASCENDING_DIRECTION;
    @tracked sortDirectionArrow = DOWN_ARROW;

    @tracked page = 1;
    @tracked limit = 5;

    selectOptions = [
        {
            text: 'First name',
            value: 'firstName'
        },
        {
            text: 'Last name',
            value: 'lastName'
        }
    ]

    tableOptions = [
        {
            text: 'ID',
            value: 'id'
        },
        {
            text: 'First name',
            value: 'firstName'
        },
        {
            text: 'Last name',
            value: 'lastName'
        }
    ]

    @action
    chooseFilterField(selectedObject) {
        this.filterFieldContent = selectedObject.value;
    }

    @action
    onFilterClick() {
        if (this.filterValueContent === '') {
            this.filterValue = null;
            return;
        }

        this.filterField = this.filterFieldContent;
        this.filterValue = this.filterValueContent;
        this.resetPage();
    }

    @action
    onFilterResetClick() {
        this.filterField = null;
        this.filterFieldContent = null;
        this.filterValue = null;
        this.filterValueContent = null;
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
    onRowClick(id) {
        this.transitionToRoute('players.view', id);
    }

    @action
    onCreateButtonClick() {
        this.transitionToRoute('players.create');
    }

    @action
    onViewButtonClick(id, event) {
        event.preventDefault();
        this.transitionToRoute('players.view', id);
    }

    @action
    onEditButtonClick(id, event) {
        event.preventDefault();
        this.transitionToRoute('players.update', id);
    }

    @action
    updatePaginationGroup(newPage, newLimit) {
        this.page = newPage;
        this.limit = newLimit;
    }
}
