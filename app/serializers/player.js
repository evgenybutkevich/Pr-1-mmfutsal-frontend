import ApplicationSerializer from './application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class PlayerSerializer extends ApplicationSerializer.extend(EmbeddedRecordsMixin) {
    attrs = {
        seasons: {
            serialize: 'records',
            deserialize: 'records'
        },
    };
}
