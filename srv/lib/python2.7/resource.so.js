"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  var $0___SIZE = 136;
  var $1___SIZE = 8;
  var $2___SIZE = 80;
  var $3___SIZE = 16;
  var $4___SIZE = 16;
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
  var $struct_PyStructSequence___SIZE = 16;
  var $struct_PyStructSequence_Desc___SIZE = 16;
  var $struct_PyStructSequence_Field___SIZE = 8;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_rlimit___SIZE = 16;
  var $struct_rusage___SIZE = 72;
  var $struct_rusage___FLATTENER = [ 0, 8, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68 ];
  var $struct_timeval___SIZE = 8;
  var _struct_rusage__doc__;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var __str21;
  var __str22;
  var __str23;
  var __str24;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var __str30;
  var __str31;
  var _struct_rusage_fields;
  var _struct_rusage_desc;
  var __str32;
  var __str33;
  var __str34;
  var _ResourceError;
  var _StructRUsageType;
  var __str35;
  var __str36;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var __str41;
  var __str42;
  var __str43;
  var __str44;
  var __str45;
  var _resource_methods;
  var __str46;
  var __str47;
  var __str48;
  var _initialized;
  var __str49;
  var __str50;
  var __str51;
  var __str52;
  var __str53;
  var __str54;
  var __str55;
  var __str56;
  var __str57;
  var __str58;
  var __str59;
  var __str60;
  var __str61;
  var __str62;
  var __str63;
  function _resource_getrusage($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 96;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 96);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $who = __stackBase__ + 16;
      var $ru = __stackBase__ + 20;
      var $result = __stackBase__ + 92;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str33, allocate([ $who, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$who];
      var $5 = _getrusage($4, $ru);
      var $6 = $5 == -1;
      if ($6) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $7 = ___errno_location();
      
      
      if (HEAP[$7] == 22) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($10, __str34);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 5:
      var $11 = HEAP[_ResourceError];
      var $12 = _PyErr_SetFromErrno($11);
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 6:
      var $13 = _PyStructSequence_New(_StructRUsageType);
      HEAP[$result] = $13;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 8:
      
      var $17 = HEAP[$result];
      
      
      
      
      
      
      
      
      
      var $27 = HEAP[$ru] + HEAP[$ru + 4] * 1e-6;
      var $28 = _PyFloat_FromDouble($27);
      
      var $30 = $17 + 12;
      HEAP[$30] = $28;
      
      var $32 = HEAP[$result];
      
      
      
      
      
      
      
      
      
      var $42 = HEAP[$ru + 8] + HEAP[$ru + 8 + 4] * 1e-6;
      var $43 = _PyFloat_FromDouble($42);
      
      var $45 = $32 + 12 + 4;
      HEAP[$45] = $43;
      
      var $47 = HEAP[$result];
      
      var $49 = HEAP[$ru + 16];
      var $50 = _PyInt_FromLong($49);
      
      var $52 = $47 + 12 + 8;
      HEAP[$52] = $50;
      
      var $54 = HEAP[$result];
      
      var $56 = HEAP[$ru + 20];
      var $57 = _PyInt_FromLong($56);
      
      var $59 = $54 + 12 + 12;
      HEAP[$59] = $57;
      
      var $61 = HEAP[$result];
      
      var $63 = HEAP[$ru + 24];
      var $64 = _PyInt_FromLong($63);
      
      var $66 = $61 + 12 + 16;
      HEAP[$66] = $64;
      
      var $68 = HEAP[$result];
      
      var $70 = HEAP[$ru + 28];
      var $71 = _PyInt_FromLong($70);
      
      var $73 = $68 + 12 + 20;
      HEAP[$73] = $71;
      
      var $75 = HEAP[$result];
      
      var $77 = HEAP[$ru + 32];
      var $78 = _PyInt_FromLong($77);
      
      var $80 = $75 + 12 + 24;
      HEAP[$80] = $78;
      
      var $82 = HEAP[$result];
      
      var $84 = HEAP[$ru + 36];
      var $85 = _PyInt_FromLong($84);
      
      var $87 = $82 + 12 + 28;
      HEAP[$87] = $85;
      
      var $89 = HEAP[$result];
      
      var $91 = HEAP[$ru + 40];
      var $92 = _PyInt_FromLong($91);
      
      var $94 = $89 + 12 + 32;
      HEAP[$94] = $92;
      
      var $96 = HEAP[$result];
      
      var $98 = HEAP[$ru + 44];
      var $99 = _PyInt_FromLong($98);
      
      var $101 = $96 + 12 + 36;
      HEAP[$101] = $99;
      
      var $103 = HEAP[$result];
      
      var $105 = HEAP[$ru + 48];
      var $106 = _PyInt_FromLong($105);
      
      var $108 = $103 + 12 + 40;
      HEAP[$108] = $106;
      
      var $110 = HEAP[$result];
      
      var $112 = HEAP[$ru + 52];
      var $113 = _PyInt_FromLong($112);
      
      var $115 = $110 + 12 + 44;
      HEAP[$115] = $113;
      
      var $117 = HEAP[$result];
      
      var $119 = HEAP[$ru + 56];
      var $120 = _PyInt_FromLong($119);
      
      var $122 = $117 + 12 + 48;
      HEAP[$122] = $120;
      
      var $124 = HEAP[$result];
      
      var $126 = HEAP[$ru + 60];
      var $127 = _PyInt_FromLong($126);
      
      var $129 = $124 + 12 + 52;
      HEAP[$129] = $127;
      
      var $131 = HEAP[$result];
      
      var $133 = HEAP[$ru + 64];
      var $134 = _PyInt_FromLong($133);
      
      var $136 = $131 + 12 + 56;
      HEAP[$136] = $134;
      
      var $138 = HEAP[$result];
      
      var $140 = HEAP[$ru + 68];
      var $141 = _PyInt_FromLong($140);
      
      var $143 = $138 + 12 + 60;
      HEAP[$143] = $141;
      var $144 = _PyErr_Occurred();
      
      if ($144 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      
      var $149 = HEAP[HEAP[$result]] - 1;
      
      var $151 = HEAP[$result];
      HEAP[$151] = $149;
      
      
      
      
      if (HEAP[HEAP[$result]] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $160 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $161 = HEAP[$result];
      FUNCTION_TABLE[$160]($161);
      __label__ = 11;
      break;
     case 11:
      HEAP[$0] = 0;
      __label__ = 13;
      break;
     case 12:
      var $162 = HEAP[$result];
      HEAP[$0] = $162;
      __label__ = 13;
      break;
     case 13:
      var $163 = HEAP[$0];
      HEAP[$retval] = $163;
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
  function _resource_getrlimit($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $rl = __stackBase__ + 16;
      var $resource = __stackBase__ + 32;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str35, allocate([ $resource, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 2:
      
      
      if (HEAP[$resource] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$resource] > 14) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $8 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($8, __str36);
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 5:
      var $9 = HEAP[$resource];
      var $10 = ___01getrlimit64_($9, $rl);
      var $11 = $10 == -1;
      if ($11) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $12 = HEAP[_ResourceError];
      var $13 = _PyErr_SetFromErrno($12);
      HEAP[$0] = 0;
      __label__ = 8;
      break;
     case 7:
      
      var $15 = HEAP[$rl + 8];
      
      var $17 = HEAP[$rl];
      var $18 = _Py_BuildValue(__str37, allocate([ $17, 0, 0, 0, 0, 0, 0, 0, $15, 0, 0, 0, 0, 0, 0, 0 ], [ "i64", 0, 0, 0, 0, 0, 0, 0, "i64", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $18;
      __label__ = 8;
      break;
     case 8:
      var $19 = HEAP[$0];
      HEAP[$retval] = $19;
      __label__ = 9;
      break;
     case 9:
      var $retval8 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _resource_setrlimit($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $args_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $iftmp_32 = __stackBase__ + 12;
      var $iftmp_28 = __stackBase__ + 20;
      var $0 = __stackBase__ + 28;
      var $rl = __stackBase__ + 32;
      var $resource = __stackBase__ + 48;
      var $curobj = __stackBase__ + 52;
      var $maxobj = __stackBase__ + 56;
      
      HEAP[__stackBase__] = $self;
      HEAP[$args_addr] = $args;
      var $1 = HEAP[$args_addr];
      var $2 = _PyArg_ParseTuple($1, __str38, allocate([ $resource, 0, 0, 0, $curobj, 0, 0, 0, $maxobj, 0, 0, 0 ], [ "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 2:
      
      
      if (HEAP[$resource] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$resource] > 14) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $8 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($8, __str36);
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$curobj] + 4] + 84] & 16777216) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $16 = HEAP[$curobj];
      var $17 = _PyLong_AsLongLong($16);
      HEAP[$iftmp_28] = $17;
      __label__ = 8;
      break;
     case 7:
      var $18 = HEAP[$curobj];
      var $19 = _PyInt_AsLong($18);
      var $20 = $19;
      HEAP[$iftmp_28] = $20;
      __label__ = 8;
      break;
     case 8:
      
      var $22 = HEAP[$iftmp_28];
      HEAP[$rl] = $22;
      
      
      var $25 = HEAP[$rl] == -1;
      if ($25) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      var $26 = _PyErr_Occurred();
      
      if ($26 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$maxobj] + 4] + 84] & 16777216) != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $35 = HEAP[$maxobj];
      var $36 = _PyLong_AsLongLong($35);
      HEAP[$iftmp_32] = $36;
      __label__ = 14;
      break;
     case 13:
      var $37 = HEAP[$maxobj];
      var $38 = _PyInt_AsLong($37);
      var $39 = $38;
      HEAP[$iftmp_32] = $39;
      __label__ = 14;
      break;
     case 14:
      
      var $41 = HEAP[$iftmp_32];
      HEAP[$rl + 8] = $41;
      
      
      var $44 = HEAP[$rl + 8] == -1;
      if ($44) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      var $45 = _PyErr_Occurred();
      
      if ($45 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 17:
      
      var $48 = HEAP[$rl];
      
      HEAP[$rl] = $48;
      
      var $51 = HEAP[$rl + 8];
      
      HEAP[$rl + 8] = $51;
      var $53 = HEAP[$resource];
      var $54 = ___01setrlimit64_($53, $rl);
      var $55 = $54 == -1;
      if ($55) {
        __label__ = 18;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 18:
      var $56 = ___errno_location();
      
      
      if (HEAP[$56] == 22) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $59 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($59, __str39);
      __label__ = 23;
      break;
     case 20:
      var $60 = ___errno_location();
      
      
      if (HEAP[$60] == 1) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $63 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($63, __str40);
      __label__ = 23;
      break;
     case 22:
      var $64 = HEAP[_ResourceError];
      var $65 = _PyErr_SetFromErrno($64);
      __label__ = 23;
      break;
     case 23:
      HEAP[$0] = 0;
      __label__ = 25;
      break;
     case 24:
      
      var $67 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $67;
      HEAP[$0] = __Py_NoneStruct;
      __label__ = 25;
      break;
     case 25:
      var $68 = HEAP[$0];
      HEAP[$retval] = $68;
      __label__ = 26;
      break;
     case 26:
      var $retval25 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _resource_getpagesize($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      
      var $unused_addr = __stackBase__ + 4;
      var $retval = __stackBase__ + 8;
      var $0 = __stackBase__ + 12;
      var $pagesize = __stackBase__ + 16;
      
      HEAP[__stackBase__] = $self;
      HEAP[$unused_addr] = $unused;
      HEAP[$pagesize] = 0;
      var $1 = _getpagesize();
      HEAP[$pagesize] = $1;
      var $2 = HEAP[$pagesize];
      var $3 = _Py_BuildValue(__str41, allocate([ $2, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      HEAP[$0] = $3;
      var $4 = HEAP[$0];
      HEAP[$retval] = $4;
      __label__ = 1;
      break;
     case 1:
      var $retval1 = HEAP[$retval];
      STACKTOP = __stackBase__;
      return $retval1;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initresource() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    assert(STACKTOP < STACK_MAX);
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m = __stackBase__;
      var $v = __stackBase__ + 4;
      
      var $0 = _Py_InitModule4(__str46, _resource_methods, 0, 0, 1013);
      HEAP[$m] = $0;
      
      
      if (HEAP[$m] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[_ResourceError] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $5 = _PyErr_NewException(__str47, 0, 0);
      HEAP[_ResourceError] = $5;
      __label__ = 3;
      break;
     case 3:
      
      
      
      var $9 = HEAP[HEAP[_ResourceError]] + 1;
      var $10 = HEAP[_ResourceError];
      HEAP[$10] = $9;
      var $11 = HEAP[_ResourceError];
      var $12 = HEAP[$m];
      var $13 = _PyModule_AddObject($12, __str48, $11);
      
      
      if (HEAP[_initialized] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      _PyStructSequence_InitType(_StructRUsageType, _struct_rusage_desc);
      __label__ = 5;
      break;
     case 5:
      
      
      var $18 = HEAP[_StructRUsageType] + 1;
      
      HEAP[_StructRUsageType] = $18;
      var $20 = HEAP[$m];
      var $21 = _PyModule_AddObject($20, __str49, _StructRUsageType);
      var $22 = HEAP[$m];
      var $23 = _PyModule_AddIntConstant($22, __str50, 0);
      var $24 = HEAP[$m];
      var $25 = _PyModule_AddIntConstant($24, __str51, 1);
      var $26 = HEAP[$m];
      var $27 = _PyModule_AddIntConstant($26, __str52, 2);
      var $28 = HEAP[$m];
      var $29 = _PyModule_AddIntConstant($28, __str53, 3);
      var $30 = HEAP[$m];
      var $31 = _PyModule_AddIntConstant($30, __str54, 4);
      var $32 = HEAP[$m];
      var $33 = _PyModule_AddIntConstant($32, __str55, 7);
      var $34 = HEAP[$m];
      var $35 = _PyModule_AddIntConstant($34, __str56, 7);
      var $36 = HEAP[$m];
      var $37 = _PyModule_AddIntConstant($36, __str57, 9);
      var $38 = HEAP[$m];
      var $39 = _PyModule_AddIntConstant($38, __str58, 5);
      var $40 = HEAP[$m];
      var $41 = _PyModule_AddIntConstant($40, __str59, 6);
      var $42 = HEAP[$m];
      var $43 = _PyModule_AddIntConstant($42, __str60, 8);
      var $44 = HEAP[$m];
      var $45 = _PyModule_AddIntConstant($44, __str61, 0);
      var $46 = HEAP[$m];
      var $47 = _PyModule_AddIntConstant($46, __str62, -1);
      var $48 = _PyLong_FromLongLong(-1);
      HEAP[$v] = $48;
      
      
      if (HEAP[$v] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $51 = HEAP[$m];
      var $52 = HEAP[$v];
      var $53 = _PyModule_AddObject($51, __str63, $52);
      __label__ = 7;
      break;
     case 7:
      HEAP[_initialized] = 1;
      __label__ = 8;
      break;
     case 8:
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initresource"] = _initresource;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _resource_getrusage, 0, _resource_getrlimit, 0, _resource_setrlimit, 0, _resource_getpagesize, 0 ]);
  function run(args) {
    _struct_rusage__doc__ = allocate([ 115, 116, 114, 117, 99, 116, 95, 114, 117, 115, 97, 103, 101, 58, 32, 82, 101, 115, 117, 108, 116, 32, 102, 114, 111, 109, 32, 103, 101, 116, 114, 117, 115, 97, 103, 101, 46, 10, 10, 84, 104, 105, 115, 32, 111, 98, 106, 101, 99, 116, 32, 109, 97, 121, 32, 98, 101, 32, 97, 99, 99, 101, 115, 115, 101, 100, 32, 101, 105, 116, 104, 101, 114, 32, 97, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 111, 102, 10, 32, 32, 32, 32, 40, 117, 116, 105, 109, 101, 44, 115, 116, 105, 109, 101, 44, 109, 97, 120, 114, 115, 115, 44, 105, 120, 114, 115, 115, 44, 105, 100, 114, 115, 115, 44, 105, 115, 114, 115, 115, 44, 109, 105, 110, 102, 108, 116, 44, 109, 97, 106, 102, 108, 116, 44, 10, 32, 32, 32, 32, 110, 115, 119, 97, 112, 44, 105, 110, 98, 108, 111, 99, 107, 44, 111, 117, 98, 108, 111, 99, 107, 44, 109, 115, 103, 115, 110, 100, 44, 109, 115, 103, 114, 99, 118, 44, 110, 115, 105, 103, 110, 97, 108, 115, 44, 110, 118, 99, 115, 119, 44, 110, 105, 118, 99, 115, 119, 41, 10, 111, 114, 32, 118, 105, 97, 32, 116, 104, 101, 32, 97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 32, 114, 117, 95, 117, 116, 105, 109, 101, 44, 32, 114, 117, 95, 115, 116, 105, 109, 101, 44, 32, 114, 117, 95, 109, 97, 120, 114, 115, 115, 44, 32, 97, 110, 100, 32, 115, 111, 32, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 114, 117, 95, 117, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 117, 115, 101, 114, 32, 116, 105, 109, 101, 32, 117, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 114, 117, 95, 115, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 115, 121, 115, 116, 101, 109, 32, 116, 105, 109, 101, 32, 117, 115, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 114, 117, 95, 109, 97, 120, 114, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 109, 97, 120, 46, 32, 114, 101, 115, 105, 100, 101, 110, 116, 32, 115, 101, 116, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 114, 117, 95, 105, 120, 114, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 115, 104, 97, 114, 101, 100, 32, 109, 101, 109, 111, 114, 121, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 114, 117, 95, 105, 100, 114, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 117, 110, 115, 104, 97, 114, 101, 100, 32, 100, 97, 116, 97, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 114, 117, 95, 105, 115, 114, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 117, 110, 115, 104, 97, 114, 101, 100, 32, 115, 116, 97, 99, 107, 32, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 114, 117, 95, 109, 105, 110, 102, 108, 116, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 112, 97, 103, 101, 32, 102, 97, 117, 108, 116, 115, 32, 110, 111, 116, 32, 114, 101, 113, 117, 105, 114, 105, 110, 103, 32, 73, 47, 79, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 114, 117, 95, 109, 97, 106, 102, 108, 116, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 112, 97, 103, 101, 32, 102, 97, 117, 108, 116, 115, 32, 114, 101, 113, 117, 105, 114, 105, 110, 103, 32, 73, 47, 79, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 114, 117, 95, 110, 115, 119, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 115, 119, 97, 112, 32, 111, 117, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 114, 117, 95, 105, 110, 98, 108, 111, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 98, 108, 111, 99, 107, 32, 105, 110, 112, 117, 116, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 114, 117, 95, 111, 117, 98, 108, 111, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 98, 108, 111, 99, 107, 32, 111, 117, 116, 112, 117, 116, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 114, 117, 95, 109, 115, 103, 115, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 73, 80, 67, 32, 109, 101, 115, 115, 97, 103, 101, 115, 32, 115, 101, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 114, 117, 95, 109, 115, 103, 114, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 73, 80, 67, 32, 109, 101, 115, 115, 97, 103, 101, 115, 32, 114, 101, 99, 101, 105, 118, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 114, 117, 95, 110, 115, 105, 103, 110, 97, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 115, 105, 103, 110, 97, 108, 115, 32, 114, 101, 99, 101, 105, 118, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 114, 117, 95, 110, 118, 99, 115, 119, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 118, 111, 108, 117, 110, 116, 97, 114, 121, 32, 99, 111, 110, 116, 101, 120, 116, 32, 115, 119, 105, 116, 99, 104, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 114, 117, 95, 110, 105, 118, 99, 115, 119, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 105, 110, 118, 111, 108, 117, 110, 116, 97, 114, 121, 32, 99, 111, 110, 116, 101, 120, 116, 32, 115, 119, 105, 116, 99, 104, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _struct_rusage_fields = allocate(136, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _struct_rusage_desc = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyStructSequence_Field*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str32 = allocate([ 114, 101, 115, 111, 117, 114, 99, 101, 46, 115, 116, 114, 117, 99, 116, 95, 114, 117, 115, 97, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 105, 58, 103, 101, 116, 114, 117, 115, 97, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 119, 104, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    _ResourceError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _StructRUsageType = allocate(196, [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str35 = allocate([ 105, 58, 103, 101, 116, 114, 108, 105, 109, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 114, 101, 115, 111, 117, 114, 99, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 76, 76, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 105, 40, 79, 79, 41, 58, 115, 101, 116, 114, 108, 105, 109, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 99, 117, 114, 114, 101, 110, 116, 32, 108, 105, 109, 105, 116, 32, 101, 120, 99, 101, 101, 100, 115, 32, 109, 97, 120, 105, 109, 117, 109, 32, 108, 105, 109, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 110, 111, 116, 32, 97, 108, 108, 111, 119, 101, 100, 32, 116, 111, 32, 114, 97, 105, 115, 101, 32, 109, 97, 120, 105, 109, 117, 109, 32, 108, 105, 109, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 105, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 103, 101, 116, 114, 117, 115, 97, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 103, 101, 116, 114, 108, 105, 109, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 115, 101, 116, 114, 108, 105, 109, 105, 116, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 103, 101, 116, 112, 97, 103, 101, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    _resource_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str46 = allocate([ 114, 101, 115, 111, 117, 114, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 114, 101, 115, 111, 117, 114, 99, 101, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _initialized = allocate(1, "i32", ALLOC_NORMAL);
    __str49 = allocate([ 115, 116, 114, 117, 99, 116, 95, 114, 117, 115, 97, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 82, 76, 73, 77, 73, 84, 95, 67, 80, 85, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 82, 76, 73, 77, 73, 84, 95, 70, 83, 73, 90, 69, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 82, 76, 73, 77, 73, 84, 95, 68, 65, 84, 65, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 82, 76, 73, 77, 73, 84, 95, 83, 84, 65, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 82, 76, 73, 77, 73, 84, 95, 67, 79, 82, 69, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 82, 76, 73, 77, 73, 84, 95, 78, 79, 70, 73, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 82, 76, 73, 77, 73, 84, 95, 79, 70, 73, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 82, 76, 73, 77, 73, 84, 95, 65, 83, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 82, 76, 73, 77, 73, 84, 95, 82, 83, 83, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 82, 76, 73, 77, 73, 84, 95, 78, 80, 82, 79, 67, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 82, 76, 73, 77, 73, 84, 95, 77, 69, 77, 76, 79, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 82, 85, 83, 65, 71, 69, 95, 83, 69, 76, 70, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 82, 85, 83, 65, 71, 69, 95, 67, 72, 73, 76, 68, 82, 69, 78, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 82, 76, 73, 77, 95, 73, 78, 70, 73, 78, 73, 84, 89, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_struct_rusage_fields] = __str;
    HEAP[_struct_rusage_fields + 4] = __str1;
    HEAP[_struct_rusage_fields + 8] = __str2;
    HEAP[_struct_rusage_fields + 12] = __str3;
    HEAP[_struct_rusage_fields + 16] = __str4;
    HEAP[_struct_rusage_fields + 20] = __str5;
    HEAP[_struct_rusage_fields + 24] = __str6;
    HEAP[_struct_rusage_fields + 28] = __str7;
    HEAP[_struct_rusage_fields + 32] = __str8;
    HEAP[_struct_rusage_fields + 36] = __str9;
    HEAP[_struct_rusage_fields + 40] = __str10;
    HEAP[_struct_rusage_fields + 44] = __str11;
    HEAP[_struct_rusage_fields + 48] = __str12;
    HEAP[_struct_rusage_fields + 52] = __str13;
    HEAP[_struct_rusage_fields + 56] = __str14;
    HEAP[_struct_rusage_fields + 60] = __str15;
    HEAP[_struct_rusage_fields + 64] = __str16;
    HEAP[_struct_rusage_fields + 68] = __str17;
    HEAP[_struct_rusage_fields + 72] = __str18;
    HEAP[_struct_rusage_fields + 76] = __str19;
    HEAP[_struct_rusage_fields + 80] = __str20;
    HEAP[_struct_rusage_fields + 84] = __str21;
    HEAP[_struct_rusage_fields + 88] = __str22;
    HEAP[_struct_rusage_fields + 92] = __str23;
    HEAP[_struct_rusage_fields + 96] = __str24;
    HEAP[_struct_rusage_fields + 100] = __str25;
    HEAP[_struct_rusage_fields + 104] = __str26;
    HEAP[_struct_rusage_fields + 108] = __str27;
    HEAP[_struct_rusage_fields + 112] = __str28;
    HEAP[_struct_rusage_fields + 116] = __str29;
    HEAP[_struct_rusage_fields + 120] = __str30;
    HEAP[_struct_rusage_fields + 124] = __str31;
    HEAP[_struct_rusage_desc] = __str32;
    HEAP[_struct_rusage_desc + 4] = _struct_rusage__doc__;
    HEAP[_struct_rusage_desc + 8] = _struct_rusage_fields;
    HEAP[_resource_methods] = __str42;
    HEAP[_resource_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_resource_methods + 16] = __str43;
    HEAP[_resource_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_resource_methods + 32] = __str44;
    HEAP[_resource_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_resource_methods + 48] = __str45;
    HEAP[_resource_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
