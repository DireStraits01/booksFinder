# Используйте официальный образ node.js
FROM node:14

# Установите рабочую директорию
WORKDIR /app

# Копируйте файлы package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Копируйте исходные коды приложения
COPY . .

# Соберите приложение
RUN npm run build

# Установите serve для запуска сборки
RUN npm install -g serve

# Откройте порт 5000
EXPOSE 5000

# Запустите приложение
CMD ["serve", "-s", "build", "-l", "5000"]
