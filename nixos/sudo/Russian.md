# Способ 1

```fish
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

# Способ 2

```fish
security.sudo.enable = true;
security.sudo.configFile = ''
 Defaults !authenticate
'';
```
