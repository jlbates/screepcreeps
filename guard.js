// Basic Guard
module.exports = function (creep) {
	var targets = creep.room.find(Game.HOSTILE_CREEPS);
	if(targets.length > 0) {
		creep.moveTo(targets[0]);
		creep.attack(targets[0]);
		console.log(creep.name + ': Attacking ' + targets[0]);
	}
	else {
		creep.moveTo(Game.spawns.Spawn1);
	}
}
