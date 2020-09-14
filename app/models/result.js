import Model, { attr, belongsTo } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations(
    {
        playerTeamSeasonId: {
            validators: [
                validator('number', {
                    gt: 0,
                    integer: true,
                    positive: true,
                }),
                validator('presence', true),
            ],
        },
        goals: {
            description: 'Goals',
            validators: [
                validator('number', {
                    integer: true,
                    positive: true,
                }),
                validator('presence', true),
            ],
        },
        yellowCards: {
            description: 'Yellow cards',
            validators: [
                validator('number', {
                    integer: true,
                    positive: true,
                }),
                validator('presence', true),
            ],
        },
        redCards: {
            description: 'Red cards',
            validators: [
                validator('number', {
                    integer: true,
                    positive: true,
                }),
                validator('presence', true),
            ],
        },
        gamesPlayed: {
            description: 'Games played',
            validators: [
                validator('number', {
                    integer: true,
                    positive: true,
                }),
                validator('presence', true),
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
