# 使用Makefile

makefile的规则

```makefile
[target] : [prerequisites]
    [command]
```

在command前需要加上tab键
例子：

```makefile
main : main.cpp
    g++ main.cpp -o main

clean :
    rm main.exe
```

执行make命令，make会在当前目录下寻找makefile文件，并执行

具体示例见本目录的`makefile`
