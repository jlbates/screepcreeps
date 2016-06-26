// Basic Repair bot
module.exports = function (creep) {
	var targets = creep.room.find(Game.STRUCTURES);
  console.log(targets);
// 	if(targets.length > 0) {
//     if(target.hits < target.hitsMax){
//   		creep.moveTo(targets[0]);
//   		creep.repair(targets[0]);
//   		console.log(creep.name + ': Repairing ' + targets[0]);
//     }
//   }
//   else {
//     creep.moveTo(Game.spawns.Spawn1);
//   }
}
