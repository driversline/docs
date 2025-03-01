# Общий перезапуск

```fish
systemctl --user daemon-reload
```

# Запуск

```fish
systemctl --user start firefox.service
```

# Статус

```fish
systemctl --user status firefox.service
```

# Поиск firefox (Позже один из путей нужно будет вставить в файл службы)

find /nix/store -name firefox
