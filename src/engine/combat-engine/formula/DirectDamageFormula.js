/**
 * DirectDamageFormula
 * --------------------------------------------------------
 * NTE 直傷公式
 */

export default class DirectDamageFormula {

    calculate(stat, skillMultiplier, enemy) {

        // ==========================
        // 基礎區
        // ==========================

        let baseStat = 0;

        switch (stat.scaling) {

            case "hp":
                baseStat =
                    (stat.baseHp + stat.weaponHp)
                    * (1 + stat.hpPercent)
                    + stat.flatHp;
                break;

            case "def":
                baseStat =
                    (stat.baseDefense + stat.weaponDefense)
                    * (1 + stat.defensePercent)
                    + stat.flatDefense;
                break;

            default:
                baseStat =
                    (stat.baseAttack + stat.weaponAttack)
                    * (1 + stat.attackPercent)
                    + stat.flatAttack;
                break;

        }

        const baseArea = baseStat;

        // ==========================
        // 倍率區
        // ==========================

        const multiplierArea = skillMultiplier;

        // ==========================
        // 防禦區
        // ==========================

        const defenseArea =
            (100 + stat.level) /
            (
                100
                + stat.level
                + enemy.level
                + enemy.environmentConstant
            )
            /
            (1 - stat.penetration)
            /
            (1 - stat.defenseReduction);

        // ==========================
        // 暴擊區
        // ==========================

        const critArea =
            stat.critRate
            * (1 + stat.critDamage);

        // ==========================
        // 增傷區
        // ==========================

        const damageArea =
            1
            + stat.damageBonus
            + stat.attributeBonus
            + stat.otherBonus;

        // ==========================
        // 抗性區
        // ==========================

        const resistanceArea =
            1 -
            (
                enemy.resistance
                - stat.resistanceReduction
            );

        // ==========================
        // 易傷區
        // ==========================

        const vulnerabilityArea =
            1 + enemy.vulnerability;

        // ==========================
        // 環合區
        // ==========================

        const fusionArea =
            1.2
            *
            (
                1
                +
                (
                    20
                    * stat.fusionPower
                )
                /
                (
                    180
                    + stat.fusionPower
                )
                /
                100
            );

        return (
            baseArea
            * multiplierArea
            * defenseArea
            * critArea
            * damageArea
            * resistanceArea
            * vulnerabilityArea
            * fusionArea
        );

    }

}