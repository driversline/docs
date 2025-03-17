# Required Packages

```sh
pkgs.libGL
pkgs.zulu17
pkgs.minecraft
```

# Library Search

```sh
find /nix/store -name libGL.so.1
```

# Example

```sh
[ /home ] ~> sudo find /nix/store -name libGL.so.1
/nix/store/kynlrr98p2c235b00c72b14apn7l8l4y-libglvnd-1.7.0/lib/libGL.so.1
/nix/store/a4gc0s3i5vdz3fa1f36ic7w8xcjrw325-libglvnd-1.7.0/lib/libGL.so.1
[ /home ] ~>
```

# Insertion into configuration.nix (Without libGL.so.1)

```sh
environment.variables.LD_LIBRARY_PATH = "/nix/store/kynlrr98p2c235b00c72b14apn7l8l4y-libglvnd-1.7.0/lib";
```

# The last thing to do

```sh
sudo reboot
```

# Help

```sh
Any path to libGL.so.1 defined by the `find` command (as in the example) will work for you.
```
