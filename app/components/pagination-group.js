import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PaginationGroupComponent extends Component {
    get pageValues() {
        const pages = Array.from({ length: Math.ceil(this.args.model.meta.count / this.args.limit) }, (_, i) => i + 1);

        return pages;
    }

    newPage = this.args.page;
    newLimit = this.args.limit;
    limitValues = [5, 10, 20, 50];

    updatePaginationValues() {
        this.args.updatePaginationGroup(this.newPage, this.newLimit);
    }

    resetPage() {
        this.newPage = 1;

        this.updatePaginationValues();
    }

    movePage(amount) {
        this.newPage += amount;

        this.updatePaginationValues();
    }

    @action
    onPageClick(newPage) {
        this.newPage = newPage;

        this.updatePaginationValues();
    }

    @action
    onPageArrowClick(amount) {
        if (this.pageValues.length === 0) {
            return;
        }

        if (this.newPage === 1 && amount === -1) {
            return;
        }

        if (this.newPage === this.pageValues.length && amount === 1) {
            return;
        }

        this.movePage(amount);
    }

    @action
    onLimitClick(newLimit) {
        this.newLimit = newLimit;

        this.resetPage();
    }
}
