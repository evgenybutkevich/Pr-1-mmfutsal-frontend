import Application from 'pr-1-mmfutsal-frontend/app';
import config from 'pr-1-mmfutsal-frontend/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
