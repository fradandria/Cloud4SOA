(function(){
var $gwt_version = "2.1.1";
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $strongName = '79AA88BE45149283CA0E8A068DB7C200';
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
$stats && $stats({moduleName:'monitoringgadget',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});
var $intern_3 = '', $intern_1 = '\n', $intern_83 = ' ', $intern_53 = ' must be non-negative: ', $intern_61 = '&nbsp;', $intern_55 = ', Column size: ', $intern_57 = ', Row size: ', $intern_87 = ', Size: ', $intern_77 = '0', $intern_84 = ':', $intern_85 = 'Add not supported on this collection', $intern_88 = 'Add not supported on this list', $intern_81 = 'Application 1', $intern_82 = 'Application 2', $intern_46 = 'BUTTON', $intern_58 = 'Cannot access a column with a negative index: ', $intern_5 = 'Cannot add a handler with a null type', $intern_6 = 'Cannot add a null handler', $intern_7 = 'Cannot fire null event', $intern_42 = 'Cannot set a new parent without first clearing the old parent', $intern_52 = 'Column ', $intern_54 = 'Column index: ', $intern_51 = 'Composite.initWidget() may only be called once.', $intern_13 = 'DEFAULT', $intern_35 = 'DOMMouseScroll', $intern_80 = 'Deployed Applications:', $intern_86 = 'Index: ', $intern_12 = 'LTR', $intern_11 = 'RTL', $intern_56 = 'Row index: ', $intern_59 = 'Row index: 0, Row size: ', $intern_39 = "Should only call onAttach when the widget is detached from the browser's document", $intern_40 = "Should only call onDetach when the widget is attached to the browser's document", $intern_41 = "This widget's parent does not implement HasWidgets", $intern_50 = 'Undeploy', $intern_38 = '__uiObjectID', $intern_74 = 'align', $intern_0 = 'anonymous', $intern_18 = 'blur', $intern_70 = 'bottom', $intern_47 = 'button', $intern_78 = 'cellPadding', $intern_76 = 'cellSpacing', $intern_67 = 'center', $intern_19 = 'change', $intern_48 = 'className', $intern_4 = 'click', $intern_66 = 'col', $intern_65 = 'colgroup', $intern_36 = 'contextmenu', $intern_20 = 'dblclick', $intern_79 = 'deployed-application', $intern_8 = 'dir', $intern_72 = 'div', $intern_33 = 'error', $intern_17 = 'eu.cloud4soa.ui.samples.google.gadgets.client.MonitoringGadget', $intern_21 = 'focus', $intern_2 = 'function ', $intern_49 = 'gwt-Button', $intern_73 = 'gwt-Label', $intern_68 = 'justify', $intern_22 = 'keydown', $intern_23 = 'keypress', $intern_24 = 'keyup', $intern_43 = 'left', $intern_25 = 'load', $intern_26 = 'losecapture', $intern_10 = 'ltr', $intern_71 = 'middle', $intern_15 = 'moduleStartup', $intern_27 = 'mousedown', $intern_28 = 'mousemove', $intern_29 = 'mouseout', $intern_30 = 'mouseover', $intern_31 = 'mouseup', $intern_34 = 'mousewheel', $intern_16 = 'onModuleLoadStart', $intern_37 = 'paste', $intern_45 = 'position', $intern_69 = 'right', $intern_9 = 'rtl', $intern_32 = 'scroll', $intern_14 = 'startup', $intern_62 = 'table', $intern_63 = 'tbody', $intern_60 = 'td', $intern_44 = 'top', $intern_64 = 'tr', $intern_75 = 'verticalAlign';
var _;
function nullMethod(){
}

function java_lang_Object(){
}

_ = java_lang_Object.prototype = {};
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Object_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.hashCode__I$ = function java_lang_Object_hashCode__I(){
  return this.$H || (this.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}
;
_.java_lang_Object_typeMarker$ = nullMethod;
_.java_lang_Object_castableTypeMap$ = {};
function java_lang_Throwable_$setStackTrace__Ljava_lang_Throwable_2_3Ljava_lang_StackTraceElement_2V(stackTrace){
  var c, copy, i;
  copy = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1StackTraceElement_12_1classLit, {22:1}, 25, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (!stackTrace[i]) {
      throw new java_lang_NullPointerException_NullPointerException__V;
    }
    copy[i] = stackTrace[i];
  }
}

function java_lang_Throwable(){
}

_ = java_lang_Throwable.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {7:1, 22:1};
function java_lang_Exception(){
}

_ = java_lang_Exception.prototype = new java_lang_Throwable;
_.java_lang_Object_castableTypeMap$ = {7:1, 22:1};
function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V(){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function java_lang_RuntimeException(){
}

_ = java_lang_RuntimeException.prototype = new java_lang_Exception;
_.java_lang_Object_castableTypeMap$ = {2:1, 7:1, 22:1};
function com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  this.com_google_gwt_core_client_JavaScriptException_e = e;
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$createStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JavaScriptException_2V(this);
}

function com_google_gwt_core_client_JavaScriptException(){
}

_ = com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V.prototype = com_google_gwt_core_client_JavaScriptException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_castableTypeMap$ = {2:1, 7:1, 22:1};
_.com_google_gwt_core_client_JavaScriptException_e = null;
function com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static, other){
  return this$static.java_lang_Object_typeMarker$ == nullMethod || this$static.java_lang_Object_castableTypeMap$ && !!this$static.java_lang_Object_castableTypeMap$[1]?this$static.equals__Ljava_lang_Object_2Z$(other):this$static === other;
}

function com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(this$static){
  return this$static.java_lang_Object_typeMarker$ == nullMethod || this$static.java_lang_Object_castableTypeMap$ && !!this$static.java_lang_Object_castableTypeMap$[1]?this$static.hashCode__I$():this$static.$H || (this$static.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}

function com_google_gwt_core_client_Scheduler(){
}

_ = com_google_gwt_core_client_Scheduler.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
function com_google_gwt_core_client_impl_Impl_enter__Z(){
  if (com_google_gwt_core_client_impl_Impl_entryDepth++ == 0) {
    com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
    return true;
  }
  return false;
}

function com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(jsFunction){
  return function(){
    try {
      return com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
    }
     catch (e) {
      throw e;
    }
  }
  ;
}

function com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, arguments){
  var initialEntry;
  initialEntry = com_google_gwt_core_client_impl_Impl_enter__Z();
  try {
    return jsFunction.apply(thisObj, arguments);
  }
   finally {
    initialEntry && com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
    --com_google_gwt_core_client_impl_Impl_entryDepth;
  }
}

var com_google_gwt_core_client_impl_Impl_entryDepth = 0, com_google_gwt_core_client_impl_Impl_sNextHashId = 0;
function com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V(){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V = nullMethod;
  com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE = new com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V(){
}

function com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks, rescheduled){
  var $e0, i, j, t;
  for (i = 0 , j = tasks.length; i < j; ++i) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(rescheduled, t)):(com_google_gwt_event_shared_SimpleEventBus_$doAddNow__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2Lcom_google_gwt_event_shared_EventHandler_2V(t[0].com_google_gwt_event_shared_SimpleEventBus$2_this$0, t[0].com_google_gwt_event_shared_SimpleEventBus$2_val$type, t[0].com_google_gwt_event_shared_SimpleEventBus$2_val$handler) , undefined);
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, 2))
        throw $e0;
    }
  }
  return rescheduled;
}

function com_google_gwt_core_client_impl_SchedulerImpl(){
}

_ = com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V.prototype = com_google_gwt_core_client_impl_SchedulerImpl.prototype = new com_google_gwt_core_client_Scheduler;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = null;
_.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = null;
var com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE;
function com_google_gwt_core_client_impl_StackTraceCreator_splice__Lcom_google_gwt_core_client_JsArrayString_2ILcom_google_gwt_core_client_JsArrayString_2(arr, length){
  arr.length >= length && arr.splice(0, length);
  return arr;
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_$createStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JavaScriptException_2V(e){
  var i, j, stack, stackTrace;
  stack = com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_$inferFrom__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(e.com_google_gwt_core_client_JavaScriptException_e)?com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(e.com_google_gwt_core_client_JavaScriptException_e):null);
  stackTrace = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1StackTraceElement_12_1classLit, {22:1}, 25, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = new java_lang_StackTraceElement_StackTraceElement__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2IV(stack[i]);
  }
  java_lang_Throwable_$setStackTrace__Ljava_lang_Throwable_2_3Ljava_lang_StackTraceElement_2V(stackTrace);
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V(){
  var i, j, stack, stackTrace;
  stack = com_google_gwt_core_client_impl_StackTraceCreator_splice__Lcom_google_gwt_core_client_JsArrayString_2ILcom_google_gwt_core_client_JsArrayString_2(com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_$inferFrom__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(com_google_gwt_core_client_impl_StackTraceCreator$Collector_$makeException__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JavaScriptObject_2()), 3);
  stackTrace = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1StackTraceElement_12_1classLit, {22:1}, 25, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = new java_lang_StackTraceElement_StackTraceElement__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2IV(stack[i]);
  }
  java_lang_Throwable_$setStackTrace__Ljava_lang_Throwable_2_3Ljava_lang_StackTraceElement_2V(stackTrace);
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_$makeException__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JavaScriptObject_2(){
  try {
    null.a();
  }
   catch (e) {
    return e;
  }
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_$inferFrom__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(e){
  var i, j, stack;
  stack = com_google_gwt_core_client_impl_StackTraceCreator$CollectorOpera_$getStack__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorOpera_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(e);
  for (i = 0 , j = stack.length; i < j; ++i) {
    stack[i] = stack[i].length == 0?$intern_0:stack[i];
  }
  return stack;
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorOpera_$getStack__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorOpera_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(e){
  var i, i2, idx, j, toReturn;
  toReturn = e && e.message?e.message.split($intern_1):[];
  for (i = 0 , i2 = 0 , j = toReturn.length; i2 < j; ++i , i2 += 2) {
    idx = toReturn[i2].lastIndexOf($intern_2);
    idx == -1?(toReturn[i] = $intern_3 , undefined):(toReturn[i] = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(toReturn[i2].substr(idx + 9, toReturn[i2].length - (idx + 9))) , undefined);
  }
  toReturn.length = i;
  return toReturn;
}

function com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(node){
  var parent = node.parentNode;
  (!parent || parent.nodeType != 1) && (parent = null);
  return parent;
}

function com_google_gwt_event_shared_GwtEvent(){
}

_ = com_google_gwt_event_shared_GwtEvent.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_event_shared_GwtEvent_dead = false;
_.com_google_gwt_event_shared_GwtEvent_source = null;
function com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (com_google_gwt_event_dom_client_DomEvent_registered) {
    typeKey = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered.com_google_gwt_event_dom_client_PrivateMap_map[nativeEvent.type], 4);
    if (typeKey) {
      currentNative = typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent;
      currentRelativeElem = typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem;
      typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent = nativeEvent;
      typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem = relativeElem;
      com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlerSource, typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight);
      typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent = currentNative;
      typeKey.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem = currentRelativeElem;
    }
  }
}

function com_google_gwt_event_dom_client_DomEvent(){
}

_ = com_google_gwt_event_dom_client_DomEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_dom_client_DomEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE;
}
;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_event_dom_client_DomEvent_nativeEvent = null;
_.com_google_gwt_event_dom_client_DomEvent_relativeElem = null;
var com_google_gwt_event_dom_client_DomEvent_registered = null;
function com_google_gwt_event_dom_client_MouseEvent(){
}

_ = com_google_gwt_event_dom_client_MouseEvent.prototype = new com_google_gwt_event_dom_client_DomEvent;
_.java_lang_Object_castableTypeMap$ = {};
function com_google_gwt_event_dom_client_ClickEvent_$clinit__V(){
  com_google_gwt_event_dom_client_ClickEvent_$clinit__V = nullMethod;
  com_google_gwt_event_dom_client_ClickEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V(new com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V);
}

function com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V(){
}

function com_google_gwt_event_dom_client_ClickEvent(){
}

_ = com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V.prototype = com_google_gwt_event_dom_client_ClickEvent.prototype = new com_google_gwt_event_dom_client_MouseEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_ClickEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(handler, 3).onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(this);
}
;
_.java_lang_Object_castableTypeMap$ = {};
var com_google_gwt_event_dom_client_ClickEvent_TYPE;
function com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V(){
  this.com_google_gwt_event_shared_GwtEvent$Type_index = ++com_google_gwt_event_shared_GwtEvent$Type_nextHashCode;
}

function com_google_gwt_event_shared_GwtEvent$Type(){
}

_ = com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V.prototype = com_google_gwt_event_shared_GwtEvent$Type.prototype = new java_lang_Object;
_.hashCode__I$ = function com_google_gwt_event_shared_GwtEvent$Type_hashCode__I(){
  return this.com_google_gwt_event_shared_GwtEvent$Type_index;
}
;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_event_shared_GwtEvent$Type_index = 0;
var com_google_gwt_event_shared_GwtEvent$Type_nextHashCode = 0;
function com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V(flyweight){
  this.com_google_gwt_event_shared_GwtEvent$Type_index = ++com_google_gwt_event_shared_GwtEvent$Type_nextHashCode;
  this.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = flyweight;
  !com_google_gwt_event_dom_client_DomEvent_registered && (com_google_gwt_event_dom_client_DomEvent_registered = new com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
  com_google_gwt_event_dom_client_DomEvent_registered.com_google_gwt_event_dom_client_PrivateMap_map[$intern_4] = this;
  this.com_google_gwt_event_dom_client_DomEvent$Type_name = $intern_4;
}

function com_google_gwt_event_dom_client_DomEvent$Type(){
}

_ = com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V.prototype = com_google_gwt_event_dom_client_DomEvent$Type.prototype = new com_google_gwt_event_shared_GwtEvent$Type;
_.java_lang_Object_castableTypeMap$ = {4:1};
_.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = null;
_.com_google_gwt_event_dom_client_DomEvent$Type_name = null;
function com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V(){
  this.com_google_gwt_event_dom_client_PrivateMap_map = {};
}

function com_google_gwt_event_dom_client_PrivateMap(){
}

_ = com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V.prototype = com_google_gwt_event_dom_client_PrivateMap.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_event_dom_client_PrivateMap_map = null;
function com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV(){
}

function com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV(source){
  var event;
  if (com_google_gwt_event_logical_shared_CloseEvent_TYPE) {
    event = new com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source, event);
  }
}

