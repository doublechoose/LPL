创建一个文件夹

再创建一个文件夹在
里面放`__init__.py`,py文件

在外边文件夹新建`setup.py`
内容如下
```
from setuptools import setup, find_packages

setup(
    name = "edssdk",
    version = "0.0.1",
    keywords = ("pip", "datacanvas", "eds", "xiaoh"),
    description = "eds sdk",
    long_description = "eds sdk for python",
    license = "MIT Licence",

    url = "http://xiaoh.me",
    author = "xiaoh",
    author_email = "huoxingming@gmail.com",

    packages = find_packages(),
    include_package_data = True,
    platforms = "any",
    install_requires = []
)
```
当有引用包时，

```
install_requires = ["requests"]
```
目录结构
```
$ tree
$ eds
$ ├── edssdk
$ │   ├── help.py
$ │   └── __init__.py
$ └── setup.py
```

打个包
```

$ python setup.py bdist_egg     # 生成类似 edssdk-0.0.1-py2.7.egg，支持 easy_install 
$ python setup.py sdist         # 生成类似 edssdk-0.0.1.tar.gz，支持 pip
```

