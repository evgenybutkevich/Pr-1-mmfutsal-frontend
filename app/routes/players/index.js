import Route from '@ember/routing/route';
import queryValidation from 'pr-1-mmfutsal-frontend/utils/query-validation';

export default class IndexRoute extends Route {
    queryParams = {
        filterField: {
            refreshModel: true
        },
        filterValue: {
            refreshModel: true
        },
        sortField: {
            refreshModel: true
        },
        sortDirection: {
            refreshModel: true
        },
        page: {
            refreshModel: true
        },
        limit: {
            refreshModel: true
        }
    };

    model(params) {
        queryValidation(params);

        return this.store.query('player', params);
    }
}