function com_google_gwt_event_logical_shared_CloseEvent(){
}

_ = com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV.prototype = com_google_gwt_event_logical_shared_CloseEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_CloseEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(handler, 5);
  com_google_gwt_user_client_ui_RootPanel_detachWidgets__V();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_CloseEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_CloseEvent_TYPE;
}
;
_.java_lang_Object_castableTypeMap$ = {};
var com_google_gwt_event_logical_shared_CloseEvent_TYPE = null;
function com_google_gwt_event_shared_EventBus(){
}

_ = com_google_gwt_event_shared_EventBus.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {18:1};
function com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event){
  var oldSource;
  !event.com_google_gwt_event_shared_GwtEvent_dead || (event.com_google_gwt_event_shared_GwtEvent_dead = false , event.com_google_gwt_event_shared_GwtEvent_source = null);
  oldSource = event.com_google_gwt_event_shared_GwtEvent_source;
  event.com_google_gwt_event_shared_GwtEvent_source = this$static.com_google_gwt_event_shared_HandlerManager_source;
  try {
    com_google_gwt_event_shared_SimpleEventBus_$fireEvent__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, event);
  }
   finally {
    oldSource == null?(event.com_google_gwt_event_shared_GwtEvent_dead = true , event.com_google_gwt_event_shared_GwtEvent_source = null):(event.com_google_gwt_event_shared_GwtEvent_source = oldSource);
  }
}

function com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(source){
  this.com_google_gwt_event_shared_HandlerManager_eventBus = new com_google_gwt_event_shared_SimpleEventBus_SimpleEventBus__ZV;
  this.com_google_gwt_event_shared_HandlerManager_source = source;
}

function com_google_gwt_event_shared_HandlerManager(){
}

_ = com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V.prototype = com_google_gwt_event_shared_HandlerManager.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {18:1};
_.com_google_gwt_event_shared_HandlerManager_eventBus = null;
_.com_google_gwt_event_shared_HandlerManager_source = null;
function com_google_gwt_event_shared_SimpleEventBus_$addHandler__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, type, handler){
  var com_google_gwt_event_shared_SimpleEventBus_$doAddNow__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2Lcom_google_gwt_event_shared_EventHandler_2V_l_0;
  if (!type) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V($intern_5);
  }
  if (!handler) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V($intern_6);
  }
  return this$static.com_google_gwt_event_shared_SimpleEventBus_firingDepth > 0?com_google_gwt_event_shared_SimpleEventBus_$defer__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(this$static, new com_google_gwt_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_gwt_event_shared_SimpleEventBus_2V(this$static, type, handler)):(com_google_gwt_event_shared_SimpleEventBus_$doAddNow__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2Lcom_google_gwt_event_shared_EventHandler_2V_l_0 = com_google_gwt_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type) , com_google_gwt_event_shared_SimpleEventBus_$doAddNow__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2Lcom_google_gwt_event_shared_EventHandler_2V_l_0.add__Ljava_lang_Object_2Z(handler) , undefined) , new com_google_gwt_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_gwt_event_shared_SimpleEventBus_2V;
}

function com_google_gwt_event_shared_SimpleEventBus_$defer__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(this$static, command){
  !this$static.com_google_gwt_event_shared_SimpleEventBus_deferredDeltas && (this$static.com_google_gwt_event_shared_SimpleEventBus_deferredDeltas = new java_util_ArrayList_ArrayList__V);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_event_shared_SimpleEventBus_deferredDeltas, command);
}

function com_google_gwt_event_shared_SimpleEventBus_$doAddNow__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2Lcom_google_gwt_event_shared_EventHandler_2V(this$static, type, handler){
  var l;
  l = com_google_gwt_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type);
  l.add__Ljava_lang_Object_2Z(handler);
}

function com_google_gwt_event_shared_SimpleEventBus_$doFire__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(this$static, event){
  var $e0, causes, e, handler, handlers, it, java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z_old_0;
  try {
    ++this$static.com_google_gwt_event_shared_SimpleEventBus_firingDepth;
    handlers = com_google_gwt_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, event.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2());
    causes = null;
    it = this$static.com_google_gwt_event_shared_SimpleEventBus_isReverseOrder?handlers.listIterator__ILjava_util_ListIterator_2(handlers.size__I()):handlers.listIterator__Ljava_util_ListIterator_2();
    while (this$static.com_google_gwt_event_shared_SimpleEventBus_isReverseOrder?it.java_util_AbstractList$IteratorImpl_i > 0:it.java_util_AbstractList$IteratorImpl_i < it.java_util_AbstractList$IteratorImpl_this$0.size__I()) {
      handler = this$static.com_google_gwt_event_shared_SimpleEventBus_isReverseOrder?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$ListIteratorImpl_$previous__Ljava_util_AbstractList$ListIteratorImpl_2Ljava_lang_Object_2(it), 6):com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(it), 6);
      try {
        event.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler);
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, 7)) {
          e = $e0;
          !causes && (causes = new java_util_HashSet_HashSet__V);
          java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z_old_0 = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(causes.java_util_HashSet_map, e, causes);
        }
         else 
          throw $e0;
      }
    }
    if (causes) {
      throw new com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes);
    }
  }
   finally {
    --this$static.com_google_gwt_event_shared_SimpleEventBus_firingDepth;
    this$static.com_google_gwt_event_shared_SimpleEventBus_firingDepth == 0 && com_google_gwt_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_gwt_event_shared_SimpleEventBus_2V(this$static);
  }
}

function com_google_gwt_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_SimpleEventBus_map, type), 8);
  if (!sourceMap) {
    sourceMap = new java_util_HashMap_HashMap__V;
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_SimpleEventBus_map, type, sourceMap);
  }
  handlers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(sourceMap.java_util_AbstractHashMap_nullSlot, 9);
  if (!handlers) {
    handlers = new java_util_ArrayList_ArrayList__V;
    java_util_AbstractHashMap_$putNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(sourceMap, handlers);
  }
  return handlers;
}

function com_google_gwt_event_shared_SimpleEventBus_$fireEvent__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event){
  if (!event) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V($intern_7);
  }
  com_google_gwt_event_shared_SimpleEventBus_$doFire__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(this$static, event);
}

function com_google_gwt_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_event_shared_SimpleEventBus_map, type), 8);
  if (!sourceMap) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  handlers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(sourceMap.java_util_AbstractHashMap_nullSlot, 9);
  if (!handlers) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  return handlers;
}

function com_google_gwt_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_gwt_event_shared_SimpleEventBus_2V(this$static){
  var c, c$iterator;
  if (this$static.com_google_gwt_event_shared_SimpleEventBus_deferredDeltas) {
    try {
      for (c$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_gwt_event_shared_SimpleEventBus_deferredDeltas); c$iterator.java_util_AbstractList$IteratorImpl_i < c$iterator.java_util_AbstractList$IteratorImpl_this$0.size__I();) {
        c = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(c$iterator), 10);
        com_google_gwt_event_shared_SimpleEventBus_$doAddNow__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2Lcom_google_gwt_event_shared_EventHandler_2V(c.com_google_gwt_event_shared_SimpleEventBus$2_this$0, c.com_google_gwt_event_shared_SimpleEventBus$2_val$type, c.com_google_gwt_event_shared_SimpleEventBus$2_val$handler);
      }
    }
     finally {
      this$static.com_google_gwt_event_shared_SimpleEventBus_deferredDeltas = null;
    }
  }
}

function com_google_gwt_event_shared_SimpleEventBus_SimpleEventBus__ZV(){
  this.com_google_gwt_event_shared_SimpleEventBus_map = new java_util_HashMap_HashMap__V;
  this.com_google_gwt_event_shared_SimpleEventBus_isReverseOrder = false;
}

function com_google_gwt_event_shared_SimpleEventBus(){
}

_ = com_google_gwt_event_shared_SimpleEventBus_SimpleEventBus__ZV.prototype = com_google_gwt_event_shared_SimpleEventBus.prototype = new com_google_gwt_event_shared_EventBus;
_.java_lang_Object_castableTypeMap$ = {18:1};
_.com_google_gwt_event_shared_SimpleEventBus_deferredDeltas = null;
_.com_google_gwt_event_shared_SimpleEventBus_firingDepth = 0;
_.com_google_gwt_event_shared_SimpleEventBus_isReverseOrder = false;
function com_google_gwt_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_gwt_event_shared_SimpleEventBus_2V(){
}

function com_google_gwt_event_shared_SimpleEventBus$1(){
}

_ = com_google_gwt_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_gwt_event_shared_SimpleEventBus_2V.prototype = com_google_gwt_event_shared_SimpleEventBus$1.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
function com_google_gwt_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_gwt_event_shared_SimpleEventBus_2V(this$0, val$type, val$handler){
  this.com_google_gwt_event_shared_SimpleEventBus$2_this$0 = this$0;
  this.com_google_gwt_event_shared_SimpleEventBus$2_val$type = val$type;
  this.com_google_gwt_event_shared_SimpleEventBus$2_val$handler = val$handler;
}

function com_google_gwt_event_shared_SimpleEventBus$2(){
}

_ = com_google_gwt_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_gwt_event_shared_SimpleEventBus_2V.prototype = com_google_gwt_event_shared_SimpleEventBus$2.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {10:1};
_.com_google_gwt_event_shared_SimpleEventBus$2_this$0 = null;
_.com_google_gwt_event_shared_SimpleEventBus$2_val$handler = null;
_.com_google_gwt_event_shared_SimpleEventBus$2_val$type = null;
function com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, causes.java_util_HashSet_map.java_util_AbstractHashMap_size == 0?null:com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(causes.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Throwable_12_1classLit, {11:1, 22:1}, 7, 0, 0)), 11)[0]);
}

function com_google_gwt_event_shared_UmbrellaException(){
}

_ = com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.prototype = com_google_gwt_event_shared_UmbrellaException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_castableTypeMap$ = {2:1, 7:1, 22:1};
function com_google_gwt_gadgets_client_Gadget(){
}

_ = com_google_gwt_gadgets_client_Gadget.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
function com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem){
  var dirPropertyValue;
  dirPropertyValue = elem[$intern_8] == null?null:String(elem[$intern_8]);
  if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z($intern_9, dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_RTL;
  }
   else if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z($intern_10, dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_LTR;
  }
  return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT;
}

function com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(elem, direction){
  switch (direction.java_lang_Enum_ordinal) {
    case 0:
      {
        elem[$intern_8] = $intern_9;
        break;
      }

    case 1:
      {
        elem[$intern_8] = $intern_10;
        break;
      }

    case 2:
      {
        com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem) != (com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT) && (elem[$intern_8] = $intern_3 , undefined);
        break;
      }

  }
}

function java_lang_Enum(){
}

_ = java_lang_Enum.prototype = new java_lang_Object;
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Enum_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.hashCode__I$ = function java_lang_Enum_hashCode__I(){
  return this.$H || (this.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}
;
_.java_lang_Object_castableTypeMap$ = {22:1, 23:1, 24:1};
_.java_lang_Enum_ordinal = 0;
function com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V(){
  com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V = nullMethod;
  com_google_gwt_i18n_client_HasDirection$Direction_RTL = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV($intern_11, 0);
  com_google_gwt_i18n_client_HasDirection$Direction_LTR = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV($intern_12, 1);
  com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV($intern_13, 2);
  com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit, {22:1}, 19, [com_google_gwt_i18n_client_HasDirection$Direction_RTL, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT]);
}

function com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  this.java_lang_Enum_ordinal = enum$ordinal;
}

function com_google_gwt_i18n_client_HasDirection$Direction(){
}

_ = com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV.prototype = com_google_gwt_i18n_client_HasDirection$Direction.prototype = new java_lang_Enum;
_.java_lang_Object_castableTypeMap$ = {19:1, 22:1, 23:1, 24:1};
var com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_RTL;
function com_google_gwt_lang_Array_Array__V(){
}

function com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(array, length){
  var a, result;
  a = array;
  result = com_google_gwt_lang_Array_createFromSeed__IILcom_google_gwt_lang_Array_2(0, length);
  com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(a.com_google_gwt_lang_Array_arrayClass$, a.java_lang_Object_castableTypeMap$, a.com_google_gwt_lang_Array_queryId$, result);
  return result;
}

