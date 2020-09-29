import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const ascendingDirection = 'ASC';
const descendingDirection = 'DESC';

export default class IndexController extends Controller {
    queryParams = [
        'sortField',
        'sortDirection'
    ];

    @tracked sortField = 'id';
    @tracked sortDirection = ascendingDirection;

    @action
    onHeaderClick(sortField) {
        this.sortField = sortField;

        this.sortDirection = (this.sortDirection === ascendingDirection)
            ? descendingDirection
            : ascendingDirection;
    }
}
