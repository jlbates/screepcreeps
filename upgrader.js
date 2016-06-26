// Upgrader
module.exports = function (creep) {
    // Returns false if carried energy is zero
	if(creep.memory.upgrading &&  && creep.carry.energy == 0) {
      creep.memory.upgrading = false;
  }
  //Returns true if carrying max energy
  if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
      creep.memory.upgrading = true;
  }
  //If creep is at carry capacity find the next construction site and build
  if(creep.memory.upgrading) {
    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
        console.log(creep.name + ': Upgrading the controller');
    }
  }
  //If creep isn't at max energy, go farm some.
  else {
      var sources = creep.room.find(FIND_SOURCES);

          if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
              creep.moveTo(sources[0]);
              console.log(creep.name + ': Gathering materials to upgrade');
          }

  }
}
