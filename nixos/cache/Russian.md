# Никс окружение

## Установка

```fish
nix-env -iA < >
```

## Удаление

```fish
nix-env -e < >
```

## Список

```fish
nix-env -q < >
```

## Генерации

```fish
nix-env --list-generations
```

# Никс профиль

## Установка

```fish
nix profile install nixpkgs#< >
```

## Удаление

```fish
nix profile remove < >
```

## Генерации

```fish
nix profile list
```


# Удаляет старые и неиспользуемые пакеты и сборки

```fish
sudo nix-collect-garbage --delete-old
```

# Удаляет старые и неиспользуемые пакеты и сборки (сокращенная форма)

```fish
sudo nix-collect-garbage -d
```

# Удаляет только неиспользуемые пакеты и сборки, без удаления старых поколений профилей

```fish
sudo nix-store --gc
```

# Показывает список поколений системного профиля

```fish
sudo nix-env -p /nix/var/nix/profiles/system --list-generations
```

# Удаляет старые поколения системного профиля

```fish
sudo nix-env -p /nix/var/nix/profiles/system --delete-generations old
```

# Вспомогательные ресурсы

https://blog.ielliott.io/how-to-delete-old-nixos-boot-configurations
