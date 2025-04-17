# Установка

```sh
WINEPREFIX=~/.wine32 WINEARCH=win32 winecfg
```

```sh
WINEPREFIX=~/.wine64 WINEARCH=win64 winecfg
```

# Проверка библиотек

```sh
WINEPREFIX=~/.wine32 winetricks list-installed
```

```sh
WINEPREFIX=~/.wine64 winetricks list-installed
```

# Запуск Winetricks (С GUI)

```sh
winetricks
```

```sh
WINEPREFIX=~/.wine32 winetricks
```

```sh
WINEPREFIX=~/.wine64 winetricks
```

# Запуск Wine (С GUI)

```sh
winecfg
```

```sh
WINEPREFIX=~/.wine32 winecfg
```

```sh
WINEPREFIX=~/.wine64 winecfg
```
   
# Visual C++ Redistributables

```sh
WINEPREFIX=~/.wine32 winetricks vcrun2015
```

```sh
WINEPREFIX=~/.wine64 winetricks vcrun2015
```
   
# DirectX

## 9

```sh
WINEPREFIX=~/.wine32 winetricks directx9
```

```sh
WINEPREFIX=~/.wine64 winetricks directx9
```

## 10

```sh
WINEPREFIX=~/.wine32 winetricks d3dx10
```

```sh
WINEPREFIX=~/.wine64 winetricks d3dx10
```

## 11

```sh
WINEPREFIX=~/.wine32 winetricks d3dx11_43
```

```sh
WINEPREFIX=~/.wine64 winetricks d3dx11_43
```
