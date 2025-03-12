# Method 1

```sh
security.sudo = {
  enable = true;
  extraRules = [
    {
      commands = [ { command = "ALL"; options = [ "NOPASSWD" ]; } ];
      users = [ "user" ];
    }
  ];
};
```

# Method 2

```sh
security.sudo = {
    enable = true;
    extraConfig = ''
      Defaults !authenticate
    '';
};
```
