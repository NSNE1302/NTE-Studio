import DirectDamageFormula from "../formula/DirectDamageFormula.js";
import DamageResult from "../result/DamageResult.js";

export default class CombatCalculator {

    constructor() {

        this.directFormula =
            new DirectDamageFormula();

    }

    calculateDirect(
        stat,
        multiplier,
        enemy
    ){

        const stat = builder.build(character);

        result.finalDamage =
            this.directFormula.calculate(
                stat,
                multiplier,
                enemy
            );

        return result;

    }

}