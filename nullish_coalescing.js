const users = [
  {
    name: "Patty Rabbit",
    address: {
      town: "Maple town",
    },
  },
  {
    name: "Rolley Cocker",
    address: {},
  },
  null,
];

for (const u of users) {
  const user = u ?? { name: "(Somebody)" };
  const town = user?.address?.town ?? "(SomeWhere)";
  console.log(`${user.name} lives in ${town}`);
}
