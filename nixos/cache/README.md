#cache

```fish
nix-collect-garbage --delete-old
```

```fish
sudo nix-collect-garbage -d
```

```fish
nix-store --gc
```

#boot

@check
```fish
nix-env -p /nix/var/nix/profiles/system --list-generations
```
@delete
```fish
sudo nix-env -p /nix/var/nix/profiles/system --delete-generations old
```

#help
https://blog.ielliott.io/how-to-delete-old-nixos-boot-configurations
