## Разработан Web Api приложение с авторизацией при помощи JWT токена. Оно позволяет создавать отделы и добавлять в них сотрудников.

## Технологии
 * C#
 * ReactTS
  
##  Использование

1. Необходимо скачать репозиторий
2. Backend
   1. Клонировать репозиторий в visual studio.
   2. В appsetting.json изменить подключение к БД (DefaultConnection).
   3. Произвести миграцию данных (add-migration second)
   4. Обновить данные в бд (update-database).
   5. Импортирровать данные бд из папки data в корне проекта для таблицы Worker и Department.
   6. Собрать проект.
   7. Запустить программу.
3. Frontend
   1. Клонировать репозиторий в visual studio code.
   2. Проверить api в AuthService, DepartmentService, WorkerService.
   3. Запустить программу (npm start).

