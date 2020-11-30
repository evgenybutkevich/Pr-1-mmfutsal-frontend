import Component from '@glimmer/component';

export default class FilterGroupComponent extends Component {
    get selectedObject() {
        return this.args.selectOptions.find(({ value }) => { return value === this.args.filterFieldContent; });
    }
}
