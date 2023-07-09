const response = {
  data: [
    {
      id: 1,
      name: "a",
      email: "a@a.com",
    },
    {
      id: 2,
      name: "b",
      email: "b@b.com",
    },
    {
      id: 3,
      name: "c",
      email: "c@c.com",
    },
  ],
};

const { data: users = [] } = response;
console.log(users);
