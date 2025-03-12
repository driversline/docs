# Никс окружение

## Установка

```sh
nix-env -iA < >
```

## Удаление

```sh
nix-env -e < >
```

## Список

```sh
nix-env -q < >
```

## Генерации

```sh
nix-env --list-generations
```

# Никс профиль

## Установка

```sh
nix profile install nixpkgs#< >
```

## Удаление

```sh
nix profile remove < >
```

## Генерации

```sh
nix profile list
```

# Кеш

## Удаляет старые и неиспользуемые пакеты и сборки

```sh
sudo nix-collect-garbage --delete-old
```

## Удаляет старые и неиспользуемые пакеты и сборки (сокращенная форма)

```sh
sudo nix-collect-garbage -d
```

## Удаляет только неиспользуемые пакеты и сборки, без удаления старых поколений профилей

```sh
sudo nix-store --gc
```

## Показывает список поколений системного профиля

```sh
sudo nix-env -p /nix/var/nix/profiles/system --list-generations
```

## Удаляет старые поколения системного профиля

```sh
sudo nix-env -p /nix/var/nix/profiles/system --delete-generations old
```

# Вспомогательные ресурсы

https://blog.ielliott.io/how-to-delete-old-nixos-boot-configurations
