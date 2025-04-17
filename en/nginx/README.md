# Запуск
```sh
sudo nginx -c /etc/nginx/nginx.conf
```
# Проверка конфига

```sh
sudo nginx -t -c /etc/nginx/nginx.conf
```
<details>
  
<summary>Ожидаемый вывод</summary>
  
```sh
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
</details>

# Перезапуск
```sh
sudo nginx -s reload -c /etc/nginx/nginx.conf
```
# Остановка сервера
```sh
sudo nginx -s stop
```
# Пример на html
```sh
worker_processes 1;

events {
    worker_connections 1024;
}

http {
    server {
        listen 80;
        server_name localhost;

        location / {
            root /etc/nginx;
            index index.html;
        }
    }
}
```
```sh
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nginx</title>
</head>
<body>
    <h1>Привет, мир!</h1>
    <p>Это моя первая страница, обслуживаемая Nginx.</p>
</body>
</html>
```
