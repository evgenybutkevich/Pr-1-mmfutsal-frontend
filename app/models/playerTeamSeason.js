import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations(
    {
        playerId: {
            validators: [
                validator('presence', true),
                validator('number', {
                    gt: 0,
                    integer: true,
                    positive: true,
                }),
            ],
        },
        teamId: {
            validators: [
                validator('presence', true),
                validator('number', {
                    gt: 0,
                    integer: true,
                    positive: true,
                }),
            ],
        },
        seasonId: {
            validators: [
                validator('presence', true),
                validator('number', {
                    gt: 0,
                    integer: true,
                    positive: true,
                }),
            ],
        },
    },
);

export default Model.extend(Validations, {
    playerId: attr('number'),
    teamId: attr('number'),
    seasonId: attr('number'),
    createdAt: attr('date'),
    updatedAt: attr('date'),
});
