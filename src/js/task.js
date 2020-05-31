export default function sort(items) {
  const result = items.sort((a, b) => b.health - a.health);
  return result;
}
