// Basic Repair bot
module.exports = function(creep) {
    // Returns false if carried energy is zero
    if (creep.memory.repairing && creep.carry.energy == 0) {
        creep.memory.repairing = false;
    }
    //Returns true if carrying max energy
    if (!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
        creep.memory.repairing = true;
    }
    //If creep is at carry capacity find the next construction site and build
    if (creep.memory.repairing) {
        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_WALL ||
                        structure.structureType == STRUCTURE_CONTAINER ||
                        structure.structureType == STRUCTURE_STORAGE ||
                        structure.structureType == STRUCTURE_ROAD ||
                        structure.structureType == STRUCTURE_TOWER) && structure.hits < structure.hitsMax;
            }
        });
        if (targets.length > 0) {
                if (creep.repair(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                    console.log(creep.name + ': Repairing ' + targets[0]);
                }
        }
    }
    //If creep isn't at max energy, go farm some.
    else {
        var sources = creep.room.find(FIND_SOURCES);

        if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[1]);
            console.log(creep.name + ': Gathering materials to repair');
        }

    }
}
