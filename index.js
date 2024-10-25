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
      belongings: ["hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

adventurer.roll();

// Part 2: Class Fantasy
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return Number(result);
  }

  static MAX_HEALTH = 100;
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();

// Part 3: Class Features
class Adventurer extends Character {
  constructor(name, role) {
    let roleIncluded = false;
    super(name);

    this.inventory.push("bedroll", "50 gold coins");

    const roles = Adventurer.ROLES;

    roles.forEach((roleItem) => {
      if (roleItem === role) {
        roleIncluded = true;
      }
    });

    if (roleIncluded) {
      this.role = role;
    }
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  run() {
    console.log(`${this.name} is running`);
  }

  speak() {
    console.log(`${this.name} is speaking`);
  }

  static ROLES = ["Fighter", "Healer", "Wizard"];

  // Part 6: Developing Skills
  duel(adventurer) {
    let winner = false;
    let myHealth = this.health;
    let oppHealth = adventurer.health;

    while (winner === false) {
      let score = this.roll();
      let oppScore = adventurer.roll();

      if (score > oppScore) {
        oppHealth = oppHealth - 1;
        adventurer.health = oppHealth;
      } else if (oppScore > score) {
        myHealth = myHealth - 1;
        this.health = myHealth;
      } else if (score === oppScore) {
        oppHealth = oppHealth;
        myHealth = myHealth;
      }

      if (myHealth <= 50 || oppHealth <= 50) {
        winner = true;
        if (this.health > 50) {
          console.log(`The winner of this duel is ${this.name}`);
        } else {
          console.log(`The winner of this duel is ${adventurer.name}`);
        }
        return;
      }
    }
  }
}

// Part 4: Class Uniforms
class Companion extends Character {
  constructor(name, role, ...inventory) {
    super(name);
    this.role = role;
    this.inventory.push(...inventory);
  }
}

const pepe = new Adventurer("Pepe", "Wizard");
const luis = new Adventurer("Luis", "Healer");

pepe.duel(luis);
const pedro = new Companion("Pedro", "Gatherer", "Sword", "80 bucks");

// Part 5: Gather your party
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const pablo = healers.generate("Pablo");
