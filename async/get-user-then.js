import fetch from "node-fetch";

const getUser = (userID) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${userID}`).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} Error`);
    } else {
      return res.json();
    }
  });

console.log("--- Start ---");
getUser(2)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("--- Completed ---");
  });
