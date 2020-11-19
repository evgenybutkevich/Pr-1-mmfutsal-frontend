import Route from '@ember/routing/route';
import qureyValidation from 'pr-1-mmfutsal-frontend/utils/query-validation';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
    queryParams = {
        filterField: {
            refreshModel: true
        },
        filterValue: {
            refreshModel: true
        },
        // sortField: {
        //     refreshModel: true
        // },
        // sortDirection: {
        //     refreshModel: true
        // },
        page: {
            refreshModel: true
        },
        limit: {
            refreshModel: true
        }
    };

    model(params) {
        qureyValidation(params);

        return RSVP.hash({
            sections: this.store.findAll('section'),
            news: this.store.query('news', params)
        });
    }
}
