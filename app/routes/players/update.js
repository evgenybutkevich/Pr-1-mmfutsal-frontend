import Route from '@ember/routing/route';

export default class UpdateRoute extends Route {
    model(params) {
        return this.store.findRecord('player', params.id);
    }
}
