var figlet = require("figlet");

console.log(
    figlet.textSync("intocode", {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );