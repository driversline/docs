# Общий перезапуск

```sh
systemctl --user daemon-reload
```

# Запуск

```sh
systemctl --user start firefox.service
```

# Статус

```sh
systemctl --user status firefox.service
```

# Поиск firefox (Позже, один из путей нужно будет вставить в файл службы)


```sh
find /nix/store -name firefox
```
