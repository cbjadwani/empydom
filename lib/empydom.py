import bifrost
import json


class JSError(Exception):
    pass


def is_function(f):
    return callable(f) and not isinstance(f, type)


def _eval_js(script):
    jsval = bifrost.run(script)
    retval = None
    if jsval is None:
        raise JSError("Unknown error")
    exec jsval
    return retval


def _to_js(value):
    if isinstance(value, JSObj):
        return str(value)
    elif is_function(value):
        return JSObj.get_js_callable(value)
    return json.dumps(value)


def get_js_val(name):
    value = eval(name)
    try:
        retval = _to_js(value)
        return retval
    except TypeError:
        pass
    return "empydom.create_python_proxy(%s, %s)" % (repr(name), dir(value))


# function () {};
class JSObj(object):
    _funcs = {}
    _funcs_index = 0

    def __init__(self, ref):
        self.set_own_attr("ref", ref)

    def get(self, attrname):
        assert isinstance(attrname, basestring)
        js_script = "%s[%r];" % (str(self), attrname)
        return _eval_js(js_script)

    def set(self, attrname, value):
        assert isinstance(attrname, basestring)
        js_script = "%s[%r] = %s;" % (str(self), attrname, _to_js(value))
        _eval_js(js_script)

    def __getattr__(self, attrname):
        return self.get(attrname)

    def __setattr__(self, attrname, value):
        self.set(attrname, value)

    def __getitem__(self, attrname):
        return self.get(str(attrname))

    def __setitem__(self, attrname, value):
        self.set(str(attrname), value)

    def __call__(self, *args):
        args_str = ",".join(_to_js(arg) for arg in args)
        js_script = "%s(%s);" % (str(self), args_str)
        return _eval_js(js_script)

    @classmethod
    def get_js_callable(cls, fn):
        i = cls._funcs_index
        cls._funcs[i] = fn
        cls._funcs_index += 1
        return 'empydom.create_python_func_caller("JSObj._funcs[%d]")' % i

    def set_own_attr(self, attrname, value):
        self.__dict__[attrname] = value

    def __del__(self):
        bifrost.run("delete %s;" % str(self))

    def __str__(self):
        return "empydom._jsobj_refs[%r]" % self.ref


undefined = JSObj("undefined")
window = JSObj("window")
window.set_own_attr('document', window.document)
# FIXME: Don't remove this line, last line gets discarded by empydom builder
