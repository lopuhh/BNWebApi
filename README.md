## Разработан Web Api приложение с авторизацией при помощи JWT токена. Оно позволяет создавать отделы и добавлять в них сотрудников.

## Технологии
 * C#
 * ReactTS
  
##  Использование

1. Необходимо скачать репозиторий
2. Backend
   1. Открыть репозиторий в visual studio.
   2. Создать базу данных Postgress.
   3. В appsetting.json изменить подключение к БД (DefaultConnection).
   4. Произвести миграцию данных (add-migration second)
   5. Обновить данные в бд (update-database).
   6. Импортирровать данные бд из папки data в корне проекта для таблицы Worker и Department.
   7. Собрать проект.
   8. Запустить программу.
3. Frontend
   1. Открыть репозиторий в visual studio code.
   2. Проверить api в AuthService, DepartmentService, WorkerService(сравнить с api с запущенным backend).
   3. Нужно установить Node.js из интернета.
   4. 
   5. Запустить программу (npm start).

