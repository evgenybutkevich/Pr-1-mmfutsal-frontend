import Route from '@ember/routing/route';

export default class ViewRoute extends Route {
    model(params) {
        return this.store.findRecord('season', params.id);
    }
}
