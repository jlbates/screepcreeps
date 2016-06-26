// Basic Guard
module.exports = function (creep) {
	var targets = creep.room.find(Game.HOSTILE_CREEPS);
	if(targets) {
		creep.moveTo(targets[0]);
		creep.rangedAttack(targets[0]);
	}
	else {
		creep.moveTo(Game.spawns.Spawn1);
	}
}