function com_google_gwt_lang_Array_createFromSeed__IILcom_google_gwt_lang_Array_2(seedType, length){
  var array = new Array(length);
  if (seedType == 3) {
    for (var i = 0; i < length; ++i) {
      var value = new Object;
      value.l = value.m = value.h = 0;
      array[i] = value;
    }
  }
   else if (seedType > 0) {
    var value = [null, 0, false][seedType];
    for (var i = 0; i < length; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(arrayClass, castableTypeMap, queryId, length, seedType){
  var result;
  result = com_google_gwt_lang_Array_createFromSeed__IILcom_google_gwt_lang_Array_2(seedType, length);
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V();
  com_google_gwt_lang_Array$ExpandoWrapper_wrapArray__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(result, com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues);
  result.com_google_gwt_lang_Array_arrayClass$ = arrayClass;
  result.java_lang_Object_castableTypeMap$ = castableTypeMap;
  result.com_google_gwt_lang_Array_queryId$ = queryId;
  return result;
}

function com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(arrayClass, castableTypeMap, queryId, array){
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V();
  com_google_gwt_lang_Array$ExpandoWrapper_wrapArray__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(array, com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues);
  array.com_google_gwt_lang_Array_arrayClass$ = arrayClass;
  array.java_lang_Object_castableTypeMap$ = castableTypeMap;
  array.com_google_gwt_lang_Array_queryId$ = queryId;
  return array;
}

function com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(array, index, value){
  if (value != null) {
    if (array.com_google_gwt_lang_Array_queryId$ > 0 && !com_google_gwt_lang_Cast_canCastUnsafe__Ljava_lang_Object_2IZ(value, array.com_google_gwt_lang_Array_queryId$)) {
      throw new java_lang_ArrayStoreException_ArrayStoreException__V;
    }
    if (array.com_google_gwt_lang_Array_queryId$ < 0 && (value.java_lang_Object_typeMarker$ == nullMethod || value.java_lang_Object_castableTypeMap$ && !!value.java_lang_Object_castableTypeMap$[1])) {
      throw new java_lang_ArrayStoreException_ArrayStoreException__V;
    }
  }
  return array[index] = value;
}

function com_google_gwt_lang_Array(){
}

_ = com_google_gwt_lang_Array_Array__V.prototype = com_google_gwt_lang_Array.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_lang_Array_arrayClass$ = null;
_.com_google_gwt_lang_Array_queryId$ = 0;
function com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V(){
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V = nullMethod;
  com_google_gwt_lang_Array$ExpandoWrapper_expandoNames = [];
  com_google_gwt_lang_Array$ExpandoWrapper_expandoValues = [];
  com_google_gwt_lang_Array$ExpandoWrapper_initExpandos__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(new com_google_gwt_lang_Array_Array__V, com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues);
}

function com_google_gwt_lang_Array$ExpandoWrapper_initExpandos__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name in protoType) {
    if (value = protoType[name]) {
      expandoNames[i] = name;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function com_google_gwt_lang_Array$ExpandoWrapper_wrapArray__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(array, expandoNames, expandoValues){
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues;
function com_google_gwt_lang_Cast_canCastUnsafe__Ljava_lang_Object_2IZ(src, dstId){
  return src.java_lang_Object_castableTypeMap$ && src.java_lang_Object_castableTypeMap$[dstId];
}

function com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(src, dstId){
  if (src != null && !(src.java_lang_Object_castableTypeMap$ && src.java_lang_Object_castableTypeMap$[dstId])) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src;
}

function com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(src){
  if (src != null && (src.java_lang_Object_typeMarker$ == nullMethod || src.java_lang_Object_castableTypeMap$ && !!src.java_lang_Object_castableTypeMap$[1])) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src;
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(src, dstId){
  return src != null && src.java_lang_Object_castableTypeMap$ && !!src.java_lang_Object_castableTypeMap$[dstId];
}

function com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(src){
  return src != null && src.java_lang_Object_typeMarker$ != nullMethod && !(src.java_lang_Object_castableTypeMap$ && !!src.java_lang_Object_castableTypeMap$[1]);
}

function com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(o){
  if (o != null) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return null;
}

function com_google_gwt_lang_EntryMethodHolder_init__V(){
  !!$stats && $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:$intern_14, evtGroup:$intern_15, millis:(new Date).getTime(), type:$intern_16, className:$intern_17});
  new eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadgetGadgetImpl_MonitoringGadgetGadgetImpl__V;
}

function com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  if (e != null && e.java_lang_Object_castableTypeMap$ && !!e.java_lang_Object_castableTypeMap$[7]) {
    return e;
  }
  return new com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e);
}

function com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = com_google_gwt_user_client_DOM_currentEvent;
  com_google_gwt_user_client_DOM_currentEvent = evt;
  elem == com_google_gwt_user_client_DOM_sCaptureElem && com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(evt.type) == 8192 && (com_google_gwt_user_client_DOM_sCaptureElem = null);
  listener.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(evt);
  com_google_gwt_user_client_DOM_currentEvent = prevCurrentEvent;
}

function com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_user_client_Element_2IV(elem, eventBits){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  elem.__eventBits = eventBits;
  elem.onclick = eventBits & 1?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.ondblclick = eventBits & 2?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onmousedown = eventBits & 4?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onmouseup = eventBits & 8?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onmouseover = eventBits & 16?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onmouseout = eventBits & 32?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onmousemove = eventBits & 64?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onkeydown = eventBits & 128?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onkeypress = eventBits & 256?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onkeyup = eventBits & 512?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onchange = eventBits & 1024?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onfocus = eventBits & 2048?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onblur = eventBits & 4096?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onlosecapture = eventBits & 8192?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onscroll = eventBits & 16384?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onload = eventBits & 32768?com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent:null;
  elem.onerror = eventBits & 65536?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onmousewheel = eventBits & 131072?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.oncontextmenu = eventBits & 262144?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
  elem.onpaste = eventBits & 524288?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null;
}

var com_google_gwt_user_client_DOM_currentEvent = null, com_google_gwt_user_client_DOM_sCaptureElem = null;
function com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_event_logical_shared_CloseEvent_TYPE?com_google_gwt_event_logical_shared_CloseEvent_TYPE:(com_google_gwt_event_logical_shared_CloseEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V), handler);
}

function com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(type, handler){
  return com_google_gwt_event_shared_SimpleEventBus_$addHandler__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers).com_google_gwt_event_shared_HandlerManager_eventBus, type, handler);
}

function com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V(){
  if (!com_google_gwt_user_client_Window_closeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImpl_$initWindowCloseHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2V();
    com_google_gwt_user_client_Window_closeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2(){
  var event;
  if (com_google_gwt_user_client_Window_closeHandlersInitialized) {
    event = new com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V;
    !!com_google_gwt_user_client_Window_handlers && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(com_google_gwt_user_client_Window_handlers, event);
    return null;
  }
  return null;
}

var com_google_gwt_user_client_Window_closeHandlersInitialized = false, com_google_gwt_user_client_Window_handlers = null;
function com_google_gwt_user_client_Window$ClosingEvent_$clinit__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V = nullMethod;
  com_google_gwt_user_client_Window$ClosingEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V();
}

function com_google_gwt_user_client_Window$ClosingEvent(){
}

_ = com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V.prototype = com_google_gwt_user_client_Window$ClosingEvent.prototype = new com_google_gwt_event_shared_GwtEvent;
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_client_Window$ClosingEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(handler);
  null.nullMethod();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_client_Window$ClosingEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Window$ClosingEvent_TYPE;
}
;
_.java_lang_Object_castableTypeMap$ = {};
var com_google_gwt_user_client_Window$ClosingEvent_TYPE;
function com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V(){
  this.com_google_gwt_event_shared_HandlerManager_eventBus = new com_google_gwt_event_shared_SimpleEventBus_SimpleEventBus__ZV;
  this.com_google_gwt_event_shared_HandlerManager_source = null;
}

function com_google_gwt_user_client_Window$WindowHandlers(){
}

_ = com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V.prototype = com_google_gwt_user_client_Window$WindowHandlers.prototype = new com_google_gwt_event_shared_HandlerManager;
_.java_lang_Object_castableTypeMap$ = {18:1};
function com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(eventType){
  switch (eventType) {
    case $intern_18:
      return 4096;
    case $intern_19:
      return 1024;
    case $intern_4:
      return 1;
    case $intern_20:
      return 2;
    case $intern_21:
      return 2048;
    case $intern_22:
      return 128;
    case $intern_23:
      return 256;
    case $intern_24:
      return 512;
    case $intern_25:
      return 32768;
    case $intern_26:
      return 8192;
    case $intern_27:
      return 4;
    case $intern_28:
      return 64;
    case $intern_29:
      return 32;
    case $intern_30:
      return 16;
    case $intern_31:
      return 8;
    case $intern_32:
      return 16384;
    case $intern_33:
      return 65536;
    case $intern_34:
      return 131072;
    case $intern_35:
      return 131072;
    case $intern_36:
      return 262144;
    case $intern_37:
      return 524288;
    default:return -1;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V(){
  if (!com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized) {
    com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V();
    com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = true;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_isMyListener__Ljava_lang_Object_2Z(object){
  return !com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(object) && object != null && object.java_lang_Object_castableTypeMap$ && !!object.java_lang_Object_castableTypeMap$[12];
}

var com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = false;
function com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V(){
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent = $entry(function(evt){
    if (com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent(evt)) {
      var cap = com_google_gwt_user_client_impl_DOMImplStandard_captureElem;
      if (cap && cap.__listener) {
        if (com_google_gwt_user_client_impl_DOMImpl_isMyListener__Ljava_lang_Object_2Z(cap.__listener)) {
          com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, cap, cap.__listener);
          evt.stopPropagation();
        }
      }
    }
  }
  );
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent = $entry(function(evt){
    return true;
  }
  );
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent = $entry(function(evt){
    this.__gwtLastUnhandledEvent = evt.type;
    com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent.call(this, evt);
  }
  );
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent = $entry(function(evt){
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentNode;
    }
    curElem && curElem.nodeType != 1 && (curElem = null);
    listener && com_google_gwt_user_client_impl_DOMImpl_isMyListener__Ljava_lang_Object_2Z(listener) && com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, curElem, listener);
  }
  );
  $wnd.addEventListener($intern_4, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_20, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_27, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_31, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_28, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_30, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_29, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_34, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent, true);
  $wnd.addEventListener($intern_22, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent, true);
  $wnd.addEventListener($intern_24, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent, true);
  $wnd.addEventListener($intern_23, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent, true);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2IV(parent, toAdd, index){
  var count = 0, child = parent.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent.insertBefore(toAdd, before);
}

var com_google_gwt_user_client_impl_DOMImplStandard_captureElem = null, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent = null, com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent = null, com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent = null, com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent = null;
function com_google_gwt_user_client_impl_ElementMapperImpl_$get__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_ui_UIObject_2(this$static, elem){
  var index, com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2I_index_0;
  index = (com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2I_index_0 = elem[$intern_38] , com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2I_index_0 == null?-1:com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2I_index_0);
  if (index < 0) {
    return null;
  }
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, index), 13);
}

function com_google_gwt_user_client_impl_ElementMapperImpl_$put__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_ui_UIObject_2V(this$static, uiObject){
  var index;
  if (!this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList) {
    index = this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList.java_util_ArrayList_size;
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, uiObject);
  }
   else {
    index = this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_index;
    java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, index, uiObject);
    this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList = this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_next;
  }
  uiObject.com_google_gwt_user_client_ui_UIObject_element[$intern_38] = index;
}

function com_google_gwt_user_client_impl_ElementMapperImpl_$removeByElement__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_Element_2V(this$static, elem){
  var index, com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2I_index_0;
  index = (com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2I_index_0 = elem[$intern_38] , com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2I_index_0 == null?-1:com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_user_client_Element_2I_index_0);
  elem[$intern_38] = null;
  java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, index, null);
  this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList = new com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_ElementMapperImpl$FreeNode__ILcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2V(index, this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList);
}

function com_google_gwt_user_client_impl_ElementMapperImpl_ElementMapperImpl__V(){
  this.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList = new java_util_ArrayList_ArrayList__V;
}

function com_google_gwt_user_client_impl_ElementMapperImpl(){
}

_ = com_google_gwt_user_client_impl_ElementMapperImpl_ElementMapperImpl__V.prototype = com_google_gwt_user_client_impl_ElementMapperImpl.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_user_client_impl_ElementMapperImpl_freeList = null;
function com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_ElementMapperImpl$FreeNode__ILcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2V(index, next){
  this.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_index = index;
  this.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_next = next;
}

function com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode(){
}

_ = com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_ElementMapperImpl$FreeNode__ILcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2V.prototype = com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_index = 0;
_.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_next = null;
function com_google_gwt_user_client_impl_WindowImpl_$initWindowCloseHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2V(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      com_google_gwt_user_client_Window_closeHandlersInitialized && com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, elem){
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
}

function com_google_gwt_user_client_ui_UIObject(){
}

_ = com_google_gwt_user_client_ui_UIObject.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {13:1};
_.com_google_gwt_user_client_ui_UIObject_element = null;
function com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler, type){
  com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(type.com_google_gwt_event_dom_client_DomEvent$Type_name));
  return com_google_gwt_event_shared_SimpleEventBus_$addHandler__Lcom_google_gwt_event_shared_SimpleEventBus_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!this$static.com_google_gwt_user_client_ui_Widget_handlerManager?(this$static.com_google_gwt_user_client_ui_Widget_handlerManager = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(this$static)):this$static.com_google_gwt_user_client_ui_Widget_handlerManager).com_google_gwt_event_shared_HandlerManager_eventBus, type, handler);
}

function com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event){
  !!this$static.com_google_gwt_user_client_ui_Widget_handlerManager && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static.com_google_gwt_user_client_ui_Widget_handlerManager, event);
}

function com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  var bitsToAdd;
  if (this$static.isAttached__Z()) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_39);
  }
  this$static.com_google_gwt_user_client_ui_Widget_attached = true;
  this$static.com_google_gwt_user_client_ui_UIObject_element.__listener = this$static;
  bitsToAdd = this$static.com_google_gwt_user_client_ui_Widget_eventsToSink;
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  bitsToAdd > 0 && (this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_user_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, bitsToAdd | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= bitsToAdd));
  this$static.doAttachChildren__V();
}

function com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this$static, event){
  var related;
  switch (com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event.type)) {
    case 16:
    case 32:
      related = event.relatedTarget;
      if (!!related && this$static.com_google_gwt_user_client_ui_UIObject_element.contains(related)) {
        return;
      }

  }
  com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(event, this$static, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.isAttached__Z()) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_40);
  }
  try {
    this$static.doDetachChildren__V();
  }
   finally {
    this$static.com_google_gwt_user_client_ui_UIObject_element.__listener = null;
    this$static.com_google_gwt_user_client_ui_Widget_attached = false;
  }
}

function com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_parent) {
    (com_google_gwt_user_client_ui_RootPanel_$clinit__V() , java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map, this$static)) && com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
  }
   else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(this$static.com_google_gwt_user_client_ui_Widget_parent, 16)) {
    com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_Widget_parent, 16).remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_41);
  }
}

function com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, parent){
  var oldParent;
  oldParent = this$static.com_google_gwt_user_client_ui_Widget_parent;
  if (!parent) {
    try {
      !!oldParent && oldParent.isAttached__Z() && this$static.onDetach__V();
    }
     finally {
      this$static.com_google_gwt_user_client_ui_Widget_parent = null;
    }
  }
   else {
    if (oldParent) {
      throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_42);
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = parent;
    parent.isAttached__Z() && this$static.onAttach__V();
  }
}

