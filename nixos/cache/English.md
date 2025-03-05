# Removes old and unused packages and builds

```fish
sudo nix-collect-garbage --delete-old
```

# Removes old and unused packages and builds (short form)

```fish
sudo nix-collect-garbage -d
```

# Removes only unused packages and builds, without deleting old generations of profiles

```fish
sudo nix-store --gc
```

# Shows the list of generations of the system profile

```fish
sudo nix-env -p /nix/var/nix/profiles/system --list-generations
```

# Deletes old generations of the system profile

```fish
sudo nix-env -p /nix/var/nix/profiles/system --delete-generations old
```

# ВHelpful resources

https://blog.ielliott.io/how-to-delete-old-nixos-boot-configurations
