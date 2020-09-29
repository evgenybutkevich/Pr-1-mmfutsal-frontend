import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    ascendingDirection = 'ASC'
    descendingDirection = 'DESC'

    queryParams = [
        'sortField',
        'sortDirection'
    ];

    @tracked sortField = 'id';
    @tracked sortDirection = this.ascendingDirection;

    @action
    onHeaderClick(sortField) {
        this.sortField = sortField;

        this.sortDirection = (this.sortDirection == this.ascendingDirection)
            ? this.descendingDirection
            : this.ascendingDirection;
    }
}
