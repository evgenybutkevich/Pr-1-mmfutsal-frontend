import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PaginationGroupComponent extends Component {
    get pageValues() {
        const pages = Array.from({ length: Math.ceil(this.args.model.meta.count / this.args.limit) }, (_, i) => i + 1);

        return pages;
    }

    limitValues = [5, 10, 20, 50];

    resetPage(newLimit) {
        newPage = 1;

        this.args.updatePaginationGroup(newPage, newLimit);
    }

    movePage(amount) {
        newPage = this.args.page + amount;
        newLimit = this.args.limit;

        this.args.updatePaginationGroup(newPage, newLimit);
    }

    @action
    onPageClick(newPage) {
        newLimit = this.args.limit;

        this.args.updatePaginationGroup(newPage, newLimit);
    }

    @action
    onPageArrowClick(amount) {
        if (this.pageValues.length === 0) {
            return;
        }

        if (this.args.page === 1 && amount === -1) {
            return;
        }

        if (this.args.page === this.pageValues.length && amount === 1) {
            return;
        }

        this.movePage(amount);
    }

    @action
    onLimitClick(newLimit) {
        this.resetPage(newLimit);
    }
}
