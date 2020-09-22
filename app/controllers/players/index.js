import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    queryParams = [
        'sortField',
        'sortDirection'
    ];

    @tracked sortField = 'id';
    @tracked sortDirection = 'ASC';

    @action
    onHeaderClick(fieldName) {
        this.sortField = fieldName;

        switch (this.sortDirection) {
            case 'ASC':
                this.sortDirection = 'DESC';
                break;
            case 'DESC':
                this.sortDirection = 'ASC';
                break;
        }
    }
}
