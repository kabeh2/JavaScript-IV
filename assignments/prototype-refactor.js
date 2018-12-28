/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// IMPORTANT LESSONS FROM THESE PROBLEMS

/* 

1. Always call functions in the objects prototype

2. When creating child objects from parent, and using inheritance, remember to use .call() to borrow Methods.
      ie. function Bar(barAttribute) {
        Foo.call(this, barAttribute);

        this.num = barAttribute.num;
      };

3. Also, on the child constructor function, make it's prototype equal to the parent's
      ie. Dog.prototype = Object.create(Animal.prototype);

4. You can also reset the constructor to the child object, but not needed in this lesson
      ie. Dog.prototype.constructor = Dog;

5. You can apply new functions on the all object prototypes 

6. For the parameters in the Constructor Function, you can use one term instead of many to refer to them
      ie. function Foo(attribute) {
        this.name = attribute.name;
      }

*/

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

// function GameObject(attribute) {
//     this.createdAt = attribute.createdAt;
//     this.dimensions = attribute.dimensions;
//   }

//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   };

class GameObject {
  constructor(attribute) {
    this.createdAt = attribute.createdAt;
    this.dimensions = attribute.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

//   function CharacterStats(attribute) {
//     GameObject.call(this, attribute);
//     this.healthPoints = attribute.healthPoints;
//     this.name = attribute.name;
//   }

//   CharacterStats.prototype = Object.create(GameObject.prototype);

//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
//   };

class CharacterStats extends GameObject {
  constructor(attribute) {
    super(attribute);
    this.healthPoints = attribute.healthPoints;
    this.name = attribute.name;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

// function Humanoid(attribute) {
//   CharacterStats.call(this, attribute);
//   this.team = attribute.team;
//   this.weapons = attribute.weapons;
//   this.language = attribute.language;
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);

// // Humanoid.prototype.constructor = CharacterStats;

// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}`;
// };

class Humanoid extends CharacterStats {
  constructor(attribute) {
    super(attribute);
    this.team = attribute.team;
    this.weapons = attribute.weapons;
    this.language = attribute.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(JSON.stringify(mage.createdAt)); // Today's date
console.log(JSON.stringify(archer.dimensions)); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

////////////////////////////////////////
///////// ES5

// Villain Constructor
// function Villain(villainAttributes) {
//   Humanoid.call(this, villainAttributes);
// }
// Villain.prototype = Object.create(Humanoid.prototype);

// Villain.prototype.attack = function(character) {
//   if (character.healthPoints <= 0) {
//     console.log(character.destroy());
//   } else {
//     character.healthPoints -= 5;
//   }
//   console.log(character.healthPoints);
// };
////////////////////////////////////////

class Villain extends Humanoid {
  constructor(attribute) {
    super(attribute);
  }

  attack(character) {
    if (character.healthPoints <= 0) {
      console.log(character.destroy());
    } else {
      character.healthPoints -= 5;
    }
    console.log(character.healthPoints);
  }
}

// Hero Constructor

////////////////////////////////////////
///////// ES5
// function Hero(heroAttributes) {
//   Humanoid.call(this, heroAttributes);
// }
// Hero.prototype = Object.create(Humanoid.prototype);

// Hero.prototype.attack = function(character) {
//   if (character.healthPoints <= 0) {
//     console.log(character.destroy());
//   } else {
//     character.healthPoints -= 5;
//   }
//   console.log(character.healthPoints);
// };
//////////////////////////////////////

////////////////////////////////////////
///////// ES6
class Hero extends Humanoid {
  constructor(attribute) {
    super(attribute);
  }

  attack(character) {
    if (character.healthPoints <= 0) {
      console.log(character.destroy());
    } else {
      character.healthPoints -= 5;
    }
    console.log(character.healthPoints);
  }
}

const human = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 1,
    height: 3
  },
  healthPoints: 15,
  name: "Batman",
  team: "Gotham City",
  weapons: ["Bat Star", "Punch"],
  language: "English"
});

const oger = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 2,
    height: 8
  },
  healthPoints: 25,
  name: "Goliath",
  team: "Ogerliance",
  weapons: ["Slash", "Stomp"],
  language: "Og"
});

console.log(human.attack(oger));
console.log(oger.attack(human));
console.log(oger.attack(human));
console.log(oger.attack(human));
console.log(oger.attack(human));

console.log(human.attack(oger));
console.log(human.attack(oger));
console.log(human.attack(oger));
console.log(human.attack(oger));
console.log(human.attack(oger));
