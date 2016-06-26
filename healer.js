// Healer
module.exports = function (creep) {
    //Find my creeps that are hurt. If they're hurt, heal them.
		//If there aren't any hurt, we're going to try and get the healers
		//to tick near the guards, so that they're close by when the battle starts
		var target = creep.pos.findClosestByPath(Game.MY_CREEPS, {
			filter: function(t)
			{
				return t.hits < t.hitsMax
			}
		});

		if(target){
			creep.moveTo(target);
			creep.heal(target);
      console.log(creep.name + ': healing ' + target);
		}
		else {
			creep.moveTo(Game.spawns.Spawn1);
		}
}
