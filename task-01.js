const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = `happy`;
console.table(user);

user.hobby = "skydiving";
console.table(user);

user.premium = false;
console.table(user);

console.log(Object.keys(user));

const entries = Object.entries(user);
console.log(entries);

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}
