# Nix Environment

## Installation

```sh
nix-env -iA < >
```

## Removal

```sh
nix-env -e < >
```

## List

```sh
nix-env -q < >
```

##Generations

```sh
nix-env --list-generations
```

# Nix Profile

## Installation

```sh
nix profile install nixpkgs#< >
```

## Removal

```sh
nix profile remove < >
```

## List

```sh
nix profile list
```

# Cache

## Removes old and unused packages and builds

```sh
sudo nix-collect-garbage --delete-old
```

## Removes old and unused packages and builds (short form)

```sh
sudo nix-collect-garbage -d
```

## Removes only unused packages and builds, without deleting old generations of profiles

```sh
sudo nix-store --gc
```

## Shows the list of generations of the system profile

```sh
sudo nix-env -p /nix/var/nix/profiles/system --list-generations
```

## Deletes old generations of the system profile

```sh
sudo nix-env -p /nix/var/nix/profiles/system --delete-generations old
```

# Helpful resources

https://blog.ielliott.io/how-to-delete-old-nixos-boot-configurations
