import ApplicationAdapter from './application';

export default class BestPlayerAdapter extends ApplicationAdapter {
    pathForType = function () {
        return 'players/best-players';
    };
}
