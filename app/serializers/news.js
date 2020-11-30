import ApplicationSerializer from './application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class NewsSerializer extends ApplicationSerializer.extend(EmbeddedRecordsMixin) {
    attrs = {
        section: {
            serialize: 'records',
            deserialize: 'records'
        },
        user: {
            serialize: 'records',
            deserialize: 'records'
        },
    };
}
