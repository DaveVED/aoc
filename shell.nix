{ pkgs ? import (builtins.fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixpkgs-unstable.tar.gz") {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    python311
    nodejs-18_x
    bun
    nodePackages.typescript
  ];
}
