import Stat from "./Stat.js";

export default class StatBuilder {

    build(character) {

        const stat = new Stat();

        // 基本資訊
        stat.level = character.level ?? 60;
        stat.scaling = character.scaling ?? "attack";

        // 基礎能力
        stat.baseAttack = character.baseAttack ?? 0;
        stat.baseHp = character.baseHp ?? 0;
        stat.baseDefense = character.baseDefense ?? 0;

        // 武器（弧盤）
        stat.weaponAttack = character.weaponAttack ?? 0;
        stat.weaponHp = character.weaponHp ?? 0;
        stat.weaponDefense = character.weaponDefense ?? 0;

        // 百分比
        stat.attackPercent = character.attackPercent ?? 0;
        stat.hpPercent = character.hpPercent ?? 0;
        stat.defensePercent = character.defensePercent ?? 0;

        // 固定值
        stat.flatAttack = character.flatAttack ?? 0;
        stat.flatHp = character.flatHp ?? 0;
        stat.flatDefense = character.flatDefense ?? 0;

        // 爆擊
        stat.critRate = character.critRate ?? 0;
        stat.critDamage = character.critDamage ?? 0;

        // 增傷
        stat.damageBonus = character.damageBonus ?? 0;
        stat.attributeBonus = character.attributeBonus ?? 0;
        stat.otherBonus = character.otherBonus ?? 0;

        // 穿防
        stat.penetration = character.penetration ?? 0;
        stat.defenseReduction = character.defenseReduction ?? 0;
        stat.resistanceReduction = character.resistanceReduction ?? 0;

        // 環合 / 傾陷
        stat.fusionPower = character.fusionPower ?? 0;
        stat.collapsePower = character.collapsePower ?? 0;

        return stat;

    }

}