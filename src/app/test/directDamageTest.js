import StatBuilder from "../../engine/combat-engine/stat/StatBuilder.js";
import CombatCalculator from "../../engine/combat-engine/calculator/CombatCalculator.js";

const builder = new StatBuilder();

const calculator = new CombatCalculator();

const character = {

    level: 60,

    scaling: "attack",

    baseAttack: 1000,

    weaponAttack: 500,

    attackPercent: 0.50,

    flatAttack: 100,

    critRate: 0.80,

    critDamage: 1.50,

    damageBonus: 0.40,

    attributeBonus: 0.20,

    penetration: 0,

    defenseReduction: 0,

    resistanceReduction: 0,

    fusionPower: 100

};

const enemy = {

    level: 60,

    resistance: 0.10,

    vulnerability: 0,

    environmentConstant: 0

};

const stat = builder.build(character);

const result =
    calculator.calculateDirect(
        stat,
        4.0,
        enemy
    );

console.log(result);