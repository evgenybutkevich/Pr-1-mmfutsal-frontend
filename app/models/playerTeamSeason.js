import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations(
    {
        playerId: {
            validators: [
                validator('number', {
                    gt: 0,
                    integer: true,
                    positive: true,
                }),
                validator('presence', true),
            ],
        },
        teamId: {
            validators: [
                validator('number', {
                    gt: 0,
                    integer: true,
                    positive: true,
                }),
                validator('presence', true),
            ],
        },
        seasonId: {
            validators: [
                validator('number', {
                    gt: 0,
                    integer: true,
                    positive: true,
                }),
                validator('presence', true),
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
