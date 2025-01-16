services.xserver.videoDrivers = [ "nvidia" ];

hardware.nvidia.package = config.boot.kernelPackages.nvidiaPackages.legacy_535;

nixpkgs.config.allowUnfree = true;
