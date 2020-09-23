import Model, { attr, belongsTo } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations(
    {
        playerTeamSeasonId: {
            validators: [
                validator('presence', true),
                validator('number', {
                    gt: 0,
                    integer: true,
                    positive: true,
                }),
            ],
        },
        goals: {
            description: 'Goals',
            validators: [
                validator('presence', true),
                validator('number', {
                    integer: true,
                    positive: true,
                }),
            ],
        },
        yellowCards: {
            description: 'Yellow cards',
            validators: [
                validator('presence', true),
                validator('number', {
                    integer: true,
                    positive: true,
                }),
            ],
        },
        redCards: {
            description: 'Red cards',
            validators: [
                validator('presence', true),
                validator('number', {
                    integer: true,
                    positive: true,
                }),
            ],
        },
        gamesPlayed: {
            description: 'Games played',
            validators: [
                validator('presence', true),
                validator('number', {
                    integer: true,
                    positive: true,
                }),
            ],
        },
    },
);

export default Model.extend(Validations, {
    playerTeamSeason: belongsTo('playerTeamSeason'),

    playerTeamSeasonId: attr('number'),
    goals: attr('number'),
    yellowCards: attr('number'),
    redCards: attr('number'),
    gamesPlayed: attr('number'),
    createdAt: attr('date'),
    updatedAt: attr('date'),
});
