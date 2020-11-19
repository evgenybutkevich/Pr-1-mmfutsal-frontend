import ApplicationSerializer from './application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class SeasonSerializer extends ApplicationSerializer.extend(EmbeddedRecordsMixin) {
    attrs = {
        teams: {
            serialize: 'records',
            deserialize: 'records'
        },
    };
}
