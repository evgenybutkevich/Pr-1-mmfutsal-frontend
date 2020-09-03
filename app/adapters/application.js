import RESTAdapter from '@ember-data/adapter/rest';

export default class Adapter extends RESTAdapter {
    host = 'http://localhost:3000';
}
