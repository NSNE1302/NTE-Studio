export function calculateDamage(data) {
    const {
        base,
        multiplier,
        critRate,
        critDamage,
        bonus,
        resistance
    } = data;

    const crit = 1 + critRate * critDamage;

    const damage =
        base *
        multiplier *
        crit *
        (1 + bonus) *
        (1 - resistance);

    return {
        final: damage
    };
}