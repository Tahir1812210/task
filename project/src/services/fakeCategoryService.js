export const Genders = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Male" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Female" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Others" }
];

export function getGenders() {
  return Genders.filter(g => g);
}
