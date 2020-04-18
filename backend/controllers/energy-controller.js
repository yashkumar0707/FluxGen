const HttpError = require('../models/http-error');
const Energy = require('../models/energy')
let DUMMY_ENERGY = [
    {
        id: 'e1',
        energy: 25,
        time: 1586943145824,
        plantId: 'p1'
    },
    {
        id: 'e2',
        energy: 30,
        time: 1586943150000,
        plantId: 'p1'
    }
]

const getEnergyByPlantId = async (req, res, next) => {
    const pid = req.params.pid;
    // const energy = DUMMY_ENERGY.filter(p => {
    //     return p.plantId === plantId;
    try {
        energy = await Energy.find({ plantId: pid })
    } catch (err) {

    }

    if (!energy || energy.length === 0) {
        return next(
            new HttpError('Could not find places for the provided user id.', 404)
        );
    }

    res.json({ energy: energy.map(ene => ene.toObject({ getters: true })) });
};


exports.getEnergyByPlantId = getEnergyByPlantId