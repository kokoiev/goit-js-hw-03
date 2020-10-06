const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = `happy`;

user.hobby = "skydiving";

user.premium = false;

const entries = Object.entries(user);
console.log(entries);

for (const entry of entries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}
