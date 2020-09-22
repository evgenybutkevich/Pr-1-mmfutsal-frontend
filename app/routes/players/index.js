import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    queryParams = {
        sortField: {
            refreshModel: true
        },
        sortDirection: {
            refreshModel: true
        }
    };

    model(params) {
        return this.store.query('player', params);
    }
}
