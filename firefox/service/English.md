# General restart

```sh
systemctl --user daemon-reload
```

# Start

```sh
systemctl --user start firefox.service
```

# Status

```sh
systemctl --user status firefox.service
```

# Search for firefox (Later, one of the paths will need to be inserted into the service file)

```sh
find /nix/store -name firefox
```
