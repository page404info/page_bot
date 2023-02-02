const keyboard = require("../keyboard/keyboard");

function runStart(ctx) {
  let answer =
    "<b>Приветствую, " +
    ctx.chat.first_name +
    "</b>!\n\n" +
    "Этот бот рассказывает о процессе тестирования и документации тестировщика на проекте.\n\n" +
    "<b>Чек-лист</b> содержит информацию о видах тестирования.\n\n" +
    "<b>Процесс</b> рассказывает об этапах тестирования приложения.\n\n" +
    "<b>Чит-листы</b> содержат идеи для проведения проверок.\n\n" +
    "<b>Сайт</b> <a href='https://page404info.github.io/dictionary/index.html'>https://page404info.github.io/</a>";

  ctx.replyWithHTML(answer, {
    reply_markup: {
      keyboard: keyboard.main,
      resize_keyboard: true,
    },
  });
}

function runCheckList(ctx) {
  let answer =
    "<b>Чек-лист</b>\n\n" +
    "1.Требования\n" +
    "2.Прототип\n" +
    "3.Логирование\n" +
    "4.Установка / удаление\n\n" +
    "5.<b>Функциональность</b>\n" +
    "    - критическая (справочники, факты)\n" +
    "    - важная\n" +
    "    - необязательная\n" +
    "6.<b>Защищенность</b> (роли, маскирование)\n" +
    "7.<b>Нагрузка</b> (на клиента, на сервер)\n" +
    "8.<b>Обновление</b> данных, библиотек\n" +
    "9.<b>Валидация</b> кода, SEO\n" +
    "10.<b>Адаптивность, Zoom</b> (75-200%)\n" +
    "11.<b>Кросс</b> (ОС + браузер + версия)\n\n" +
    "12.Структура, ссылки, орфография\n" +
    "13.Доступность\n" +
    "14.Локализация\n\n" +
    "15.Лицензирование\n" +
    "16.Пользовательское соглашение, согласие на обработку персональных данных\n" +
    "17.Инструкция пользователя";

  ctx.replyWithHTML(answer, {
    reply_markup: {
      keyboard: keyboard.main,
      resize_keyboard: true,
    },
  });
}

function runProcess(ctx) {
  let answer =
    "<b>Процесс тестирования</b>\n\n" +
    "1.<b>Тест-анализ</b> (что проверить)\n\n" +
    "2.<b>Тест-дизайн</b> (как проверить)\n\n" +
    "3.<b>Документирование процесса</b>";
  ctx.replyWithHTML(answer, {
    reply_markup: {
      inline_keyboard: keyboard.inline_process,
      resize_keyboard: true,
    },
  });
}

function runChitList(ctx) {
  let answer =
    "<b>Чит-листы</b> (идеи)\n\n" +
    "1.База данных\n" +
    "2.ETL процесс\n" +
    "3.API\n" +
    "4.Логирование\n\n" +
    "5.Удобство использования\n" +
    "6.Локализация\n" +
    "7.Портативность, адаптивность\n" +
    "8.Доступность\n\n" +
    "9.SEO\n" +
    "10.Бот\n" +
    "11.Android\n" +
    "12.Операционные системы\n\n" +
    "13.Элементы управления\n" +
    "14.Верстка\n" +
    "15.Модальное окно\n" +
    "16.Слайдер\n\n" +
    "17.Ползунок\n" +
    "18.Таблица\n" +
    "19.Список\n" +
    "20.Переключатель\n\n" +
    "21.Календарь\n" +
    "22.Файл\n" +
    "23.Поиск\n" +
    "24.Поле\n\n" +
    "<b>Введите номер чит-листа</b>\nнапример, 10 \ud83d\udc47";
  ctx.replyWithHTML(answer, {
    reply_markup: {
      keyboard: keyboard.main,
      resize_keyboard: true,
    },
  });
}

function runError(ctx) {
  ctx.replyWithHTML(
    "Команду [<b>" + ctx.message.text + "</b>] не понимаю, ожидаю другую..."
  );
}


module.exports.runStart = runStart;
module.exports.runCheckList = runCheckList;
module.exports.runProcess = runProcess;
module.exports.runChitList = runChitList;
module.exports.runError = runError;
