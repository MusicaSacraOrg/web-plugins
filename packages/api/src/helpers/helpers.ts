export function stringifyArrayParam(
    paramValues?: (string | number | boolean)[]
) {
    if (!paramValues) return '';

    return paramValues.map(String).join(',');
}