function com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, eventBitsToAdd){
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_user_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, eventBitsToAdd | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= eventBitsToAdd);
}

function com_google_gwt_user_client_ui_Widget(){
}

_ = com_google_gwt_user_client_ui_Widget.prototype = new com_google_gwt_user_client_ui_UIObject;
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Widget_doAttachChildren__V(){
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Widget_doDetachChildren__V(){
}
;
_.isAttached__Z = function com_google_gwt_user_client_ui_Widget_isAttached__Z(){
  return this.com_google_gwt_user_client_ui_Widget_attached;
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_Widget_onAttach__V(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event);
}
;
_.onDetach__V = function com_google_gwt_user_client_ui_Widget_onDetach__V(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 17:1, 18:1, 21:1};
_.com_google_gwt_user_client_ui_Widget_attached = false;
_.com_google_gwt_user_client_ui_Widget_eventsToSink = 0;
_.com_google_gwt_user_client_ui_Widget_handlerManager = null;
_.com_google_gwt_user_client_ui_Widget_parent = null;
function com_google_gwt_user_client_ui_Panel(){
}

_ = com_google_gwt_user_client_ui_Panel.prototype = new com_google_gwt_user_client_ui_Widget;
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Panel_doAttachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_attachCommand));
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Panel_doDetachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_detachCommand));
}
;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 16:1, 17:1, 18:1, 21:1};
function com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, child, container){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(child);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
  container.appendChild(child.com_google_gwt_user_client_ui_UIObject_element);
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(child, this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var elem;
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    elem = w.com_google_gwt_user_client_ui_UIObject_element;
    com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(elem).removeChild(elem);
    com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  }
  return true;
}

function com_google_gwt_user_client_ui_ComplexPanel(){
}

_ = com_google_gwt_user_client_ui_ComplexPanel.prototype = new com_google_gwt_user_client_ui_Panel;
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_ComplexPanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this.com_google_gwt_user_client_ui_ComplexPanel_children);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_ComplexPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 16:1, 17:1, 18:1, 21:1};
function com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_user_client_Element_2V(elem){
  elem.style[$intern_43] = $intern_3;
  elem.style[$intern_44] = $intern_3;
  elem.style[$intern_45] = $intern_3;
}

function com_google_gwt_user_client_ui_AbsolutePanel(){
}

_ = com_google_gwt_user_client_ui_AbsolutePanel.prototype = new com_google_gwt_user_client_ui_ComplexPanel;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_AbsolutePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_user_client_Element_2V(w.com_google_gwt_user_client_ui_UIObject_element);
  return removed;
}
;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 16:1, 17:1, 18:1, 21:1};
function com_google_gwt_user_client_ui_AttachDetachException_$clinit__V(){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V = nullMethod;
  com_google_gwt_user_client_ui_AttachDetachException_attachCommand = new com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V;
  com_google_gwt_user_client_ui_AttachDetachException_detachCommand = new com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V;
}

function com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(causes){
  com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

function com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(hasWidgets, c){
  var java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z_old_0;
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V();
  var $e0, caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator__Ljava_util_Iterator_2(); w$iterator.hasNext__Z();) {
    w = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(w$iterator.next__Ljava_lang_Object_2(), 14);
    try {
      c.execute__Lcom_google_gwt_user_client_ui_Widget_2V(w);
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, 7)) {
        e = $e0;
        !caught && (caught = new java_util_HashSet_HashSet__V);
        java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z_old_0 = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(caught.java_util_HashSet_map, e, caught);
      }
       else 
        throw $e0;
    }
  }
  if (caught) {
    throw new com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(caught);
  }
}

function com_google_gwt_user_client_ui_AttachDetachException(){
}

_ = com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V.prototype = com_google_gwt_user_client_ui_AttachDetachException.prototype = new com_google_gwt_event_shared_UmbrellaException;
_.java_lang_Object_castableTypeMap$ = {2:1, 7:1, 22:1};
var com_google_gwt_user_client_ui_AttachDetachException_attachCommand, com_google_gwt_user_client_ui_AttachDetachException_detachCommand;
function com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V(){
}

function com_google_gwt_user_client_ui_AttachDetachException$1(){
}

_ = com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V.prototype = com_google_gwt_user_client_ui_AttachDetachException$1.prototype = new java_lang_Object;
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onAttach__V();
}
;
_.java_lang_Object_castableTypeMap$ = {};
function com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V(){
}

function com_google_gwt_user_client_ui_AttachDetachException$2(){
}

_ = com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V.prototype = com_google_gwt_user_client_ui_AttachDetachException$2.prototype = new java_lang_Object;
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$2_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onDetach__V();
}
;
_.java_lang_Object_castableTypeMap$ = {};
function com_google_gwt_user_client_ui_FocusWidget(){
}

_ = com_google_gwt_user_client_ui_FocusWidget.prototype = new com_google_gwt_user_client_ui_Widget;
_.onAttach__V = function com_google_gwt_user_client_ui_FocusWidget_onAttach__V(){
  var tabIndex;
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
  tabIndex = this.com_google_gwt_user_client_ui_UIObject_element.tabIndex;
  -1 == tabIndex && (this.com_google_gwt_user_client_ui_UIObject_element.tabIndex = 0 , undefined);
}
;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 17:1, 18:1, 21:1};
function com_google_gwt_user_client_ui_ButtonBase(){
}

_ = com_google_gwt_user_client_ui_ButtonBase.prototype = new com_google_gwt_user_client_ui_FocusWidget;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 17:1, 18:1, 21:1};
function com_google_gwt_user_client_ui_Button_Button__Ljava_lang_String_2V(){
  var com_google_gwt_user_client_ui_Button_Button__V_com_google_gwt_dom_client_DOMImpl_$createButtonElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0_0;
  this.com_google_gwt_user_client_ui_UIObject_element = (com_google_gwt_user_client_ui_Button_Button__V_com_google_gwt_dom_client_DOMImpl_$createButtonElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0_0 = $doc.createElement($intern_46) , com_google_gwt_user_client_ui_Button_Button__V_com_google_gwt_dom_client_DOMImpl_$createButtonElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0_0.type = $intern_47 , com_google_gwt_user_client_ui_Button_Button__V_com_google_gwt_dom_client_DOMImpl_$createButtonElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0_0);
  this.com_google_gwt_user_client_ui_UIObject_element[$intern_48] = $intern_49;
  this.com_google_gwt_user_client_ui_UIObject_element.innerHTML = $intern_50;
}

function com_google_gwt_user_client_ui_Button(){
}

_ = com_google_gwt_user_client_ui_Button_Button__Ljava_lang_String_2V.prototype = com_google_gwt_user_client_ui_Button.prototype = new com_google_gwt_user_client_ui_ButtonBase;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 17:1, 18:1, 21:1};
function com_google_gwt_user_client_ui_CellPanel(){
}

_ = com_google_gwt_user_client_ui_CellPanel.prototype = new com_google_gwt_user_client_ui_ComplexPanel;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 16:1, 17:1, 18:1, 21:1};
_.com_google_gwt_user_client_ui_CellPanel_body = null;
_.com_google_gwt_user_client_ui_CellPanel_table = null;
function com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, widget){
  if (this$static.com_google_gwt_user_client_ui_Composite_widget) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V($intern_51);
  }
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, widget.com_google_gwt_user_client_ui_UIObject_element);
  this$static.com_google_gwt_user_client_ui_Composite_widget = widget;
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, this$static);
}

function com_google_gwt_user_client_ui_Composite(){
}

_ = com_google_gwt_user_client_ui_Composite.prototype = new com_google_gwt_user_client_ui_Widget;
_.isAttached__Z = function com_google_gwt_user_client_ui_Composite_isAttached__Z(){
  if (this.com_google_gwt_user_client_ui_Composite_widget) {
    return this.com_google_gwt_user_client_ui_Composite_widget.com_google_gwt_user_client_ui_Widget_attached;
  }
  return false;
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_Composite_onAttach__V(){
  if (this.com_google_gwt_user_client_ui_Widget_eventsToSink != -1) {
    com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2IV(this.com_google_gwt_user_client_ui_Composite_widget, this.com_google_gwt_user_client_ui_Widget_eventsToSink);
    this.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  }
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_Composite_widget);
  this.com_google_gwt_user_client_ui_UIObject_element.__listener = this;
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Composite_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event);
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this.com_google_gwt_user_client_ui_Composite_widget, event);
}
;
_.onDetach__V = function com_google_gwt_user_client_ui_Composite_onDetach__V(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_Composite_widget);
}
;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 17:1, 18:1, 21:1};
_.com_google_gwt_user_client_ui_Composite_widget = null;
function com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this$static, content){
  this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element.textContent = content || $intern_3;
  if (this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir != this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir) {
    this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
    com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir);
  }
}

function com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(element){
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_element = element;
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir = com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(element);
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
}

function com_google_gwt_user_client_ui_DirectionalTextHelper(){
}

_ = com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV.prototype = com_google_gwt_user_client_ui_DirectionalTextHelper.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_user_client_ui_DirectionalTextHelper_element = null;
_.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir = null;
_.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = null;
function com_google_gwt_user_client_ui_HTMLTable_$checkCellBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV(this$static, row, column){
  var cellSize;
  com_google_gwt_user_client_ui_HTMLTable_$checkRowBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2IV(this$static, row);
  if (column < 0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_52 + column + $intern_53 + column);
  }
  cellSize = this$static.com_google_gwt_user_client_ui_Grid_numColumns;
  if (cellSize <= column) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_54 + column + $intern_55 + this$static.com_google_gwt_user_client_ui_Grid_numColumns);
  }
}

function com_google_gwt_user_client_ui_HTMLTable_$checkRowBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2IV(this$static, row){
  var rowSize;
  rowSize = this$static.com_google_gwt_user_client_ui_Grid_numRows;
  if (row >= rowSize || row < 0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_56 + row + $intern_57 + rowSize);
  }
}

function com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2ZZ(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td);
  widget = null;
  !!maybeChild && (widget = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(com_google_gwt_user_client_impl_ElementMapperImpl_$get__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_ui_UIObject_2(this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap, maybeChild), 14));
  if (widget) {
    com_google_gwt_user_client_ui_HTMLTable_$remove__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && (td.innerHTML = $intern_3 , undefined);
    return false;
  }
}

function com_google_gwt_user_client_ui_HTMLTable_$remove__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, widget){
  var elem;
  if (widget.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, null);
  }
   finally {
    elem = widget.com_google_gwt_user_client_ui_UIObject_element;
    com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(elem).removeChild(elem);
    com_google_gwt_user_client_impl_ElementMapperImpl_$removeByElement__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_Element_2V(this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap, elem);
  }
  return true;
}

function com_google_gwt_user_client_ui_HTMLTable_$removeRow__Lcom_google_gwt_user_client_ui_HTMLTable_2IV(this$static, row){
  var column, columnCount, com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_user_client_Element_2_td_0;
  columnCount = this$static.com_google_gwt_user_client_ui_Grid_numColumns;
  for (column = 0; column < columnCount; ++column) {
    com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_user_client_Element_2_td_0 = this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$0.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows[row].cells[column];
    com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2ZZ(this$static, com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_user_client_Element_2_td_0, false);
  }
  this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem.removeChild(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows[row]);
}

function com_google_gwt_user_client_ui_HTMLTable_$setColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2V(this$static, formatter){
  !!this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter && (formatter.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup = this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup);
  this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter = formatter;
  com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$prepareColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2V(this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter);
}

function com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2V(this$static, column, widget){
  var td, com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_user_client_Element_2_td_0;
  com_google_gwt_user_client_ui_Grid_$prepareCell__Lcom_google_gwt_user_client_ui_Grid_2IIV(this$static, column);
  if (widget) {
    com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
    td = (com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_user_client_Element_2_td_0 = this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$0.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows[0].cells[column] , com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2ZZ(this$static, com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_user_client_Element_2_td_0, true) , com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_user_client_Element_2_td_0);
    com_google_gwt_user_client_impl_ElementMapperImpl_$put__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_ui_UIObject_2V(this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap, widget);
    td.appendChild(widget.com_google_gwt_user_client_ui_UIObject_element);
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, this$static);
  }
}

function com_google_gwt_user_client_ui_HTMLTable(){
}

_ = com_google_gwt_user_client_ui_HTMLTable.prototype = new com_google_gwt_user_client_ui_Panel;
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_HTMLTable_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_HTMLTable$1_HTMLTable$1__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_HTMLTable_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(widget){
  return com_google_gwt_user_client_ui_HTMLTable_$remove__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, widget);
}
;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 16:1, 17:1, 18:1, 21:1};
_.com_google_gwt_user_client_ui_HTMLTable_bodyElem = null;
_.com_google_gwt_user_client_ui_HTMLTable_cellFormatter = null;
_.com_google_gwt_user_client_ui_HTMLTable_columnFormatter = null;
_.com_google_gwt_user_client_ui_HTMLTable_tableElem = null;
function com_google_gwt_user_client_ui_Grid_$prepareCell__Lcom_google_gwt_user_client_ui_Grid_2IIV(this$static, column){
  com_google_gwt_user_client_ui_Grid_$prepareRow__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static);
  if (column < 0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_58 + column);
  }
  if (column >= this$static.com_google_gwt_user_client_ui_Grid_numColumns) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_54 + column + $intern_55 + this$static.com_google_gwt_user_client_ui_Grid_numColumns);
  }
}

function com_google_gwt_user_client_ui_Grid_$prepareRow__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static){
  if (0 >= this$static.com_google_gwt_user_client_ui_Grid_numRows) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_59 + this$static.com_google_gwt_user_client_ui_Grid_numRows);
  }
}

function com_google_gwt_user_client_ui_Grid_$removeRow__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static, row){
  com_google_gwt_user_client_ui_HTMLTable_$removeRow__Lcom_google_gwt_user_client_ui_HTMLTable_2IV(this$static, row);
  --this$static.com_google_gwt_user_client_ui_Grid_numRows;
}

