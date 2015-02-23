var game = {}

var weapons = {
	sword: function(){
		return Math.floor(Math.random() * (10-1))+1
	},
	arrow: function(){
		return Math.floor(Math.random() * (10-1))+1
	},
	club: function(){
		return Math.floor(Math.random() * (5-1))+1
	}
}

var user = {
	name: '',
	race: '',
	health: 100,
	healthLimit: 100,
	weapons: ['sword'],
	attack: function(weapon){
		if(this.weapons.indexOf(weapon) !== -1){
			var damage = weapons[weapon]()
			console.log(this.name + " uses " + weapon + " and does " + damage + " damage!")
			return damage
		} else {
			console.log(this.name + 'doesn\'t have this weapon')
		}

		
	}
}

var Monster = function(name, health, weapons, items){
	this.name = name;
	this.health = health
	this.weapons = weapons
	this.items = items
}


var ogre = new Monster("ogre", 50, ['club'], ['gold-50', 'club'])

var confirmFight = function(monster){
	var fightConfirmation = confirm('Do you want to fight?')
	
	if(fightConfirmation === true){
		fight(monster)
	} else {
		console.log("Game Over: You have lived, but you are a wimp!")
	}
}

var fight = function(monster){
	if(user.health > 0 && monster.health > 0){
		var weaponUsed = prompt("Which weapon will you use?" + weaponLog())
		var damage = user.attack(weaponUsed)
		console.log(damage)
		monster.health -= damage
		console.log(monster.health)

		var userDamaged  = weapons.club()
		console.log("Your health is ", user.health)
		confirmFight(monster)
	}
	if(monster.health < 0){
		console.log("You win")
	}
	if(user.health < 0){
		console.log("You lose!")
	}

}



var healthLog = function(){
	return "Your health is " + user.health + "/" + user.healthLimit
}
var weaponLog = function(){
	return "Weapons: " + user.weapons.join(' ')
}

user.name = prompt("What is your name?")
console.log('Hello ' + user.name)

//user.race = prompt('What is your race?')

console.log(healthLog())
console.log(weaponLog())

console.log("You meet an ogre! Time to learn how to fight!")

confirmFight(ogre)


// console.log('ogre', ogre)

// console.log('attack result', user.attack('sword'))

// console.log('attack result ', user.attack('arrow'))


// console.log(user.weapons)