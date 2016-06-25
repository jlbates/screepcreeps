//Imports
var builder = require('builder');
var guard = require('guard');
var harvester = require('harvester');
var healer = require('healer');
var upgrader = require('upgrader');
var archer = require('archer');

//Unit 
var harvesters = [];
var guards = [];
var builders = [];
var healers = [];
var upgraders = [];
var archers = [];

/* --------------------------------------------------------------------------------------SPAWNER STUFF--------------------------------------------------------------------------------*/

//Gather units into identifiable groups.
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
    if(Game.creeps[i].memory.role == 'archer') {
        archers.push(Game.creeps[i]);
    }
}

//Logs total units to the console.
console.log('Harvesters =' + harvesters.length + ' , Builders =' + builders.length + ' , Guards =' + guards.length + ' , Healers =' + healers.length + ' , Upgraders =' + upgraders.length + ' , Archers =' + archers.length)

// Spawn Harvesters
if(harvesters.length < 4) {
    Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], null, {role: 'harvester'});
}
// Spawn upgraders
if(upgraders.length < 2) {
    Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, {role: 'upgrader'});
}
// Spawn builders
if(builders.length < 2) {
    Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], null, {role: 'builder'});
}

// Spawn guards and healers
if ((guards.length + healers.length) / harvesters.length < 0.8) {
    if (guards.length < 4) {
        Game.spawns.Spawn1.createCreep([TOUGH, MOVE, ATTACK, MOVE, ATTACK], null, {role: 'guard'});
    } 
    else if (healers.length / guards.length < 0.5) {
        Game.spawns.Spawn1.createCreep([HEAL, MOVE, TOUGH], null, {role: 'healer'});
    } 
    else {
        Game.spawns.Spawn1.createCreep([TOUGH, MOVE, ATTACK, MOVE, ATTACK], null, {role: 'guard'});
    }
} 
    // else {
    //     console.log('hi')
    //     Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], null, {role: 'harvester'});
        
    // }

// Spawn archers
if(archers.length < 2) {
    Game.spawns.Spawn1.createCreep([RANGED_ATTACK, RANGED_ATTACK, TOUGH, MOVE], null, {role: 'archer'});
}

/* ---------------------------------------------------------------------------------------CREEP BAHAVIOR ---------------------------------------------------------------------*/

//Assign behavior based on creep role.
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
    
    if(creep.memory.role == 'archer') {
	    archer(creep);
    }
}
