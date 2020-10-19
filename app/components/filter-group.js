import Component from '@glimmer/component';

export default class FilterGroupComponent extends Component {
    get selectedObject() {
        return this.args.selectOptions.find(object => object.value === this.args.filterFieldContent);
    }
}
