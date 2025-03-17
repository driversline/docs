# Скрытие юзернейма

```sh
function fish_prompt
    set_color white --bold
    set current_path (pwd)
    set home_path $HOME
    printf "[ %s ] ~> " (string replace -r "^$home_path" "/home" $current_path)
    set_color normal
end
