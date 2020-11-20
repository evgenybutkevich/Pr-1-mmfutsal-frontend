import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    get pageValues() {
        const pages = Array.from({ length: Math.ceil(this.model.news.meta.count / this.limit) }, (_, i) => i + 1);

        return pages;
    }

    @tracked filterField;
    @tracked filterValue;

    @tracked page = 1;
    @tracked limit = 5;

    limitValues = [5, 10, 20, 50];

    resetPage() {
        this.page = 1;
    }

    movePage(amount) {
        this.page += amount;
    }

    @action
    onItemClick(value) {
        this.filterField = 'name';
        this.filterValue = value;
    }

    @action
    onResetClick() {
        this.filterField = null;
        this.filterValue = null;
    }

    @action
    onPageClick(page) {
        this.page = page;
    }

    @action
    onPageArrowClick(amount) {
        if (this.pageValues.length === 0) {
            return;
        }

        if (this.page === 1 && amount === -1) {
            return;
        }

        if (this.page === this.pageValues.length && amount === 1) {
            return;
        }

        this.movePage(amount);
    }

    @action
    onLimitClick(limit) {
        this.limit = limit;
        this.resetPage();
    }
}
