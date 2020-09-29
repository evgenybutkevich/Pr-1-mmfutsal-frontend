import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const ASCENDING_DIRECTION = 'ASC';
const DESCENDING_DIRECTION = 'DESC';

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
    @tracked sortDirection = ASCENDING_DIRECTION;

    @action
    onHeaderClick(sortField) {
        this.sortField = sortField;

        this.sortDirection = (this.sortDirection === ASCENDING_DIRECTION)
            ? DESCENDING_DIRECTION
            : ASCENDING_DIRECTION;
    }

    @action
    updateFilter() {
        this.filterField = this.field
        this.filterValue = this.value;
    }
}
