// Basic Guard
module.exports = function (creep) {
	var target = creep.pos.findClosestByPath(Game.HOSTILE_CREEPS);
	if(target) {
		creep.moveTo(target);
		creep.attack(target);
	} else {
		creep.moveTo(Game.spawns.Spawn1);
	}
}
