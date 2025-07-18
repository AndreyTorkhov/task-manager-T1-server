# Task Manager API

Серверная часть проекта Task Manager. Реализован REST API для управления задачами с хранением данных в памяти. Написано на TypeScript с использованием Express. Архитектура построена с разделением по слоям (routes/controllers/models/types).

Frontend repo: https://github.com/AndreyTorkhov/task-manager-T1

!Это 2 версия серверной части, репозиторий с 1 версией скрыт на github

## 🌐 Продакшн

Frontend: https://task-manager-t1-o9bmjbzll-andreytorkhovs-projects.vercel.app

Backend API: https://task-manager-t1-server.vercel.app

## 🧠 Ключевые решения

- Используем TypeScript и Express
- Архитектурное разделение: контроллеры, маршруты, модели, типы
- Все данные хранятся **в оперативной памяти** (массив объектов)
- REST API реализует полный CRUD:
  - `GET /tasks` — получить список задач (+ фильтрация по названию и дате)
  - `GET /tasks/:id` — получить задачу по ID
  - `POST /tasks` — создать новую задачу
  - `PATCH /tasks/:id` — обновить задачу
  - `DELETE /tasks/:id` — удалить задачу
- Стартовые задачи инициализируются из отдельного модуля
- Настроен CORS для работы с любым frontend-доменом
- Готов к деплою на Vercel и запуску в Docker

### ✨ Обновления

- Перенос хранилища из `tasks.json` в оперативную память
- Переработка логики генерации ID
- Добавление фильтрации по `title` и `createdAt` в `GET /tasks`
- Поддержка `PATCH` вместо `PUT` по REST-стандарту
- Добавлен `Dockerfile` для локального запуска

## 🚀 Технологии

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/)
- [Docker](https://www.docker.com/)

## ⚙️ Локальный запуск

```bash
# Установка зависимостей
yarn install

# Запуск сервера в dev-режиме
yarn dev
```

Приложение будет доступно на `http://localhost:3000`

## 🐳 Запуск в Docker (dev-режим)

```bash
# Сборка образа
docker build -t task-manager-api .

# Запуск контейнера
docker run -p 3000:3000 task-manager-api
```

Приложение будет доступно на `http://localhost:3000`

## Краткое описание применённой архитектуры

Проект реализован с разделением на слои:

- `types/` — типы данных (например, интерфейс Task и перечисления)

- `models/` — хранилище задач и логика CRUD в памяти

- `controllers/` — обработчики REST маршрутов

- `routes/` — определение всех API endpoint'ов

- `app.ts` — настройка Express-приложения (middlewares, маршруты)