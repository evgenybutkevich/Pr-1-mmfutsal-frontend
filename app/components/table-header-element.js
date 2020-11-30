import Component from '@glimmer/component';

export default class TableHeaderElementComponent extends Component {
    get headerClass() {
        let className = 'table-group-header';

        if (this.args.sortField === this.args.value) {
            className = className.concat(' ', 'sorted');

            if (this.args.sortDirection && this.args.sortDirection === 'ASC') {
                className = className.concat(' ', 'asc');
            } else {
                className = className.concat(' ', 'desc');
            }
        }

        return className;
    }
}
