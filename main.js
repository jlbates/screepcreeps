//Imports
var builder = require('builder');
var guard = require('guard');
var harvester = require('harvester');
var healer = require('healer');
var upgrader = require('upgrader');
var archer = require('archer');
var repair = require('repair');

//Unit
var harvesters = [];
var guards = [];
var builders = [];
var healers = [];
var upgraders = [];
var archers = [];
var repairs = [];

/* --------------------------------------------------------------------------------------SPAWNER STUFF--------------------------------------------------------------------------------*/
//Clear dead creeps from memory
console.log('------------------------------Gravedigger--------------------------------------------------------');
for(var name in Memory.creeps) {
    if(!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('Clearing non-existing creep memory:', name);
    }
}
console.log('\n');



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
    if(Game.creeps[i].memory.role == 'repair') {
        repairs.push(Game.creeps[i]);
    }
}


//Logs total units to the console.
console.log('------------------------------Unit Count--------------------------------------------------------');
console.log('Harvesters =' + harvesters.length + ' , Builders =' + builders.length + ' , Guards =' + guards.length + ' , Healers =' + healers.length + ' , Upgraders =' + upgraders.length + ' , Archers =' + archers.length+ ' , Repairs =' + repairs.length);
console.log('\n');
console.log('------------------------------Building Units--------------------------------------------------------');

// Spawn Harvesters
if(harvesters.length < 8) {
    Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, {role: 'harvester'});
    console.log('Constructing an harvester');
}
// Spawn upgraders
if(upgraders.length < 2) {
    Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, {role: 'upgrader'});
    console.log('Constructing an upgrader');
}
// Spawn builders
if(builders.length < 3) {
    Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE, MOVE], null, {role: 'builder'});
    console.log('Constructing an builder');
}

//Spawn repairs
// if(repairs.length < 2) {
//     Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE], null, {role: 'repair'});
//     console.log('Constructing an repair dude');
// }

// // Spawn archers
// if(archers.length < 1) {
//     Game.spawns.Spawn1.createCreep([RANGED_ATTACK, MOVE], null, {role: 'archer'});
//     console.log('Constructing an archer');
// }

// // Spawn guards and healers
// if ((guards.length + healers.length) / harvesters.length < 0.8) {
//     if (guards.length < 4) {
//         Game.spawns.Spawn1.createCreep([TOUGH, MOVE, ATTACK, MOVE, ATTACK], null, {role: 'guard'});
//         console.log('Constructing an guard');
//     }
//     else if (healers.length / guards.length < 0.5) {
//         Game.spawns.Spawn1.createCreep([HEAL, MOVE], null, {role: 'healer'});
//         console.log('Constructing an healer');
//     }
//     else {
//         Game.spawns.Spawn1.createCreep([TOUGH, MOVE, ATTACK, MOVE, ATTACK], null, {role: 'guard'});
//         console.log('Constructing an guard because maxed we hit 50% of guard to healer ratio');
//     }
// }

console.log('\n');
/* ---------------------------------------------------------------------------------------CREEP BAHAVIOR ---------------------------------------------------------------------*/

//Assign behavior based on creep role.
console.log('------------------------------Unit Chatter--------------------------------------------------------');
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

    if(creep.memory.role == 'repair') {
	    repair(creep);
    }
}
