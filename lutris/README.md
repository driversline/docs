# Установка
 * `WINEPREFIX=~/.wine32 WINEARCH=win32 winecfg`
 * `WINEPREFIX=~/.wine64 WINEARCH=win64 winecfg`

# Проверка библиотек
 * `WINEPREFIX=~/.wine32 winetricks list-installed`
 * `WINEPREFIX=~/.wine64 winetricks list-installed`

# Запуск Winetricks (С GUI)
 * `winetricks`
 * `WINEPREFIX=~/.wine32 winetricks`
 * `WINEPREFIX=~/.wine64 winetricks`

# Запуск Wine (С GUI)
 * `winecfg`
 * `WINEPREFIX=~/.wine32 winecfg`
 * `WINEPREFIX=~/.wine64 winecfg`
   
# Visual C++ Redistributables
 * `WINEPREFIX=~/.wine32 winetricks vcrun2015`
 * `WINEPREFIX=~/.wine64 winetricks vcrun2015`
   
# DirectX

## 9
 * `WINEPREFIX=~/.wine32 winetricks directx9`
 * `WINEPREFIX=~/.wine64 winetricks directx9`

## 10
 * `WINEPREFIX=~/.wine32 winetricks d3dx10`
 * `WINEPREFIX=~/.wine64 winetricks d3dx10`

## 11
 * `WINEPREFIX=~/.wine32 winetricks d3dx11_43`
 * `WINEPREFIX=~/.wine64 winetricks d3dx11_43`
