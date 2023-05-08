const keybutton = require("./keyboardbutton");

module.exports = {
  main: [
    [keybutton.main.checklist, keybutton.main.process],
    [keybutton.main.chitlist, keybutton.main.principle],
  ],

  inline_process: [
    [
      {
        text: "Тест-анализ",
        callback_data: "analysis",
      },
      {
        text: "Тест-дизайн",
        callback_data: "design",
      },
    ],
    [
      {
        text: "Документация тестировщика",
        callback_data: "document",
      },
    ],
  ],

};
