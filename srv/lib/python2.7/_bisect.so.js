"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 112;
  var $1___SIZE = 16;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var __str;
  var __str1;
  var _keywords_8302;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var _bisect_right_doc;
  var __str6;
  var _keywords_8328;
  var __str7;
  var __str8;
  var _insort_right_doc;
  var __str9;
  var _keywords_8415;
  var _bisect_left_doc;
  var __str10;
  var _keywords_8441;
  var __str11;
  var _insort_left_doc;
  var _bisect_doc;
  var _insort_doc;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var __str17;
  var _bisect_methods;
  var _module_doc;
  var __str18;
  function _internal_bisect_right($list, $item, $lo, $hi) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $list_addr = __stackBase__;
      var $item_addr = __stackBase__ + 4;
      var $lo_addr = __stackBase__ + 8;
      var $hi_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $litem = __stackBase__ + 24;
      var $mid = __stackBase__ + 28;
      var $res = __stackBase__ + 32;
      
      HEAP[$list_addr] = $list;
      HEAP[$item_addr] = $item;
      HEAP[$lo_addr] = $lo;
      HEAP[$hi_addr] = $hi;
      
      
      if (HEAP[$lo_addr] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($3, __str);
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 2:
      
      var $5 = HEAP[$hi_addr] == -1;
      if ($5) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $6 = HEAP[$list_addr];
      var $7 = _PySequence_Size($6);
      HEAP[$hi_addr] = $7;
      
      
      if (HEAP[$hi_addr] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 5:
      __label__ = 15;
      break;
     case 6:
      
      
      
      var $13 = (HEAP[$lo_addr] + HEAP[$hi_addr]) / 2 | 0;
      HEAP[$mid] = $13;
      var $14 = HEAP[$list_addr];
      var $15 = HEAP[$mid];
      var $16 = _PySequence_GetItem($14, $15);
      HEAP[$litem] = $16;
      
      
      if (HEAP[$litem] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 8:
      var $19 = HEAP[$item_addr];
      var $20 = HEAP[$litem];
      var $21 = _PyObject_RichCompareBool($19, $20, 0);
      HEAP[$res] = $21;
      
      
      
      var $25 = HEAP[HEAP[$litem]] - 1;
      
      var $27 = HEAP[$litem];
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$litem]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$litem] + 4] + 24];
      var $37 = HEAP[$litem];
      FUNCTION_TABLE[$36]($37);
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$res] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 12:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $42 = HEAP[$mid];
      HEAP[$hi_addr] = $42;
      __label__ = 15;
      break;
     case 14:
      
      var $44 = HEAP[$mid] + 1;
      HEAP[$lo_addr] = $44;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if (HEAP[$lo_addr] < HEAP[$hi_addr]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $48 = HEAP[$lo_addr];
      HEAP[$0] = $48;
      __label__ = 17;
      break;
     case 17:
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
      __label__ = 18;
      break;
     case 18:
      var $retval17 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bisect_right($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $list = __stackBase__ + 20;
      var $item = __stackBase__ + 24;
      var $lo = __stackBase__ + 28;
      var $hi = __stackBase__ + 32;
      var $index = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$lo] = 0;
      HEAP[$hi] = -1;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str1, _keywords_8302, allocate([ $list, 0, 0, 0, $item, 0, 0, 0, $lo, 0, 0, 0, $hi, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 2:
      var $5 = HEAP[$hi];
      var $6 = HEAP[$lo];
      var $7 = HEAP[$item];
      var $8 = HEAP[$list];
      var $9 = _internal_bisect_right($8, $7, $6, $5);
      HEAP[$index] = $9;
      
      
      if (HEAP[$index] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      var $12 = HEAP[$index];
      var $13 = _PyInt_FromSsize_t($12);
      HEAP[$0] = $13;
      __label__ = 5;
      break;
     case 5:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
      __label__ = 6;
      break;
     case 6:
      var $retval5 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _insort_right($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $list = __stackBase__ + 20;
      var $item = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      var $lo = __stackBase__ + 32;
      var $hi = __stackBase__ + 36;
      var $index = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$lo] = 0;
      HEAP[$hi] = -1;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str6, _keywords_8328, allocate([ $list, 0, 0, 0, $item, 0, 0, 0, $lo, 0, 0, 0, $hi, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 2:
      var $5 = HEAP[$hi];
      var $6 = HEAP[$lo];
      var $7 = HEAP[$item];
      var $8 = HEAP[$list];
      var $9 = _internal_bisect_right($8, $7, $6, $5);
      HEAP[$index] = $9;
      
      
      if (HEAP[$index] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$list] + 4] == _PyList_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $16 = HEAP[$item];
      var $17 = HEAP[$list];
      var $18 = HEAP[$index];
      var $19 = _PyList_Insert($17, $18, $16);
      
      if ($19 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 7:
      __label__ = 12;
      break;
     case 8:
      var $21 = HEAP[$item];
      var $22 = HEAP[$list];
      var $23 = HEAP[$index];
      var $24 = _PyObject_CallMethod($22, __str7, __str8, allocate([ $23, 0, 0, 0, $21, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $24;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 10:
      
      
      
      var $30 = HEAP[HEAP[$result]] - 1;
      
      var $32 = HEAP[$result];
      HEAP[$32] = $30;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $41 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $42 = HEAP[$result];
      FUNCTION_TABLE[$41]($42);
      __label__ = 12;
      break;
     case 12:
      
      var $44 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $44;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 13;
      break;
     case 13:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
      __label__ = 14;
      break;
     case 14:
      var $retval13 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _internal_bisect_left($list, $item, $lo, $hi) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $list_addr = __stackBase__;
      var $item_addr = __stackBase__ + 4;
      var $lo_addr = __stackBase__ + 8;
      var $hi_addr = __stackBase__ + 12;
      var $retval = __stackBase__ + 16;
      var $0 = __stackBase__ + 20;
      var $litem = __stackBase__ + 24;
      var $mid = __stackBase__ + 28;
      var $res = __stackBase__ + 32;
      
      HEAP[$list_addr] = $list;
      HEAP[$item_addr] = $item;
      HEAP[$lo_addr] = $lo;
      HEAP[$hi_addr] = $hi;
      
      
      if (HEAP[$lo_addr] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($3, __str);
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 2:
      
      var $5 = HEAP[$hi_addr] == -1;
      if ($5) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $6 = HEAP[$list_addr];
      var $7 = _PySequence_Size($6);
      HEAP[$hi_addr] = $7;
      
      
      if (HEAP[$hi_addr] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 5:
      __label__ = 15;
      break;
     case 6:
      
      
      
      var $13 = (HEAP[$lo_addr] + HEAP[$hi_addr]) / 2 | 0;
      HEAP[$mid] = $13;
      var $14 = HEAP[$list_addr];
      var $15 = HEAP[$mid];
      var $16 = _PySequence_GetItem($14, $15);
      HEAP[$litem] = $16;
      
      
      if (HEAP[$litem] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 8:
      var $19 = HEAP[$litem];
      var $20 = HEAP[$item_addr];
      var $21 = _PyObject_RichCompareBool($19, $20, 0);
      HEAP[$res] = $21;
      
      
      
      var $25 = HEAP[HEAP[$litem]] - 1;
      
      var $27 = HEAP[$litem];
      HEAP[$27] = $25;
      
      
      
      
      if (HEAP[HEAP[$litem]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $36 = HEAP[HEAP[HEAP[$litem] + 4] + 24];
      var $37 = HEAP[$litem];
      FUNCTION_TABLE[$36]($37);
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$res] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$0] = -1;
      __label__ = 17;
      break;
     case 12:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      var $43 = HEAP[$mid] + 1;
      HEAP[$lo_addr] = $43;
      __label__ = 15;
      break;
     case 14:
      var $44 = HEAP[$mid];
      HEAP[$hi_addr] = $44;
      __label__ = 15;
      break;
     case 15:
      
      
      
      if (HEAP[$lo_addr] < HEAP[$hi_addr]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      var $48 = HEAP[$lo_addr];
      HEAP[$0] = $48;
      __label__ = 17;
      break;
     case 17:
      var $49 = HEAP[$0];
      HEAP[$retval] = $49;
      __label__ = 18;
      break;
     case 18:
      var $retval17 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _bisect_left($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 40;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $list = __stackBase__ + 20;
      var $item = __stackBase__ + 24;
      var $lo = __stackBase__ + 28;
      var $hi = __stackBase__ + 32;
      var $index = __stackBase__ + 36;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$lo] = 0;
      HEAP[$hi] = -1;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str9, _keywords_8415, allocate([ $list, 0, 0, 0, $item, 0, 0, 0, $lo, 0, 0, 0, $hi, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 2:
      var $5 = HEAP[$hi];
      var $6 = HEAP[$lo];
      var $7 = HEAP[$item];
      var $8 = HEAP[$list];
      var $9 = _internal_bisect_left($8, $7, $6, $5);
      HEAP[$index] = $9;
      
      
      if (HEAP[$index] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 5;
      break;
     case 4:
      var $12 = HEAP[$index];
      var $13 = _PyInt_FromSsize_t($12);
      HEAP[$0] = $13;
      __label__ = 5;
      break;
     case 5:
      var $14 = HEAP[$0];
      HEAP[$retval] = $14;
      __label__ = 6;
      break;
     case 6:
      var $retval5 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _insort_left($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $kw_addr = __stackBase__ + 8;
      var $retval = __stackBase__ + 12;
      var $0 = __stackBase__ + 16;
      var $list = __stackBase__ + 20;
      var $item = __stackBase__ + 24;
      var $result = __stackBase__ + 28;
      var $lo = __stackBase__ + 32;
      var $hi = __stackBase__ + 36;
      var $index = __stackBase__ + 40;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      HEAP[$kw_addr] = $kw;
      HEAP[$lo] = 0;
      HEAP[$hi] = -1;
      var $1 = HEAP[$args_addr];
      var $2 = HEAP[$kw_addr];
      var $3 = _PyArg_ParseTupleAndKeywords($1, $2, __str10, _keywords_8441, allocate([ $list, 0, 0, 0, $item, 0, 0, 0, $lo, 0, 0, 0, $hi, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 2:
      var $5 = HEAP[$hi];
      var $6 = HEAP[$lo];
      var $7 = HEAP[$item];
      var $8 = HEAP[$list];
      var $9 = _internal_bisect_left($8, $7, $6, $5);
      HEAP[$index] = $9;
      
      
      if (HEAP[$index] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 4:
      
      
      
      
      if (HEAP[HEAP[$list] + 4] == _PyList_Type) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $16 = HEAP[$item];
      var $17 = HEAP[$list];
      var $18 = HEAP[$index];
      var $19 = _PyList_Insert($17, $18, $16);
      
      if ($19 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 7:
      __label__ = 12;
      break;
     case 8:
      var $21 = HEAP[$item];
      var $22 = HEAP[$list];
      var $23 = HEAP[$index];
      var $24 = _PyObject_CallMethod($22, __str7, __str11, allocate([ $23, 0, 0, 0, $21, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$result] = $24;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 10:
      
      
      
      var $30 = HEAP[HEAP[$result]] - 1;
      
      var $32 = HEAP[$result];
      HEAP[$32] = $30;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $41 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $42 = HEAP[$result];
      FUNCTION_TABLE[$41]($42);
      __label__ = 12;
      break;
     case 12:
      
      var $44 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $44;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 13;
      break;
     case 13:
      var $45 = HEAP[$0];
      HEAP[$retval] = $45;
      __label__ = 14;
      break;
     case 14:
      var $retval13 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_bisect() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $0 = _Py_InitModule4(__str18, _bisect_methods, _module_doc, 0, 1013);
      __label__ = 1;
      break;
     case 1:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_bisect"] = _init_bisect;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _bisect_right, 0, _insort_right, 0, _bisect_left, 0, _insort_left, 0 ]);
  function run(args) {
    __str = allocate([ 108, 111, 32, 109, 117, 115, 116, 32, 98, 101, 32, 110, 111, 110, 45, 110, 101, 103, 97, 116, 105, 118, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 79, 79, 124, 110, 110, 58, 98, 105, 115, 101, 99, 116, 95, 114, 105, 103, 104, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_8302 = allocate(20, "i8*", ALLOC_NORMAL);
    __str2 = allocate([ 97, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 120, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 108, 111, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 104, 105, 0 ], "i8", ALLOC_NORMAL);
    _bisect_right_doc = allocate([ 98, 105, 115, 101, 99, 116, 95, 114, 105, 103, 104, 116, 40, 97, 44, 32, 120, 91, 44, 32, 108, 111, 91, 44, 32, 104, 105, 93, 93, 41, 32, 45, 62, 32, 105, 110, 100, 101, 120, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 105, 110, 100, 101, 120, 32, 119, 104, 101, 114, 101, 32, 116, 111, 32, 105, 110, 115, 101, 114, 116, 32, 105, 116, 101, 109, 32, 120, 32, 105, 110, 32, 108, 105, 115, 116, 32, 97, 44, 32, 97, 115, 115, 117, 109, 105, 110, 103, 32, 97, 32, 105, 115, 32, 115, 111, 114, 116, 101, 100, 46, 10, 10, 84, 104, 101, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 105, 32, 105, 115, 32, 115, 117, 99, 104, 32, 116, 104, 97, 116, 32, 97, 108, 108, 32, 101, 32, 105, 110, 32, 97, 91, 58, 105, 93, 32, 104, 97, 118, 101, 32, 101, 32, 60, 61, 32, 120, 44, 32, 97, 110, 100, 32, 97, 108, 108, 32, 101, 32, 105, 110, 10, 97, 91, 105, 58, 93, 32, 104, 97, 118, 101, 32, 101, 32, 62, 32, 120, 46, 32, 32, 83, 111, 32, 105, 102, 32, 120, 32, 97, 108, 114, 101, 97, 100, 121, 32, 97, 112, 112, 101, 97, 114, 115, 32, 105, 110, 32, 116, 104, 101, 32, 108, 105, 115, 116, 44, 32, 105, 32, 112, 111, 105, 110, 116, 115, 32, 106, 117, 115, 116, 10, 98, 101, 121, 111, 110, 100, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 109, 111, 115, 116, 32, 120, 32, 97, 108, 114, 101, 97, 100, 121, 32, 116, 104, 101, 114, 101, 10, 10, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 115, 32, 108, 111, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 48, 41, 32, 97, 110, 100, 32, 104, 105, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 108, 101, 110, 40, 97, 41, 41, 32, 98, 111, 117, 110, 100, 32, 116, 104, 101, 10, 115, 108, 105, 99, 101, 32, 111, 102, 32, 97, 32, 116, 111, 32, 98, 101, 32, 115, 101, 97, 114, 99, 104, 101, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 79, 79, 124, 110, 110, 58, 105, 110, 115, 111, 114, 116, 95, 114, 105, 103, 104, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_8328 = allocate(20, "i8*", ALLOC_NORMAL);
    __str7 = allocate([ 105, 110, 115, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 110, 79, 0 ], "i8", ALLOC_NORMAL);
    _insort_right_doc = allocate([ 105, 110, 115, 111, 114, 116, 95, 114, 105, 103, 104, 116, 40, 97, 44, 32, 120, 91, 44, 32, 108, 111, 91, 44, 32, 104, 105, 93, 93, 41, 10, 10, 73, 110, 115, 101, 114, 116, 32, 105, 116, 101, 109, 32, 120, 32, 105, 110, 32, 108, 105, 115, 116, 32, 97, 44, 32, 97, 110, 100, 32, 107, 101, 101, 112, 32, 105, 116, 32, 115, 111, 114, 116, 101, 100, 32, 97, 115, 115, 117, 109, 105, 110, 103, 32, 97, 32, 105, 115, 32, 115, 111, 114, 116, 101, 100, 46, 10, 10, 73, 102, 32, 120, 32, 105, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 105, 110, 32, 97, 44, 32, 105, 110, 115, 101, 114, 116, 32, 105, 116, 32, 116, 111, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 32, 111, 102, 32, 116, 104, 101, 32, 114, 105, 103, 104, 116, 109, 111, 115, 116, 32, 120, 46, 10, 10, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 115, 32, 108, 111, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 48, 41, 32, 97, 110, 100, 32, 104, 105, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 108, 101, 110, 40, 97, 41, 41, 32, 98, 111, 117, 110, 100, 32, 116, 104, 101, 10, 115, 108, 105, 99, 101, 32, 111, 102, 32, 97, 32, 116, 111, 32, 98, 101, 32, 115, 101, 97, 114, 99, 104, 101, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 79, 79, 124, 110, 110, 58, 98, 105, 115, 101, 99, 116, 95, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_8415 = allocate(20, "i8*", ALLOC_NORMAL);
    _bisect_left_doc = allocate([ 98, 105, 115, 101, 99, 116, 95, 108, 101, 102, 116, 40, 97, 44, 32, 120, 91, 44, 32, 108, 111, 91, 44, 32, 104, 105, 93, 93, 41, 32, 45, 62, 32, 105, 110, 100, 101, 120, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 105, 110, 100, 101, 120, 32, 119, 104, 101, 114, 101, 32, 116, 111, 32, 105, 110, 115, 101, 114, 116, 32, 105, 116, 101, 109, 32, 120, 32, 105, 110, 32, 108, 105, 115, 116, 32, 97, 44, 32, 97, 115, 115, 117, 109, 105, 110, 103, 32, 97, 32, 105, 115, 32, 115, 111, 114, 116, 101, 100, 46, 10, 10, 84, 104, 101, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 105, 32, 105, 115, 32, 115, 117, 99, 104, 32, 116, 104, 97, 116, 32, 97, 108, 108, 32, 101, 32, 105, 110, 32, 97, 91, 58, 105, 93, 32, 104, 97, 118, 101, 32, 101, 32, 60, 32, 120, 44, 32, 97, 110, 100, 32, 97, 108, 108, 32, 101, 32, 105, 110, 10, 97, 91, 105, 58, 93, 32, 104, 97, 118, 101, 32, 101, 32, 62, 61, 32, 120, 46, 32, 32, 83, 111, 32, 105, 102, 32, 120, 32, 97, 108, 114, 101, 97, 100, 121, 32, 97, 112, 112, 101, 97, 114, 115, 32, 105, 110, 32, 116, 104, 101, 32, 108, 105, 115, 116, 44, 32, 105, 32, 112, 111, 105, 110, 116, 115, 32, 106, 117, 115, 116, 10, 98, 101, 102, 111, 114, 101, 32, 116, 104, 101, 32, 108, 101, 102, 116, 109, 111, 115, 116, 32, 120, 32, 97, 108, 114, 101, 97, 100, 121, 32, 116, 104, 101, 114, 101, 46, 10, 10, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 115, 32, 108, 111, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 48, 41, 32, 97, 110, 100, 32, 104, 105, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 108, 101, 110, 40, 97, 41, 41, 32, 98, 111, 117, 110, 100, 32, 116, 104, 101, 10, 115, 108, 105, 99, 101, 32, 111, 102, 32, 97, 32, 116, 111, 32, 98, 101, 32, 115, 101, 97, 114, 99, 104, 101, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 79, 79, 124, 110, 110, 58, 105, 110, 115, 111, 114, 116, 95, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_8441 = allocate(20, "i8*", ALLOC_NORMAL);
    __str11 = allocate([ 105, 79, 0 ], "i8", ALLOC_NORMAL);
    _insort_left_doc = allocate([ 105, 110, 115, 111, 114, 116, 95, 108, 101, 102, 116, 40, 97, 44, 32, 120, 91, 44, 32, 108, 111, 91, 44, 32, 104, 105, 93, 93, 41, 10, 10, 73, 110, 115, 101, 114, 116, 32, 105, 116, 101, 109, 32, 120, 32, 105, 110, 32, 108, 105, 115, 116, 32, 97, 44, 32, 97, 110, 100, 32, 107, 101, 101, 112, 32, 105, 116, 32, 115, 111, 114, 116, 101, 100, 32, 97, 115, 115, 117, 109, 105, 110, 103, 32, 97, 32, 105, 115, 32, 115, 111, 114, 116, 101, 100, 46, 10, 10, 73, 102, 32, 120, 32, 105, 115, 32, 97, 108, 114, 101, 97, 100, 121, 32, 105, 110, 32, 97, 44, 32, 105, 110, 115, 101, 114, 116, 32, 105, 116, 32, 116, 111, 32, 116, 104, 101, 32, 108, 101, 102, 116, 32, 111, 102, 32, 116, 104, 101, 32, 108, 101, 102, 116, 109, 111, 115, 116, 32, 120, 46, 10, 10, 79, 112, 116, 105, 111, 110, 97, 108, 32, 97, 114, 103, 115, 32, 108, 111, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 48, 41, 32, 97, 110, 100, 32, 104, 105, 32, 40, 100, 101, 102, 97, 117, 108, 116, 32, 108, 101, 110, 40, 97, 41, 41, 32, 98, 111, 117, 110, 100, 32, 116, 104, 101, 10, 115, 108, 105, 99, 101, 32, 111, 102, 32, 97, 32, 116, 111, 32, 98, 101, 32, 115, 101, 97, 114, 99, 104, 101, 100, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _bisect_doc = allocate([ 65, 108, 105, 97, 115, 32, 102, 111, 114, 32, 98, 105, 115, 101, 99, 116, 95, 114, 105, 103, 104, 116, 40, 41, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _insort_doc = allocate([ 65, 108, 105, 97, 115, 32, 102, 111, 114, 32, 105, 110, 115, 111, 114, 116, 95, 114, 105, 103, 104, 116, 40, 41, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 98, 105, 115, 101, 99, 116, 95, 114, 105, 103, 104, 116, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 98, 105, 115, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 105, 110, 115, 111, 114, 116, 95, 114, 105, 103, 104, 116, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 105, 110, 115, 111, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 98, 105, 115, 101, 99, 116, 95, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 105, 110, 115, 111, 114, 116, 95, 108, 101, 102, 116, 0 ], "i8", ALLOC_NORMAL);
    _bisect_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 66, 105, 115, 101, 99, 116, 105, 111, 110, 32, 97, 108, 103, 111, 114, 105, 116, 104, 109, 115, 46, 10, 10, 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 115, 117, 112, 112, 111, 114, 116, 32, 102, 111, 114, 32, 109, 97, 105, 110, 116, 97, 105, 110, 105, 110, 103, 32, 97, 32, 108, 105, 115, 116, 32, 105, 110, 32, 115, 111, 114, 116, 101, 100, 32, 111, 114, 100, 101, 114, 32, 119, 105, 116, 104, 111, 117, 116, 10, 104, 97, 118, 105, 110, 103, 32, 116, 111, 32, 115, 111, 114, 116, 32, 116, 104, 101, 32, 108, 105, 115, 116, 32, 97, 102, 116, 101, 114, 32, 101, 97, 99, 104, 32, 105, 110, 115, 101, 114, 116, 105, 111, 110, 46, 32, 70, 111, 114, 32, 108, 111, 110, 103, 32, 108, 105, 115, 116, 115, 32, 111, 102, 32, 105, 116, 101, 109, 115, 32, 119, 105, 116, 104, 10, 101, 120, 112, 101, 110, 115, 105, 118, 101, 32, 99, 111, 109, 112, 97, 114, 105, 115, 111, 110, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 44, 32, 116, 104, 105, 115, 32, 99, 97, 110, 32, 98, 101, 32, 97, 110, 32, 105, 109, 112, 114, 111, 118, 101, 109, 101, 110, 116, 32, 111, 118, 101, 114, 32, 116, 104, 101, 32, 109, 111, 114, 101, 10, 99, 111, 109, 109, 111, 110, 32, 97, 112, 112, 114, 111, 97, 99, 104, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 95, 98, 105, 115, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_keywords_8302] = __str2;
    HEAP[_keywords_8302 + 4] = __str3;
    HEAP[_keywords_8302 + 8] = __str4;
    HEAP[_keywords_8302 + 12] = __str5;
    HEAP[_keywords_8328] = __str2;
    HEAP[_keywords_8328 + 4] = __str3;
    HEAP[_keywords_8328 + 8] = __str4;
    HEAP[_keywords_8328 + 12] = __str5;
    HEAP[_keywords_8415] = __str2;
    HEAP[_keywords_8415 + 4] = __str3;
    HEAP[_keywords_8415 + 8] = __str4;
    HEAP[_keywords_8415 + 12] = __str5;
    HEAP[_keywords_8441] = __str2;
    HEAP[_keywords_8441 + 4] = __str3;
    HEAP[_keywords_8441 + 8] = __str4;
    HEAP[_keywords_8441 + 12] = __str5;
    HEAP[_bisect_methods] = __str12;
    HEAP[_bisect_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_bisect_methods + 12] = _bisect_right_doc;
    HEAP[_bisect_methods + 16] = __str13;
    HEAP[_bisect_methods + 20] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_bisect_methods + 28] = _bisect_doc;
    HEAP[_bisect_methods + 32] = __str14;
    HEAP[_bisect_methods + 36] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_bisect_methods + 44] = _insort_right_doc;
    HEAP[_bisect_methods + 48] = __str15;
    HEAP[_bisect_methods + 52] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_bisect_methods + 60] = _insort_doc;
    HEAP[_bisect_methods + 64] = __str16;
    HEAP[_bisect_methods + 68] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_bisect_methods + 76] = _bisect_left_doc;
    HEAP[_bisect_methods + 80] = __str17;
    HEAP[_bisect_methods + 84] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_bisect_methods + 92] = _insort_left_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
