# Installing Plugins via Packer (For Lua)

```sh
git clone --depth 1 https://github.com/wbthomason/packer.nvim \
    ~/.local/share/nvim/site/pack/packer/start/packer.nvim
```

```sh
ls ~/.local/share/nvim/site/pack/packer/start/packer.nvim
```

# Installation of new plugins

```sh
:PackerInstall
```

# Display Installed Plugins

```sh
:PackerStatus
```

# Synchronization (Downloading Plugins)

```sh
:PackerSync
```

# Paths [here](https://github.com/driversline/docs/blob/main/pwd/.config/README.md)

# Example 1 (Opening Folder Contents with Ctrl + q)

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

# Example 2 (Automatically Opening Folder Contents with a Delay of 100)

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
