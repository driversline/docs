# Запуск

```bash
sudo nginx -c /etc/nginx/nginx.conf
```

# Проверка конфига

```bash
sudo nginx -t -c /etc/nginx/nginx.conf
```

<details>

<summary>Ожидаемый вывод</summary>

```bash
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
    
</details>

# Перезапуск

```bash
sudo nginx -s reload -c /etc/nginx/nginx.conf
```

# Остановка сервера

```bash
sudo nginx -s stop
```

# Пример

```bash
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

```bash
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
