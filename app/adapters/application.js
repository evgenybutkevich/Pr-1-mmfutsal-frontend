import ENV from 'pr-1-mmfutsal-frontend/config/environment';
import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
    host = ENV.HOST;
}
