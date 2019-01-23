from functools import wraps

def makebold(fn):
    @wraps(fn)
    def wrapped():
        return "<b>" + fn() + "</b>"
    return wrapped

def makeitalic(fn):
    @wraps(fn)
    def wrapped():
        return "<i>" + fn() + "</i>"
    return wrapped

@makebold
@makeitalic
def hello():
    return "hello world"

print(hello())        # returns "<b><i>hello world</i></b>"
print(hello.__name__) # with functools.wraps() this returns "hello". 