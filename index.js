// Part 1: Humble Beginnings 
const adventurer = {
  name: "Robin", 
  health: 10, 
  inventory: ["sword", "potion", "artifact"], 
  companion: {
    name: "Leo", 
    type: "Cat", 
    companion: {
      name: "Frank", 
      type: "Flea", 
      belongings: ["hat", "sunglasses"]
    }
  }, 
  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod; 
    console.log(`${this.name} rolled a ${result}.`)
  }
}

// adventurer.roll();

// Part 2: Class Fantasy
class Character {
  constructor (name) {
    this.name = name; 
    this.health = 100; 
    this.inventory = []; 
  }

  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod; 
    console.log(`${this.name} rolled a ${result}.`)
  }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(robin); 

// robin.roll(); 

// Part 3: Class Features 
class Adventurer extends Character {
  constructor(name, role) {
    super (name); 
    this.role = role; 
    this.inventory.push("bedroll", "50 gold coins"); 
  }

  scout () {
    console.log(`${this.name} is scouting ahead...`); 
    super.roll(); 
  }

  run () {
    console.log(`${this.name} is running`); 
  }

  speak () {
    console.log(`${this.name} is speaking`); 
  }
}

class Companion extends Character {
  constructor(name, role, ...inventory) {
    super (name); 
    this.role = role; 
    this.inventory.push(...inventory); 
  }
}

// const robin = new Adventurer("Robin", "Peacemaker");
// const pedro = new Companion("Pedro", "Gatherer", "Sword", "80 bucks"); 

// console.log(robin); 
// console.log(pedro);

// Part 4: Class Uniforms


