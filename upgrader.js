// Upgrader
module.exports = function (creep) {
    if (creep.memory.task === 'harvest') {
        if (creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            creep.task = 'upgrade';
        }
    }
    else {
        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
        if (creep.carry.energy === 0) {
            creep.task = 'harvest';
        }
    }
}
