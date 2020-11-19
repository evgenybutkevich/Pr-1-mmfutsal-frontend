import ApplicationSerializer from './application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class TeamSerializer extends ApplicationSerializer.extend(EmbeddedRecordsMixin) {
    attrs = {
        result: {
            serialize: 'records',
            deserialize: 'records'
        },
    };
}
