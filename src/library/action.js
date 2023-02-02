const keyboard = require("../keyboard/keyboard");

module.exports = (bot) => {
  bot.action("analysis", (ctx) => {
    let answer =
      "<b>Тест-анализ</b> (что проверить)\n\n" +
      "1.Определить <b><u>объекты</u></b> тестирования, взаимосвязи и зависимости между ними (пользователи, окружение, интерфейсы, сервисы).\n\n" +
      "2.Определить <b><u>поведение</u></b> объектов.\n\n" +
      "3.Определить <b><u>ограничения</u></b> на ввод, редактирование и удаление данных, на вывод результата (период), на поведение объекта.\n\n" +
      "4.Определить <b><u>сообщения</u></b> системы на действия пользователя (регистрация успешна, используйте числа от 1 до 5).\n\n" +
      "5.Определить <b><u>алгоритм</u></b> поиска и расчета (формула, блок-схема).\n\n" +
      "6.Определить <b><u>приоритетность</u></b> функциональности (критическая, важная/желательная, необязательная).\n\n";
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, answer, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: keyboard.inline_process,
      },
    });
  });

  bot.action("design", (ctx) => {
    let answer =
      "<b>Тест-дизайн</b> (как проверить)\n\n" +
      "Цель — создать оптимальное тестовое покрытие при минимуме тест-кейсов.\n\n" +
      "Размышления о проверке:\n" +
      "    - определить, что нужно проверить;\n" +
      "    - как я пойму, что это работает;\n" +
      "    - каким способом (инструментом) можно это проверить;\n" +
      "    - что будет если... (если отправить не заполненную форму);\n" +
      "    - добавить «НЕ» к каждому слову в требовании (не цифра, не поле, не вводит).\n\n" +
      "<u>Техники тест-дизайна</u>\n" +
      "<b>проверка данных</b>\n" +
      "    - эквивалентные классы;\n" +
      "    - граничные значения;\n" +
      "    - таблица Майерса;\n" +
      "    - доменный анализ\n(для зависимых параметров);\n" +
      "    - попарное тестирование\n(для независимых параметров).\n\n" +
      "<b>проверка алгоритма</b>\n" +
      "    - таблица принятия решений\n(для зависимых параметров);\n" +
      "    - покрытие потока управления\n(по узлам);\n" +
      "    - покрытие потока управления\n(по веткам);\n" +
      "    - покрытие потока управления\n(по путям);\n" +
      "    - покрытие потока управления\n(по условиям).\n\n" +
      "<b>проверка поведения</b>\n" +
      "    - диаграмма состояний и переходов\n(для объекта);\n" +
      "    - варианты использования\n(по системы);\n" +
      "    - бизнес-циклы.";
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, answer, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: keyboard.inline_process,
      },
    });
  });

  bot.action("document", (ctx) => {
    let answer =
      "<b>Документация тестировщика</b>\n\n" +
      "План тестирования\n" +
      "Программа и методика испытаний\n" +
      "Протокол испытаний\n\n" +
      "Чек-лист, Тест-кейс\n" +
      "Матрица трассировки требований\n\n" +
      "Баг-репорт\n" +
      "Отчет про результаты тестирования\n\n\n" +
      "<b>Приоритетность создания тест-кейсов</b>:\n" +
      "- стандартный сценарий + корректные данные;\n\n" +
      "- альтернативный сценарий + корректные данные;\n\n" +
      "- стандартный сценарий + НЕкорректные данные;\n\n" +
      "- альтернативный сценарий + НЕкорректные данные;\n\n" +
      "- НЕстандартный сценарий + корректные данные (работа в двух вкладках браузера);\n\n" +
      "- работа в НЕобычных условиях: отключены картинки, JavaScript, низкая скорость передачи данных в сети Интернет (нестабильность), устаревшая версия браузера, быстрое переключение (перетаскивание), много кликов на один элемент.";
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, answer, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: keyboard.inline_process,
      },
    });
  });

};