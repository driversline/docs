# Установка плагинов через packer (Для lua)

```sh
git clone --depth 1 https://github.com/wbthomason/packer.nvim \
~/.local/share/nvim/site/pack/packer/start/packer.nvim
```

```sh
ls ~/.local/share/nvim/site/pack/packer/start/packer.nvim
```

# Установка новых плагинов

```sh
:PackerInstall
```

# Вывести установленные плагины

```sh
:PackerStatus
```

# Синхронизация (Обновление плагинов)

```sh
:PackerSync
```

# Пути [тут](https://github.com/driversline/docs/blob/main/pwd/.config/README.md)

# Пример 1 (Открытие содержимого папки на Ctrl + q)

```sh
require('packer').startup(function(use)
    use 'wbthomason/packer.nvim'
    use 'kyazdani42/nvim-tree.lua'
end)

require'nvim-tree'.setup {
    update_cwd = true,
    update_focused_file = {
        enable = true,
        update_cwd = true,
    },
    view = {
        width = 30,
        side = 'left',
    },
}

vim.api.nvim_set_keymap('n', '<C-q>', ':NvimTreeToggle<CR>', { noremap = true, silent = true })
```

# Пример 2 (Автоматическое открытие содержимого папки с задержкой 100)

```sh
require('packer').startup(function(use)
    use 'wbthomason/packer.nvim'
    use 'kyazdani42/nvim-tree.lua'
end)

require'nvim-tree'.setup {
    update_cwd = true,
    update_focused_file = {
        enable = true,
        update_cwd = true,
    },
    view = {
        width = 30,
        side = 'left',
    },
}

vim.defer_fn(function()
    vim.cmd([[NvimTreeToggle]])
end, 100) 
```
