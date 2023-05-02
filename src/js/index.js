class Character {
  constructor(name, type) {
    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя должно быть от 2 до 10 символов");
    }
    if (!types.includes(type)) {
      throw new Error(`Неверный тип персонажа: ${type}`);
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    switch (type) {
      case "Bowman":
        this.attack = 25;
        this.defence = 25;
        break;
      case "Swordsman":
        this.attack = 40;
        this.defence = 10;
        break;
      case "Magician":
        this.attack = 10;
        this.defence = 40;
        break;
      case "Undead":
        this.attack = 25;
        this.defence = 25;
        break;
      case "Zombie":
        this.attack = 40;
        this.defence = 10;
        break;
      case "Daemon":
        this.attack = 10;
        this.defence = 40;
        break;
      default:
        break;
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("Нельзя повысить левел умершего");
    }
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health === 0) {
      return;
    }
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

class Bowerman extends Character {
  constructor(name) {
    super(name, "Bowman");
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
  }
}

export { Character, Daemon, Zombie, Undead, Magician, Swordsman, Bowerman };
