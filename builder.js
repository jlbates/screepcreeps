// Basic builder
module.exports = function (creep) {
    // Returns false if carried energy is zero
	if(creep.memory.building && creep.carry.energy == 0) {
        creep.memory.building = false;
        console.log(creep.name + ': Gathering materials to build');
    }
    //Returns true if carrying max energy
    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
        creep.memory.building = true;
        console.log(creep.name + ': Building');
    }
    //If creep is at carry capacity find the next construction site and build
    var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    if(creep.memory.building) {
        if(targets.length) {
            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
				console.log(creep.name + ': Building ' + targets[0]);
            }
        }
    }
    if(!targets.length || targets.length == 0 && creep.carry.energy != 0){
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
            console.log(creep.name + ': Builder is upgrading the controller');
        }
    }

    //If creep isn't at max energy, go farm some.
    else {
        var sources = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
            console.log(creep.name + ': Gathering materials to build');
        }

    }
}
