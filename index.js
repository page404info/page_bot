require("dotenv").config();
const { Telegraf, Extra } = require("telegraf");
const fs = require("fs");
const keybutton = require("./src/keyboard/keyboardbutton");
const command = require("./src/library/command");
const commandChitList = require("./src/library/command_chitlist");

const bot = new Telegraf(process.env.TOKEN);
const botAction = require("./src/library/action");
botAction(bot);

/* bot commands */
bot.on("text", async (ctx) => {
  switch (ctx.message.text.toLowerCase()) {
    case "/start":
      command.runStart(ctx);
      break;
    case keybutton.main.checklist.toLowerCase():
      command.runCheckList(ctx);
      break;
    case keybutton.main.process.toLowerCase():
      command.runProcess(ctx);
      break;
      case keybutton.main.principle.toLowerCase():
      command.runPrinciple(ctx);
      break;
    case keybutton.main.chitlist.toLowerCase():
      command.runChitList(ctx);
      break;
    case "1":
      commandChitList.run1(ctx);
      break;
    case "2":
      commandChitList.run2(ctx);
      break;
    case "3":
      commandChitList.run3(ctx);
      break;
    case "4":
      commandChitList.run4(ctx);
      break;
    case "5":
      commandChitList.run5(ctx);
      break;
    case "6":
      commandChitList.run6(ctx);
      break;
    case "7":
      commandChitList.run7(ctx);
      break;
    case "8":
      commandChitList.run8(ctx);
      break;
    case "9":
      commandChitList.run9(ctx);
      break;
    case "10":
      commandChitList.run10(ctx);
      break;
    case "11":
      commandChitList.run11(ctx);
      break;
    case "12":
      commandChitList.run12(ctx);
      break;
    case "13":
      commandChitList.run13(ctx);
      break;
    case "14":
      commandChitList.run14(ctx);
      break;
    case "15":
      commandChitList.run15(ctx);
      break;
    case "16":
      commandChitList.run16(ctx);
      break;
    case "17":
      commandChitList.run17(ctx);
      break;
    case "18":
      commandChitList.run18(ctx);
      break;
    case "19":
      commandChitList.run19(ctx);
      break;
    case "20":
      commandChitList.run20(ctx);
      break;
    case "21":
      commandChitList.run21(ctx);
      break;
    case "22":
      commandChitList.run22(ctx);
      break;
    case "23":
      commandChitList.run23(ctx);
      break;
    case "24":
      commandChitList.run24(ctx);
      break;
    default:
      command.runError(ctx);
  }
});

/* bot launch */
bot
  .launch()
  .then((res) => {
    console.log("Bot has been started...");
  })
  .catch((err) => console.log("=> error | user_id = " + ctx.from.id));
