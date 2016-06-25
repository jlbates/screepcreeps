
var builder = require('builder');
var guard = require('guard');
var harvester = require('harvester');
var healer = require('healer');
var upgrader = require('upgrader');

var harvesters = [];
var guards = [];
var builders = [];
var healers = [];
var upgraders = [];

for (var i in Game.creeps) {
    if(Game.creeps[i].memory.role == 'harvester') {
        harvesters.push(Game.creeps[i]);
    }
    if(Game.creeps[i].memory.role == 'guard') {
        guards.push(Game.creeps[i]);
    }
    if(Game.creeps[i].memory.role == 'builder') {
        builders.push(Game.creeps[i]);
    }
    if(Game.creeps[i].memory.role == 'healer') {
        healers.push(Game.creeps[i]);
    }
    if(Game.creeps[i].memory.role == 'upgrader') {
        upgraders.push(Game.creeps[i]);
    }
}
console.log('Harvesters =' + harvesters.length + ' , Builders =' + builders.length + ' , Guards =' + guards.length + ' , Healers =' + healers.length + ' , Upgraders =' + upgraders.length)

if(harvesters.length < 4) {
    Game.spawns.Spawn1.createCreep([Game.WORK, Game.CARRY, Game.MOVE], null, {role: 'harvester'});
} else {
    
    if ((guards.length + healers.length) / harvesters.length < 0.8) {
        if (guards.length < 1) {
            Game.spawns.Spawn1.createCreep([Game.TOUGH, Game.MOVE, Game.ATTACK, Game.MOVE, Game.ATTACK], null, {role: 'guard'});
        } else if (healers.length / guards.length < 0.5) {
            Game.spawns.Spawn1.createCreep([Game.HEAL, Game.MOVE], null, {role: 'healer'});
        } else {
            Game.spawns.Spawn1.createCreep([Game.TOUGH, Game.MOVE, Game.ATTACK, Game.MOVE, Game.ATTACK], null, {role: 'guard'});
        }
    } else {
        Game.spawns.Spawn1.createCreep([Game.WORK, Game.CARRY, Game.MOVE], null, {role: 'harvester'});
    }
}



/*if(harvesters.length < 3) {
    Game.spawns.Spawn1.createCreep([Game.WORK, Game.CARRY, Game.MOVE], null, {role: 'harvester'});
} else if(guards.length < 2) {
    Game.spawns.Spawn1.createCreep([Game.ATTACK, Game.ATTACK, Game.TOUGH, Game.MOVE, Game.MOVE], null, {role: 'guard'});
} else if(harvesters.length < 5) {
    Game.spawns.Spawn1.createCreep([Game.WORK, Game.CARRY, Game.MOVE], null, {role: 'harvester'});
} else if(healers.length < 1) {
    Game.spawns.Spawn1.createCreep([Game.HEAL, Game.TOUGH, Game.MOVE], null, {role: 'healer'});
} else if(guards.length < 3) {
    Game.spawns.Spawn1.createCreep([Game.ATTACK, Game.ATTACK, Game.TOUGH, Game.MOVE, Game.MOVE], null, {role: 'guard'});
} else if(guards.length < 6) {
    Game.spawns.Spawn1.createCreep([Game.ATTACK, Game.ATTACK, Game.TOUGH, Game.MOVE, Game.MOVE], null, {role: 'guard'});
}*/
    
    
/*} else if(builders.length < 1) {
    Game.spawns.Spawn1.createCreep([Game.WORK, Game.WORK, Game.CARRY, Game.MOVE], null, {role: 'builder'});
}*/


for(var name in Game.creeps) {
	var creep = Game.creeps[name];

	if(creep.memory.role == 'harvester') {
		harvester(creep);
	}

	if(creep.memory.role == 'builder') {
	    builder(creep);
	}
	
	if(creep.memory.role == 'guard') {
	    guard(creep);
    }
	
	if(creep.memory.role == 'healer') {
	    healer(creep);
    }
    if(creep.memory.role == 'upgrader') {
	    upgrader(creep);
    }
}
