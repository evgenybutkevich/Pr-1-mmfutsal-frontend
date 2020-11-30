import Model, { attr, belongsTo } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    heading: {
        description: 'Heading',
        validators: [
            validator('presence', true),
            validator('length', {
                min: 10,
                max: 255
            })
        ]
    },
    sectionId: {
        validators: [
            validator('presence', true),
            validator('number', {
                gt: 0,
                integer: true,
                positive: true
            })]
    },
    content: {
        description: 'Content',
        validators: [
            validator('presence', true),
            validator('length', {
                min: 10,
                max: 32768
            })
        ]
    },
    userId: {
        validators: [
            validator('presence', true),
            validator('number', {
                gt: 0,
                integer: true,
                positive: true
            })]
    },
});

export default Model.extend(Validations, {
    section: belongsTo('section'),
    user: belongsTo('user'),

    heading: attr('string'),
    sectionId: attr('number'),
    content: attr('string'),
    userId: attr('number'),
    createdAt: attr('date'),
    updatedAt: attr('date')
});
