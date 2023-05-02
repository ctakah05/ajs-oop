import {
  Character,
  Daemon,
  Zombie,
  Undead,
  Magician,
  Swordsman,
  Bowerman,
} from "../js/index";
// level-up
describe("Character", () => {
  describe("levelUp()", () => {
    it("should increase the level by 1", () => {
      const swordsman = new Swordsman("Мечник");
      swordsman.levelUp();
      expect(swordsman.level).toEqual(2);
    });

    it("should increase attack and defence by 20%", () => {
      const swordsman = new Swordsman("Мечник");
      swordsman.levelUp();
      expect(swordsman.attack).toEqual(48);
      expect(swordsman.defence).toEqual(12);
    });

    it("should set health to 100", () => {
      const swordsman = new Swordsman("Мечник");
      swordsman.damage(10);
      swordsman.levelUp();
      expect(swordsman.health).toEqual(100);
    });

    it("should throw an error if the health is 0", () => {
      const swordsman = new Swordsman("Мечник");
      swordsman.health = 0;
      expect(() => swordsman.levelUp()).toThrowError(
        "Нельзя повысить левел умершего"
      );
    });
  });
});

//damage
describe("Character", () => {
  describe("damage(points)", () => {
    it("should reducenpm run health by the correct amount", () => {
      const swordsman = new Swordsman("Мечник");
      swordsman.damage(10);
      expect(swordsman.health).toEqual(91);
    });

    it("should not reduce health below 0", () => {
      const swordsman = new Swordsman("Мечник");
      swordsman.damage(120);
      expect(swordsman.health).toEqual(0);
    });

    it("should do nothing if health is already 0", () => {
      const swordsman = new Swordsman("Мечник");
      swordsman.health = 0;
      swordsman.damage(10);
      expect(swordsman.health).toEqual(0);
    });
  });
});

//name
describe("Character", () => {
  describe("wrong name", () => {
    it("имя менее 2 символов", () => {
      expect(() => new Character("g", "Bowman")).toThrowError(
        "Имя должно быть от 2 до 10 символов"
      );
    });

    it("имя более 10 символов", () => {
      expect(() => new Character("gggggggggggg", "Bowman")).toThrowError(
        "Имя должно быть от 2 до 10 символов"
      );
    });

    it("имя от 2 до 10 символов", () => {
      const hero = new Character("ggg", "Bowman");
      expect(hero.name).toBe("ggg");
    });
  });
});
//type
describe("Character", () => {
  describe("корректность type", () => {
    it("неверный тип персонажа", () => {
      expect(() => new Character("Мечник", "Beerman")).toThrowError(
        "Неверный тип персонажа: Beerman"
      );
    });

    it("Bowerman", () => {
      const bowman = new Bowerman("Мечник");
      expect(bowman.attack).toEqual(25);
      expect(bowman.defence).toEqual(25);
    });

    it("Swordsman", () => {
      const swordsman = new Swordsman("Мечник");
      expect(swordsman.attack).toEqual(40);
      expect(swordsman.defence).toEqual(10);
    });
    it("Magician", () => {
      const magician = new Magician("Мечник");
      expect(magician.attack).toEqual(10);
      expect(magician.defence).toEqual(40);
    });
    it("Undead", () => {
      const undead = new Undead("Мечник");
      expect(undead.attack).toEqual(25);
      expect(undead.defence).toEqual(25);
    });
    it("Zombie", () => {
      const zombie = new Zombie("Мечник");
      expect(zombie.attack).toEqual(40);
      expect(zombie.defence).toEqual(10);
    });
    it("Daemon", () => {
      const daemon = new Daemon("Daemon");
      expect(daemon.attack).toEqual(10);
      expect(daemon.defence).toEqual(40);
    });
  });
});

//create type
