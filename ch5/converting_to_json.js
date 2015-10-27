var accountObj = {
  name: "Baggins",
  number: 10543,
  members: ["Frodo", "Bilbo"],
  location: "Shire"
};

var accountStr = JSON.stringify(accountObj);

console.log(accountStr);

// outputs {"name":"Baggins","number":10543,"members":["Frodo","Bilbo"],"location":"Shire"}