function com_google_gwt_user_client_ui_Grid_$resizeColumns__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static){
  var i, j, com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0, com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0, com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_user_client_Element_2_td_0_0, com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0, com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0, com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_Grid_$createCell__Lcom_google_gwt_user_client_ui_Grid_2Lcom_google_gwt_user_client_Element_2_td_0_0;
  if (this$static.com_google_gwt_user_client_ui_Grid_numColumns == 2) {
    return;
  }
  if (this$static.com_google_gwt_user_client_ui_Grid_numColumns > 2) {
    for (i = 0; i < this$static.com_google_gwt_user_client_ui_Grid_numRows; ++i) {
      for (j = this$static.com_google_gwt_user_client_ui_Grid_numColumns - 1; j >= 2; --j) {
        com_google_gwt_user_client_ui_HTMLTable_$checkCellBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV(this$static, i, j);
        com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0 = (com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_user_client_Element_2_td_0_0 = this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$0.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows[i].cells[j] , com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2ZZ(this$static, com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_user_client_Element_2_td_0_0, false) , com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_user_client_Element_2_td_0_0);
        com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0 = this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows[i];
        com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0.removeChild(com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0);
      }
    }
  }
   else {
    for (i = 0; i < this$static.com_google_gwt_user_client_ui_Grid_numRows; ++i) {
      for (j = this$static.com_google_gwt_user_client_ui_Grid_numColumns; j < 2; ++j) {
        com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0 = this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem.rows[i];
        com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0 = (com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_Grid_$createCell__Lcom_google_gwt_user_client_ui_Grid_2Lcom_google_gwt_user_client_Element_2_td_0_0 = $doc.createElement($intern_60) , com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_Grid_$createCell__Lcom_google_gwt_user_client_ui_Grid_2Lcom_google_gwt_user_client_Element_2_td_0_0.innerHTML = $intern_61 , com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_Grid_$createCell__Lcom_google_gwt_user_client_ui_Grid_2Lcom_google_gwt_user_client_Element_2_td_0_0);
        com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2IV(com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0, com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0, j);
      }
    }
  }
  this$static.com_google_gwt_user_client_ui_Grid_numColumns = 2;
  com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$resizeColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2IZV(this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter, 2, false);
}

function com_google_gwt_user_client_ui_Grid_$resizeRows__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static){
  if (this$static.com_google_gwt_user_client_ui_Grid_numRows == 1) {
    return;
  }
  if (this$static.com_google_gwt_user_client_ui_Grid_numRows < 1) {
    com_google_gwt_user_client_ui_Grid_addRows__Lcom_google_gwt_user_client_Element_2IIV(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem, 1 - this$static.com_google_gwt_user_client_ui_Grid_numRows, this$static.com_google_gwt_user_client_ui_Grid_numColumns);
    this$static.com_google_gwt_user_client_ui_Grid_numRows = 1;
  }
   else {
    while (this$static.com_google_gwt_user_client_ui_Grid_numRows > 1) {
      com_google_gwt_user_client_ui_Grid_$removeRow__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static, this$static.com_google_gwt_user_client_ui_Grid_numRows - 1);
    }
  }
}

function com_google_gwt_user_client_ui_Grid_Grid__IIV(){
  this.com_google_gwt_user_client_ui_HTMLTable_widgetMap = new com_google_gwt_user_client_impl_ElementMapperImpl_ElementMapperImpl__V;
  this.com_google_gwt_user_client_ui_HTMLTable_tableElem = $doc.createElement($intern_62);
  this.com_google_gwt_user_client_ui_HTMLTable_bodyElem = $doc.createElement($intern_63);
  this.com_google_gwt_user_client_ui_HTMLTable_tableElem.appendChild(this.com_google_gwt_user_client_ui_HTMLTable_bodyElem);
  this.com_google_gwt_user_client_ui_UIObject_element = this.com_google_gwt_user_client_ui_HTMLTable_tableElem;
  this.com_google_gwt_user_client_ui_HTMLTable_cellFormatter = new com_google_gwt_user_client_ui_HTMLTable$CellFormatter_HTMLTable$CellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this);
  com_google_gwt_user_client_ui_HTMLTable_$setColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2V(this, new com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_HTMLTable$ColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this));
  com_google_gwt_user_client_ui_Grid_$resizeColumns__Lcom_google_gwt_user_client_ui_Grid_2IV(this);
  com_google_gwt_user_client_ui_Grid_$resizeRows__Lcom_google_gwt_user_client_ui_Grid_2IV(this);
}

function com_google_gwt_user_client_ui_Grid_addRows__Lcom_google_gwt_user_client_Element_2IIV(table, rows, columns){
  var td = $doc.createElement($intern_60);
  td.innerHTML = $intern_61;
  var row = $doc.createElement($intern_64);
  for (var cellNum = 0; cellNum < columns; cellNum++) {
    var cell = td.cloneNode(true);
    row.appendChild(cell);
  }
  table.appendChild(row);
  for (var rowNum = 1; rowNum < rows; rowNum++) {
    table.appendChild(row.cloneNode(true));
  }
}

function com_google_gwt_user_client_ui_Grid(){
}

_ = com_google_gwt_user_client_ui_Grid_Grid__IIV.prototype = com_google_gwt_user_client_ui_Grid.prototype = new com_google_gwt_user_client_ui_HTMLTable;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 16:1, 17:1, 18:1, 21:1};
_.com_google_gwt_user_client_ui_Grid_numColumns = 0;
_.com_google_gwt_user_client_ui_Grid_numRows = 0;
function com_google_gwt_user_client_ui_HTMLTable$1_$findNext__Lcom_google_gwt_user_client_ui_HTMLTable$1_2V(this$static){
  while (++this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex < this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList.java_util_ArrayList_size) {
    if (java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList, this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex) != null) {
      return;
    }
  }
}

function com_google_gwt_user_client_ui_HTMLTable$1_$next__Lcom_google_gwt_user_client_ui_HTMLTable$1_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  var result;
  if (this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex >= this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList.java_util_ArrayList_size) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  result = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList, this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex), 14);
  com_google_gwt_user_client_ui_HTMLTable$1_$findNext__Lcom_google_gwt_user_client_ui_HTMLTable$1_2V(this$static);
  return result;
}

function com_google_gwt_user_client_ui_HTMLTable$1_HTMLTable$1__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this$0){
  this.com_google_gwt_user_client_ui_HTMLTable$1_this$0 = this$0;
  this.com_google_gwt_user_client_ui_HTMLTable$1_widgetList = this.com_google_gwt_user_client_ui_HTMLTable$1_this$0.com_google_gwt_user_client_ui_HTMLTable_widgetMap.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList;
  com_google_gwt_user_client_ui_HTMLTable$1_$findNext__Lcom_google_gwt_user_client_ui_HTMLTable$1_2V(this);
}

function com_google_gwt_user_client_ui_HTMLTable$1(){
}

_ = com_google_gwt_user_client_ui_HTMLTable$1_HTMLTable$1__Lcom_google_gwt_user_client_ui_HTMLTable_2V.prototype = com_google_gwt_user_client_ui_HTMLTable$1.prototype = new java_lang_Object;
_.hasNext__Z = function com_google_gwt_user_client_ui_HTMLTable$1_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex < this.com_google_gwt_user_client_ui_HTMLTable$1_widgetList.java_util_ArrayList_size;
}
;
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_HTMLTable$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_HTMLTable$1_$next__Lcom_google_gwt_user_client_ui_HTMLTable$1_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex = -1;
_.com_google_gwt_user_client_ui_HTMLTable$1_this$0 = null;
function com_google_gwt_user_client_ui_HTMLTable$CellFormatter_HTMLTable$CellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this$0){
  this.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$0 = this$0;
}

function com_google_gwt_user_client_ui_HTMLTable$CellFormatter(){
}

_ = com_google_gwt_user_client_ui_HTMLTable$CellFormatter_HTMLTable$CellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V.prototype = com_google_gwt_user_client_ui_HTMLTable$CellFormatter.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$0 = null;
function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$prepareColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup) {
    this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup = $doc.createElement($intern_65);
    com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_Element_2IV(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_this$0.com_google_gwt_user_client_ui_HTMLTable_tableElem, this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup, 0);
    this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup.appendChild($doc.createElement($intern_66));
  }
}

function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$resizeColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2IZV(this$static, columns, growOnly){
  var i, num;
  columns = columns > 1?columns:1;
  num = this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup.childNodes.length;
  if (num < columns) {
    for (i = num; i < columns; ++i) {
      this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup.appendChild($doc.createElement($intern_66));
    }
  }
   else if (!growOnly && num > columns) {
    for (i = num; i > columns; --i) {
      this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup.removeChild(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup.lastChild);
    }
  }
}

function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_HTMLTable$ColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this$0){
  this.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_this$0 = this$0;
}

function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter(){
}

_ = com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_HTMLTable$ColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V.prototype = com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup = null;
_.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_this$0 = null;
function com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V = nullMethod;
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V($intern_67);
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V($intern_68);
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V($intern_43);
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V($intern_69);
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT;
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START;
}

var com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START;
function com_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant(){
}

_ = com_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V(textAlignString){
  this.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString = textAlignString;
}

function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V.prototype = com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new com_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString = null;
function com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V = nullMethod;
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V($intern_70);
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V($intern_71);
  com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP = new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V($intern_44);
}

var com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP;
function com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V(verticalAlignString){
  this.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString = verticalAlignString;
}

function com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V.prototype = com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString = null;
function com_google_gwt_user_client_ui_LabelBase(){
}

_ = com_google_gwt_user_client_ui_LabelBase.prototype = new com_google_gwt_user_client_ui_Widget;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 17:1, 18:1, 21:1};
_.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper = null;
function com_google_gwt_user_client_ui_Label_Label__Ljava_lang_String_2V(text){
  this.com_google_gwt_user_client_ui_UIObject_element = $doc.createElement($intern_72);
  this.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper = new com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(this.com_google_gwt_user_client_ui_UIObject_element);
  this.com_google_gwt_user_client_ui_UIObject_element[$intern_48] = $intern_73;
  com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, text);
}

function com_google_gwt_user_client_ui_Label(){
}

_ = com_google_gwt_user_client_ui_Label_Label__Ljava_lang_String_2V.prototype = com_google_gwt_user_client_ui_Label.prototype = new com_google_gwt_user_client_ui_LabelBase;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 17:1, 18:1, 21:1};
function com_google_gwt_user_client_ui_RootPanel_$clinit__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V = nullMethod;
  com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand = new com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V;
  com_google_gwt_user_client_ui_RootPanel_rootPanels = new java_util_HashMap_HashMap__V;
  com_google_gwt_user_client_ui_RootPanel_widgetsToDetach = new java_util_HashSet_HashSet__V;
}

function com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V(elem){
  this.com_google_gwt_user_client_ui_ComplexPanel_children = new com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V;
  this.com_google_gwt_user_client_ui_UIObject_element = elem;
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}

function com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(widget){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    widget.onDetach__V();
  }
   finally {
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map, widget) != null;
  }
}

function com_google_gwt_user_client_ui_RootPanel_detachWidgets__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand);
  }
   finally {
    java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map);
    java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_rootPanels);
  }
}

function com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  var rp;
  rp = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, null), 15);
  if (rp) {
    return rp;
  }
  com_google_gwt_user_client_ui_RootPanel_rootPanels.java_util_AbstractHashMap_size == 0 && com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
  rp = new com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V;
  java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, null, rp);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, rp);
  return rp;
}

function com_google_gwt_user_client_ui_RootPanel(){
}

_ = com_google_gwt_user_client_ui_RootPanel.prototype = new com_google_gwt_user_client_ui_AbsolutePanel;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 15:1, 16:1, 17:1, 18:1, 21:1};
var com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand, com_google_gwt_user_client_ui_RootPanel_rootPanels, com_google_gwt_user_client_ui_RootPanel_widgetsToDetach;
function com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V(){
}

function com_google_gwt_user_client_ui_RootPanel$1(){
}

_ = com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V.prototype = com_google_gwt_user_client_ui_RootPanel$1.prototype = new java_lang_Object;
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_RootPanel$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.isAttached__Z() && w.onDetach__V();
}
;
_.java_lang_Object_castableTypeMap$ = {};
function com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V(){
}

function com_google_gwt_user_client_ui_RootPanel$2(){
}

_ = com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V.prototype = com_google_gwt_user_client_ui_RootPanel$2.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {5:1, 6:1};
function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V(){
  com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V.call(this, $doc.body);
}

function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel(){
}

_ = com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V.prototype = com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel.prototype = new com_google_gwt_user_client_ui_RootPanel;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 15:1, 16:1, 17:1, 18:1, 21:1};
function com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var td, tr, com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_Element_2_td_0;
  tr = $doc.createElement($intern_64);
  td = (com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_Element_2_td_0 = $doc.createElement($intern_60) , com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_Element_2_td_0[$intern_74] = this$static.com_google_gwt_user_client_ui_VerticalPanel_horzAlign.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString , com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_Element_2_td_0.style[$intern_75] = this$static.com_google_gwt_user_client_ui_VerticalPanel_vertAlign.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString , com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_Element_2_td_0);
  tr.appendChild(td);
  this$static.com_google_gwt_user_client_ui_CellPanel_body.appendChild(tr);
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(w);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  td.appendChild(w.com_google_gwt_user_client_ui_UIObject_element);
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, this$static);
}

function com_google_gwt_user_client_ui_VerticalPanel_$remove__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var removed, td, com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0;
  td = (com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0 = w.com_google_gwt_user_client_ui_UIObject_element.parentNode , (!com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0 || com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0.nodeType != 1) && (com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0 = null) , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0);
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w);
  removed && this$static.com_google_gwt_user_client_ui_CellPanel_body.removeChild(com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(td));
  return removed;
}

