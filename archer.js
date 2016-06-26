// Basic Archer
module.exports = function (creep) {
	var target = creep.pos.findClosestByPath(Game.HOSTILE_CREEPS);
	if(target) {
		creep.moveTo(target);
		creep.rangedAttack(target);
	} else {
		creep.moveTo(Game.spawns.Spawn1);
	}
}
