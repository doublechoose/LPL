from setuptools import setup, find_packages

setup(
    name = "wsdk",
    version = "1.0",
    py_modules=['help'],
    install_requires=[
        'Werkzeug>=0.14',
        'Jinja2>=2.10',
        'itsdangerous>=0.24',
        'click>=5.1',
    ],
)