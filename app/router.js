import EmberRouter from '@ember/routing/router';
import config from 'pr-1-mmfutsal-frontend/config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function () {
    this.route('index', { path: '/' });

    this.route('players', { path: '/players' }, function () {
        this.route('index', { path: '' });
        this.route('create', { path: '/create' });
        this.route('update', { path: '/update/:id' });
        this.route('view', { path: '/view/:id' });
    });

    this.route('seasons', { path: '/seasons' }, function () {
        this.route('index', { path: '' });
        this.route('create', { path: '/create' });
        this.route('update', { path: '/update/:id' });
        this.route('view', { path: '/view/:id' });
    });

    this.route('teams', { path: '/teams' }, function () {
        this.route('index', { path: '' });
        this.route('create', { path: '/create' });
        this.route('update', { path: '/update/:id' });
        this.route('view', { path: '/view/:id' });
    });

    this.route('users', { path: '/users' }, function () {
        this.route('index', { path: '' });
        this.route('create', { path: '/create' });
        this.route('update', { path: '/update/:id' });
        this.route('view', { path: '/view/:id' });
    });

    this.route('contacts');
    this.route('about');
});
