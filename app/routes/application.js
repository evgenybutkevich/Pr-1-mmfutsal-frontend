import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class ApplicationRoute extends Route {
    model() {
        return RSVP.hash({
            bestPlayers: this.store.findAll('best-player')
        });
    }
}
