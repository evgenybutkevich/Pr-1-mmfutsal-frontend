import Route from '@ember/routing/route';

export default Route.extend({
    async model() {
        const user = await this.store.findAll('user');
        return user.sortBy('id');
    }
})