// Basic Repair bot
module.exports = function (creep) {

    if(creep.carry.energy < creep.carryCapacity && creep.carry.energy = 0) {
        var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
            console.log(creep.name + ': Getting repair materials');
        }

    }
    else {
        var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_WALL ||
                            structure.structureType == STRUCTURE_ROAD ||
                            structure.structureType == STRUCTURE_TOWER) && structure.hits < structure.hitsMax;
                }
        });
        if(targets.length > 0) {
            if(creep.repair(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
                console.log(creep.name + ': Repairing ' + target[0]);
            }
        }
    }
}
// module.exports = function(creep) {
    //If out of energy, go to spawn and recharge
    // if (creep.energy == 0) {
    //     var closestSpawn = creep.pos.findNearest(Game.MY_SPAWNS, {
    //         filter: function(spawn) {
    //             return spawn.energy > 0 && creep.pos.inRangeTo(spawn, 3);
    //         }
    //     });
    //     if (closestSpawn) {
    //         creep.moveTo(closestSpawn);
    //         closestSpawn.transferEnergy(creep);
    //     }
    // }
    // if (creep.carry.energy < creep.carryCapacity) {
    //     var sources = creep.room.find(FIND_SOURCES);
    //     if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
    //         creep.moveTo(sources[1]);
    //         console.log(creep.name + ': Gathering repair energy');
    //     }
    // }

    //First, we're going to check for damaged ramparts. We're using ramparts as the first line of defense
    //and we want them nicely maintained. This is especially important when under attack. The builder will
    //repair the most damaged ramparts first
    // var structures = creep.room.find(Game.STRUCTURES);
    // var damagedRamparts = [];
    //
    // for (var index in structures) {
    //     var structure = structures[index];
    //     if (structure.structureType == 'rampart' && structure.hits < (structure.hitsMax - 50)) {
    //         damagedRamparts.push(structure);
    //     }
    // }
    //
    // damagedRamparts.sort(function(a, b) {
    //     return (a.hits - b.hits);
    // });
    //
    // if (damagedRamparts.length > 0) {
    //     creep.moveTo(damagedRamparts[0]);
    //     creep.repair(damagedRamparts[0]);
    //     return;
    // }

    //Next we're going to look for general buildings that have less than 50% health, and we'll go to repair those.
    //We set it at 50%, because we don't want builders abandoning their duty every time a road gets walked on
//     var halfBroken = creep.room.find(Game.STRUCTURES);
//     var toRepair = [];
//     for (var index in halfBroken) {
//         if ((halfBroken[index].hits / halfBroken[index].hitsMax) < 0.5) {
//             toRepair.push(halfBroken[index]);
//         }
//     }
//
//     if (toRepair.length > 0) {
//         var structure = toRepair[0];
//         creep.moveTo(structure);
//         creep.repair(structure);
//         console.log(creep.name + ': Repairing ' + structure);
//         return;
//     }
//
// }
