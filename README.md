## Разработано Web Api приложение с авторизацией при помощи JWT токена. Оно позволяет создавать отделы и добавлять в них сотрудников.

## Технологии
 * C#
 * ReactTS
  
##  Использование

1. Необходимо скачать репозиторий
2. Backend
   1. Открыть репозиторий в visual studio.
   2. Открыть решение под названием api.sln.
   3. Создать базу данных Postgress.
   4. В appsetting.json изменить подключение к БД (строка DefaultConnection).
   5. Произвести миграцию данных (add-migration second)
   6. Обновить данные в бд (update-database).
   7. Импортирровать данные бд из папки data в корне проекта для таблицы Worker и Department.
   8. Собрать проект.
   9. Запустить программу.
3. Frontend
   1. Открыть репозиторий в visual studio code.
   2. Проверить api в AuthService, DepartmentService, WorkerService(сравнить api с запущенным backend).
   3. Нужно установить Node.js из интернета.
   4. Открыть терминал и выполнить 2 следующих пункта.
   5. (npm install --force)
   6. Запустить программу (npm start).
4. В frontend нажимаете Signup и вас перекидывает на страницу регистрации, затем вы заполняете данные(в пароле должно быть от 6 символов).
5. После регистрации вы автоматически авторизуетесь, но если вы захотите выйти и снова войти, обратите внимание что при входе нужно вводить ИМЯ ПОЛЬЗОВАТЕЛЯ, а не почту.


