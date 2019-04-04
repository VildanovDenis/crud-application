Проект создан с помощью [Create React App](https://github.com/facebook/create-react-app).
Так же подключены библиотеки [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start), [json-server](https://github.com/typicode/json-server#paginate), [parse-link-header](https://github.com/thlorenz/parse-link-header).

## Для того, чтобы начать

Используйте команду `npm install`, с ее помощью терминал установит все необходимые модули.

После разверните имитацию REST API командой `json-server --watch db.json`.
Так же разверните приложение с помощью `npm start`.

Для работы приложения, имитация REST API должена быть развернута на [http://localhost:3000](http://localhost:3000), а само приложение [http://localhost:3001](http://localhost:3001).
Это будет сделано автоматически.

## Описание приложения.

Приложение реализует CRUD-app (Create, Read, Update, Delete) с соответствующим функционалом.
Для визуализации и заполнения контентом взят список онлайн игр 2018 года.

Приложение адаптивное, с использованием простого дизайна.
