/**
 * Match a unit in a string. Like "1kg", "3L", etc.
 * @param {string} str - String to match from
 * @param {string} t - Unit to look for. Doesn't support aliases.
 * @returns {number} value - Value of the unit matched
 */
export function matchUnit(str: string, t: string): number[] {
  const reg = new RegExp(`(\\d+)\\s?${t}(?:[^a-z]|$)`, "ig");
  const matches = [];
  let matched;
  while ((matched = reg.exec(str)) !== null) {
    matches.push(Number(matched[1].replace(t, "")));
  }
  return matches;
}
