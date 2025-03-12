# Очистить всю буферную/кэшированную память

```sh
echo 3 | sudo tee /proc/sys/vm/drop_caches
```