function com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V(){
  this.com_google_gwt_user_client_ui_ComplexPanel_children = new com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V;
  this.com_google_gwt_user_client_ui_CellPanel_table = $doc.createElement($intern_62);
  this.com_google_gwt_user_client_ui_CellPanel_body = $doc.createElement($intern_63);
  this.com_google_gwt_user_client_ui_CellPanel_table.appendChild(this.com_google_gwt_user_client_ui_CellPanel_body);
  this.com_google_gwt_user_client_ui_UIObject_element = this.com_google_gwt_user_client_ui_CellPanel_table;
  this.com_google_gwt_user_client_ui_VerticalPanel_horzAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT);
  this.com_google_gwt_user_client_ui_VerticalPanel_vertAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP);
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_76] = $intern_77;
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_78] = $intern_77;
}

function com_google_gwt_user_client_ui_VerticalPanel(){
}

_ = com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V.prototype = com_google_gwt_user_client_ui_VerticalPanel.prototype = new com_google_gwt_user_client_ui_CellPanel;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_VerticalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_VerticalPanel_$remove__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 16:1, 17:1, 18:1, 21:1};
function com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, this$static.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w){
  var i;
  for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    if (this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] == w) {
      return i;
    }
  }
  return -1;
}

function com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection_size == this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length) {
    newArray = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, {22:1}, 14, this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length * 2, 0);
    for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length; ++i) {
      com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(newArray, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i]);
    }
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array = newArray;
  }
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = this$static.com_google_gwt_user_client_ui_WidgetCollection_size - 1; i > beforeIndex; --i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i - 1]);
  }
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, beforeIndex, w);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index){
  var i;
  if (index < 0 || index >= this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
  --this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = index; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i + 1]);
  }
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, this$static.com_google_gwt_user_client_ui_WidgetCollection_size, null);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var index;
  index = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w);
  if (index == -1) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index);
}

function com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(){
  this.com_google_gwt_user_client_ui_WidgetCollection_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, {22:1}, 14, 4, 0);
}

function com_google_gwt_user_client_ui_WidgetCollection(){
}

_ = com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V.prototype = com_google_gwt_user_client_ui_WidgetCollection.prototype = new java_lang_Object;
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_WidgetCollection_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this);
}
;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_user_client_ui_WidgetCollection_array = null;
_.com_google_gwt_user_client_ui_WidgetCollection_size = 0;
function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  return this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_array[++this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index];
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$0){
  this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0 = this$0;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator(){
}

_ = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V.prototype = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator.prototype = new java_lang_Object;
_.hasNext__Z = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0.com_google_gwt_user_client_ui_WidgetCollection_size - 1;
}
;
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.java_lang_Object_castableTypeMap$ = {};
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index = -1;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$0 = null;
function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget(){
}

_ = eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget.prototype = new com_google_gwt_gadgets_client_Gadget;
_.callback__Ljava_lang_String_2Ljava_lang_String_2V = function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget_callback__Ljava_lang_String_2Ljava_lang_String_2V(sender, application){
  $wnd.deploy(application, $wnd.vp);
}
;
_.deployApplication__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_VerticalPanel_2V = function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget_deployApplication__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_VerticalPanel_2V(application, vp){
  var bUndeploy, grid, lbApplication;
  grid = new com_google_gwt_user_client_ui_Grid_Grid__IIV;
  lbApplication = new com_google_gwt_user_client_ui_Label_Label__Ljava_lang_String_2V(application);
  com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2V(grid, 0, lbApplication);
  bUndeploy = new com_google_gwt_user_client_ui_Button_Button__Ljava_lang_String_2V;
  com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2V(grid, 1, bUndeploy);
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(bUndeploy, new eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget$1_MonitoringGadget$1__Leu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget_2V(vp, grid), (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(vp, grid);
}
;
_.java_lang_Object_castableTypeMap$ = {};
_.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget_mw = null;
_.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget_vp = null;
function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget$1_MonitoringGadget$1__Leu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget_2V(val$vp, val$grid){
  this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget$1_val$vp = val$vp;
  this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget$1_val$grid = val$grid;
}

function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget$1(){
}

_ = eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget$1_MonitoringGadget$1__Leu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget_2V.prototype = eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget$1.prototype = new java_lang_Object;
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event){
  com_google_gwt_user_client_ui_VerticalPanel_$remove__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget$1_val$vp, this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget$1_val$grid);
}
;
_.java_lang_Object_castableTypeMap$ = {3:1, 6:1};
_.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget$1_val$grid = null;
_.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget$1_val$vp = null;
function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadgetGadgetImpl_MonitoringGadgetGadgetImpl__V(){
  this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget_mw = new eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_MonitoringWidget__V;
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2()), this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget_mw);
  this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget_vp = this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget_mw.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_verticalPanel;
  $wnd.callback = $entry(this.callback__Ljava_lang_String_2Ljava_lang_String_2V);
  $wnd.deploy = $entry(this.deployApplication__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_VerticalPanel_2V);
  $wnd.vp = this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget_vp;
  gadgets.pubsub.subscribe($intern_79, $wnd.callback);
}

function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadgetGadgetImpl(){
}

_ = eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadgetGadgetImpl_MonitoringGadgetGadgetImpl__V.prototype = eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadgetGadgetImpl.prototype = new eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringGadget;
_.java_lang_Object_castableTypeMap$ = {};
function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_$deployApplication__Leu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_2Ljava_lang_String_2V(this$static, application){
  var bUndeploy, grid, lbApplication;
  grid = new com_google_gwt_user_client_ui_Grid_Grid__IIV;
  lbApplication = new com_google_gwt_user_client_ui_Label_Label__Ljava_lang_String_2V(application);
  com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2V(grid, 0, lbApplication);
  bUndeploy = new com_google_gwt_user_client_ui_Button_Button__Ljava_lang_String_2V;
  com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2V(grid, 1, bUndeploy);
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(bUndeploy, new eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget$1_MonitoringWidget$1__Leu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_2V(this$static, grid), (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_verticalPanel, grid);
}

function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_MonitoringWidget__V(){
  var lblDeployedApplications_1;
  this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_verticalPanel = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2V(this, this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_verticalPanel);
  lblDeployedApplications_1 = new com_google_gwt_user_client_ui_Label_Label__Ljava_lang_String_2V($intern_80);
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_verticalPanel, lblDeployedApplications_1);
  eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_$deployApplication__Leu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_2Ljava_lang_String_2V(this, $intern_81);
  eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_$deployApplication__Leu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_2Ljava_lang_String_2V(this, $intern_82);
}

function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget(){
}

_ = eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_MonitoringWidget__V.prototype = eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget.prototype = new com_google_gwt_user_client_ui_Composite;
_.java_lang_Object_castableTypeMap$ = {12:1, 13:1, 14:1, 17:1, 18:1, 21:1};
function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget$1_MonitoringWidget$1__Leu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_2V(this$0, val$grid){
  this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget$1_this$0 = this$0;
  this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget$1_val$grid = val$grid;
}

function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget$1(){
}

_ = eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget$1_MonitoringWidget$1__Leu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_2V.prototype = eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget$1.prototype = new java_lang_Object;
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event){
  com_google_gwt_user_client_ui_VerticalPanel_$remove__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget$1_this$0.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget_verticalPanel, this.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget$1_val$grid);
}
;
_.java_lang_Object_castableTypeMap$ = {3:1, 6:1};
_.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget$1_this$0 = null;
_.eu_cloud4soa_ui_samples_google_gadgets_client_MonitoringWidget$1_val$grid = null;
function java_lang_ArrayStoreException_ArrayStoreException__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function java_lang_ArrayStoreException(){
}

_ = java_lang_ArrayStoreException_ArrayStoreException__V.prototype = java_lang_ArrayStoreException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_castableTypeMap$ = {2:1, 7:1, 22:1};
function java_lang_Class_Class__V(){
}

function java_lang_Class(){
}

_ = java_lang_Class_Class__V.prototype = java_lang_Class.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {};
function java_lang_ClassCastException_ClassCastException__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function java_lang_ClassCastException(){
}

_ = java_lang_ClassCastException_ClassCastException__V.prototype = java_lang_ClassCastException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_castableTypeMap$ = {2:1, 7:1, 22:1};
function java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V(s){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function java_lang_IllegalStateException(){
}

_ = java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V.prototype = java_lang_IllegalStateException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_castableTypeMap$ = {2:1, 7:1, 22:1};
function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V(message){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function java_lang_IndexOutOfBoundsException(){
}

_ = java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V.prototype = java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V.prototype = java_lang_IndexOutOfBoundsException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_castableTypeMap$ = {2:1, 7:1, 22:1};
function java_lang_NullPointerException_NullPointerException__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(message){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function java_lang_NullPointerException(){
}

_ = java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V.prototype = java_lang_NullPointerException_NullPointerException__V.prototype = java_lang_NullPointerException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_castableTypeMap$ = {2:1, 7:1, 22:1};
function java_lang_StackTraceElement_StackTraceElement__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2IV(methodName){
}

function java_lang_StackTraceElement(){
}

_ = java_lang_StackTraceElement_StackTraceElement__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2IV.prototype = java_lang_StackTraceElement.prototype = new java_lang_Object;
_.java_lang_Object_castableTypeMap$ = {22:1, 25:1};
function java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z(this$static, other){
  if (other == null)
    return false;
  return this$static == other || this$static.toLowerCase() == other.toLowerCase();
}

function java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(this$static){
  if (this$static.length == 0 || this$static[0] > $intern_83 && this$static[this$static.length - 1] > $intern_83) {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, $intern_3);
  var r2 = r1.replace(/\s*$/, $intern_3);
  return r2;
}

_ = String.prototype;
_.equals__Ljava_lang_Object_2Z$ = function java_lang_String_equals__Ljava_lang_Object_2Z(other){
  if (!(other != null && other.java_lang_Object_castableTypeMap$ && !!other.java_lang_Object_castableTypeMap$[1])) {
    return false;
  }
  return String(this) == other;
}
;
_.hashCode__I$ = function java_lang_String_hashCode__I(){
  return java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this);
}
;
_.java_lang_Object_castableTypeMap$ = {1:1, 22:1, 23:1};
function java_lang_String$HashCache_$clinit__V(){
  java_lang_String$HashCache_$clinit__V = nullMethod;
  java_lang_String$HashCache_back = {};
  java_lang_String$HashCache_front = {};
}

function java_lang_String$HashCache_compute__Ljava_lang_String_2I(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + str.charCodeAt(i++);
  }
  return hashCode | 0;
}

function java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(str){
  java_lang_String$HashCache_$clinit__V();
  var key = $intern_84 + str;
  var result = java_lang_String$HashCache_front[key];
  if (result != null) {
    return result;
  }
  result = java_lang_String$HashCache_back[key];
  result == null && (result = java_lang_String$HashCache_compute__Ljava_lang_String_2I(str));
  java_lang_String$HashCache_increment__V();
  return java_lang_String$HashCache_front[key] = result;
}

function java_lang_String$HashCache_increment__V(){
  if (java_lang_String$HashCache_count == 256) {
    java_lang_String$HashCache_back = java_lang_String$HashCache_front;
    java_lang_String$HashCache_front = {};
    java_lang_String$HashCache_count = 0;
  }
  ++java_lang_String$HashCache_count;
}

var java_lang_String$HashCache_back, java_lang_String$HashCache_count = 0, java_lang_String$HashCache_front;
function java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V(message){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function java_lang_UnsupportedOperationException(){
}

_ = java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V.prototype = java_lang_UnsupportedOperationException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_castableTypeMap$ = {2:1, 7:1, 22:1};
function java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_util_Iterator_2Ljava_lang_Object_2Ljava_util_Iterator_2(iter, o){
  var t;
  while (iter.hasNext__Z()) {
    t = iter.next__Ljava_lang_Object_2();
    if (o == null?t == null:com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, t)) {
      return iter;
    }
  }
  return null;
}

function java_util_AbstractCollection(){
}

_ = java_util_AbstractCollection.prototype = new java_lang_Object;
_.add__Ljava_lang_Object_2Z = function java_util_AbstractCollection_add__Ljava_lang_Object_2Z(o){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V($intern_85);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractCollection_contains__Ljava_lang_Object_2Z(o){
  var iter;
  iter = java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_util_Iterator_2Ljava_lang_Object_2Ljava_util_Iterator_2(this.iterator__Ljava_util_Iterator_2(), o);
  return !!iter;
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_AbstractCollection_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(a){
  var i, it, size;
  size = this.size__I();
  a.length < size && (a = com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(a, size));
  it = this.iterator__Ljava_util_Iterator_2();
  for (i = 0; i < size; ++i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(a, i, it.next__Ljava_lang_Object_2());
  }
  a.length > size && com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(a, size, null);
  return a;
}
;
_.java_lang_Object_castableTypeMap$ = {};
function java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2Ljava_util_Set_2(this$static){
  var entrySet;
  entrySet = new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$static);
  return new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this$static, entrySet);
}

function java_util_AbstractMap(){
}

_ = java_util_AbstractMap.prototype = new java_lang_Object;
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMap_equals__Ljava_lang_Object_2Z(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!(obj != null && obj.java_lang_Object_castableTypeMap$ && !!obj.java_lang_Object_castableTypeMap$[8])) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(obj, 8);
  if (this.java_util_AbstractHashMap_size != otherMap.java_util_AbstractHashMap_size) {
    return false;
  }
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(otherMap)).java_util_AbstractHashMap$EntrySet_this$0); java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_iter);) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_iter), 26);
    otherKey = entry.getKey__Ljava_lang_Object_2();
    otherValue = entry.getValue__Ljava_lang_Object_2();
    if (!(otherKey == null?this.java_util_AbstractHashMap_nullSlotLive:otherKey != null && otherKey.java_lang_Object_castableTypeMap$ && !!otherKey.java_lang_Object_castableTypeMap$[1]?$intern_84 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(otherKey, 1) in this.java_util_AbstractHashMap_stringMap:java_util_AbstractHashMap_$hasHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2IZ(this, otherKey, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(otherKey)))) {
      return false;
    }
    if (!java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(otherValue, otherKey == null?this.java_util_AbstractHashMap_nullSlot:otherKey != null && otherKey.java_lang_Object_castableTypeMap$ && !!otherKey.java_lang_Object_castableTypeMap$[1]?this.java_util_AbstractHashMap_stringMap[$intern_84 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(otherKey, 1)]:java_util_AbstractHashMap_$getHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2ILjava_lang_Object_2(this, otherKey, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I$ = function java_util_AbstractMap_hashCode__I(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this)).java_util_AbstractHashMap$EntrySet_this$0); java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_iter);) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_iter), 26);
    hashCode += entry.hashCode__I$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}
