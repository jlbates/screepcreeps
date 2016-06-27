
module.exports = function(creep) {

    if(creep.carry.energy < creep.carry.energy && creep.carry.energy == 0){
        var storage = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (
                            structure.structureType == STRUCTURE_STORAGE ||
                            structure.structureType == STRUCTURE_CONTAINER) && _.sum(structure.store) !== 0;
                }
        });
        if (storage.length > 0) {
            if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
                console.log(creep.name + ': Grabbing money from storage ' + targets[0]);
            }
        }
    }
    else {
        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_TOWER) && _.sum(structure.store) !== 0;
            }
        });
        if (targets.length > 0) {
            if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
                console.log(creep.name + ': Transfering money to ' + targets[0]);
            }
        }
    }


};
