import Route from '@ember/routing/route';

export default class UserUpdateRoute extends Route {
    model(params) {
        return this.store.findRecord('user', params.id);
    }
}