;
_.java_lang_Object_castableTypeMap$ = {8:1};
function java_util_AbstractHashMap_$addAllHashEntries__Ljava_util_AbstractHashMap_2Ljava_util_Collection_2V(this$static, dest){
  var hashCodeMap = this$static.java_util_AbstractHashMap_hashCodeMap;
  for (var hashCode in hashCodeMap) {
    var hashCodeInt = parseInt(hashCode, 10);
    if (hashCode == hashCodeInt) {
      var array = hashCodeMap[hashCodeInt];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add__Ljava_lang_Object_2Z(array[i]);
      }
    }
  }
}

function java_util_AbstractHashMap_$addAllStringEntries__Ljava_util_AbstractHashMap_2Ljava_util_Collection_2V(this$static, dest){
  var stringMap = this$static.java_util_AbstractHashMap_stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new java_util_AbstractHashMap$MapEntryString_AbstractHashMap$MapEntryString__Ljava_util_AbstractHashMap_2Ljava_lang_String_2V(this$static, key.substring(1));
      dest.add__Ljava_lang_Object_2Z(entry);
    }
  }
}

function java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2V(this$static){
  this$static.java_util_AbstractHashMap_hashCodeMap = [];
  this$static.java_util_AbstractHashMap_stringMap = {};
  this$static.java_util_AbstractHashMap_nullSlotLive = false;
  this$static.java_util_AbstractHashMap_nullSlot = null;
  this$static.java_util_AbstractHashMap_size = 0;
}

function java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, key){
  return key == null?this$static.java_util_AbstractHashMap_nullSlotLive:key != null && key.java_lang_Object_castableTypeMap$ && !!key.java_lang_Object_castableTypeMap$[1]?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(key, 1)):java_util_AbstractHashMap_$hasHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2IZ(this$static, key, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(key));
}

function java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return key == null?this$static.java_util_AbstractHashMap_nullSlot:key != null && key.java_lang_Object_castableTypeMap$ && !!key.java_lang_Object_castableTypeMap$[1]?this$static.java_util_AbstractHashMap_stringMap[$intern_84 + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(key, 1)]:java_util_AbstractHashMap_$getHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2ILjava_lang_Object_2(this$static, key, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(key));
}

function java_util_AbstractHashMap_$getHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2ILjava_lang_Object_2(this$static, key, hashCode){
  var array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__Ljava_lang_Object_2();
      if (this$static.private$java_util_AbstractHashMap$equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entryKey)) {
        return entry.getValue__Ljava_lang_Object_2();
      }
    }
  }
  return null;
}

function java_util_AbstractHashMap_$hasHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2IZ(this$static, key, hashCode){
  var array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__Ljava_lang_Object_2();
      if (this$static.private$java_util_AbstractHashMap$equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key){
  return $intern_84 + key in this$static.java_util_AbstractHashMap_stringMap;
}

function java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value){
  return key == null?java_util_AbstractHashMap_$putNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, value):key != null && key.java_lang_Object_castableTypeMap$ && !!key.java_lang_Object_castableTypeMap$[1]?java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(key, 1), value):java_util_AbstractHashMap_$putHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2(this$static, key, value, ~~com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(key));
}

function java_util_AbstractHashMap_$putHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2ILjava_lang_Object_2(this$static, key, value, hashCode){
  var array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__Ljava_lang_Object_2();
      if (this$static.private$java_util_AbstractHashMap$equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entryKey)) {
        var previous = entry.getValue__Ljava_lang_Object_2();
        entry.setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode] = [];
  }
  var entry = new java_util_MapEntryImpl_MapEntryImpl__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value);
  array.push(entry);
  ++this$static.java_util_AbstractHashMap_size;
  return null;
}

function java_util_AbstractHashMap_$putNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, value){
  var result;
  result = this$static.java_util_AbstractHashMap_nullSlot;
  this$static.java_util_AbstractHashMap_nullSlot = value;
  if (!this$static.java_util_AbstractHashMap_nullSlotLive) {
    this$static.java_util_AbstractHashMap_nullSlotLive = true;
    ++this$static.java_util_AbstractHashMap_size;
  }
  return result;
}

function java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value){
  var result, stringMap = this$static.java_util_AbstractHashMap_stringMap;
  key = $intern_84 + key;
  key in stringMap?(result = stringMap[key]):++this$static.java_util_AbstractHashMap_size;
  stringMap[key] = value;
  return result;
}

function java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return !key?java_util_AbstractHashMap_$removeNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static):java_util_AbstractHashMap_$removeHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2ILjava_lang_Object_2(this$static, key, ~~(key.$H || (key.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId)));
}

function java_util_AbstractHashMap_$removeHashValue__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2ILjava_lang_Object_2(this$static, key, hashCode){
  var array = this$static.java_util_AbstractHashMap_hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey__Ljava_lang_Object_2();
      if (this$static.private$java_util_AbstractHashMap$equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entryKey)) {
        array.length == 1?delete this$static.java_util_AbstractHashMap_hashCodeMap[hashCode]:array.splice(i, 1);
        --this$static.java_util_AbstractHashMap_size;
        return entry.getValue__Ljava_lang_Object_2();
      }
    }
  }
  return null;
}

function java_util_AbstractHashMap_$removeNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2(this$static){
  var result;
  result = this$static.java_util_AbstractHashMap_nullSlot;
  this$static.java_util_AbstractHashMap_nullSlot = null;
  if (this$static.java_util_AbstractHashMap_nullSlotLive) {
    this$static.java_util_AbstractHashMap_nullSlotLive = false;
    --this$static.java_util_AbstractHashMap_size;
  }
  return result;
}

function java_util_AbstractHashMap(){
}

_ = java_util_AbstractHashMap.prototype = new java_util_AbstractMap;
_.private$java_util_AbstractHashMap$equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z = function java_util_AbstractHashMap_equalsBridge__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2);
}
;
_.java_lang_Object_castableTypeMap$ = {8:1};
_.java_util_AbstractHashMap_hashCodeMap = null;
_.java_util_AbstractHashMap_nullSlot = null;
_.java_util_AbstractHashMap_nullSlotLive = false;
_.java_util_AbstractHashMap_size = 0;
_.java_util_AbstractHashMap_stringMap = null;
function java_util_AbstractSet(){
}

_ = java_util_AbstractSet.prototype = new java_util_AbstractCollection;
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractSet_equals__Ljava_lang_Object_2Z(o){
  var iter, other, otherItem;
  if (o === this) {
    return true;
  }
  if (!(o != null && o.java_lang_Object_castableTypeMap$ && !!o.java_lang_Object_castableTypeMap$[27])) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, 27);
  if (other.size__I() != this.size__I()) {
    return false;
  }
  for (iter = other.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    otherItem = iter.next__Ljava_lang_Object_2();
    if (!this.contains__Ljava_lang_Object_2Z(otherItem)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I$ = function java_util_AbstractSet_hashCode__I(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    next = iter.next__Ljava_lang_Object_2();
    if (next != null) {
      hashCode += com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}
;
_.java_lang_Object_castableTypeMap$ = {27:1};
function java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  var entry, key, value;
  if (o != null && o.java_lang_Object_castableTypeMap$ && !!o.java_lang_Object_castableTypeMap$[26]) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, 26);
    key = entry.getKey__Ljava_lang_Object_2();
    if (java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static.java_util_AbstractHashMap$EntrySet_this$0, key)) {
      value = java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySet_this$0, key);
      return java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(entry.getValue__Ljava_lang_Object_2(), value);
    }
  }
  return false;
}

function java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySet_this$0 = this$0;
}

function java_util_AbstractHashMap$EntrySet(){
}

_ = java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V.prototype = java_util_AbstractHashMap$EntrySet.prototype = new java_util_AbstractSet;
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractHashMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractHashMap$EntrySet_this$0);
}
;
_.size__I = function java_util_AbstractHashMap$EntrySet_size__I(){
  return this.java_util_AbstractHashMap$EntrySet_this$0.java_util_AbstractHashMap_size;
}
;
_.java_lang_Object_castableTypeMap$ = {27:1};
_.java_util_AbstractHashMap$EntrySet_this$0 = null;
function java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this$0){
  var list;
  list = new java_util_ArrayList_ArrayList__V;
  this$0.java_util_AbstractHashMap_nullSlotLive && java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(list, new java_util_AbstractHashMap$MapEntryNull_AbstractHashMap$MapEntryNull__Ljava_util_AbstractHashMap_2V(this$0));
  java_util_AbstractHashMap_$addAllStringEntries__Ljava_util_AbstractHashMap_2Ljava_util_Collection_2V(this$0, list);
  java_util_AbstractHashMap_$addAllHashEntries__Ljava_util_AbstractHashMap_2Ljava_util_Collection_2V(this$0, list);
  this.java_util_AbstractHashMap$EntrySetIterator_iter = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(list);
}

function java_util_AbstractHashMap$EntrySetIterator(){
}

_ = java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V.prototype = java_util_AbstractHashMap$EntrySetIterator.prototype = new java_lang_Object;
_.hasNext__Z = function java_util_AbstractHashMap$EntrySetIterator_hasNext__Z(){
  return java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(this.java_util_AbstractHashMap$EntrySetIterator_iter);
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractHashMap$EntrySetIterator_next__Ljava_lang_Object_2(){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$EntrySetIterator_iter), 26);
}
;
_.java_lang_Object_castableTypeMap$ = {};
_.java_util_AbstractHashMap$EntrySetIterator_iter = null;
function java_util_AbstractMapEntry(){
}

_ = java_util_AbstractMapEntry.prototype = new java_lang_Object;
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMapEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (other != null && other.java_lang_Object_castableTypeMap$ && !!other.java_lang_Object_castableTypeMap$[26]) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(other, 26);
    if (java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.getKey__Ljava_lang_Object_2(), entry.getKey__Ljava_lang_Object_2()) && java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.getValue__Ljava_lang_Object_2(), entry.getValue__Ljava_lang_Object_2())) {
      return true;
    }
  }
  return false;
}
;
_.hashCode__I$ = function java_util_AbstractMapEntry_hashCode__I(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  this.getKey__Ljava_lang_Object_2() != null && (keyHash = com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(this.getKey__Ljava_lang_Object_2()));
  this.getValue__Ljava_lang_Object_2() != null && (valueHash = com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(this.getValue__Ljava_lang_Object_2()));
  return keyHash ^ valueHash;
}
;
_.java_lang_Object_castableTypeMap$ = {26:1};
function java_util_AbstractHashMap$MapEntryNull_AbstractHashMap$MapEntryNull__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$MapEntryNull_this$0 = this$0;
}

function java_util_AbstractHashMap$MapEntryNull(){
}

_ = java_util_AbstractHashMap$MapEntryNull_AbstractHashMap$MapEntryNull__Ljava_util_AbstractHashMap_2V.prototype = java_util_AbstractHashMap$MapEntryNull.prototype = new java_util_AbstractMapEntry;
_.getKey__Ljava_lang_Object_2 = function java_util_AbstractHashMap$MapEntryNull_getKey__Ljava_lang_Object_2(){
  return null;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_AbstractHashMap$MapEntryNull_getValue__Ljava_lang_Object_2(){
  return this.java_util_AbstractHashMap$MapEntryNull_this$0.java_util_AbstractHashMap_nullSlot;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractHashMap$MapEntryNull_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(object){
  return java_util_AbstractHashMap_$putNullSlot__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$MapEntryNull_this$0, object);
}
;
_.java_lang_Object_castableTypeMap$ = {26:1};
_.java_util_AbstractHashMap$MapEntryNull_this$0 = null;
function java_util_AbstractHashMap$MapEntryString_AbstractHashMap$MapEntryString__Ljava_util_AbstractHashMap_2Ljava_lang_String_2V(this$0, key){
  this.java_util_AbstractHashMap$MapEntryString_this$0 = this$0;
  this.java_util_AbstractHashMap$MapEntryString_key = key;
}

function java_util_AbstractHashMap$MapEntryString(){
}

_ = java_util_AbstractHashMap$MapEntryString_AbstractHashMap$MapEntryString__Ljava_util_AbstractHashMap_2Ljava_lang_String_2V.prototype = java_util_AbstractHashMap$MapEntryString.prototype = new java_util_AbstractMapEntry;
_.getKey__Ljava_lang_Object_2 = function java_util_AbstractHashMap$MapEntryString_getKey__Ljava_lang_Object_2(){
  return this.java_util_AbstractHashMap$MapEntryString_key;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_AbstractHashMap$MapEntryString_getValue__Ljava_lang_Object_2(){
  return this.java_util_AbstractHashMap$MapEntryString_this$0.java_util_AbstractHashMap_stringMap[$intern_84 + this.java_util_AbstractHashMap$MapEntryString_key];
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractHashMap$MapEntryString_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(object){
  return java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$MapEntryString_this$0, this.java_util_AbstractHashMap$MapEntryString_key, object);
}
;
_.java_lang_Object_castableTypeMap$ = {26:1};
_.java_util_AbstractHashMap$MapEntryString_key = null;
_.java_util_AbstractHashMap$MapEntryString_this$0 = null;
function java_util_AbstractList_checkIndex__IIV(index, size){
  (index < 0 || index >= size) && java_util_AbstractList_indexOutOfBounds__IIV(index, size);
}

function java_util_AbstractList_indexOutOfBounds__IIV(index, size){
  throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_86 + index + $intern_87 + size);
}

function java_util_AbstractList(){
}

_ = java_util_AbstractList.prototype = new java_util_AbstractCollection;
_.add__Ljava_lang_Object_2Z = function java_util_AbstractList_add__Ljava_lang_Object_2Z(obj){
  this.add__ILjava_lang_Object_2V(this.size__I(), obj);
  return true;
}
;
_.add__ILjava_lang_Object_2V = function java_util_AbstractList_add__ILjava_lang_Object_2V(index, element){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V($intern_88);
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractList_equals__Ljava_lang_Object_2Z(o){
  var elem, elemOther, iter, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!(o != null && o.java_lang_Object_castableTypeMap$ && !!o.java_lang_Object_castableTypeMap$[9])) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(o, 9);
  if (this.size__I() != other.size__I()) {
    return false;
  }
  iter = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this);
  iterOther = other.iterator__Ljava_util_Iterator_2();
  while (iter.java_util_AbstractList$IteratorImpl_i < iter.java_util_AbstractList$IteratorImpl_this$0.size__I()) {
    elem = java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(iter);
    elemOther = java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(iterOther);
    if (!(elem == null?elemOther == null:com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I$ = function java_util_AbstractList_hashCode__I(){
  var iter, k, obj;
  k = 1;
  iter = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this);
  while (iter.java_util_AbstractList$IteratorImpl_i < iter.java_util_AbstractList$IteratorImpl_this$0.size__I()) {
    obj = java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(iter);
    k = 31 * k + (obj == null?0:com_google_gwt_core_client_JavaScriptObject_hashCode_1_1devirtual$__Ljava_lang_Object_2I(obj));
    k = ~~k;
  }
  return k;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractList_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this);
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_AbstractList_listIterator__Ljava_util_ListIterator_2(){
  return new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, 0);
}
;
_.listIterator__ILjava_util_ListIterator_2 = function java_util_AbstractList_listIterator__ILjava_util_ListIterator_2(from){
  return new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, from);
}
;
_.java_lang_Object_castableTypeMap$ = {9:1};
function java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(this$static){
  return this$static.java_util_AbstractList$IteratorImpl_i < this$static.java_util_AbstractList$IteratorImpl_this$0.size__I();
}

function java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(this$static){
  if (this$static.java_util_AbstractList$IteratorImpl_i >= this$static.java_util_AbstractList$IteratorImpl_this$0.size__I()) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  return this$static.java_util_AbstractList$IteratorImpl_this$0.get__ILjava_lang_Object_2(this$static.java_util_AbstractList$IteratorImpl_i++);
}

function java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$0){
  this.java_util_AbstractList$IteratorImpl_this$0 = this$0;
}

