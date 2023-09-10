#  официальный образ node.js
FROM node:14

# Установка рабочей директории
WORKDIR /app

# Копирование файлов package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копия исходного кода приложения
COPY . .

# Сборка приложение
RUN npm run build

# Устанока serve для запуска сборки
RUN npm install -g serve

# Открыть порт 5000
EXPOSE 5000

# Запуск приложение
CMD ["serve", "-s", "build", "-l", "5000"]
