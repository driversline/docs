# General restart

```fish
systemctl --user daemon-reload
```

# Start

```fish
systemctl --user start firefox.service
```

# Status

```fish
systemctl --user status firefox.service
```

# Search for firefox (Later, one of the paths will need to be inserted into the service file)

```fish
find /nix/store -name firefox
```