function java_util_AbstractList$IteratorImpl(){
}

_ = java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V.prototype = java_util_AbstractList$IteratorImpl.prototype = new java_lang_Object;
_.hasNext__Z = function java_util_AbstractList$IteratorImpl_hasNext__Z(){
  return this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$0.size__I();
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractList$IteratorImpl_next__Ljava_lang_Object_2(){
  return java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(this);
}
;
_.java_lang_Object_castableTypeMap$ = {};
_.java_util_AbstractList$IteratorImpl_i = 0;
_.java_util_AbstractList$IteratorImpl_this$0 = null;
function java_util_AbstractList$ListIteratorImpl_$previous__Ljava_util_AbstractList$ListIteratorImpl_2Ljava_lang_Object_2(this$static){
  if (this$static.java_util_AbstractList$IteratorImpl_i <= 0) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  return this$static.java_util_AbstractList$ListIteratorImpl_this$0.get__ILjava_lang_Object_2(--this$static.java_util_AbstractList$IteratorImpl_i);
}

function java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this$0, start){
  var size;
  this.java_util_AbstractList$ListIteratorImpl_this$0 = this$0;
  this.java_util_AbstractList$IteratorImpl_this$0 = this$0;
  size = this$0.size__I();
  (start < 0 || start > size) && java_util_AbstractList_indexOutOfBounds__IIV(start, size);
  this.java_util_AbstractList$IteratorImpl_i = start;
}

function java_util_AbstractList$ListIteratorImpl(){
}

_ = java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV.prototype = java_util_AbstractList$ListIteratorImpl.prototype = new java_util_AbstractList$IteratorImpl;
_.java_lang_Object_castableTypeMap$ = {};
_.java_util_AbstractList$ListIteratorImpl_this$0 = null;
function java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this$0, val$entrySet){
  this.java_util_AbstractMap$1_this$0 = this$0;
  this.java_util_AbstractMap$1_val$entrySet = val$entrySet;
}

function java_util_AbstractMap$1(){
}

_ = java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V.prototype = java_util_AbstractMap$1.prototype = new java_util_AbstractSet;
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_contains__Ljava_lang_Object_2Z(key){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$0, key);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractMap$1_iterator__Ljava_util_Iterator_2(){
  var java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0;
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0 = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractMap$1_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0) , new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0);
}
;
_.size__I = function java_util_AbstractMap$1_size__I(){
  return this.java_util_AbstractMap$1_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0.java_util_AbstractHashMap_size;
}
;
_.java_lang_Object_castableTypeMap$ = {27:1};
_.java_util_AbstractMap$1_this$0 = null;
_.java_util_AbstractMap$1_val$entrySet = null;
function java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(val$outerIter){
  this.java_util_AbstractMap$1$1_val$outerIter = val$outerIter;
}

function java_util_AbstractMap$1$1(){
}

_ = java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V.prototype = java_util_AbstractMap$1$1.prototype = new java_lang_Object;
_.hasNext__Z = function java_util_AbstractMap$1$1_hasNext__Z(){
  return java_util_AbstractList$IteratorImpl_$hasNext__Ljava_util_AbstractList$IteratorImpl_2Z(this.java_util_AbstractMap$1$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter);
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractMap$1$1_next__Ljava_lang_Object_2(){
  var entry;
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(java_util_AbstractList$IteratorImpl_$next__Ljava_util_AbstractList$IteratorImpl_2Ljava_lang_Object_2(this.java_util_AbstractMap$1$1_val$outerIter.java_util_AbstractHashMap$EntrySetIterator_iter), 26);
  return entry.getKey__Ljava_lang_Object_2();
}
;
_.java_lang_Object_castableTypeMap$ = {};
_.java_util_AbstractMap$1$1_val$outerIter = null;
function java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_ArrayList_array, this$static.java_util_ArrayList_size++, o);
  return true;
}

function java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index){
  java_util_AbstractList_checkIndex__IIV(index, this$static.java_util_ArrayList_size);
  return this$static.java_util_ArrayList_array[index];
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, index){
  for (; index < this$static.java_util_ArrayList_size; ++index) {
    if (java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, this$static.java_util_ArrayList_array[index])) {
      return index;
    }
  }
  return -1;
}

function java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static, index, o){
  var previous;
  previous = (java_util_AbstractList_checkIndex__IIV(index, this$static.java_util_ArrayList_size) , this$static.java_util_ArrayList_array[index]);
  com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_ArrayList_array, index, o);
  return previous;
}

function java_util_ArrayList_ArrayList__V(){
  this.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Object_12_1classLit, {22:1}, 0, 0, 0);
}

function java_util_ArrayList(){
}

_ = java_util_ArrayList_ArrayList__V.prototype = java_util_ArrayList.prototype = new java_util_AbstractList;
_.add__Ljava_lang_Object_2Z = function java_util_ArrayList_add__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(this.java_util_ArrayList_array, this.java_util_ArrayList_size++, o) , true;
}
;
_.add__ILjava_lang_Object_2V = function java_util_ArrayList_add__ILjava_lang_Object_2V(index, o){
  (index < 0 || index > this.java_util_ArrayList_size) && java_util_AbstractList_indexOutOfBounds__IIV(index, this.java_util_ArrayList_size);
  this.java_util_ArrayList_array.splice(index, 0, o);
  ++this.java_util_ArrayList_size;
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_ArrayList_get__ILjava_lang_Object_2(index){
  return java_util_AbstractList_checkIndex__IIV(index, this.java_util_ArrayList_size) , this.java_util_ArrayList_array[index];
}
;
_.size__I = function java_util_ArrayList_size__I(){
  return this.java_util_ArrayList_size;
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_ArrayList_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(out){
  var i, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_a_0, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_result_0;
  out.length < this.java_util_ArrayList_size && (out = (com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_a_0 = out , com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_result_0 = com_google_gwt_lang_Array_createFromSeed__IILcom_google_gwt_lang_Array_2(0, this.java_util_ArrayList_size) , com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_a_0.com_google_gwt_lang_Array_arrayClass$, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_a_0.java_lang_Object_castableTypeMap$, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_a_0.com_google_gwt_lang_Array_queryId$, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_result_0) , com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_result_0));
  for (i = 0; i < this.java_util_ArrayList_size; ++i) {
    com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(out, i, this.java_util_ArrayList_array[i]);
  }
  out.length > this.java_util_ArrayList_size && com_google_gwt_lang_Array_setCheck__Lcom_google_gwt_lang_Array_2ILjava_lang_Object_2Ljava_lang_Object_2(out, this.java_util_ArrayList_size, null);
  return out;
}
;
_.java_lang_Object_castableTypeMap$ = {9:1, 22:1};
_.java_util_ArrayList_size = 0;
function java_util_Collections_$clinit__V(){
  java_util_Collections_$clinit__V = nullMethod;
  java_util_Collections_EMPTY_1LIST = new java_util_Collections$EmptyList_Collections$EmptyList__V;
}

var java_util_Collections_EMPTY_1LIST;
function java_util_Collections$EmptyList_Collections$EmptyList__V(){
}

function java_util_Collections$EmptyList(){
}

_ = java_util_Collections$EmptyList_Collections$EmptyList__V.prototype = java_util_Collections$EmptyList.prototype = new java_util_AbstractList;
_.contains__Ljava_lang_Object_2Z = function java_util_Collections$EmptyList_contains__Ljava_lang_Object_2Z(object){
  return false;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Collections$EmptyList_get__ILjava_lang_Object_2(location){
  throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
}
;
_.size__I = function java_util_Collections$EmptyList_size__I(){
  return 0;
}
;
_.java_lang_Object_castableTypeMap$ = {9:1, 22:1};
function java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2);
}

function java_util_HashMap_HashMap__V(){
  java_util_AbstractHashMap_$clearImpl__Ljava_util_AbstractHashMap_2V(this);
}

function java_util_HashMap(){
}

_ = java_util_HashMap_HashMap__V.prototype = java_util_HashMap.prototype = new java_util_AbstractHashMap;
_.java_lang_Object_castableTypeMap$ = {8:1, 22:1};
function java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  var old;
  old = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashSet_map, o, this$static);
  return old == null;
}

function java_util_HashSet_HashSet__V(){
  this.java_util_HashSet_map = new java_util_HashMap_HashMap__V;
}

function java_util_HashSet(){
}

_ = java_util_HashSet_HashSet__V.prototype = java_util_HashSet.prototype = new java_util_AbstractSet;
_.add__Ljava_lang_Object_2Z = function java_util_HashSet_add__Ljava_lang_Object_2Z(o){
  var java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z_old_0;
  return java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z_old_0 = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_HashSet_map, o, this) , java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z_old_0 == null;
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_HashSet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_HashSet_map, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_HashSet_iterator__Ljava_util_Iterator_2(){
  var java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0;
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0 = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(java_util_AbstractMap_$keySet__Ljava_util_AbstractMap_2Ljava_util_Set_2(this.java_util_HashSet_map).java_util_AbstractMap$1_val$entrySet.java_util_AbstractHashMap$EntrySet_this$0) , new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0);
}
;
_.size__I = function java_util_HashSet_size__I(){
  return this.java_util_HashSet_map.java_util_AbstractHashMap_size;
}
;
_.java_lang_Object_castableTypeMap$ = {22:1, 27:1};
_.java_util_HashSet_map = null;
function java_util_MapEntryImpl_MapEntryImpl__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value){
  this.java_util_MapEntryImpl_key = key;
  this.java_util_MapEntryImpl_value = value;
}

function java_util_MapEntryImpl(){
}

_ = java_util_MapEntryImpl_MapEntryImpl__Ljava_lang_Object_2Ljava_lang_Object_2V.prototype = java_util_MapEntryImpl.prototype = new java_util_AbstractMapEntry;
_.getKey__Ljava_lang_Object_2 = function java_util_MapEntryImpl_getKey__Ljava_lang_Object_2(){
  return this.java_util_MapEntryImpl_key;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_MapEntryImpl_getValue__Ljava_lang_Object_2(){
  return this.java_util_MapEntryImpl_value;
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_MapEntryImpl_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value){
  var old;
  old = this.java_util_MapEntryImpl_value;
  this.java_util_MapEntryImpl_value = value;
  return old;
}
;
_.java_lang_Object_castableTypeMap$ = {26:1};
_.java_util_MapEntryImpl_key = null;
_.java_util_MapEntryImpl_value = null;
function java_util_NoSuchElementException_NoSuchElementException__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
}

function java_util_NoSuchElementException(){
}

_ = java_util_NoSuchElementException_NoSuchElementException__V.prototype = java_util_NoSuchElementException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_castableTypeMap$ = {2:1, 7:1, 22:1};
function java_util_Utility_equalsWithNullCheck__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b){
  return (a == null?null:a) === (b == null?null:b) || a != null && com_google_gwt_core_client_JavaScriptObject_equals_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b);
}

var $entry = com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
function gwtOnLoad(errFn, modName, modBase, softPermutationId){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(com_google_gwt_lang_EntryMethodHolder_init__V)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(com_google_gwt_lang_EntryMethodHolder_init__V)();
  }
}

var com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1StackTraceElement_12_1classLit = new java_lang_Class_Class__V, com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Throwable_12_1classLit = new java_lang_Class_Class__V, com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit = new java_lang_Class_Class__V, com_google_gwt_lang_ClassLiteralHolder__13Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit = new java_lang_Class_Class__V, com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Object_12_1classLit = new java_lang_Class_Class__V;
$stats && $stats({moduleName:'monitoringgadget',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if (monitoringgadget && monitoringgadget.onScriptLoad)monitoringgadget.onScriptLoad(gwtOnLoad);
})();