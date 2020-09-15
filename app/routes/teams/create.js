import Route from '@ember/routing/route';

export default class CreateRoute extends Route {
    model() {
        return this.store.createRecord('team');
    }
}
