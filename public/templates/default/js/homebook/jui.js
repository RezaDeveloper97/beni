
/* jquery-ui.min.js */

/* 1  */ /*! jQuery UI - v1.12.0 - 2016-07-08
/* 2  *| * http://jqueryui.com
/* 3  *| * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
/* 4  *| * Copyright jQuery Foundation and other contributors; Licensed MIT */
/* 5  */ 
/* 6  */ (function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(m.inline?m.dpDiv.parent()[0]:m.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.0";var h=0,l=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},h=e.split(".")[0];e=e.split(".")[1];var l=h+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[h]=t[h]||{},n=t[h][e],o=t[h][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:h,widgetName:e,widgetFullName:l}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,n=l.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=l.call(arguments,1),r=this;return o?this.each(function(){var i,o=t.data(this,s);return"instance"===n?(r=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,c=h[2];c?n.on(l,c,r):i.on(l,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o,a=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;o=function(){var e=t("<div>").css("position","absolute").appendTo("body").offset({top:1.5,left:1.5}),i=1.5===e.offset().top;return e.remove(),o=function(){return i},i},t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=t.extend({},n);var p,g,m,_,v,b,y=t(n.of),w=t.position.getWithinInfo(n.within),k=t.position.getScrollInfo(w),x=(n.collision||"flip").split(" "),C={};return b=s(y),y[0].preventDefault&&(n.at="left top"),g=b.width,m=b.height,_=b.offset,v=t.extend({},_),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):c.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=c.test(i[1])?i[1]:"center",t=u.exec(i[0]),e=u.exec(i[1]),C[this]=[t?t[0]:0,e?e[0]:0],n[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===n.at[0]?v.left+=g:"center"===n.at[0]&&(v.left+=g/2),"bottom"===n.at[1]?v.top+=m:"center"===n.at[1]&&(v.top+=m/2),p=e(C.at,g,m),v.left+=p[0],v.top+=p[1],this.each(function(){var s,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=u+f+i(this,"marginRight")+k.width,I=d+b+i(this,"marginBottom")+k.height,T=t.extend({},v),P=e(C.my,c.outerWidth(),c.outerHeight());"right"===n.my[0]?T.left-=u:"center"===n.my[0]&&(T.left-=u/2),"bottom"===n.my[1]?T.top-=d:"center"===n.my[1]&&(T.top-=d/2),T.left+=P[0],T.top+=P[1],o()||(T.left=h(T.left),T.top=h(T.top)),s={marginLeft:f,marginTop:b},t.each(["left","top"],function(e,i){t.ui.position[x[e]]&&t.ui.position[x[e]][i](T,{targetWidth:g,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:s,collisionWidth:D,collisionHeight:I,offset:[p[0]+P[0],p[1]+P[1]],my:n.my,at:n.at,within:w,elem:c})}),n.using&&(l=function(t){var e=_.left-T.left,i=e+g-u,s=_.top-T.top,o=s+m-d,h={target:{element:y,left:_.left,top:_.top,width:g,height:m},element:{element:c,left:T.left,top:T.top,width:u,height:d},horizontal:0>i?"left":e>0?"right":"center",vertical:0>o?"top":s>0?"bottom":"middle"};u>g&&g>r(e+i)&&(h.horizontal="center"),d>m&&m>r(s+o)&&(h.vertical="middle"),h.important=a(r(e),r(i))>a(r(s),r(o))?"horizontal":"vertical",n.using.call(this,t,h)}),c.offset(t.extend(T,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-o-n;e.collisionWidth>o?h>0&&0>=l?(i=t.left+h+e.collisionWidth-o-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+o-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-o-n;e.collisionHeight>o?h>0&&0>=l?(i=t.top+h+e.collisionHeight-o-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+o-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-a-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-a-o,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-a-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-a-o,(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}});var c="ui-effects-",u="ui-effects-style",d="ui-effects-animated",p=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[c[l].cache]=a[c[l].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],c=u[n.type]||{};null!==l&&(null===a?h[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),h[o]=i((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[a]=d,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(p),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function i(e,i){var s,o,a={};for(s in i)o=i[s],e[s]!==o&&(n[s]||(t.fx.step[s]||!isNaN(parseFloat(o)))&&(a[s]=o));return a}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(p.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(s,function(t,e){n[e]&&a[e+"Class"](n[e])})},o(),l=l.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}function s(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=n.exec(t)||["",0,i,s,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?s:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(d)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,e){for(var i=0,s=e.length;s>i;i++)null!==e[i]&&t.data(c+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,s=0,n=e.length;n>s;s++)null!==e[s]&&(i=t.data(c+e[s]),t.css(e[s],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.0",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(u,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(u)||"",t.removeData(u)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(e){var i,s=e.css("position"),n=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(s)&&(s="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(c+"placeholder",i)),e.css({position:s,left:n.left,top:n.top}),i},removePlaceholder:function(t){var e=c+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(d),t.effects.cleanUp(r),"hide"===s.mode&&r.hide(),a()}function a(){t.isFunction(h)&&h.call(r[0]),t.isFunction(e)&&e()}var r=t(this);s.mode=c.shift(),t.uiBackCompat===!1||o?"none"===s.mode?(r[l](),a()):n.call(r[0],s,i):(r.is(":hidden")?"hide"===l:"show"===l)?(r[l](),a()):n.call(r[0],s,a)}var s=e.apply(this,arguments),n=t.effects.effect[s.effect],o=n.mode,a=s.queue,r=a||"fx",h=s.complete,l=s.mode,c=[],u=function(e){var i=t(this),s=t.effects.mode(i,l)||o;i.data(d,!0),c.push(s),o&&("show"===s||s===o&&"hide"===s)&&i.show(),o&&"none"===s||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!n?l?this[l](s.duration,h):this.each(function(){h&&h.call(this)}):a===!1?this.each(u).each(i):this.queue(r,u).queue(r,i)},show:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);
/* 7  */ var n=e.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||"boolean"==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer:function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();var f=t.effects;t.effects.define("blind","hide",function(e,i){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=t(this),o=e.direction||"up",a=n.cssClip(),r={clip:t.extend({},a)},h=t.effects.createPlaceholder(n);r.clip[s[o][0]]=r.clip[s[o][1]],"show"===e.mode&&(n.cssClip(r.clip),h&&h.css(t.effects.clipToBox(r)),r.clip=a),h&&h.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var s,n,o,a=t(this),r=e.mode,h="hide"===r,l="show"===r,c=e.direction||"up",u=e.distance,d=e.times||5,p=2*d+(l||h?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",_="up"===c||"left"===c,v=0,b=a.queue().length;for(t.effects.createPlaceholder(a),o=a.css(m),u||(u=a["top"===m?"outerHeight":"outerWidth"]()/3),l&&(n={opacity:1},n[m]=o,a.css("opacity",0).css(m,_?2*-u:2*u).animate(n,f,g)),h&&(u/=Math.pow(2,d-1)),n={},n[m]=o;d>v;v++)s={},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g).animate(n,f,g),u=h?2*u:u/2;h&&(s={opacity:0},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g)),a.queue(i),t.effects.unshift(a,b,p+1)}),t.effects.define("clip","hide",function(e,i){var s,n={},o=t(this),a=e.direction||"vertical",r="both"===a,h=r||"horizontal"===a,l=r||"vertical"===a;s=o.cssClip(),n.clip={top:l?(s.bottom-s.top)/2:s.top,right:h?(s.right-s.left)/2:s.right,bottom:l?(s.bottom-s.top)/2:s.bottom,left:h?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(o),"show"===e.mode&&(o.cssClip(n.clip),n.clip=s),o.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var s,n=t(this),o=e.mode,a="show"===o,r=e.direction||"left",h="up"===r||"down"===r?"top":"left",l="up"===r||"left"===r?"-=":"+=",c="+="===l?"-=":"+=",u={opacity:0};t.effects.createPlaceholder(n),s=e.distance||n["top"===h?"outerHeight":"outerWidth"](!0)/2,u[h]=l+s,a&&(n.css(u),u[h]=c+s,u.opacity=1),n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),i()}var o,a,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),_=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(h=m.top+o*v,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*_,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*_,top:-o*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:_,height:v,left:r+(g?l*_:0),top:h+(g?c*v:0),opacity:g?0:1}).animate({left:r+(g?0:l*_),top:h+(g?0:c*v),opacity:g?1:0},e.duration||500,e.easing,s)}),t.effects.define("fade","toggle",function(e,i){var s="show"===e.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=e.size||15,h=/([0-9]+)%/.exec(r),l=!!e.horizFirst,c=l?["right","bottom"]:["bottom","right"],u=e.duration/2,d=t.effects.createPlaceholder(s),p=s.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],_=s.queue().length;h&&(r=parseInt(h[1],10)/100*m[a?0:1]),f.clip[c[0]]=r,g.clip[c[0]]=r,g.clip[c[1]]=0,o&&(s.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),s.queue(function(i){d&&d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i()}).animate(f,u,e.easing).animate(g,u,e.easing).queue(i),t.effects.unshift(s,_,4)}),t.effects.define("highlight","show",function(e,i){var s=t(this),n={backgroundColor:s.css("backgroundColor")};"hide"===e.mode&&(n.opacity=0),t.effects.saveStyle(s),s.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var s,n,o,a=t(this),r=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],l=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,u="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=a.css("position"),g=a.position(),m=t.effects.scaledDimensions(a),_=e.from||m,v=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),"show"===c&&(o=_,_=v,v=o),n={from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:v.width/m.width}},("box"===d||"both"===d)&&(n.from.y!==n.to.y&&(_=t.effects.setTransition(a,h,n.from.y,_),v=t.effects.setTransition(a,h,n.to.y,v)),n.from.x!==n.to.x&&(_=t.effects.setTransition(a,l,n.from.x,_),v=t.effects.setTransition(a,l,n.to.x,v))),("content"===d||"both"===d)&&n.from.y!==n.to.y&&(_=t.effects.setTransition(a,r,n.from.y,_),v=t.effects.setTransition(a,r,n.to.y,v)),p&&(s=t.effects.getBaseline(p,m),_.top=(m.outerHeight-_.outerHeight)*s.y+g.top,_.left=(m.outerWidth-_.outerWidth)*s.x+g.left,v.top=(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=(m.outerWidth-v.outerWidth)*s.x+g.left),a.css(_),("content"===d||"both"===d)&&(h=h.concat(["marginTop","marginBottom"]).concat(r),l=l.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(){var i=t(this),s=t.effects.scaledDimensions(i),o={height:s.height*n.from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth:s.outerWidth*n.from.x},a={height:s.height*n.to.y,width:s.width*n.to.x,outerHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!==n.to.y&&(o=t.effects.setTransition(i,h,n.from.y,o),a=t.effects.setTransition(i,h,n.to.y,a)),n.from.x!==n.to.x&&(o=t.effects.setTransition(i,l,n.from.x,o),a=t.effects.setTransition(i,l,n.to.x,a)),u&&t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,function(){u&&t.effects.restoreStyle(i)})})),a.animate(v,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===v.opacity&&a.css("opacity",_.opacity),u||(a.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(a)),i()}})}),t.effects.define("scale",function(e,i){var s=t(this),n=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==n?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDimensions(s,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i)}),t.effects.define("puff","hide",function(e,i){var s=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,s,i)}),t.effects.define("pulsate","show",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=o||a,h=2*(e.times||5)+(r?1:0),l=e.duration/h,c=0,u=1,d=s.queue().length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),c=1);h>u;u++)s.animate({opacity:c},l,e.easing),c=1-c;s.animate({opacity:c},l,e.easing),s.queue(i),t.effects.unshift(s,d,h+1)}),t.effects.define("shake",function(e,i){var s=1,n=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,h=2*r+1,l=Math.round(e.duration/h),c="up"===o||"down"===o?"top":"left",u="up"===o||"left"===o,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[c]=(u?"-=":"+=")+a,p[c]=(u?"+=":"-=")+2*a,f[c]=(u?"-=":"+=")+2*a,n.animate(d,l,e.easing);r>s;s++)n.animate(p,l,e.easing).animate(f,l,e.easing);n.animate(p,l,e.easing).animate(d,l/2,e.easing).queue(i),t.effects.unshift(n,g,h+1)}),t.effects.define("slide","show",function(e,i){var s,n,o=t(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u=e.distance||o["top"===l?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(o),s=o.cssClip(),n=o.position()[l],d[l]=(c?-1:1)*u+n,d.clip=o.cssClip(),d.clip[a[h][1]]=d.clip[a[h][0]],"show"===r&&(o.cssClip(d.clip),o.css(l,d[l]),d.clip=s,d[l]=n),o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});var f;t.uiBackCompat!==!1&&(f=t.effects.define("transfer",function(e,i){t(this).transfer(e,i)})),t.ui.focusable=function(i,s){var n,o,a,r,h,l=i.nodeName.toLowerCase();return"area"===l?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(l)?(r=!i.disabled,r&&(h=t(i).closest("fieldset")[0],h&&(r=!h.disabled))):r="a"===l?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.widget("ui.accordion",{version:"1.12.0",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],h=r&&n.collapsible,l=h?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:h?t():a,newPanel:l};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=h?!1:this.headers.index(a),this.active=r?t():a,this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=a.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,o,a=this,r=0,h=t.css("box-sizing"),l=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=l&&c.down||c,d=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(this.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}}),void 0):e.animate(this.hideProps,o,n,d):t.animate(this.showProps,o,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.0",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",n=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,h=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=h.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=h.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.0",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;
/* 8  */ e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var g=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.0",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(s,n){var o,a={};return n?"controlgroupLabel"===s?(o=e.element.find(n),o.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),i=i.concat(o.get()),void 0):(t.fn[s]&&(e["_"+s+"Options"]&&(a=e["_"+s+"Options"]("middle")),e.element.find(n).each(function(){var n=t(this),o=n[s]("instance"),r=t.widget.extend({},a);if("button"!==s||!n.parent(".ui-spinner").length){o||(o=n[s]()[s]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),n[s](r);var h=n[s]("widget");t.data(h[0],"ui-controlgroup-data",o?o:n[s]("instance")),i.push(h[0])}})),void 0):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),s=i.data("ui-controlgroup-data");s&&s[e]&&s[e]()})},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var s={};return t.each(e,function(t){var n=i.options.classes[t]||"";n=n.replace(g,"").trim(),s[t]=(n+" "+e[t]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?(this._callChildMethod(e?"disable":"enable"),void 0):(this.refresh(),void 0)},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,s){var n=e[s]().data("ui-controlgroup-data");if(n&&i["_"+n.widgetName+"Options"]){var o=i["_"+n.widgetName+"Options"](1===e.length?"only":s);o.classes=i._resolveClassesValues(o.classes,n),n.element[n.widgetName](o)}else i._updateCornerClass(e[s](),s)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.0",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,n=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element).each(function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(n.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(n.disabled=e),n},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e,void 0):(this.refresh(),void 0)):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){this.label.contents().not(this.element.add(this.icon).add(this.iconSpace)).remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.0",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var s="iconPosition"!==e,n=s?this.options.iconPosition:i,o="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(n),o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?(this._super("showLabel",e),void 0):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.0"}});var m;t.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,o){var r,h,l,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+c,l/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),m===n&&(m=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,o,r,h,l=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):l?"all"===i?t.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),a(l.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,r)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var s,n,o,r,h,l,c;s=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),o=n?n.apply(e,[e,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),h={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),h=t.datepicker._checkOffset(s,h,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),s.inline||(l=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[l]?s.dpDiv.show(l,t.datepicker._get(s,"showOptions"),c):s.dpDiv[l||"show"](l?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))
/* 9  */ }},_updateDatepicker:function(e){this.maxRows=4,m=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(h).match(o);if(!a)throw"Missing number at position "+h;return h+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],h+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+h},x=function(){if(i.charAt(h)!==e.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>h&&(a=i.substr(h),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,I,T,P,M,S,H,z,O,A,N,W,E,F,R,L=new Date,B=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),X=this._get(t,"stepMonths"),$=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&Q>e?Q:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-X,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+X,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:B,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",T="",$){if(T+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:T+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");break;case U[1]-1:T+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:T+=" ui-datepicker-group-middle",I=""}T+="'>"}for(T+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===k?Y?o:s:"")+(/all|right/.test(I)&&0===k?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,Q,J,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",P=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,P+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(T+=P+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),H=(this._getFirstDayOfMonth(te,Z)-c+7)%7,z=Math.ceil((H+S)/7),O=$?this.maxRows>z?this.maxRows:z:z,this.maxRows=O,A=this._daylightSavingAdjust(new Date(te,Z,1-H)),N=0;O>N;N++){for(T+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(A)+"</td>":"",w=0;7>w;w++)E=m?m.apply(t.input?t.input[0]:null,[A]):[!0,""],F=A.getMonth()!==Z,R=F&&!v||!E[0]||Q&&Q>A||J&&A>J,W+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(A.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===A.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+E[1]+(A.getTime()===G.getTime()?" "+this._currentClass:"")+(A.getTime()===B.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!E[2]?"":" title='"+E[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+A.getMonth()+"' data-year='"+A.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":R?"<span class='ui-state-default'>"+A.getDate()+"</span>":"<a class='ui-state-default"+(A.getTime()===B.getTime()?" ui-state-highlight":"")+(A.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+A.getDate()+"</a>")+"</td>",A.setDate(A.getDate()+1),A=this._daylightSavingAdjust(A);T+=W+"</tr>"}Z++,Z>11&&(Z=0,te++),T+="</tbody></table>"+($?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=T}y+=x}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new s,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.0",t.datepicker,t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var _=!1;t(document).on("mouseup",function(){_=!1}),t.widget("ui.mouse",{version:"1.12.0",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!_){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),_=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,_=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.0",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this._blurActiveElement(e),this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);this._getHandle(e)&&s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}
/* 10 */ },_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),h=t.pageX,l=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(h=this.originalPageX),"x"===a.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,h,l,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)h=s.snapElements[d].left-s.margins.left,l=h+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,h-g>_||m>l+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(h-_),r=g>=Math.abs(l-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(h-m),r=g>=Math.abs(l-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.0",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,h=this._change[o];return this._updatePrevProperties(),h?(i=h.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,h=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,h=this.originalPosition.top+this.originalSize.height,l=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=r-e.minWidth),s&&l&&(t.left=r-e.maxWidth),a&&c&&(t.top=h-e.minHeight),n&&c&&(t.top=h-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,h=t(this).resizable("instance"),l=h.options,c=h.element,u=l.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(h.containerElement=t(d),/document/.test(u)||u===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=h._num(e.css("padding"+s))}),h.containerOffset=e.offset(),h.containerPosition=e.position(),h.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,o=h.containerSize.width,a=h._hasScroll(d,"left")?d.scrollWidth:o,r=h._hasScroll(d)?d.scrollHeight:n,h.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?h.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-h.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-h.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,c=h[1]||1,u=Math.round((n.width-o.width)/l)*l,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=h,_&&(p+=l),v&&(f+=c),g&&(p-=l),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-l)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-l>0?(i.size.width=p,i.position.left=a.left-u):(p=l-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable,t.widget("ui.dialog",{version:"1.12.0",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog
/* 11 */ },disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.trigger("focus")}),e.preventDefault()):(this._delay(function(){s.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,o={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,t("<button></button>",s).button(o).appendTo(e.uiButtonSet).on("click",function(){n.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" "+"top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),h=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,i){var s,n,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=o.is(":data(ui-draggable)"),s&&!i&&o.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(n=o.is(":data(ui-resizable)"),n&&!i&&o.resizable("destroy"),n&&"string"==typeof i&&o.resizable("option","handles",i),n||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.droppable",{version:"1.12.0",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&v(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var v=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,h=a+e.helperProportions.height,l=i.offset.left,c=i.offset.top,u=l+i.proportions().width,d=c+i.proportions().height;switch(s){case"fit":return o>=l&&u>=r&&a>=c&&d>=h;case"intersect":return o+e.helperProportions.width/2>l&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>c&&d>h-e.helperProportions.height/2;case"pointer":return t(n.pageY,c,i.proportions().height)&&t(n.pageX,l,i.proportions().width);case"touch":return(a>=c&&d>=a||h>=c&&d>=h||c>a&&h>d)&&(o>=l&&u>=o||r>=l&&u>=r||l>o&&r>u);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&v(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=v(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===n}),o.length&&(s=t(o[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.progressbar",{version:"1.12.0",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),void 0)},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.12.0",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),s=i.offset(),n={left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,right:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(s.$element,"ui-selected"),s.selected=!1,i._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1,c={};i&&i.element!==s.element[0]&&(c.left=i.left+s.elementPos.left,c.right=i.right+s.elementPos.left,c.top=i.top+s.elementPos.top,c.bottom=i.bottom+s.elementPos.top,"touch"===n.tolerance?l=!(c.left>r||o>c.right||c.top>h||a>c.bottom):"fit"===n.tolerance&&(l=c.left>o&&r>c.right&&c.top>a&&h>c.bottom),l?(i.selected&&(s._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(s._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(s._addClass(i.$element,"ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,s._addClass(i.$element,"ui-selected"),i.selected=!0):(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=!1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.0",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,s=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(s).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var s=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger("focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var s=this,n="";t.each(i,function(i,o){var a;o.optgroup!==n&&(a=t("<li>",{text:o.optgroup}),s._addClass(a,"ui-selectmenu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),a.appendTo(e),n=o.optgroup),s._renderItemData(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var s=t("<li>"),n=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(s,null,"ui-state-disabled"),this._setText(n,i.label),s.append(n).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),n+=":not(.ui-state-disabled)"),s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0),s.length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return t===!1?(this.button.css("width",""),void 0):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t),void 0)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,s=[];e.each(function(e,n){s.push(i._parseOption(t(n),e))}),this.items=s},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.0",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1
/* 12 */ },_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.0",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,n,o,a,r,h,l,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[a],l=!1,e[u]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(e[u]-h)&&(n=Math.abs(e[u]-h),o=this.items[s],this.direction=l?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)
/* 13 */ })},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.spinner",{version:"1.12.0",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);null!=n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var e=this.element[0]===t.ui.safeActiveElement(this.document[0]);e||(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,s,n;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,this.element.val(this._format(i)),void 0):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(s=this.buttons.first().find(".ui-icon"),this._removeClass(s,null,this.options.icons.up),this._addClass(s,null,e.up),n=this.buttons.last().find(".ui-icon"),this._removeClass(n,null,this.options.icons.down),this._addClass(n,null,e.down)),this._super(t,e),void 0)},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null===t?!1:t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(r(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.uiBackCompat!==!1&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.0",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,s;i=e.href.replace(t,""),s=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return e.hash.length>1&&i===s}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each(function(i,n){return t(n).attr("aria-controls")===s?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=i?!1:0)),!i&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e),void 0)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,s){var n,o,a,r=t(s).uniqueId().attr("id"),h=t(s).closest("li"),l=h.attr("aria-controls");e._isLocal(s)?(n=s.hash,a=n.substring(1),o=e.element.find(e._sanitizeSelector(n))):(a=h.attr("aria-controls")||t({}).uniqueId()[0].id,n="#"+a,o=e.element.find(n),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,s,n;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),n=0;s=this.tabs[n];n++)i=t(s),e===!0||-1!==t.inArray(n,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,e===!0)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){o._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),o=n.find(".ui-tabs-anchor"),a=this._getPanelForTab(n),r={tab:n,panel:a},h=function(t,e){"abort"===e&&s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(n,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,n){setTimeout(function(){a.html(t),s._trigger("load",i,r),h(n,e)},1)}).fail(function(t,e){setTimeout(function(){h(t,e)},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),t.uiBackCompat!==!1&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.0",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var s=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s.element[0],e.close(n,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(e,s),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s||s.nodeType||s.jquery?this._open(e,t,s):(i=s.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=o),this._open(e,t,i))})}),i&&this._open(e,t,i),void 0)},_open:function(e,i,s){function n(t){l.of=t,a.is(":hidden")||a.position(l)}var o,a,r,h,l=t.extend({},this.options.position);if(s){if(o=this._find(i))return o.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),h=t("<div>").html(a.find(".ui-tooltip-content").html()),h.removeAttr("name").find("[name]").removeAttr("name"),h.removeAttr("id").find("[id]").removeAttr("id"),h.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:n}),n(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){a.is(":visible")&&(n(l.of),clearInterval(r))},t.fx.interval)),this._trigger("open",e,{tooltip:a})}},_registerCloseHandlers:function(e,i){var s={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(s.mouseleave="close"),e&&"focusin"!==e.type||(s.focusout="close"),this._on(!0,i,s)},close:function(e){var i,s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);return o?(i=o.tooltip,o.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),s=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(s,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur"),o=s.element;n.target=n.currentTarget=o[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),t.uiBackCompat!==!1&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip});

;
/* datepicker-tr_TR.js */

/* 1  */ /* Turkish initialisation for the jQuery UI date picker plugin. */
/* 2  */ /* Written by Izzet Emre Erkan (kara@karalamalar.net). */
/* 3  */ ( function( factory ) {
/* 4  */ 	if ( typeof define === "function" && define.amd ) {
/* 5  */ 
/* 6  */ 		// AMD. Register as an anonymous module.
/* 7  */ 		define( [ "../widgets/datepicker" ], factory );
/* 8  */ 	} else {
/* 9  */ 
/* 10 */ 		// Browser globals
/* 11 */ 		factory( jQuery.datepicker );
/* 12 */ 	}
/* 13 */ }( function( datepicker ) {
/* 14 */ 
/* 15 */ datepicker.regional.tr_TR = {
/* 16 */ 	closeText: "kapat",
/* 17 */ 	prevText: "&#x3C;geri",
/* 18 */ 	nextText: "ileri&#x3e",
/* 19 */ 	currentText: "bugün",
/* 20 */ 	monthNames: [ "Ocak","Şubat","Mart","Nisan","Mayıs","Haziran",
/* 21 */ 	"Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık" ],
/* 22 */ 	monthNamesShort: [ "Oca","Şub","Mar","Nis","May","Haz",
/* 23 */ 	"Tem","Ağu","Eyl","Eki","Kas","Ara" ],
/* 24 */ 	dayNames: [ "Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi" ],
/* 25 */ 	dayNamesShort: [ "Pz","Pt","Sa","Ça","Pe","Cu","Ct" ],
/* 26 */ 	dayNamesMin: [ "Pz","Pt","Sa","Ça","Pe","Cu","Ct" ],
/* 27 */ 	weekHeader: "Hf",
/* 28 */ 	dateFormat: "dd.mm.yy",
/* 29 */ 	firstDay: 1,
/* 30 */ 	isRTL: false,
/* 31 */ 	showMonthAfterYear: false,
/* 32 */ 	yearSuffix: "" };
/* 33 */ datepicker.setDefaults( datepicker.regional.tr_TR );
/* 34 */ 
/* 35 */ return datepicker.regional.tr_TR;
/* 36 */ 
/* 37 */ } ) );
/* 38 */ 

;
/* datepicker-en_US.js */

/* 1  */ /* English/UK initialisation for the jQuery UI date picker plugin. */
/* 2  */ /* Written by Stuart. */
/* 3  */ ( function( factory ) {
/* 4  */ 	if ( typeof define === "function" && define.amd ) {
/* 5  */ 
/* 6  */ 		// AMD. Register as an anonymous module.
/* 7  */ 		define( [ "../widgets/datepicker" ], factory );
/* 8  */ 	} else {
/* 9  */ 
/* 10 */ 		// Browser globals
/* 11 */ 		factory( jQuery.datepicker );
/* 12 */ 	}
/* 13 */ }( function( datepicker ) {
/* 14 */ 
/* 15 */ datepicker.regional[ "en_US" ] = {
/* 16 */ 	closeText: "Done",
/* 17 */ 	prevText: "Prev",
/* 18 */ 	nextText: "Next",
/* 19 */ 	currentText: "Today",
/* 20 */ 	monthNames: [ "January","February","March","April","May","June",
/* 21 */ 	"July","August","September","October","November","December" ],
/* 22 */ 	monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
/* 23 */ 	"Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
/* 24 */ 	dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
/* 25 */ 	dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
/* 26 */ 	dayNamesMin: [ "Su","Mo","Tu","We","Th","Fr","Sa" ],
/* 27 */ 	weekHeader: "Wk",
/* 28 */ 	dateFormat: "dd/mm/yy",
/* 29 */ 	firstDay: 1,
/* 30 */ 	isRTL: false,
/* 31 */ 	showMonthAfterYear: false,
/* 32 */ 	yearSuffix: "" };
/* 33 */ datepicker.setDefaults( datepicker.regional[ "en_US" ] );
/* 34 */ 
/* 35 */ return datepicker.regional[ "en_US" ];
/* 36 */ 
/* 37 */ } ) );
/* 38 */ 

;
/* datepicker-fa_FA.js */

/* 1  */ /* Persian (Farsi) Translation for the jQuery UI date picker plugin. */
/* 2  */ /* Javad Mowlanezhad -- jmowla@gmail.com */
/* 3  */ /* Jalali calendar should supported soon! (Its implemented but I have to test it) */
/* 4  */ ( function( factory ) {
/* 5  */ 	if ( typeof define === "function" && define.amd ) {
/* 6  */ 
/* 7  */ 		// AMD. Register as an anonymous module.
/* 8  */ 		define( [ "../widgets/datepicker" ], factory );
/* 9  */ 	} else {
/* 10 */ 
/* 11 */ 		// Browser globals
/* 12 */ 		factory( jQuery.datepicker );
/* 13 */ 	}
/* 14 */ }( function( datepicker ) {
/* 15 */ 
/* 16 */ datepicker.regional.fa_FA = {
/* 17 */ 	closeText: "بستن",
/* 18 */ 	prevText: "&#x3C;قبلی",
/* 19 */ 	nextText: "بعدی&#x3E;",
/* 20 */ 	currentText: "امروز",
/* 21 */ 	monthNames: [
/* 22 */ 		"ژانویه",
/* 23 */ 		"فوریه",
/* 24 */ 		"مارس",
/* 25 */ 		"آوریل",
/* 26 */ 		"مه",
/* 27 */ 		"ژوئن",
/* 28 */ 		"ژوئیه",
/* 29 */ 		"اوت",
/* 30 */ 		"سپتامبر",
/* 31 */ 		"اکتبر",
/* 32 */ 		"نوامبر",
/* 33 */ 		"دسامبر"
/* 34 */ 	],
/* 35 */ 	monthNamesShort: [ "1","2","3","4","5","6","7","8","9","10","11","12" ],
/* 36 */ 	dayNames: [
/* 37 */ 		"يکشنبه",
/* 38 */ 		"دوشنبه",
/* 39 */ 		"سه‌شنبه",
/* 40 */ 		"چهارشنبه",
/* 41 */ 		"پنجشنبه",
/* 42 */ 		"جمعه",
/* 43 */ 		"شنبه"
/* 44 */ 	],
/* 45 */ 	dayNamesShort: [
/* 46 */ 		"ی",
/* 47 */ 		"د",
/* 48 */ 		"س",
/* 49 */ 		"چ",
/* 50 */ 		"پ",

/* datepicker-fa_FA.js */

/* 51 */ 		"ج",
/* 52 */ 		"ش"
/* 53 */ 	],
/* 54 */ 	dayNamesMin: [
/* 55 */ 		"ی",
/* 56 */ 		"د",
/* 57 */ 		"س",
/* 58 */ 		"چ",
/* 59 */ 		"پ",
/* 60 */ 		"ج",
/* 61 */ 		"ش"
/* 62 */ 	],
/* 63 */ 	weekHeader: "هف",
/* 64 */ 	dateFormat: "yy/mm/dd",
/* 65 */ 	firstDay: 6,
/* 66 */ 	isRTL: true,
/* 67 */ 	showMonthAfterYear: false,
/* 68 */ 	yearSuffix: "" };
/* 69 */ datepicker.setDefaults( datepicker.regional.fa_FA );
/* 70 */ 
/* 71 */ return datepicker.regional.fa_FA;
/* 72 */ 
/* 73 */ } ) );
/* 74 */ 

;
/* jquery.cycle.all.js */

/* 1    */ /*!
/* 2    *|  * jQuery Cycle Plugin (with Transition Definitions)
/* 3    *|  * Examples and documentation at: http://jquery.malsup.com/cycle/
/* 4    *|  * Copyright (c) 2007-2010 M. Alsup
/* 5    *|  * Version: 2.9998 (27-OCT-2011)
/* 6    *|  * Dual licensed under the MIT and GPL licenses.
/* 7    *|  * http://jquery.malsup.com/license.html
/* 8    *|  * Requires: jQuery v1.3.2 or later
/* 9    *|  */
/* 10   */ ;(function($, undefined) {
/* 11   */ 
/* 12   */ var ver = '2.9998';
/* 13   */ 
/* 14   */ // if $.support is not defined (pre jQuery 1.3) add what I need
/* 15   */ if ($.support == undefined) {
/* 16   */ 	$.support = {
/* 17   */ 		opacity: !($.browser.msie)
/* 18   */ 	};
/* 19   */ }
/* 20   */ 
/* 21   */ function debug(s) {
/* 22   */ 	$.fn.cycle.debug && log(s);
/* 23   */ }		
/* 24   */ function log() {
/* 25   */ 	window.console && console.log && console.log('[cycle] ' + Array.prototype.join.call(arguments,' '));
/* 26   */ }
/* 27   */ $.expr[':'].paused = function(el) {
/* 28   */ 	return el.cyclePause;
/* 29   */ }
/* 30   */ 
/* 31   */ 
/* 32   */ // the options arg can be...
/* 33   */ //   a number  - indicates an immediate transition should occur to the given slide index
/* 34   */ //   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
/* 35   */ //   an object - properties to control the slideshow
/* 36   */ //
/* 37   */ // the arg2 arg can be...
/* 38   */ //   the name of an fx (only used in conjunction with a numeric value for 'options')
/* 39   */ //   the value true (only used in first arg == 'resume') and indicates
/* 40   */ //	 that the resume should occur immediately (not wait for next timeout)
/* 41   */ 
/* 42   */ $.fn.cycle = function(options, arg2) {
/* 43   */ 	var o = { s: this.selector, c: this.context };
/* 44   */ 
/* 45   */ 	// in 1.3+ we can fix mistakes with the ready state
/* 46   */ 	if (this.length === 0 && options != 'stop') {
/* 47   */ 		if (!$.isReady && o.s) {
/* 48   */ 			log('DOM not ready, queuing slideshow');
/* 49   */ 			$(function() {
/* 50   */ 				$(o.s,o.c).cycle(options,arg2);

/* jquery.cycle.all.js */

/* 51   */ 			});
/* 52   */ 			return this;
/* 53   */ 		}
/* 54   */ 		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
/* 55   */ 		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
/* 56   */ 		return this;
/* 57   */ 	}
/* 58   */ 
/* 59   */ 	// iterate the matched nodeset
/* 60   */ 	return this.each(function() {
/* 61   */ 		var opts = handleArguments(this, options, arg2);
/* 62   */ 		if (opts === false)
/* 63   */ 			return;
/* 64   */ 
/* 65   */ 		opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
/* 66   */ 		
/* 67   */ 		// stop existing slideshow for this container (if there is one)
/* 68   */ 		if (this.cycleTimeout)
/* 69   */ 			clearTimeout(this.cycleTimeout);
/* 70   */ 		this.cycleTimeout = this.cyclePause = 0;
/* 71   */ 
/* 72   */ 		var $cont = $(this);
/* 73   */ 		var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
/* 74   */ 		var els = $slides.get();
/* 75   */ 
/* 76   */ 		var opts2 = buildOptions($cont, $slides, els, opts, o);
/* 77   */ 		if (opts2 === false)
/* 78   */ 			return;
/* 79   */ 
/* 80   */ 		if (els.length < 2) {
/* 81   */ 			log('terminating; too few slides: ' + els.length);
/* 82   */ 			return;
/* 83   */ 		}
/* 84   */ 
/* 85   */ 		var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);
/* 86   */ 
/* 87   */ 		// if it's an auto slideshow, kick it off
/* 88   */ 		if (startTime) {
/* 89   */ 			startTime += (opts2.delay || 0);
/* 90   */ 			if (startTime < 10)
/* 91   */ 				startTime = 10;
/* 92   */ 			debug('first timeout: ' + startTime);
/* 93   */ 			this.cycleTimeout = setTimeout(function(){go(els,opts2,0,!opts.backwards)}, startTime);
/* 94   */ 		}
/* 95   */ 	});
/* 96   */ };
/* 97   */ 
/* 98   */ function triggerPause(cont, byHover, onPager) {
/* 99   */ 	var opts = $(cont).data('cycle.opts');
/* 100  */ 	var paused = !!cont.cyclePause;

/* jquery.cycle.all.js */

/* 101  */ 	if (paused && opts.paused)
/* 102  */ 		opts.paused(cont, opts, byHover, onPager);
/* 103  */ 	else if (!paused && opts.resumed)
/* 104  */ 		opts.resumed(cont, opts, byHover, onPager);
/* 105  */ }
/* 106  */ 
/* 107  */ // process the args that were passed to the plugin fn
/* 108  */ function handleArguments(cont, options, arg2) {
/* 109  */ 	if (cont.cycleStop == undefined)
/* 110  */ 		cont.cycleStop = 0;
/* 111  */ 	if (options === undefined || options === null)
/* 112  */ 		options = {};
/* 113  */ 	if (options.constructor == String) {
/* 114  */ 		switch(options) {
/* 115  */ 		case 'destroy':
/* 116  */ 		case 'stop':
/* 117  */ 			var opts = $(cont).data('cycle.opts');
/* 118  */ 			if (!opts)
/* 119  */ 				return false;
/* 120  */ 			cont.cycleStop++; // callbacks look for change
/* 121  */ 			if (cont.cycleTimeout)
/* 122  */ 				clearTimeout(cont.cycleTimeout);
/* 123  */ 			cont.cycleTimeout = 0;
/* 124  */ 			opts.elements && $(opts.elements).stop();
/* 125  */ 			$(cont).removeData('cycle.opts');
/* 126  */ 			if (options == 'destroy')
/* 127  */ 				destroy(opts);
/* 128  */ 			return false;
/* 129  */ 		case 'toggle':
/* 130  */ 			cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
/* 131  */ 			checkInstantResume(cont.cyclePause, arg2, cont);
/* 132  */ 			triggerPause(cont);
/* 133  */ 			return false;
/* 134  */ 		case 'pause':
/* 135  */ 			cont.cyclePause = 1;
/* 136  */ 			triggerPause(cont);
/* 137  */ 			return false;
/* 138  */ 		case 'resume':
/* 139  */ 			cont.cyclePause = 0;
/* 140  */ 			checkInstantResume(false, arg2, cont);
/* 141  */ 			triggerPause(cont);
/* 142  */ 			return false;
/* 143  */ 		case 'prev':
/* 144  */ 		case 'next':
/* 145  */ 			var opts = $(cont).data('cycle.opts');
/* 146  */ 			if (!opts) {
/* 147  */ 				log('options not found, "prev/next" ignored');
/* 148  */ 				return false;
/* 149  */ 			}
/* 150  */ 			$.fn.cycle[options](opts);

/* jquery.cycle.all.js */

/* 151  */ 			return false;
/* 152  */ 		default:
/* 153  */ 			options = { fx: options };
/* 154  */ 		};
/* 155  */ 		return options;
/* 156  */ 	}
/* 157  */ 	else if (options.constructor == Number) {
/* 158  */ 		// go to the requested slide
/* 159  */ 		var num = options;
/* 160  */ 		options = $(cont).data('cycle.opts');
/* 161  */ 		if (!options) {
/* 162  */ 			log('options not found, can not advance slide');
/* 163  */ 			return false;
/* 164  */ 		}
/* 165  */ 		if (num < 0 || num >= options.elements.length) {
/* 166  */ 			log('invalid slide index: ' + num);
/* 167  */ 			return false;
/* 168  */ 		}
/* 169  */ 		options.nextSlide = num;
/* 170  */ 		if (cont.cycleTimeout) {
/* 171  */ 			clearTimeout(cont.cycleTimeout);
/* 172  */ 			cont.cycleTimeout = 0;
/* 173  */ 		}
/* 174  */ 		if (typeof arg2 == 'string')
/* 175  */ 			options.oneTimeFx = arg2;
/* 176  */ 		go(options.elements, options, 1, num >= options.currSlide);
/* 177  */ 		return false;
/* 178  */ 	}
/* 179  */ 	return options;
/* 180  */ 	
/* 181  */ 	function checkInstantResume(isPaused, arg2, cont) {
/* 182  */ 		if (!isPaused && arg2 === true) { // resume now!
/* 183  */ 			var options = $(cont).data('cycle.opts');
/* 184  */ 			if (!options) {
/* 185  */ 				log('options not found, can not resume');
/* 186  */ 				return false;
/* 187  */ 			}
/* 188  */ 			if (cont.cycleTimeout) {
/* 189  */ 				clearTimeout(cont.cycleTimeout);
/* 190  */ 				cont.cycleTimeout = 0;
/* 191  */ 			}
/* 192  */ 			go(options.elements, options, 1, !options.backwards);
/* 193  */ 		}
/* 194  */ 	}
/* 195  */ };
/* 196  */ 
/* 197  */ function removeFilter(el, opts) {
/* 198  */ 	if (!$.support.opacity && opts.cleartype && el.style.filter) {
/* 199  */ 		try { el.style.removeAttribute('filter'); }
/* 200  */ 		catch(smother) {} // handle old opera versions

/* jquery.cycle.all.js */

/* 201  */ 	}
/* 202  */ };
/* 203  */ 
/* 204  */ // unbind event handlers
/* 205  */ function destroy(opts) {
/* 206  */ 	if (opts.next)
/* 207  */ 		$(opts.next).unbind(opts.prevNextEvent);
/* 208  */ 	if (opts.prev)
/* 209  */ 		$(opts.prev).unbind(opts.prevNextEvent);
/* 210  */ 	
/* 211  */ 	if (opts.pager || opts.pagerAnchorBuilder)
/* 212  */ 		$.each(opts.pagerAnchors || [], function() {
/* 213  */ 			this.unbind().remove();
/* 214  */ 		});
/* 215  */ 	opts.pagerAnchors = null;
/* 216  */ 	if (opts.destroy) // callback
/* 217  */ 		opts.destroy(opts);
/* 218  */ };
/* 219  */ 
/* 220  */ // one-time initialization
/* 221  */ function buildOptions($cont, $slides, els, options, o) {
/* 222  */ 	var startingSlideSpecified;
/* 223  */ 	// support metadata plugin (v1.0 and v2.0)
/* 224  */ 	var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
/* 225  */ 	var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
/* 226  */ 	if (meta)
/* 227  */ 		opts = $.extend(opts, meta);
/* 228  */ 	if (opts.autostop)
/* 229  */ 		opts.countdown = opts.autostopCount || els.length;
/* 230  */ 
/* 231  */ 	var cont = $cont[0];
/* 232  */ 	$cont.data('cycle.opts', opts);
/* 233  */ 	opts.$cont = $cont;
/* 234  */ 	opts.stopCount = cont.cycleStop;
/* 235  */ 	opts.elements = els;
/* 236  */ 	opts.before = opts.before ? [opts.before] : [];
/* 237  */ 	opts.after = opts.after ? [opts.after] : [];
/* 238  */ 
/* 239  */ 	// push some after callbacks
/* 240  */ 	if (!$.support.opacity && opts.cleartype)
/* 241  */ 		opts.after.push(function() { removeFilter(this, opts); });
/* 242  */ 	if (opts.continuous)
/* 243  */ 		opts.after.push(function() { go(els,opts,0,!opts.backwards); });
/* 244  */ 
/* 245  */ 	saveOriginalOpts(opts);
/* 246  */ 
/* 247  */ 	// clearType corrections
/* 248  */ 	if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
/* 249  */ 		clearTypeFix($slides);
/* 250  */ 

/* jquery.cycle.all.js */

/* 251  */ 	// container requires non-static position so that slides can be position within
/* 252  */ 	if ($cont.css('position') == 'static')
/* 253  */ 		$cont.css('position', 'relative');
/* 254  */ 	if (opts.width)
/* 255  */ 		$cont.width(opts.width);
/* 256  */ 	if (opts.height && opts.height != 'auto')
/* 257  */ 		$cont.height(opts.height);
/* 258  */ 
/* 259  */ 	if (opts.startingSlide != undefined) {
/* 260  */ 		opts.startingSlide = parseInt(opts.startingSlide,10);
/* 261  */ 		if (opts.startingSlide >= els.length || opts.startSlide < 0)
/* 262  */ 			opts.startingSlide = 0; // catch bogus input
/* 263  */ 		else 
/* 264  */ 			startingSlideSpecified = true;
/* 265  */ 	}
/* 266  */ 	else if (opts.backwards)
/* 267  */ 		opts.startingSlide = els.length - 1;
/* 268  */ 	else
/* 269  */ 		opts.startingSlide = 0;
/* 270  */ 
/* 271  */ 	// if random, mix up the slide array
/* 272  */ 	if (opts.random) {
/* 273  */ 		opts.randomMap = [];
/* 274  */ 		for (var i = 0; i < els.length; i++)
/* 275  */ 			opts.randomMap.push(i);
/* 276  */ 		opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
/* 277  */ 		if (startingSlideSpecified) {
/* 278  */ 			// try to find the specified starting slide and if found set start slide index in the map accordingly
/* 279  */ 			for ( var cnt = 0; cnt < els.length; cnt++ ) {
/* 280  */ 				if ( opts.startingSlide == opts.randomMap[cnt] ) {
/* 281  */ 					opts.randomIndex = cnt;
/* 282  */ 				}
/* 283  */ 			}
/* 284  */ 		}
/* 285  */ 		else {
/* 286  */ 			opts.randomIndex = 1;
/* 287  */ 			opts.startingSlide = opts.randomMap[1];
/* 288  */ 		}
/* 289  */ 	}
/* 290  */ 	else if (opts.startingSlide >= els.length)
/* 291  */ 		opts.startingSlide = 0; // catch bogus input
/* 292  */ 	opts.currSlide = opts.startingSlide || 0;
/* 293  */ 	var first = opts.startingSlide;
/* 294  */ 
/* 295  */ 	// set position and zIndex on all the slides
/* 296  */ 	$slides.css({position: 'absolute', top:0, left:0}).hide().each(function(i) {
/* 297  */ 		var z;
/* 298  */ 		if (opts.backwards)
/* 299  */ 			z = first ? i <= first ? els.length + (i-first) : first-i : els.length-i;
/* 300  */ 		else

/* jquery.cycle.all.js */

/* 301  */ 			z = first ? i >= first ? els.length - (i-first) : first-i : els.length-i;
/* 302  */ 		$(this).css('z-index', z)
/* 303  */ 	});
/* 304  */ 
/* 305  */ 	// make sure first slide is visible
/* 306  */ 	$(els[first]).css('opacity',1).show(); // opacity bit needed to handle restart use case
/* 307  */ 	removeFilter(els[first], opts);
/* 308  */ 
/* 309  */ 	// stretch slides
/* 310  */ 	if (opts.fit) {
/* 311  */ 		if (!opts.aspect) {
/* 312  */ 	        if (opts.width)
/* 313  */ 	            $slides.width(opts.width);
/* 314  */ 	        if (opts.height && opts.height != 'auto')
/* 315  */ 	            $slides.height(opts.height);
/* 316  */ 		} else {
/* 317  */ 			$slides.each(function(){
/* 318  */ 				var $slide = $(this);
/* 319  */ 				var ratio = (opts.aspect === true) ? $slide.width()/$slide.height() : opts.aspect;
/* 320  */ 				if( opts.width && $slide.width() != opts.width ) {
/* 321  */ 					$slide.width( opts.width );
/* 322  */ 					$slide.height( opts.width / ratio );
/* 323  */ 				}
/* 324  */ 
/* 325  */ 				if( opts.height && $slide.height() < opts.height ) {
/* 326  */ 					$slide.height( opts.height );
/* 327  */ 					$slide.width( opts.height * ratio );
/* 328  */ 				}
/* 329  */ 			});
/* 330  */ 		}
/* 331  */ 	}
/* 332  */ 
/* 333  */ 	if (opts.center && ((!opts.fit) || opts.aspect)) {
/* 334  */ 		$slides.each(function(){
/* 335  */ 			var $slide = $(this);
/* 336  */ 			$slide.css({
/* 337  */ 				"margin-left": opts.width ?
/* 338  */ 					((opts.width - $slide.width()) / 2) + "px" :
/* 339  */ 					0,
/* 340  */ 				"margin-top": opts.height ?
/* 341  */ 					((opts.height - $slide.height()) / 2) + "px" :
/* 342  */ 					0
/* 343  */ 			});
/* 344  */ 		});
/* 345  */ 	}
/* 346  */ 
/* 347  */ 	if (opts.center && !opts.fit && !opts.slideResize) {
/* 348  */ 	  	$slides.each(function(){
/* 349  */ 	    	var $slide = $(this);
/* 350  */ 	    	$slide.css({

/* jquery.cycle.all.js */

/* 351  */ 	      		"margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
/* 352  */ 	      		"margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
/* 353  */ 	    	});
/* 354  */ 	  	});
/* 355  */ 	}
/* 356  */ 		
/* 357  */ 	// stretch container
/* 358  */ 	var reshape = opts.containerResize && !$cont.innerHeight();
/* 359  */ 	if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
/* 360  */ 		var maxw = 0, maxh = 0;
/* 361  */ 		for(var j=0; j < els.length; j++) {
/* 362  */ 			var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
/* 363  */ 			if (!w) w = e.offsetWidth || e.width || $e.attr('width');
/* 364  */ 			if (!h) h = e.offsetHeight || e.height || $e.attr('height');
/* 365  */ 			maxw = w > maxw ? w : maxw;
/* 366  */ 			maxh = h > maxh ? h : maxh;
/* 367  */ 		}
/* 368  */ 		if (maxw > 0 && maxh > 0)
/* 369  */ 			$cont.css({width:maxw+'px',height:maxh+'px'});
/* 370  */ 	}
/* 371  */ 
/* 372  */ 	var pauseFlag = false;  // https://github.com/malsup/cycle/issues/44
/* 373  */ 	if (opts.pause)
/* 374  */ 		$cont.hover(
/* 375  */ 			function(){
/* 376  */ 				pauseFlag = true;
/* 377  */ 				this.cyclePause++;
/* 378  */ 				triggerPause(cont, true);
/* 379  */ 			},
/* 380  */ 			function(){
/* 381  */ 				pauseFlag && this.cyclePause--;
/* 382  */ 				triggerPause(cont, true);
/* 383  */ 			}
/* 384  */ 		);
/* 385  */ 
/* 386  */ 	if (supportMultiTransitions(opts) === false)
/* 387  */ 		return false;
/* 388  */ 
/* 389  */ 	// apparently a lot of people use image slideshows without height/width attributes on the images.
/* 390  */ 	// Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
/* 391  */ 	var requeue = false;
/* 392  */ 	options.requeueAttempts = options.requeueAttempts || 0;
/* 393  */ 	$slides.each(function() {
/* 394  */ 		// try to get height/width of each slide
/* 395  */ 		var $el = $(this);
/* 396  */ 		this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
/* 397  */ 		this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);
/* 398  */ 
/* 399  */ 		if ( $el.is('img') ) {
/* 400  */ 			// sigh..  sniffing, hacking, shrugging...  this crappy hack tries to account for what browsers do when

/* jquery.cycle.all.js */

/* 401  */ 			// an image is being downloaded and the markup did not include sizing info (height/width attributes);
/* 402  */ 			// there seems to be some "default" sizes used in this situation
/* 403  */ 			var loadingIE	= ($.browser.msie  && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
/* 404  */ 			var loadingFF	= ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
/* 405  */ 			var loadingOp	= ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
/* 406  */ 			var loadingOther = (this.cycleH == 0 && this.cycleW == 0 && !this.complete);
/* 407  */ 			// don't requeue for images that are still loading but have a valid size
/* 408  */ 			if (loadingIE || loadingFF || loadingOp || loadingOther) {
/* 409  */ 				if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
/* 410  */ 					log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
/* 411  */ 					setTimeout(function() {$(o.s,o.c).cycle(options)}, opts.requeueTimeout);
/* 412  */ 					requeue = true;
/* 413  */ 					return false; // break each loop
/* 414  */ 				}
/* 415  */ 				else {
/* 416  */ 					log('could not determine size of image: '+this.src, this.cycleW, this.cycleH);
/* 417  */ 				}
/* 418  */ 			}
/* 419  */ 		}
/* 420  */ 		return true;
/* 421  */ 	});
/* 422  */ 
/* 423  */ 	if (requeue)
/* 424  */ 		return false;
/* 425  */ 
/* 426  */ 	opts.cssBefore = opts.cssBefore || {};
/* 427  */ 	opts.cssAfter = opts.cssAfter || {};
/* 428  */ 	opts.cssFirst = opts.cssFirst || {};
/* 429  */ 	opts.animIn = opts.animIn || {};
/* 430  */ 	opts.animOut = opts.animOut || {};
/* 431  */ 
/* 432  */ 	$slides.not(':eq('+first+')').css(opts.cssBefore);
/* 433  */ 	$($slides[first]).css(opts.cssFirst);
/* 434  */ 
/* 435  */ 	if (opts.timeout) {
/* 436  */ 		opts.timeout = parseInt(opts.timeout,10);
/* 437  */ 		// ensure that timeout and speed settings are sane
/* 438  */ 		if (opts.speed.constructor == String)
/* 439  */ 			opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed,10);
/* 440  */ 		if (!opts.sync)
/* 441  */ 			opts.speed = opts.speed / 2;
/* 442  */ 		
/* 443  */ 		var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
/* 444  */ 		while((opts.timeout - opts.speed) < buffer) // sanitize timeout
/* 445  */ 			opts.timeout += opts.speed;
/* 446  */ 	}
/* 447  */ 	if (opts.easing)
/* 448  */ 		opts.easeIn = opts.easeOut = opts.easing;
/* 449  */ 	if (!opts.speedIn)
/* 450  */ 		opts.speedIn = opts.speed;

/* jquery.cycle.all.js */

/* 451  */ 	if (!opts.speedOut)
/* 452  */ 		opts.speedOut = opts.speed;
/* 453  */ 
/* 454  */ 	opts.slideCount = els.length;
/* 455  */ 	opts.currSlide = opts.lastSlide = first;
/* 456  */ 	if (opts.random) {
/* 457  */ 		if (++opts.randomIndex == els.length)
/* 458  */ 			opts.randomIndex = 0;
/* 459  */ 		opts.nextSlide = opts.randomMap[opts.randomIndex];
/* 460  */ 	}
/* 461  */ 	else if (opts.backwards)
/* 462  */ 		opts.nextSlide = opts.startingSlide == 0 ? (els.length-1) : opts.startingSlide-1;
/* 463  */ 	else
/* 464  */ 		opts.nextSlide = opts.startingSlide >= (els.length-1) ? 0 : opts.startingSlide+1;
/* 465  */ 
/* 466  */ 	// run transition init fn
/* 467  */ 	if (!opts.multiFx) {
/* 468  */ 		var init = $.fn.cycle.transitions[opts.fx];
/* 469  */ 		if ($.isFunction(init))
/* 470  */ 			init($cont, $slides, opts);
/* 471  */ 		else if (opts.fx != 'custom' && !opts.multiFx) {
/* 472  */ 			log('unknown transition: ' + opts.fx,'; slideshow terminating');
/* 473  */ 			return false;
/* 474  */ 		}
/* 475  */ 	}
/* 476  */ 
/* 477  */ 	// fire artificial events
/* 478  */ 	var e0 = $slides[first];
/* 479  */ 	if (!opts.skipInitializationCallbacks) {
/* 480  */ 		if (opts.before.length)
/* 481  */ 			opts.before[0].apply(e0, [e0, e0, opts, true]);
/* 482  */ 		if (opts.after.length)
/* 483  */ 			opts.after[0].apply(e0, [e0, e0, opts, true]);
/* 484  */ 	}
/* 485  */ 	if (opts.next)
/* 486  */ 		$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1)});
/* 487  */ 	if (opts.prev)
/* 488  */ 		$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0)});
/* 489  */ 	if (opts.pager || opts.pagerAnchorBuilder)
/* 490  */ 		buildPager(els,opts);
/* 491  */ 
/* 492  */ 	exposeAddSlide(opts, els);
/* 493  */ 
/* 494  */ 	return opts;
/* 495  */ };
/* 496  */ 
/* 497  */ // save off original opts so we can restore after clearing state
/* 498  */ function saveOriginalOpts(opts) {
/* 499  */ 	opts.original = { before: [], after: [] };
/* 500  */ 	opts.original.cssBefore = $.extend({}, opts.cssBefore);

/* jquery.cycle.all.js */

/* 501  */ 	opts.original.cssAfter  = $.extend({}, opts.cssAfter);
/* 502  */ 	opts.original.animIn	= $.extend({}, opts.animIn);
/* 503  */ 	opts.original.animOut   = $.extend({}, opts.animOut);
/* 504  */ 	$.each(opts.before, function() { opts.original.before.push(this); });
/* 505  */ 	$.each(opts.after,  function() { opts.original.after.push(this); });
/* 506  */ };
/* 507  */ 
/* 508  */ function supportMultiTransitions(opts) {
/* 509  */ 	var i, tx, txs = $.fn.cycle.transitions;
/* 510  */ 	// look for multiple effects
/* 511  */ 	if (opts.fx.indexOf(',') > 0) {
/* 512  */ 		opts.multiFx = true;
/* 513  */ 		opts.fxs = opts.fx.replace(/\s*/g,'').split(',');
/* 514  */ 		// discard any bogus effect names
/* 515  */ 		for (i=0; i < opts.fxs.length; i++) {
/* 516  */ 			var fx = opts.fxs[i];
/* 517  */ 			tx = txs[fx];
/* 518  */ 			if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
/* 519  */ 				log('discarding unknown transition: ',fx);
/* 520  */ 				opts.fxs.splice(i,1);
/* 521  */ 				i--;
/* 522  */ 			}
/* 523  */ 		}
/* 524  */ 		// if we have an empty list then we threw everything away!
/* 525  */ 		if (!opts.fxs.length) {
/* 526  */ 			log('No valid transitions named; slideshow terminating.');
/* 527  */ 			return false;
/* 528  */ 		}
/* 529  */ 	}
/* 530  */ 	else if (opts.fx == 'all') {  // auto-gen the list of transitions
/* 531  */ 		opts.multiFx = true;
/* 532  */ 		opts.fxs = [];
/* 533  */ 		for (p in txs) {
/* 534  */ 			tx = txs[p];
/* 535  */ 			if (txs.hasOwnProperty(p) && $.isFunction(tx))
/* 536  */ 				opts.fxs.push(p);
/* 537  */ 		}
/* 538  */ 	}
/* 539  */ 	if (opts.multiFx && opts.randomizeEffects) {
/* 540  */ 		// munge the fxs array to make effect selection random
/* 541  */ 		var r1 = Math.floor(Math.random() * 20) + 30;
/* 542  */ 		for (i = 0; i < r1; i++) {
/* 543  */ 			var r2 = Math.floor(Math.random() * opts.fxs.length);
/* 544  */ 			opts.fxs.push(opts.fxs.splice(r2,1)[0]);
/* 545  */ 		}
/* 546  */ 		debug('randomized fx sequence: ',opts.fxs);
/* 547  */ 	}
/* 548  */ 	return true;
/* 549  */ };
/* 550  */ 

/* jquery.cycle.all.js */

/* 551  */ // provide a mechanism for adding slides after the slideshow has started
/* 552  */ function exposeAddSlide(opts, els) {
/* 553  */ 	opts.addSlide = function(newSlide, prepend) {
/* 554  */ 		var $s = $(newSlide), s = $s[0];
/* 555  */ 		if (!opts.autostopCount)
/* 556  */ 			opts.countdown++;
/* 557  */ 		els[prepend?'unshift':'push'](s);
/* 558  */ 		if (opts.els)
/* 559  */ 			opts.els[prepend?'unshift':'push'](s); // shuffle needs this
/* 560  */ 		opts.slideCount = els.length;
/* 561  */ 
/* 562  */ 		// add the slide to the random map and resort
/* 563  */ 		if (opts.random) {
/* 564  */ 			opts.randomMap.push(opts.slideCount-1);
/* 565  */ 			opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
/* 566  */ 		}
/* 567  */ 
/* 568  */ 		$s.css('position','absolute');
/* 569  */ 		$s[prepend?'prependTo':'appendTo'](opts.$cont);
/* 570  */ 
/* 571  */ 		if (prepend) {
/* 572  */ 			opts.currSlide++;
/* 573  */ 			opts.nextSlide++;
/* 574  */ 		}
/* 575  */ 
/* 576  */ 		if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
/* 577  */ 			clearTypeFix($s);
/* 578  */ 
/* 579  */ 		if (opts.fit && opts.width)
/* 580  */ 			$s.width(opts.width);
/* 581  */ 		if (opts.fit && opts.height && opts.height != 'auto')
/* 582  */ 			$s.height(opts.height);
/* 583  */ 		s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
/* 584  */ 		s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();
/* 585  */ 
/* 586  */ 		$s.css(opts.cssBefore);
/* 587  */ 
/* 588  */ 		if (opts.pager || opts.pagerAnchorBuilder)
/* 589  */ 			$.fn.cycle.createPagerAnchor(els.length-1, s, $(opts.pager), els, opts);
/* 590  */ 
/* 591  */ 		if ($.isFunction(opts.onAddSlide))
/* 592  */ 			opts.onAddSlide($s);
/* 593  */ 		else
/* 594  */ 			$s.hide(); // default behavior
/* 595  */ 	};
/* 596  */ }
/* 597  */ 
/* 598  */ // reset internal state; we do this on every pass in order to support multiple effects
/* 599  */ $.fn.cycle.resetState = function(opts, fx) {
/* 600  */ 	fx = fx || opts.fx;

/* jquery.cycle.all.js */

/* 601  */ 	opts.before = []; opts.after = [];
/* 602  */ 	opts.cssBefore = $.extend({}, opts.original.cssBefore);
/* 603  */ 	opts.cssAfter  = $.extend({}, opts.original.cssAfter);
/* 604  */ 	opts.animIn	= $.extend({}, opts.original.animIn);
/* 605  */ 	opts.animOut   = $.extend({}, opts.original.animOut);
/* 606  */ 	opts.fxFn = null;
/* 607  */ 	$.each(opts.original.before, function() { opts.before.push(this); });
/* 608  */ 	$.each(opts.original.after,  function() { opts.after.push(this); });
/* 609  */ 
/* 610  */ 	// re-init
/* 611  */ 	var init = $.fn.cycle.transitions[fx];
/* 612  */ 	if ($.isFunction(init))
/* 613  */ 		init(opts.$cont, $(opts.elements), opts);
/* 614  */ };
/* 615  */ 
/* 616  */ // this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
/* 617  */ function go(els, opts, manual, fwd) {
/* 618  */ 	// opts.busy is true if we're in the middle of an animation
/* 619  */ 	if (manual && opts.busy && opts.manualTrump) {
/* 620  */ 		// let manual transitions requests trump active ones
/* 621  */ 		debug('manualTrump in go(), stopping active transition');
/* 622  */ 		$(els).stop(true,true);
/* 623  */ 		opts.busy = 0;
/* 624  */ 	}
/* 625  */ 	// don't begin another timeout-based transition if there is one active
/* 626  */ 	if (opts.busy) {
/* 627  */ 		debug('transition active, ignoring new tx request');
/* 628  */ 		return;
/* 629  */ 	}
/* 630  */ 
/* 631  */ 	var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];
/* 632  */ 
/* 633  */ 	// stop cycling if we have an outstanding stop request
/* 634  */ 	if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
/* 635  */ 		return;
/* 636  */ 
/* 637  */ 	// check to see if we should stop cycling based on autostop options
/* 638  */ 	if (!manual && !p.cyclePause && !opts.bounce &&
/* 639  */ 		((opts.autostop && (--opts.countdown <= 0)) ||
/* 640  */ 		(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
/* 641  */ 		if (opts.end)
/* 642  */ 			opts.end(opts);
/* 643  */ 		return;
/* 644  */ 	}
/* 645  */ 
/* 646  */ 	// if slideshow is paused, only transition on a manual trigger
/* 647  */ 	var changed = false;
/* 648  */ 	if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
/* 649  */ 		changed = true;
/* 650  */ 		var fx = opts.fx;

/* jquery.cycle.all.js */

/* 651  */ 		// keep trying to get the slide size if we don't have it yet
/* 652  */ 		curr.cycleH = curr.cycleH || $(curr).height();
/* 653  */ 		curr.cycleW = curr.cycleW || $(curr).width();
/* 654  */ 		next.cycleH = next.cycleH || $(next).height();
/* 655  */ 		next.cycleW = next.cycleW || $(next).width();
/* 656  */ 
/* 657  */ 		// support multiple transition types
/* 658  */ 		if (opts.multiFx) {
/* 659  */ 			if (fwd && (opts.lastFx == undefined || ++opts.lastFx >= opts.fxs.length))
/* 660  */ 				opts.lastFx = 0;
/* 661  */ 			else if (!fwd && (opts.lastFx == undefined || --opts.lastFx < 0))
/* 662  */ 				opts.lastFx = opts.fxs.length - 1;
/* 663  */ 			fx = opts.fxs[opts.lastFx];
/* 664  */ 		}
/* 665  */ 
/* 666  */ 		// one-time fx overrides apply to:  $('div').cycle(3,'zoom');
/* 667  */ 		if (opts.oneTimeFx) {
/* 668  */ 			fx = opts.oneTimeFx;
/* 669  */ 			opts.oneTimeFx = null;
/* 670  */ 		}
/* 671  */ 
/* 672  */ 		$.fn.cycle.resetState(opts, fx);
/* 673  */ 
/* 674  */ 		// run the before callbacks
/* 675  */ 		if (opts.before.length)
/* 676  */ 			$.each(opts.before, function(i,o) {
/* 677  */ 				if (p.cycleStop != opts.stopCount) return;
/* 678  */ 				o.apply(next, [curr, next, opts, fwd]);
/* 679  */ 			});
/* 680  */ 
/* 681  */ 		// stage the after callacks
/* 682  */ 		var after = function() {
/* 683  */ 			opts.busy = 0;
/* 684  */ 			$.each(opts.after, function(i,o) {
/* 685  */ 				if (p.cycleStop != opts.stopCount) return;
/* 686  */ 				o.apply(next, [curr, next, opts, fwd]);
/* 687  */ 			});
/* 688  */ 			if (!p.cycleStop) {
/* 689  */ 				// queue next transition
/* 690  */ 				queueNext();
/* 691  */ 			}
/* 692  */ 		};
/* 693  */ 
/* 694  */ 		debug('tx firing('+fx+'); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
/* 695  */ 		
/* 696  */ 		// get ready to perform the transition
/* 697  */ 		opts.busy = 1;
/* 698  */ 		if (opts.fxFn) // fx function provided?
/* 699  */ 			opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
/* 700  */ 		else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?

/* jquery.cycle.all.js */

/* 701  */ 			$.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
/* 702  */ 		else
/* 703  */ 			$.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
/* 704  */ 	}
/* 705  */ 	else {
/* 706  */ 		queueNext();
/* 707  */ 	}
/* 708  */ 
/* 709  */ 	if (changed || opts.nextSlide == opts.currSlide) {
/* 710  */ 		// calculate the next slide
/* 711  */ 		opts.lastSlide = opts.currSlide;
/* 712  */ 		if (opts.random) {
/* 713  */ 			opts.currSlide = opts.nextSlide;
/* 714  */ 			if (++opts.randomIndex == els.length) {
/* 715  */ 				opts.randomIndex = 0;
/* 716  */ 				opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
/* 717  */ 			}
/* 718  */ 			opts.nextSlide = opts.randomMap[opts.randomIndex];
/* 719  */ 			if (opts.nextSlide == opts.currSlide)
/* 720  */ 				opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
/* 721  */ 		}
/* 722  */ 		else if (opts.backwards) {
/* 723  */ 			var roll = (opts.nextSlide - 1) < 0;
/* 724  */ 			if (roll && opts.bounce) {
/* 725  */ 				opts.backwards = !opts.backwards;
/* 726  */ 				opts.nextSlide = 1;
/* 727  */ 				opts.currSlide = 0;
/* 728  */ 			}
/* 729  */ 			else {
/* 730  */ 				opts.nextSlide = roll ? (els.length-1) : opts.nextSlide-1;
/* 731  */ 				opts.currSlide = roll ? 0 : opts.nextSlide+1;
/* 732  */ 			}
/* 733  */ 		}
/* 734  */ 		else { // sequence
/* 735  */ 			var roll = (opts.nextSlide + 1) == els.length;
/* 736  */ 			if (roll && opts.bounce) {
/* 737  */ 				opts.backwards = !opts.backwards;
/* 738  */ 				opts.nextSlide = els.length-2;
/* 739  */ 				opts.currSlide = els.length-1;
/* 740  */ 			}
/* 741  */ 			else {
/* 742  */ 				opts.nextSlide = roll ? 0 : opts.nextSlide+1;
/* 743  */ 				opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
/* 744  */ 			}
/* 745  */ 		}
/* 746  */ 	}
/* 747  */ 	if (changed && opts.pager)
/* 748  */ 		opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
/* 749  */ 	
/* 750  */ 	function queueNext() {

/* jquery.cycle.all.js */

/* 751  */ 		// stage the next transition
/* 752  */ 		var ms = 0, timeout = opts.timeout;
/* 753  */ 		if (opts.timeout && !opts.continuous) {
/* 754  */ 			ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
/* 755  */          if (opts.fx == 'shuffle')
/* 756  */             ms -= opts.speedOut;
/* 757  */       }
/* 758  */ 		else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
/* 759  */ 			ms = 10;
/* 760  */ 		if (ms > 0)
/* 761  */ 			p.cycleTimeout = setTimeout(function(){ go(els, opts, 0, !opts.backwards) }, ms);
/* 762  */ 	}
/* 763  */ };
/* 764  */ 
/* 765  */ // invoked after transition
/* 766  */ $.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
/* 767  */    $(pager).each(function() {
/* 768  */        $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
/* 769  */    });
/* 770  */ };
/* 771  */ 
/* 772  */ // calculate timeout value for current transition
/* 773  */ function getTimeout(curr, next, opts, fwd) {
/* 774  */ 	if (opts.timeoutFn) {
/* 775  */ 		// call user provided calc fn
/* 776  */ 		var t = opts.timeoutFn.call(curr,curr,next,opts,fwd);
/* 777  */ 		while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
/* 778  */ 			t += opts.speed;
/* 779  */ 		debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
/* 780  */ 		if (t !== false)
/* 781  */ 			return t;
/* 782  */ 	}
/* 783  */ 	return opts.timeout;
/* 784  */ };
/* 785  */ 
/* 786  */ // expose next/prev function, caller must pass in state
/* 787  */ $.fn.cycle.next = function(opts) { advance(opts,1); };
/* 788  */ $.fn.cycle.prev = function(opts) { advance(opts,0);};
/* 789  */ 
/* 790  */ // advance slide forward or back
/* 791  */ function advance(opts, moveForward) {
/* 792  */ 	var val = moveForward ? 1 : -1;
/* 793  */ 	var els = opts.elements;
/* 794  */ 	var p = opts.$cont[0], timeout = p.cycleTimeout;
/* 795  */ 	if (timeout) {
/* 796  */ 		clearTimeout(timeout);
/* 797  */ 		p.cycleTimeout = 0;
/* 798  */ 	}
/* 799  */ 	if (opts.random && val < 0) {
/* 800  */ 		// move back to the previously display slide

/* jquery.cycle.all.js */

/* 801  */ 		opts.randomIndex--;
/* 802  */ 		if (--opts.randomIndex == -2)
/* 803  */ 			opts.randomIndex = els.length-2;
/* 804  */ 		else if (opts.randomIndex == -1)
/* 805  */ 			opts.randomIndex = els.length-1;
/* 806  */ 		opts.nextSlide = opts.randomMap[opts.randomIndex];
/* 807  */ 	}
/* 808  */ 	else if (opts.random) {
/* 809  */ 		opts.nextSlide = opts.randomMap[opts.randomIndex];
/* 810  */ 	}
/* 811  */ 	else {
/* 812  */ 		opts.nextSlide = opts.currSlide + val;
/* 813  */ 		if (opts.nextSlide < 0) {
/* 814  */ 			if (opts.nowrap) return false;
/* 815  */ 			opts.nextSlide = els.length - 1;
/* 816  */ 		}
/* 817  */ 		else if (opts.nextSlide >= els.length) {
/* 818  */ 			if (opts.nowrap) return false;
/* 819  */ 			opts.nextSlide = 0;
/* 820  */ 		}
/* 821  */ 	}
/* 822  */ 
/* 823  */ 	var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
/* 824  */ 	if ($.isFunction(cb))
/* 825  */ 		cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
/* 826  */ 	go(els, opts, 1, moveForward);
/* 827  */ 	return false;
/* 828  */ };
/* 829  */ 
/* 830  */ function buildPager(els, opts) {
/* 831  */ 	var $p = $(opts.pager);
/* 832  */ 	$.each(els, function(i,o) {
/* 833  */ 		$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
/* 834  */ 	});
/* 835  */ 	opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
/* 836  */ };
/* 837  */ 
/* 838  */ $.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
/* 839  */ 	var a;
/* 840  */ 	if ($.isFunction(opts.pagerAnchorBuilder)) {
/* 841  */ 		a = opts.pagerAnchorBuilder(i,el);
/* 842  */ 		debug('pagerAnchorBuilder('+i+', el) returned: ' + a);
/* 843  */ 	}
/* 844  */ 	else
/* 845  */ 		a = '<a href="#">'+(i+1)+'</a>';
/* 846  */ 		
/* 847  */ 	if (!a)
/* 848  */ 		return;
/* 849  */ 	var $a = $(a);
/* 850  */ 	// don't reparent if anchor is in the dom

/* jquery.cycle.all.js */

/* 851  */ 	if ($a.parents('body').length === 0) {
/* 852  */ 		var arr = [];
/* 853  */ 		if ($p.length > 1) {
/* 854  */ 			$p.each(function() {
/* 855  */ 				var $clone = $a.clone(true);
/* 856  */ 				$(this).append($clone);
/* 857  */ 				arr.push($clone[0]);
/* 858  */ 			});
/* 859  */ 			$a = $(arr);
/* 860  */ 		}
/* 861  */ 		else {
/* 862  */ 			$a.appendTo($p);
/* 863  */ 		}
/* 864  */ 	}
/* 865  */ 
/* 866  */ 	opts.pagerAnchors =  opts.pagerAnchors || [];
/* 867  */ 	opts.pagerAnchors.push($a);
/* 868  */ 	
/* 869  */ 	var pagerFn = function(e) {
/* 870  */ 		e.preventDefault();
/* 871  */ 		opts.nextSlide = i;
/* 872  */ 		var p = opts.$cont[0], timeout = p.cycleTimeout;
/* 873  */ 		if (timeout) {
/* 874  */ 			clearTimeout(timeout);
/* 875  */ 			p.cycleTimeout = 0;
/* 876  */ 		}
/* 877  */ 		var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
/* 878  */ 		if ($.isFunction(cb))
/* 879  */ 			cb(opts.nextSlide, els[opts.nextSlide]);
/* 880  */ 		go(els,opts,1,opts.currSlide < i); // trigger the trans
/* 881  */ //		return false; // <== allow bubble
/* 882  */ 	}
/* 883  */ 	
/* 884  */ 	if ( /mouseenter|mouseover/i.test(opts.pagerEvent) ) {
/* 885  */ 		$a.hover(pagerFn, function(){/* no-op */} );
/* 886  */ 	}
/* 887  */ 	else {
/* 888  */ 		$a.bind(opts.pagerEvent, pagerFn);
/* 889  */ 	}
/* 890  */ 	
/* 891  */ 	if ( ! /^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
/* 892  */ 		$a.bind('click.cycle', function(){return false;}); // suppress click
/* 893  */ 	
/* 894  */ 	var cont = opts.$cont[0];
/* 895  */ 	var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
/* 896  */ 	if (opts.pauseOnPagerHover) {
/* 897  */ 		$a.hover(
/* 898  */ 			function() { 
/* 899  */ 				pauseFlag = true;
/* 900  */ 				cont.cyclePause++; 

/* jquery.cycle.all.js */

/* 901  */ 				triggerPause(cont,true,true);
/* 902  */ 			}, function() { 
/* 903  */ 				pauseFlag && cont.cyclePause--; 
/* 904  */ 				triggerPause(cont,true,true);
/* 905  */ 			} 
/* 906  */ 		);
/* 907  */ 	}
/* 908  */ };
/* 909  */ 
/* 910  */ // helper fn to calculate the number of slides between the current and the next
/* 911  */ $.fn.cycle.hopsFromLast = function(opts, fwd) {
/* 912  */ 	var hops, l = opts.lastSlide, c = opts.currSlide;
/* 913  */ 	if (fwd)
/* 914  */ 		hops = c > l ? c - l : opts.slideCount - l;
/* 915  */ 	else
/* 916  */ 		hops = c < l ? l - c : l + opts.slideCount - c;
/* 917  */ 	return hops;
/* 918  */ };
/* 919  */ 
/* 920  */ // fix clearType problems in ie6 by setting an explicit bg color
/* 921  */ // (otherwise text slides look horrible during a fade transition)
/* 922  */ function clearTypeFix($slides) {
/* 923  */ 	debug('applying clearType background-color hack');
/* 924  */ 	function hex(s) {
/* 925  */ 		s = parseInt(s,10).toString(16);
/* 926  */ 		return s.length < 2 ? '0'+s : s;
/* 927  */ 	};
/* 928  */ 	function getBg(e) {
/* 929  */ 		for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
/* 930  */ 			var v = $.css(e,'background-color');
/* 931  */ 			if (v && v.indexOf('rgb') >= 0 ) {
/* 932  */ 				var rgb = v.match(/\d+/g);
/* 933  */ 				return '#'+ hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
/* 934  */ 			}
/* 935  */ 			if (v && v != 'transparent')
/* 936  */ 				return v;
/* 937  */ 		}
/* 938  */ 		return '#ffffff';
/* 939  */ 	};
/* 940  */ 	$slides.each(function() { $(this).css('background-color', getBg(this)); });
/* 941  */ };
/* 942  */ 
/* 943  */ // reset common props before the next transition
/* 944  */ $.fn.cycle.commonReset = function(curr,next,opts,w,h,rev) {
/* 945  */ 	$(opts.elements).not(curr).hide();
/* 946  */ 	if (typeof opts.cssBefore.opacity == 'undefined')
/* 947  */ 		opts.cssBefore.opacity = 1;
/* 948  */ 	opts.cssBefore.display = 'block';
/* 949  */ 	if (opts.slideResize && w !== false && next.cycleW > 0)
/* 950  */ 		opts.cssBefore.width = next.cycleW;

/* jquery.cycle.all.js */

/* 951  */ 	if (opts.slideResize && h !== false && next.cycleH > 0)
/* 952  */ 		opts.cssBefore.height = next.cycleH;
/* 953  */ 	opts.cssAfter = opts.cssAfter || {};
/* 954  */ 	opts.cssAfter.display = 'none';
/* 955  */ 	$(curr).css('zIndex',opts.slideCount + (rev === true ? 1 : 0));
/* 956  */ 	$(next).css('zIndex',opts.slideCount + (rev === true ? 0 : 1));
/* 957  */ };
/* 958  */ 
/* 959  */ // the actual fn for effecting a transition
/* 960  */ $.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
/* 961  */ 	var $l = $(curr), $n = $(next);
/* 962  */ 	var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut;
/* 963  */ 	$n.css(opts.cssBefore);
/* 964  */ 	if (speedOverride) {
/* 965  */ 		if (typeof speedOverride == 'number')
/* 966  */ 			speedIn = speedOut = speedOverride;
/* 967  */ 		else
/* 968  */ 			speedIn = speedOut = 1;
/* 969  */ 		easeIn = easeOut = null;
/* 970  */ 	}
/* 971  */ 	var fn = function() {
/* 972  */ 		$n.animate(opts.animIn, speedIn, easeIn, function() {
/* 973  */ 			cb();
/* 974  */ 		});
/* 975  */ 	};
/* 976  */ 	$l.animate(opts.animOut, speedOut, easeOut, function() {
/* 977  */ 		$l.css(opts.cssAfter);
/* 978  */ 		if (!opts.sync) 
/* 979  */ 			fn();
/* 980  */ 	});
/* 981  */ 	if (opts.sync) fn();
/* 982  */ };
/* 983  */ 
/* 984  */ // transition definitions - only fade is defined here, transition pack defines the rest
/* 985  */ $.fn.cycle.transitions = {
/* 986  */ 	fade: function($cont, $slides, opts) {
/* 987  */ 		$slides.not(':eq('+opts.currSlide+')').css('opacity',0);
/* 988  */ 		opts.before.push(function(curr,next,opts) {
/* 989  */ 			$.fn.cycle.commonReset(curr,next,opts);
/* 990  */ 			opts.cssBefore.opacity = 0;
/* 991  */ 		});
/* 992  */ 		opts.animIn	   = { opacity: 1 };
/* 993  */ 		opts.animOut   = { opacity: 0 };
/* 994  */ 		opts.cssBefore = { top: 0, left: 0 };
/* 995  */ 	}
/* 996  */ };
/* 997  */ 
/* 998  */ $.fn.cycle.ver = function() { return ver; };
/* 999  */ 
/* 1000 */ // override these globally if you like (they are all optional)

/* jquery.cycle.all.js */

/* 1001 */ $.fn.cycle.defaults = {
/* 1002 */ 	activePagerClass: 'activeSlide', // class name used for the active pager link
/* 1003 */ 	after:		   null,  // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
/* 1004 */ 	allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
/* 1005 */ 	animIn:		   null,  // properties that define how the slide animates in
/* 1006 */ 	animOut:	   null,  // properties that define how the slide animates out
/* 1007 */ 	aspect:		   false,  // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
/* 1008 */ 	autostop:	   0,	  // true to end slideshow after X transitions (where X == slide count)
/* 1009 */ 	autostopCount: 0,	  // number of transitions (optionally used with autostop to define X)
/* 1010 */ 	backwards:     false, // true to start slideshow at last slide and move backwards through the stack
/* 1011 */ 	before:		   null,  // transition callback (scope set to element to be shown):	 function(currSlideElement, nextSlideElement, options, forwardFlag)
/* 1012 */ 	center: 	   null,  // set to true to have cycle add top/left margin to each slide (use with width and height options)
/* 1013 */ 	cleartype:	   !$.support.opacity,  // true if clearType corrections should be applied (for IE)
/* 1014 */ 	cleartypeNoBg: false, // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
/* 1015 */ 	containerResize: 1,	  // resize container to fit largest slide
/* 1016 */ 	continuous:	   0,	  // true to start next transition immediately after current one completes
/* 1017 */ 	cssAfter:	   null,  // properties that defined the state of the slide after transitioning out
/* 1018 */ 	cssBefore:	   null,  // properties that define the initial state of the slide before transitioning in
/* 1019 */ 	delay:		   0,	  // additional delay (in ms) for first transition (hint: can be negative)
/* 1020 */ 	easeIn:		   null,  // easing for "in" transition
/* 1021 */ 	easeOut:	   null,  // easing for "out" transition
/* 1022 */ 	easing:		   null,  // easing method for both in and out transitions
/* 1023 */ 	end:		   null,  // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
/* 1024 */ 	fastOnEvent:   0,	  // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
/* 1025 */ 	fit:		   0,	  // force slides to fit container
/* 1026 */ 	fx:			  'fade', // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
/* 1027 */ 	fxFn:		   null,  // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
/* 1028 */ 	height:		  'auto', // container height (if the 'fit' option is true, the slides will be set to this height as well)
/* 1029 */ 	manualTrump:   true,  // causes manual transition to stop an active transition instead of being ignored
/* 1030 */ 	metaAttr:     'cycle',// data- attribute that holds the option data for the slideshow
/* 1031 */ 	next:		   null,  // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
/* 1032 */ 	nowrap:		   0,	  // true to prevent slideshow from wrapping
/* 1033 */ 	onPagerEvent:  null,  // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
/* 1034 */ 	onPrevNextEvent: null,// callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
/* 1035 */ 	pager:		   null,  // element, jQuery object, or jQuery selector string for the element to use as pager container
/* 1036 */ 	pagerAnchorBuilder: null, // callback fn for building anchor links:  function(index, DOMelement)
/* 1037 */ 	pagerEvent:	  'click.cycle', // name of event which drives the pager navigation
/* 1038 */ 	pause:		   0,	  // true to enable "pause on hover"
/* 1039 */ 	pauseOnPagerHover: 0, // true to pause when hovering over pager link
/* 1040 */ 	prev:		   null,  // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
/* 1041 */ 	prevNextEvent:'click.cycle',// event which drives the manual transition to the previous or next slide
/* 1042 */ 	random:		   0,	  // true for random, false for sequence (not applicable to shuffle fx)
/* 1043 */ 	randomizeEffects: 1,  // valid when multiple effects are used; true to make the effect sequence random
/* 1044 */ 	requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
/* 1045 */ 	requeueTimeout: 250,  // ms delay for requeue
/* 1046 */ 	rev:		   0,	  // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
/* 1047 */ 	shuffle:	   null,  // coords for shuffle animation, ex: { top:15, left: 200 }
/* 1048 */ 	skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
/* 1049 */ 	slideExpr:	   null,  // expression for selecting slides (if something other than all children is required)
/* 1050 */ 	slideResize:   1,     // force slide width/height to fixed size before every transition

/* jquery.cycle.all.js */

/* 1051 */ 	speed:		   1000,  // speed of the transition (any valid fx speed value)
/* 1052 */ 	speedIn:	   null,  // speed of the 'in' transition
/* 1053 */ 	speedOut:	   null,  // speed of the 'out' transition
/* 1054 */ 	startingSlide: 0,	  // zero-based index of the first slide to be displayed
/* 1055 */ 	sync:		   1,	  // true if in/out transitions should occur simultaneously
/* 1056 */ 	timeout:	   4000,  // milliseconds between slide transitions (0 to disable auto advance)
/* 1057 */ 	timeoutFn:     null,  // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
/* 1058 */ 	updateActivePagerLink: null, // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
/* 1059 */ 	width:         null   // container width (if the 'fit' option is true, the slides will be set to this width as well)
/* 1060 */ };
/* 1061 */ 
/* 1062 */ })(jQuery);
/* 1063 */ 
/* 1064 */ 
/* 1065 */ /*!
/* 1066 *|  * jQuery Cycle Plugin Transition Definitions
/* 1067 *|  * This script is a plugin for the jQuery Cycle Plugin
/* 1068 *|  * Examples and documentation at: http://malsup.com/jquery/cycle/
/* 1069 *|  * Copyright (c) 2007-2010 M. Alsup
/* 1070 *|  * Version:	 2.73
/* 1071 *|  * Dual licensed under the MIT and GPL licenses:
/* 1072 *|  * http://www.opensource.org/licenses/mit-license.php
/* 1073 *|  * http://www.gnu.org/licenses/gpl.html
/* 1074 *|  */
/* 1075 */ (function($) {
/* 1076 */ 
/* 1077 */ //
/* 1078 */ // These functions define slide initialization and properties for the named
/* 1079 */ // transitions. To save file size feel free to remove any of these that you
/* 1080 */ // don't need.
/* 1081 */ //
/* 1082 */ $.fn.cycle.transitions.none = function($cont, $slides, opts) {
/* 1083 */ 	opts.fxFn = function(curr,next,opts,after){
/* 1084 */ 		$(next).show();
/* 1085 */ 		$(curr).hide();
/* 1086 */ 		after();
/* 1087 */ 	};
/* 1088 */ };
/* 1089 */ 
/* 1090 */ // not a cross-fade, fadeout only fades out the top slide
/* 1091 */ $.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
/* 1092 */ 	$slides.not(':eq('+opts.currSlide+')').css({ display: 'block', 'opacity': 1 });
/* 1093 */ 	opts.before.push(function(curr,next,opts,w,h,rev) {
/* 1094 */ 		$(curr).css('zIndex',opts.slideCount + (!rev === true ? 1 : 0));
/* 1095 */ 		$(next).css('zIndex',opts.slideCount + (!rev === true ? 0 : 1));
/* 1096 */ 	});
/* 1097 */ 	opts.animIn.opacity = 1;
/* 1098 */ 	opts.animOut.opacity = 0;
/* 1099 */ 	opts.cssBefore.opacity = 1;
/* 1100 */ 	opts.cssBefore.display = 'block';

/* jquery.cycle.all.js */

/* 1101 */ 	opts.cssAfter.zIndex = 0;
/* 1102 */ };
/* 1103 */ 
/* 1104 */ // scrollUp/Down/Left/Right
/* 1105 */ $.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
/* 1106 */ 	$cont.css('overflow','hidden');
/* 1107 */ 	opts.before.push($.fn.cycle.commonReset);
/* 1108 */ 	var h = $cont.height();
/* 1109 */ 	opts.cssBefore.top = h;
/* 1110 */ 	opts.cssBefore.left = 0;
/* 1111 */ 	opts.cssFirst.top = 0;
/* 1112 */ 	opts.animIn.top = 0;
/* 1113 */ 	opts.animOut.top = -h;
/* 1114 */ };
/* 1115 */ $.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
/* 1116 */ 	$cont.css('overflow','hidden');
/* 1117 */ 	opts.before.push($.fn.cycle.commonReset);
/* 1118 */ 	var h = $cont.height();
/* 1119 */ 	opts.cssFirst.top = 0;
/* 1120 */ 	opts.cssBefore.top = -h;
/* 1121 */ 	opts.cssBefore.left = 0;
/* 1122 */ 	opts.animIn.top = 0;
/* 1123 */ 	opts.animOut.top = h;
/* 1124 */ };
/* 1125 */ $.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
/* 1126 */ 	$cont.css('overflow','hidden');
/* 1127 */ 	opts.before.push($.fn.cycle.commonReset);
/* 1128 */ 	var w = $cont.width();
/* 1129 */ 	opts.cssFirst.left = 0;
/* 1130 */ 	opts.cssBefore.left = w;
/* 1131 */ 	opts.cssBefore.top = 0;
/* 1132 */ 	opts.animIn.left = 0;
/* 1133 */ 	opts.animOut.left = 0-w;
/* 1134 */ };
/* 1135 */ $.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
/* 1136 */ 	$cont.css('overflow','hidden');
/* 1137 */ 	opts.before.push($.fn.cycle.commonReset);
/* 1138 */ 	var w = $cont.width();
/* 1139 */ 	opts.cssFirst.left = 0;
/* 1140 */ 	opts.cssBefore.left = -w;
/* 1141 */ 	opts.cssBefore.top = 0;
/* 1142 */ 	opts.animIn.left = 0;
/* 1143 */ 	opts.animOut.left = w;
/* 1144 */ };
/* 1145 */ $.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
/* 1146 */ 	$cont.css('overflow','hidden').width();
/* 1147 */ 	opts.before.push(function(curr, next, opts, fwd) {
/* 1148 */ 		if (opts.rev)
/* 1149 */ 			fwd = !fwd;
/* 1150 */ 		$.fn.cycle.commonReset(curr,next,opts);

/* jquery.cycle.all.js */

/* 1151 */ 		opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
/* 1152 */ 		opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
/* 1153 */ 	});
/* 1154 */ 	opts.cssFirst.left = 0;
/* 1155 */ 	opts.cssBefore.top = 0;
/* 1156 */ 	opts.animIn.left = 0;
/* 1157 */ 	opts.animOut.top = 0;
/* 1158 */ };
/* 1159 */ $.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
/* 1160 */ 	$cont.css('overflow','hidden');
/* 1161 */ 	opts.before.push(function(curr, next, opts, fwd) {
/* 1162 */ 		if (opts.rev)
/* 1163 */ 			fwd = !fwd;
/* 1164 */ 		$.fn.cycle.commonReset(curr,next,opts);
/* 1165 */ 		opts.cssBefore.top = fwd ? (1-next.cycleH) : (next.cycleH-1);
/* 1166 */ 		opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
/* 1167 */ 	});
/* 1168 */ 	opts.cssFirst.top = 0;
/* 1169 */ 	opts.cssBefore.left = 0;
/* 1170 */ 	opts.animIn.top = 0;
/* 1171 */ 	opts.animOut.left = 0;
/* 1172 */ };
/* 1173 */ 
/* 1174 */ // slideX/slideY
/* 1175 */ $.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
/* 1176 */ 	opts.before.push(function(curr, next, opts) {
/* 1177 */ 		$(opts.elements).not(curr).hide();
/* 1178 */ 		$.fn.cycle.commonReset(curr,next,opts,false,true);
/* 1179 */ 		opts.animIn.width = next.cycleW;
/* 1180 */ 	});
/* 1181 */ 	opts.cssBefore.left = 0;
/* 1182 */ 	opts.cssBefore.top = 0;
/* 1183 */ 	opts.cssBefore.width = 0;
/* 1184 */ 	opts.animIn.width = 'show';
/* 1185 */ 	opts.animOut.width = 0;
/* 1186 */ };
/* 1187 */ $.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
/* 1188 */ 	opts.before.push(function(curr, next, opts) {
/* 1189 */ 		$(opts.elements).not(curr).hide();
/* 1190 */ 		$.fn.cycle.commonReset(curr,next,opts,true,false);
/* 1191 */ 		opts.animIn.height = next.cycleH;
/* 1192 */ 	});
/* 1193 */ 	opts.cssBefore.left = 0;
/* 1194 */ 	opts.cssBefore.top = 0;
/* 1195 */ 	opts.cssBefore.height = 0;
/* 1196 */ 	opts.animIn.height = 'show';
/* 1197 */ 	opts.animOut.height = 0;
/* 1198 */ };
/* 1199 */ 
/* 1200 */ // shuffle

/* jquery.cycle.all.js */

/* 1201 */ $.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
/* 1202 */ 	var i, w = $cont.css('overflow', 'visible').width();
/* 1203 */ 	$slides.css({left: 0, top: 0});
/* 1204 */ 	opts.before.push(function(curr,next,opts) {
/* 1205 */ 		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
/* 1206 */ 	});
/* 1207 */ 	// only adjust speed once!
/* 1208 */ 	if (!opts.speedAdjusted) {
/* 1209 */ 		opts.speed = opts.speed / 2; // shuffle has 2 transitions
/* 1210 */ 		opts.speedAdjusted = true;
/* 1211 */ 	}
/* 1212 */ 	opts.random = 0;
/* 1213 */ 	opts.shuffle = opts.shuffle || {left:-w, top:15};
/* 1214 */ 	opts.els = [];
/* 1215 */ 	for (i=0; i < $slides.length; i++)
/* 1216 */ 		opts.els.push($slides[i]);
/* 1217 */ 
/* 1218 */ 	for (i=0; i < opts.currSlide; i++)
/* 1219 */ 		opts.els.push(opts.els.shift());
/* 1220 */ 
/* 1221 */ 	// custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
/* 1222 */ 	opts.fxFn = function(curr, next, opts, cb, fwd) {
/* 1223 */ 		if (opts.rev)
/* 1224 */ 			fwd = !fwd;
/* 1225 */ 		var $el = fwd ? $(curr) : $(next);
/* 1226 */ 		$(next).css(opts.cssBefore);
/* 1227 */ 		var count = opts.slideCount;
/* 1228 */ 		$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
/* 1229 */ 			var hops = $.fn.cycle.hopsFromLast(opts, fwd);
/* 1230 */ 			for (var k=0; k < hops; k++)
/* 1231 */ 				fwd ? opts.els.push(opts.els.shift()) : opts.els.unshift(opts.els.pop());
/* 1232 */ 			if (fwd) {
/* 1233 */ 				for (var i=0, len=opts.els.length; i < len; i++)
/* 1234 */ 					$(opts.els[i]).css('z-index', len-i+count);
/* 1235 */ 			}
/* 1236 */ 			else {
/* 1237 */ 				var z = $(curr).css('z-index');
/* 1238 */ 				$el.css('z-index', parseInt(z,10)+1+count);
/* 1239 */ 			}
/* 1240 */ 			$el.animate({left:0, top:0}, opts.speedOut, opts.easeOut, function() {
/* 1241 */ 				$(fwd ? this : curr).hide();
/* 1242 */ 				if (cb) cb();
/* 1243 */ 			});
/* 1244 */ 		});
/* 1245 */ 	};
/* 1246 */ 	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
/* 1247 */ };
/* 1248 */ 
/* 1249 */ // turnUp/Down/Left/Right
/* 1250 */ $.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {

/* jquery.cycle.all.js */

/* 1251 */ 	opts.before.push(function(curr, next, opts) {
/* 1252 */ 		$.fn.cycle.commonReset(curr,next,opts,true,false);
/* 1253 */ 		opts.cssBefore.top = next.cycleH;
/* 1254 */ 		opts.animIn.height = next.cycleH;
/* 1255 */ 		opts.animOut.width = next.cycleW;
/* 1256 */ 	});
/* 1257 */ 	opts.cssFirst.top = 0;
/* 1258 */ 	opts.cssBefore.left = 0;
/* 1259 */ 	opts.cssBefore.height = 0;
/* 1260 */ 	opts.animIn.top = 0;
/* 1261 */ 	opts.animOut.height = 0;
/* 1262 */ };
/* 1263 */ $.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
/* 1264 */ 	opts.before.push(function(curr, next, opts) {
/* 1265 */ 		$.fn.cycle.commonReset(curr,next,opts,true,false);
/* 1266 */ 		opts.animIn.height = next.cycleH;
/* 1267 */ 		opts.animOut.top   = curr.cycleH;
/* 1268 */ 	});
/* 1269 */ 	opts.cssFirst.top = 0;
/* 1270 */ 	opts.cssBefore.left = 0;
/* 1271 */ 	opts.cssBefore.top = 0;
/* 1272 */ 	opts.cssBefore.height = 0;
/* 1273 */ 	opts.animOut.height = 0;
/* 1274 */ };
/* 1275 */ $.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
/* 1276 */ 	opts.before.push(function(curr, next, opts) {
/* 1277 */ 		$.fn.cycle.commonReset(curr,next,opts,false,true);
/* 1278 */ 		opts.cssBefore.left = next.cycleW;
/* 1279 */ 		opts.animIn.width = next.cycleW;
/* 1280 */ 	});
/* 1281 */ 	opts.cssBefore.top = 0;
/* 1282 */ 	opts.cssBefore.width = 0;
/* 1283 */ 	opts.animIn.left = 0;
/* 1284 */ 	opts.animOut.width = 0;
/* 1285 */ };
/* 1286 */ $.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
/* 1287 */ 	opts.before.push(function(curr, next, opts) {
/* 1288 */ 		$.fn.cycle.commonReset(curr,next,opts,false,true);
/* 1289 */ 		opts.animIn.width = next.cycleW;
/* 1290 */ 		opts.animOut.left = curr.cycleW;
/* 1291 */ 	});
/* 1292 */ 	$.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
/* 1293 */ 	opts.animIn.left = 0;
/* 1294 */ 	opts.animOut.width = 0;
/* 1295 */ };
/* 1296 */ 
/* 1297 */ // zoom
/* 1298 */ $.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
/* 1299 */ 	opts.before.push(function(curr, next, opts) {
/* 1300 */ 		$.fn.cycle.commonReset(curr,next,opts,false,false,true);

/* jquery.cycle.all.js */

/* 1301 */ 		opts.cssBefore.top = next.cycleH/2;
/* 1302 */ 		opts.cssBefore.left = next.cycleW/2;
/* 1303 */ 		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
/* 1304 */ 		$.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH/2, left: curr.cycleW/2 });
/* 1305 */ 	});
/* 1306 */ 	opts.cssFirst.top = 0;
/* 1307 */ 	opts.cssFirst.left = 0;
/* 1308 */ 	opts.cssBefore.width = 0;
/* 1309 */ 	opts.cssBefore.height = 0;
/* 1310 */ };
/* 1311 */ 
/* 1312 */ // fadeZoom
/* 1313 */ $.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
/* 1314 */ 	opts.before.push(function(curr, next, opts) {
/* 1315 */ 		$.fn.cycle.commonReset(curr,next,opts,false,false);
/* 1316 */ 		opts.cssBefore.left = next.cycleW/2;
/* 1317 */ 		opts.cssBefore.top = next.cycleH/2;
/* 1318 */ 		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
/* 1319 */ 	});
/* 1320 */ 	opts.cssBefore.width = 0;
/* 1321 */ 	opts.cssBefore.height = 0;
/* 1322 */ 	opts.animOut.opacity = 0;
/* 1323 */ };
/* 1324 */ 
/* 1325 */ // blindX
/* 1326 */ $.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
/* 1327 */ 	var w = $cont.css('overflow','hidden').width();
/* 1328 */ 	opts.before.push(function(curr, next, opts) {
/* 1329 */ 		$.fn.cycle.commonReset(curr,next,opts);
/* 1330 */ 		opts.animIn.width = next.cycleW;
/* 1331 */ 		opts.animOut.left   = curr.cycleW;
/* 1332 */ 	});
/* 1333 */ 	opts.cssBefore.left = w;
/* 1334 */ 	opts.cssBefore.top = 0;
/* 1335 */ 	opts.animIn.left = 0;
/* 1336 */ 	opts.animOut.left = w;
/* 1337 */ };
/* 1338 */ // blindY
/* 1339 */ $.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
/* 1340 */ 	var h = $cont.css('overflow','hidden').height();
/* 1341 */ 	opts.before.push(function(curr, next, opts) {
/* 1342 */ 		$.fn.cycle.commonReset(curr,next,opts);
/* 1343 */ 		opts.animIn.height = next.cycleH;
/* 1344 */ 		opts.animOut.top   = curr.cycleH;
/* 1345 */ 	});
/* 1346 */ 	opts.cssBefore.top = h;
/* 1347 */ 	opts.cssBefore.left = 0;
/* 1348 */ 	opts.animIn.top = 0;
/* 1349 */ 	opts.animOut.top = h;
/* 1350 */ };

/* jquery.cycle.all.js */

/* 1351 */ // blindZ
/* 1352 */ $.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
/* 1353 */ 	var h = $cont.css('overflow','hidden').height();
/* 1354 */ 	var w = $cont.width();
/* 1355 */ 	opts.before.push(function(curr, next, opts) {
/* 1356 */ 		$.fn.cycle.commonReset(curr,next,opts);
/* 1357 */ 		opts.animIn.height = next.cycleH;
/* 1358 */ 		opts.animOut.top   = curr.cycleH;
/* 1359 */ 	});
/* 1360 */ 	opts.cssBefore.top = h;
/* 1361 */ 	opts.cssBefore.left = w;
/* 1362 */ 	opts.animIn.top = 0;
/* 1363 */ 	opts.animIn.left = 0;
/* 1364 */ 	opts.animOut.top = h;
/* 1365 */ 	opts.animOut.left = w;
/* 1366 */ };
/* 1367 */ 
/* 1368 */ // growX - grow horizontally from centered 0 width
/* 1369 */ $.fn.cycle.transitions.growX = function($cont, $slides, opts) {
/* 1370 */ 	opts.before.push(function(curr, next, opts) {
/* 1371 */ 		$.fn.cycle.commonReset(curr,next,opts,false,true);
/* 1372 */ 		opts.cssBefore.left = this.cycleW/2;
/* 1373 */ 		opts.animIn.left = 0;
/* 1374 */ 		opts.animIn.width = this.cycleW;
/* 1375 */ 		opts.animOut.left = 0;
/* 1376 */ 	});
/* 1377 */ 	opts.cssBefore.top = 0;
/* 1378 */ 	opts.cssBefore.width = 0;
/* 1379 */ };
/* 1380 */ // growY - grow vertically from centered 0 height
/* 1381 */ $.fn.cycle.transitions.growY = function($cont, $slides, opts) {
/* 1382 */ 	opts.before.push(function(curr, next, opts) {
/* 1383 */ 		$.fn.cycle.commonReset(curr,next,opts,true,false);
/* 1384 */ 		opts.cssBefore.top = this.cycleH/2;
/* 1385 */ 		opts.animIn.top = 0;
/* 1386 */ 		opts.animIn.height = this.cycleH;
/* 1387 */ 		opts.animOut.top = 0;
/* 1388 */ 	});
/* 1389 */ 	opts.cssBefore.height = 0;
/* 1390 */ 	opts.cssBefore.left = 0;
/* 1391 */ };
/* 1392 */ 
/* 1393 */ // curtainX - squeeze in both edges horizontally
/* 1394 */ $.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
/* 1395 */ 	opts.before.push(function(curr, next, opts) {
/* 1396 */ 		$.fn.cycle.commonReset(curr,next,opts,false,true,true);
/* 1397 */ 		opts.cssBefore.left = next.cycleW/2;
/* 1398 */ 		opts.animIn.left = 0;
/* 1399 */ 		opts.animIn.width = this.cycleW;
/* 1400 */ 		opts.animOut.left = curr.cycleW/2;

/* jquery.cycle.all.js */

/* 1401 */ 		opts.animOut.width = 0;
/* 1402 */ 	});
/* 1403 */ 	opts.cssBefore.top = 0;
/* 1404 */ 	opts.cssBefore.width = 0;
/* 1405 */ };
/* 1406 */ // curtainY - squeeze in both edges vertically
/* 1407 */ $.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
/* 1408 */ 	opts.before.push(function(curr, next, opts) {
/* 1409 */ 		$.fn.cycle.commonReset(curr,next,opts,true,false,true);
/* 1410 */ 		opts.cssBefore.top = next.cycleH/2;
/* 1411 */ 		opts.animIn.top = 0;
/* 1412 */ 		opts.animIn.height = next.cycleH;
/* 1413 */ 		opts.animOut.top = curr.cycleH/2;
/* 1414 */ 		opts.animOut.height = 0;
/* 1415 */ 	});
/* 1416 */ 	opts.cssBefore.height = 0;
/* 1417 */ 	opts.cssBefore.left = 0;
/* 1418 */ };
/* 1419 */ 
/* 1420 */ // cover - curr slide covered by next slide
/* 1421 */ $.fn.cycle.transitions.cover = function($cont, $slides, opts) {
/* 1422 */ 	var d = opts.direction || 'left';
/* 1423 */ 	var w = $cont.css('overflow','hidden').width();
/* 1424 */ 	var h = $cont.height();
/* 1425 */ 	opts.before.push(function(curr, next, opts) {
/* 1426 */ 		$.fn.cycle.commonReset(curr,next,opts);
/* 1427 */ 		if (d == 'right')
/* 1428 */ 			opts.cssBefore.left = -w;
/* 1429 */ 		else if (d == 'up')
/* 1430 */ 			opts.cssBefore.top = h;
/* 1431 */ 		else if (d == 'down')
/* 1432 */ 			opts.cssBefore.top = -h;
/* 1433 */ 		else
/* 1434 */ 			opts.cssBefore.left = w;
/* 1435 */ 	});
/* 1436 */ 	opts.animIn.left = 0;
/* 1437 */ 	opts.animIn.top = 0;
/* 1438 */ 	opts.cssBefore.top = 0;
/* 1439 */ 	opts.cssBefore.left = 0;
/* 1440 */ };
/* 1441 */ 
/* 1442 */ // uncover - curr slide moves off next slide
/* 1443 */ $.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
/* 1444 */ 	var d = opts.direction || 'left';
/* 1445 */ 	var w = $cont.css('overflow','hidden').width();
/* 1446 */ 	var h = $cont.height();
/* 1447 */ 	opts.before.push(function(curr, next, opts) {
/* 1448 */ 		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
/* 1449 */ 		if (d == 'right')
/* 1450 */ 			opts.animOut.left = w;

/* jquery.cycle.all.js */

/* 1451 */ 		else if (d == 'up')
/* 1452 */ 			opts.animOut.top = -h;
/* 1453 */ 		else if (d == 'down')
/* 1454 */ 			opts.animOut.top = h;
/* 1455 */ 		else
/* 1456 */ 			opts.animOut.left = -w;
/* 1457 */ 	});
/* 1458 */ 	opts.animIn.left = 0;
/* 1459 */ 	opts.animIn.top = 0;
/* 1460 */ 	opts.cssBefore.top = 0;
/* 1461 */ 	opts.cssBefore.left = 0;
/* 1462 */ };
/* 1463 */ 
/* 1464 */ // toss - move top slide and fade away
/* 1465 */ $.fn.cycle.transitions.toss = function($cont, $slides, opts) {
/* 1466 */ 	var w = $cont.css('overflow','visible').width();
/* 1467 */ 	var h = $cont.height();
/* 1468 */ 	opts.before.push(function(curr, next, opts) {
/* 1469 */ 		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
/* 1470 */ 		// provide default toss settings if animOut not provided
/* 1471 */ 		if (!opts.animOut.left && !opts.animOut.top)
/* 1472 */ 			$.extend(opts.animOut, { left: w*2, top: -h/2, opacity: 0 });
/* 1473 */ 		else
/* 1474 */ 			opts.animOut.opacity = 0;
/* 1475 */ 	});
/* 1476 */ 	opts.cssBefore.left = 0;
/* 1477 */ 	opts.cssBefore.top = 0;
/* 1478 */ 	opts.animIn.left = 0;
/* 1479 */ };
/* 1480 */ 
/* 1481 */ // wipe - clip animation
/* 1482 */ $.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
/* 1483 */ 	var w = $cont.css('overflow','hidden').width();
/* 1484 */ 	var h = $cont.height();
/* 1485 */ 	opts.cssBefore = opts.cssBefore || {};
/* 1486 */ 	var clip;
/* 1487 */ 	if (opts.clip) {
/* 1488 */ 		if (/l2r/.test(opts.clip))
/* 1489 */ 			clip = 'rect(0px 0px '+h+'px 0px)';
/* 1490 */ 		else if (/r2l/.test(opts.clip))
/* 1491 */ 			clip = 'rect(0px '+w+'px '+h+'px '+w+'px)';
/* 1492 */ 		else if (/t2b/.test(opts.clip))
/* 1493 */ 			clip = 'rect(0px '+w+'px 0px 0px)';
/* 1494 */ 		else if (/b2t/.test(opts.clip))
/* 1495 */ 			clip = 'rect('+h+'px '+w+'px '+h+'px 0px)';
/* 1496 */ 		else if (/zoom/.test(opts.clip)) {
/* 1497 */ 			var top = parseInt(h/2,10);
/* 1498 */ 			var left = parseInt(w/2,10);
/* 1499 */ 			clip = 'rect('+top+'px '+left+'px '+top+'px '+left+'px)';
/* 1500 */ 		}

/* jquery.cycle.all.js */

/* 1501 */ 	}
/* 1502 */ 
/* 1503 */ 	opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';
/* 1504 */ 
/* 1505 */ 	var d = opts.cssBefore.clip.match(/(\d+)/g);
/* 1506 */ 	var t = parseInt(d[0],10), r = parseInt(d[1],10), b = parseInt(d[2],10), l = parseInt(d[3],10);
/* 1507 */ 
/* 1508 */ 	opts.before.push(function(curr, next, opts) {
/* 1509 */ 		if (curr == next) return;
/* 1510 */ 		var $curr = $(curr), $next = $(next);
/* 1511 */ 		$.fn.cycle.commonReset(curr,next,opts,true,true,false);
/* 1512 */ 		opts.cssAfter.display = 'block';
/* 1513 */ 
/* 1514 */ 		var step = 1, count = parseInt((opts.speedIn / 13),10) - 1;
/* 1515 */ 		(function f() {
/* 1516 */ 			var tt = t ? t - parseInt(step * (t/count),10) : 0;
/* 1517 */ 			var ll = l ? l - parseInt(step * (l/count),10) : 0;
/* 1518 */ 			var bb = b < h ? b + parseInt(step * ((h-b)/count || 1),10) : h;
/* 1519 */ 			var rr = r < w ? r + parseInt(step * ((w-r)/count || 1),10) : w;
/* 1520 */ 			$next.css({ clip: 'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)' });
/* 1521 */ 			(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
/* 1522 */ 		})();
/* 1523 */ 	});
/* 1524 */ 	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
/* 1525 */ 	opts.animIn	   = { left: 0 };
/* 1526 */ 	opts.animOut   = { left: 0 };
/* 1527 */ };
/* 1528 */ 
/* 1529 */ })(jQuery);

;
/* slick.min.js */

/* 1  */ /*
/* 2  *|      _ _      _       _
/* 3  *|  ___| (_) ___| | __  (_)___
/* 4  *| / __| | |/ __| |/ /  | / __|
/* 5  *| \__ \ | | (__|   < _ | \__ \
/* 6  *| |___/_|_|\___|_|\_(_)/ |___/
/* 7  *|                    |__/
/* 8  *| 
/* 9  *|  Version: 1.6.0
/* 10 *|   Author: Ken Wheeler
/* 11 *|  Website: http://kenwheeler.github.io
/* 12 *|     Docs: http://kenwheeler.github.io/slick
/* 13 *|     Repo: http://github.com/kenwheeler/slick
/* 14 *|   Issues: http://github.com/kenwheeler/slick/issues
/* 15 *| 
/* 16 *|  */
/* 17 */ !function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
/* 18 */ d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

;
/* jquery.simplyscroll.min.js */

/* 1  */ /*
/* 2  *|  * simplyScroll 2 - a scroll-tastic jQuery plugin
/* 3  *|  *
/* 4  *|  * http://logicbox.net/jquery/simplyscroll/
/* 5  *|  *
/* 6  *|  * Copyright (c) 2009-2012 Will Kelly - http://logicbox.net
/* 7  *|  *
/* 8  *|  * Dual licensed under the MIT and GPL licenses.
/* 9  *|  *
/* 10 *|  * Version: 2.0.5 Last revised: 10/05/2012
/* 11 *|  *
/* 12 *|  */
/* 13 */ (function(c,j,i){c.fn.simplyScroll=function(a){return this.each(function(){new c.simplyScroll(this,a)})};var h={customClass:"simply-scroll",frameRate:24,speed:1,orientation:"horizontal",auto:!0,autoMode:"loop",manualMode:"end",direction:"forwards",pauseOnHover:!0,pauseOnTouch:!0,pauseButton:!1,startOnLoad:!1};c.simplyScroll=function(a,b){var g=this;this.o=c.extend({},h,b||{});this.isAuto=!1!==this.o.auto&&null!==this.o.autoMode.match(/^loop|bounce$/);this.isRTL=(this.isHorizontal=null!==this.o.orientation.match(/^horizontal|vertical$/)&&
/* 14 */ this.o.orientation==h.orientation)&&"rtl"==c("html").attr("dir");this.isForwards=!this.isAuto||this.isAuto&&(null!==this.o.direction.match(/^forwards|backwards$/)&&this.o.direction==h.direction)&&!this.isRTL;this.isLoop=this.isAuto&&"loop"==this.o.autoMode||!this.isAuto&&"loop"==this.o.manualMode;this.events=(this.supportsTouch="createTouch"in document)?{start:"touchstart MozTouchDown",move:"touchmove MozTouchMove",end:"touchend touchcancel MozTouchRelease"}:{start:"mouseenter",end:"mouseleave"};
/* 15 */ this.$list=c(a);var d=this.$list.children();this.$list.addClass("simply-scroll-list").wrap('<div class="simply-scroll-clip"></div>').parent().wrap('<div class="'+this.o.customClass+' simply-scroll-container"></div>');this.isAuto?this.o.pauseButton&&(this.$list.parent().parent().prepend('<div class="simply-scroll-btn simply-scroll-btn-pause"></div>'),this.o.pauseOnHover=!1):this.$list.parent().parent().prepend('<div class="simply-scroll-forward"></div>').prepend('<div class="simply-scroll-back"></div>');
/* 16 */ if(1<d.length){var f=!1,e=0;this.isHorizontal?(d.each(function(){e=e+c(this).outerWidth(true)}),f=d.eq(0).outerWidth(!0)*d.length!==e):(d.each(function(){e=e+c(this).outerHeight(true)}),f=d.eq(0).outerHeight(!0)*d.length!==e);f&&(this.$list=this.$list.wrap("<div></div>").parent().addClass("simply-scroll-list"),this.isHorizontal?this.$list.children().css({"float":"left",width:e+"px"}):this.$list.children().css({height:e+"px"}))}this.o.startOnLoad?c(j).load(function(){g.init()}):this.init()};c.simplyScroll.fn=
/* 17 */ c.simplyScroll.prototype={};c.simplyScroll.fn.extend=c.simplyScroll.extend=c.extend;c.simplyScroll.fn.extend({init:function(){this.$items=this.$list.children();this.$clip=this.$list.parent();this.$container=this.$clip.parent();this.$btnBack=c(".simply-scroll-back",this.$container);this.$btnForward=c(".simply-scroll-forward",this.$container);this.isHorizontal?(this.itemMax=this.$items.eq(0).outerWidth(!0),this.clipMax=this.$clip.width(),this.dimension="width",this.moveBackClass="simply-scroll-btn-left",
/* 18 */ this.moveForwardClass="simply-scroll-btn-right",this.scrollPos="Left"):(this.itemMax=this.$items.eq(0).outerHeight(!0),this.clipMax=this.$clip.height(),this.dimension="height",this.moveBackClass="simply-scroll-btn-up",this.moveForwardClass="simply-scroll-btn-down",this.scrollPos="Top");this.posMin=0;this.posMax=this.$items.length*this.itemMax;var a=Math.ceil(this.clipMax/this.itemMax);if(this.isAuto&&"loop"==this.o.autoMode)this.$list.css(this.dimension,this.posMax+this.itemMax*a+"px"),this.posMax+=
/* 19 */ this.clipMax-this.o.speed,this.isForwards?(this.$items.slice(0,a).clone(!0).appendTo(this.$list),this.resetPosition=0):(this.$items.slice(-a).clone(!0).prependTo(this.$list),this.resetPosition=this.$items.length*this.itemMax,this.isRTL&&(this.$clip[0].dir="ltr",this.$items.css("float","right")));else if(!this.isAuto&&"loop"==this.o.manualMode){this.posMax+=this.itemMax*a;this.$list.css(this.dimension,this.posMax+this.itemMax*a+"px");this.posMax+=this.clipMax-this.o.speed;this.$items.slice(0,a).clone(!0).appendTo(this.$list);
/* 20 */ this.$items.slice(-a).clone(!0).prependTo(this.$list);this.resetPositionForwards=this.resetPosition=a*this.itemMax;this.resetPositionBackwards=this.$items.length*this.itemMax;var b=this;this.$btnBack.bind(this.events.start,function(){b.isForwards=false;b.resetPosition=b.resetPositionBackwards});this.$btnForward.bind(this.events.start,function(){b.isForwards=true;b.resetPosition=b.resetPositionForwards})}else this.$list.css(this.dimension,this.posMax+"px"),this.isForwards?this.resetPosition=0:(this.resetPosition=
/* 21 */ this.$items.length*this.itemMax,this.isRTL&&(this.$clip[0].dir="ltr",this.$items.css("float","right")));this.resetPos();this.interval=null;this.intervalDelay=Math.floor(1E3/this.o.frameRate);if(this.isAuto||"end"!=this.o.manualMode)for(;0!==this.itemMax%this.o.speed;)if(this.o.speed--,0===this.o.speed){this.o.speed=1;break}b=this;this.trigger=null;this.funcMoveBack=function(a){a!==i&&a.preventDefault();b.trigger=!b.isAuto&&b.o.manualMode=="end"?this:null;b.isAuto?b.isForwards?b.moveBack():b.moveForward():
/* 22 */ b.moveBack()};this.funcMoveForward=function(a){a!==i&&a.preventDefault();b.trigger=!b.isAuto&&b.o.manualMode=="end"?this:null;b.isAuto?b.isForwards?b.moveForward():b.moveBack():b.moveForward()};this.funcMovePause=function(){b.movePause()};this.funcMoveStop=function(){b.moveStop()};this.funcMoveResume=function(){b.moveResume()};if(this.isAuto){this.paused=!1;var g=function(){if(b.paused===false){b.paused=true;b.funcMovePause()}else{b.paused=false;b.funcMoveResume()}return b.paused};this.supportsTouch&&
/* 23 */ this.$items.find("a").length&&(this.supportsTouch=!1);if(this.isAuto&&this.o.pauseOnHover&&!this.supportsTouch)this.$clip.bind(this.events.start,this.funcMovePause).bind(this.events.end,this.funcMoveResume);else if(this.isAuto&&this.o.pauseOnTouch&&!this.o.pauseButton&&this.supportsTouch){var d,f;this.$clip.bind(this.events.start,function(a){g();var c=a.originalEvent.touches[0];d=b.isHorizontal?c.pageX:c.pageY;f=b.$clip[0]["scroll"+b.scrollPos];a.stopPropagation();a.preventDefault()}).bind(this.events.move,
/* 24 */ function(a){a.stopPropagation();a.preventDefault();a=a.originalEvent.touches[0];a=d-(b.isHorizontal?a.pageX:a.pageY)+f;if(a<0)a=0;else if(a>b.posMax)a=b.posMax;b.$clip[0]["scroll"+b.scrollPos]=a;b.funcMovePause();b.paused=true})}else this.o.pauseButton&&(this.$btnPause=c(".simply-scroll-btn-pause",this.$container).bind("click",function(a){a.preventDefault();g()?c(this).addClass("active"):c(this).removeClass("active")}));this.funcMoveForward()}else this.$btnBack.addClass("simply-scroll-btn "+this.moveBackClass).bind(this.events.start,
/* 25 */ this.funcMoveBack).bind(this.events.end,this.funcMoveStop),this.$btnForward.addClass("simply-scroll-btn "+this.moveForwardClass).bind(this.events.start,this.funcMoveForward).bind(this.events.end,this.funcMoveStop),"end"==this.o.manualMode&&(!this.isRTL?this.$btnBack.addClass("disabled"):this.$btnForward.addClass("disabled"))},moveForward:function(){var a=this;this.movement="forward";null!==this.trigger&&this.$btnBack.removeClass("disabled");a.interval=setInterval(function(){a.$clip[0]["scroll"+a.scrollPos]<
/* 26 */ a.posMax-a.clipMax?a.$clip[0]["scroll"+a.scrollPos]+=a.o.speed:a.isLoop?a.resetPos():a.moveStop(a.movement)},a.intervalDelay)},moveBack:function(){var a=this;this.movement="back";null!==this.trigger&&this.$btnForward.removeClass("disabled");a.interval=setInterval(function(){a.$clip[0]["scroll"+a.scrollPos]>a.posMin?a.$clip[0]["scroll"+a.scrollPos]-=a.o.speed:a.isLoop?a.resetPos():a.moveStop(a.movement)},a.intervalDelay)},movePause:function(){clearInterval(this.interval)},moveStop:function(a){this.movePause();
/* 27 */ null!==this.trigger&&("undefined"!==typeof a&&c(this.trigger).addClass("disabled"),this.trigger=null);this.isAuto&&"bounce"==this.o.autoMode&&("forward"==a?this.moveBack():this.moveForward())},moveResume:function(){"forward"==this.movement?this.moveForward():this.moveBack()},resetPos:function(){this.$clip[0]["scroll"+this.scrollPos]=this.resetPosition}})})(jQuery,window);

;
/* jquery.easing.js */

/* 1   */ /*
/* 2   *|  * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
/* 3   *|  *
/* 4   *|  * Uses the built in easing capabilities added In jQuery 1.1
/* 5   *|  * to offer multiple easing options
/* 6   *|  *
/* 7   *|  * TERMS OF USE - jQuery Easing
/* 8   *|  * 
/* 9   *|  * Open source under the BSD License. 
/* 10  *|  * 
/* 11  *|  * Copyright Â© 2008 George McGinley Smith
/* 12  *|  * All rights reserved.
/* 13  *|  * 
/* 14  *|  * Redistribution and use in source and binary forms, with or without modification, 
/* 15  *|  * are permitted provided that the following conditions are met:
/* 16  *|  * 
/* 17  *|  * Redistributions of source code must retain the above copyright notice, this list of 
/* 18  *|  * conditions and the following disclaimer.
/* 19  *|  * Redistributions in binary form must reproduce the above copyright notice, this list 
/* 20  *|  * of conditions and the following disclaimer in the documentation and/or other materials 
/* 21  *|  * provided with the distribution.
/* 22  *|  * 
/* 23  *|  * Neither the name of the author nor the names of contributors may be used to endorse 
/* 24  *|  * or promote products derived from this software without specific prior written permission.
/* 25  *|  * 
/* 26  *|  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
/* 27  *|  * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
/* 28  *|  * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
/* 29  *|  *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
/* 30  *|  *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
/* 31  *|  *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
/* 32  *|  * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
/* 33  *|  *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
/* 34  *|  * OF THE POSSIBILITY OF SUCH DAMAGE. 
/* 35  *|  *
/* 36  *| */
/* 37  */ 
/* 38  */ // t: current time, b: begInnIng value, c: change In value, d: duration
/* 39  */ jQuery.easing['jswing'] = jQuery.easing['swing'];
/* 40  */ 
/* 41  */ jQuery.extend( jQuery.easing,
/* 42  */ {
/* 43  */ 	def: 'easeOutQuad',
/* 44  */ 	swing: function (x, t, b, c, d) {
/* 45  */ 		//alert(jQuery.easing.default);
/* 46  */ 		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
/* 47  */ 	},
/* 48  */ 	easeInQuad: function (x, t, b, c, d) {
/* 49  */ 		return c*(t/=d)*t + b;
/* 50  */ 	},

/* jquery.easing.js */

/* 51  */ 	easeOutQuad: function (x, t, b, c, d) {
/* 52  */ 		return -c *(t/=d)*(t-2) + b;
/* 53  */ 	},
/* 54  */ 	easeInOutQuad: function (x, t, b, c, d) {
/* 55  */ 		if ((t/=d/2) < 1) return c/2*t*t + b;
/* 56  */ 		return -c/2 * ((--t)*(t-2) - 1) + b;
/* 57  */ 	},
/* 58  */ 	easeInCubic: function (x, t, b, c, d) {
/* 59  */ 		return c*(t/=d)*t*t + b;
/* 60  */ 	},
/* 61  */ 	easeOutCubic: function (x, t, b, c, d) {
/* 62  */ 		return c*((t=t/d-1)*t*t + 1) + b;
/* 63  */ 	},
/* 64  */ 	easeInOutCubic: function (x, t, b, c, d) {
/* 65  */ 		if ((t/=d/2) < 1) return c/2*t*t*t + b;
/* 66  */ 		return c/2*((t-=2)*t*t + 2) + b;
/* 67  */ 	},
/* 68  */ 	easeInQuart: function (x, t, b, c, d) {
/* 69  */ 		return c*(t/=d)*t*t*t + b;
/* 70  */ 	},
/* 71  */ 	easeOutQuart: function (x, t, b, c, d) {
/* 72  */ 		return -c * ((t=t/d-1)*t*t*t - 1) + b;
/* 73  */ 	},
/* 74  */ 	easeInOutQuart: function (x, t, b, c, d) {
/* 75  */ 		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
/* 76  */ 		return -c/2 * ((t-=2)*t*t*t - 2) + b;
/* 77  */ 	},
/* 78  */ 	easeInQuint: function (x, t, b, c, d) {
/* 79  */ 		return c*(t/=d)*t*t*t*t + b;
/* 80  */ 	},
/* 81  */ 	easeOutQuint: function (x, t, b, c, d) {
/* 82  */ 		return c*((t=t/d-1)*t*t*t*t + 1) + b;
/* 83  */ 	},
/* 84  */ 	easeInOutQuint: function (x, t, b, c, d) {
/* 85  */ 		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
/* 86  */ 		return c/2*((t-=2)*t*t*t*t + 2) + b;
/* 87  */ 	},
/* 88  */ 	easeInSine: function (x, t, b, c, d) {
/* 89  */ 		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
/* 90  */ 	},
/* 91  */ 	easeOutSine: function (x, t, b, c, d) {
/* 92  */ 		return c * Math.sin(t/d * (Math.PI/2)) + b;
/* 93  */ 	},
/* 94  */ 	easeInOutSine: function (x, t, b, c, d) {
/* 95  */ 		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
/* 96  */ 	},
/* 97  */ 	easeInExpo: function (x, t, b, c, d) {
/* 98  */ 		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
/* 99  */ 	},
/* 100 */ 	easeOutExpo: function (x, t, b, c, d) {

/* jquery.easing.js */

/* 101 */ 		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
/* 102 */ 	},
/* 103 */ 	easeInOutExpo: function (x, t, b, c, d) {
/* 104 */ 		if (t==0) return b;
/* 105 */ 		if (t==d) return b+c;
/* 106 */ 		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
/* 107 */ 		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
/* 108 */ 	},
/* 109 */ 	easeInCirc: function (x, t, b, c, d) {
/* 110 */ 		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
/* 111 */ 	},
/* 112 */ 	easeOutCirc: function (x, t, b, c, d) {
/* 113 */ 		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
/* 114 */ 	},
/* 115 */ 	easeInOutCirc: function (x, t, b, c, d) {
/* 116 */ 		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
/* 117 */ 		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
/* 118 */ 	},
/* 119 */ 	easeInElastic: function (x, t, b, c, d) {
/* 120 */ 		var s=1.70158;var p=0;var a=c;
/* 121 */ 		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
/* 122 */ 		if (a < Math.abs(c)) { a=c; var s=p/4; }
/* 123 */ 		else var s = p/(2*Math.PI) * Math.asin (c/a);
/* 124 */ 		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
/* 125 */ 	},
/* 126 */ 	easeOutElastic: function (x, t, b, c, d) {
/* 127 */ 		var s=1.70158;var p=0;var a=c;
/* 128 */ 		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
/* 129 */ 		if (a < Math.abs(c)) { a=c; var s=p/4; }
/* 130 */ 		else var s = p/(2*Math.PI) * Math.asin (c/a);
/* 131 */ 		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
/* 132 */ 	},
/* 133 */ 	easeInOutElastic: function (x, t, b, c, d) {
/* 134 */ 		var s=1.70158;var p=0;var a=c;
/* 135 */ 		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
/* 136 */ 		if (a < Math.abs(c)) { a=c; var s=p/4; }
/* 137 */ 		else var s = p/(2*Math.PI) * Math.asin (c/a);
/* 138 */ 		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
/* 139 */ 		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
/* 140 */ 	},
/* 141 */ 	easeInBack: function (x, t, b, c, d, s) {
/* 142 */ 		if (s == undefined) s = 1.70158;
/* 143 */ 		return c*(t/=d)*t*((s+1)*t - s) + b;
/* 144 */ 	},
/* 145 */ 	easeOutBack: function (x, t, b, c, d, s) {
/* 146 */ 		if (s == undefined) s = 1.70158;
/* 147 */ 		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
/* 148 */ 	},
/* 149 */ 	easeInOutBack: function (x, t, b, c, d, s) {
/* 150 */ 		if (s == undefined) s = 1.70158; 

/* jquery.easing.js */

/* 151 */ 		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
/* 152 */ 		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
/* 153 */ 	},
/* 154 */ 	easeInBounce: function (x, t, b, c, d) {
/* 155 */ 		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
/* 156 */ 	},
/* 157 */ 	easeOutBounce: function (x, t, b, c, d) {
/* 158 */ 		if ((t/=d) < (1/2.75)) {
/* 159 */ 			return c*(7.5625*t*t) + b;
/* 160 */ 		} else if (t < (2/2.75)) {
/* 161 */ 			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
/* 162 */ 		} else if (t < (2.5/2.75)) {
/* 163 */ 			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
/* 164 */ 		} else {
/* 165 */ 			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
/* 166 */ 		}
/* 167 */ 	},
/* 168 */ 	easeInOutBounce: function (x, t, b, c, d) {
/* 169 */ 		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
/* 170 */ 		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
/* 171 */ 	}
/* 172 */ });
/* 173 */ 
/* 174 */ /*
/* 175 *|  *
/* 176 *|  * TERMS OF USE - EASING EQUATIONS
/* 177 *|  * 
/* 178 *|  * Open source under the BSD License. 
/* 179 *|  * 
/* 180 *|  * Copyright Â© 2001 Robert Penner
/* 181 *|  * All rights reserved.
/* 182 *|  * 
/* 183 *|  * Redistribution and use in source and binary forms, with or without modification, 
/* 184 *|  * are permitted provided that the following conditions are met:
/* 185 *|  * 
/* 186 *|  * Redistributions of source code must retain the above copyright notice, this list of 
/* 187 *|  * conditions and the following disclaimer.
/* 188 *|  * Redistributions in binary form must reproduce the above copyright notice, this list 
/* 189 *|  * of conditions and the following disclaimer in the documentation and/or other materials 
/* 190 *|  * provided with the distribution.
/* 191 *|  * 
/* 192 *|  * Neither the name of the author nor the names of contributors may be used to endorse 
/* 193 *|  * or promote products derived from this software without specific prior written permission.
/* 194 *|  * 
/* 195 *|  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
/* 196 *|  * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
/* 197 *|  * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
/* 198 *|  *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
/* 199 *|  *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
/* 200 *|  *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 

/* jquery.easing.js */

/* 201 *|  * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
/* 202 *|  *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
/* 203 *|  * OF THE POSSIBILITY OF SUCH DAMAGE. 
/* 204 *|  *
/* 205 *|  */

;
/* jquery.mousewheel.js */

/* 1  */ /*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
/* 2  *|  * Licensed under the MIT License (LICENSE.txt).
/* 3  *|  *
/* 4  *|  * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
/* 5  *|  * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
/* 6  *|  * Thanks to: Seamus Leahy for adding deltaX and deltaY
/* 7  *|  *
/* 8  *|  * Version: 3.0.6
/* 9  *|  * 
/* 10 *|  * Requires: 1.2.2+
/* 11 *|  */
/* 12 */ 
/* 13 */ (function($) {
/* 14 */ 
/* 15 */ var types = ['DOMMouseScroll', 'mousewheel'];
/* 16 */ 
/* 17 */ if ($.event.fixHooks) {
/* 18 */     for ( var i=types.length; i; ) {
/* 19 */         $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
/* 20 */     }
/* 21 */ }
/* 22 */ 
/* 23 */ $.event.special.mousewheel = {
/* 24 */     setup: function() {
/* 25 */         if ( this.addEventListener ) {
/* 26 */             for ( var i=types.length; i; ) {
/* 27 */                 this.addEventListener( types[--i], handler, false );
/* 28 */             }
/* 29 */         } else {
/* 30 */             this.onmousewheel = handler;
/* 31 */         }
/* 32 */     },
/* 33 */     
/* 34 */     teardown: function() {
/* 35 */         if ( this.removeEventListener ) {
/* 36 */             for ( var i=types.length; i; ) {
/* 37 */                 this.removeEventListener( types[--i], handler, false );
/* 38 */             }
/* 39 */         } else {
/* 40 */             this.onmousewheel = null;
/* 41 */         }
/* 42 */     }
/* 43 */ };
/* 44 */ 
/* 45 */ $.fn.extend({
/* 46 */     mousewheel: function(fn) {
/* 47 */         return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
/* 48 */     },
/* 49 */     
/* 50 */     unmousewheel: function(fn) {

/* jquery.mousewheel.js */

/* 51 */         return this.unbind("mousewheel", fn);
/* 52 */     }
/* 53 */ });
/* 54 */ 
/* 55 */ 
/* 56 */ function handler(event) {
/* 57 */     var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
/* 58 */     event = $.event.fix(orgEvent);
/* 59 */     event.type = "mousewheel";
/* 60 */     
/* 61 */     // Old school scrollwheel delta
/* 62 */     if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
/* 63 */     if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
/* 64 */     
/* 65 */     // New school multidimensional scroll (touchpads) deltas
/* 66 */     deltaY = delta;
/* 67 */     
/* 68 */     // Gecko
/* 69 */     if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
/* 70 */         deltaY = 0;
/* 71 */         deltaX = -1*delta;
/* 72 */     }
/* 73 */     
/* 74 */     // Webkit
/* 75 */     if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
/* 76 */     if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
/* 77 */     
/* 78 */     // Add event and delta to the front of the arguments
/* 79 */     args.unshift(event, delta, deltaX, deltaY);
/* 80 */     
/* 81 */     return ($.event.dispatch || $.event.handle).apply(this, args);
/* 82 */ }
/* 83 */ 
/* 84 */ })(jQuery);

;
/* perfect-scrollbar.jquery.min.js */

/* 1    */ (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* 2    */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 3    *|  * Licensed under the MIT License
/* 4    *|  */
/* 5    */ 'use strict';
/* 6    */ 
/* 7    */ var ps = require('../main')
/* 8    */   , psInstances = require('../plugin/instances');
/* 9    */ 
/* 10   */ function mountJQuery(jQuery) {
/* 11   */   jQuery.fn.perfectScrollbar = function (settingOrCommand) {
/* 12   */     return this.each(function () {
/* 13   */       if (typeof settingOrCommand === 'object' ||
/* 14   */           typeof settingOrCommand === 'undefined') {
/* 15   */         // If it's an object or none, initialize.
/* 16   */         var settings = settingOrCommand;
/* 17   */ 
/* 18   */         if (!psInstances.get(this)) {
/* 19   */           ps.initialize(this, settings);
/* 20   */         }
/* 21   */       } else {
/* 22   */         // Unless, it may be a command.
/* 23   */         var command = settingOrCommand;
/* 24   */ 
/* 25   */         if (command === 'update') {
/* 26   */           ps.update(this);
/* 27   */         } else if (command === 'destroy') {
/* 28   */           ps.destroy(this);
/* 29   */         }
/* 30   */       }
/* 31   */ 
/* 32   */       return jQuery(this);
/* 33   */     });
/* 34   */   };
/* 35   */ }
/* 36   */ 
/* 37   */ if (typeof define === 'function' && define.amd) {
/* 38   */   // AMD. Register as an anonymous module.
/* 39   */   define(['jquery'], mountJQuery);
/* 40   */ } else {
/* 41   */   var jq = window.jQuery ? window.jQuery : window.$;
/* 42   */   if (typeof jq !== 'undefined') {
/* 43   */     mountJQuery(jq);
/* 44   */   }
/* 45   */ }
/* 46   */ 
/* 47   */ module.exports = mountJQuery;
/* 48   */ 
/* 49   */ },{"../main":7,"../plugin/instances":18}],2:[function(require,module,exports){
/* 50   */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors

/* perfect-scrollbar.jquery.min.js */

/* 51   *|  * Licensed under the MIT License
/* 52   *|  */
/* 53   */ 'use strict';
/* 54   */ 
/* 55   */ function oldAdd(element, className) {
/* 56   */   var classes = element.className.split(' ');
/* 57   */   if (classes.indexOf(className) < 0) {
/* 58   */     classes.push(className);
/* 59   */   }
/* 60   */   element.className = classes.join(' ');
/* 61   */ }
/* 62   */ 
/* 63   */ function oldRemove(element, className) {
/* 64   */   var classes = element.className.split(' ');
/* 65   */   var idx = classes.indexOf(className);
/* 66   */   if (idx >= 0) {
/* 67   */     classes.splice(idx, 1);
/* 68   */   }
/* 69   */   element.className = classes.join(' ');
/* 70   */ }
/* 71   */ 
/* 72   */ exports.add = function (element, className) {
/* 73   */   if (element.classList) {
/* 74   */     element.classList.add(className);
/* 75   */   } else {
/* 76   */     oldAdd(element, className);
/* 77   */   }
/* 78   */ };
/* 79   */ 
/* 80   */ exports.remove = function (element, className) {
/* 81   */   if (element.classList) {
/* 82   */     element.classList.remove(className);
/* 83   */   } else {
/* 84   */     oldRemove(element, className);
/* 85   */   }
/* 86   */ };
/* 87   */ 
/* 88   */ exports.list = function (element) {
/* 89   */   if (element.classList) {
/* 90   */     return element.classList;
/* 91   */   } else {
/* 92   */     return element.className.split(' ');
/* 93   */   }
/* 94   */ };
/* 95   */ 
/* 96   */ },{}],3:[function(require,module,exports){
/* 97   */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 98   *|  * Licensed under the MIT License
/* 99   *|  */
/* 100  */ 'use strict';

/* perfect-scrollbar.jquery.min.js */

/* 101  */ 
/* 102  */ exports.e = function (tagName, className) {
/* 103  */   var element = document.createElement(tagName);
/* 104  */   element.className = className;
/* 105  */   return element;
/* 106  */ };
/* 107  */ 
/* 108  */ exports.appendTo = function (child, parent) {
/* 109  */   parent.appendChild(child);
/* 110  */   return child;
/* 111  */ };
/* 112  */ 
/* 113  */ function cssGet(element, styleName) {
/* 114  */   return window.getComputedStyle(element)[styleName];
/* 115  */ }
/* 116  */ 
/* 117  */ function cssSet(element, styleName, styleValue) {
/* 118  */   if (typeof styleValue === 'number') {
/* 119  */     styleValue = styleValue.toString() + 'px';
/* 120  */   }
/* 121  */   element.style[styleName] = styleValue;
/* 122  */   return element;
/* 123  */ }
/* 124  */ 
/* 125  */ function cssMultiSet(element, obj) {
/* 126  */   for (var key in obj) {
/* 127  */     var val = obj[key];
/* 128  */     if (typeof val === 'number') {
/* 129  */       val = val.toString() + 'px';
/* 130  */     }
/* 131  */     element.style[key] = val;
/* 132  */   }
/* 133  */   return element;
/* 134  */ }
/* 135  */ 
/* 136  */ exports.css = function (element, styleNameOrObject, styleValue) {
/* 137  */   if (typeof styleNameOrObject === 'object') {
/* 138  */     // multiple set with object
/* 139  */     return cssMultiSet(element, styleNameOrObject);
/* 140  */   } else {
/* 141  */     if (typeof styleValue === 'undefined') {
/* 142  */       return cssGet(element, styleNameOrObject);
/* 143  */     } else {
/* 144  */       return cssSet(element, styleNameOrObject, styleValue);
/* 145  */     }
/* 146  */   }
/* 147  */ };
/* 148  */ 
/* 149  */ exports.matches = function (element, query) {
/* 150  */   if (typeof element.matches !== 'undefined') {

/* perfect-scrollbar.jquery.min.js */

/* 151  */     return element.matches(query);
/* 152  */   } else {
/* 153  */     if (typeof element.matchesSelector !== 'undefined') {
/* 154  */       return element.matchesSelector(query);
/* 155  */     } else if (typeof element.webkitMatchesSelector !== 'undefined') {
/* 156  */       return element.webkitMatchesSelector(query);
/* 157  */     } else if (typeof element.mozMatchesSelector !== 'undefined') {
/* 158  */       return element.mozMatchesSelector(query);
/* 159  */     } else if (typeof element.msMatchesSelector !== 'undefined') {
/* 160  */       return element.msMatchesSelector(query);
/* 161  */     }
/* 162  */   }
/* 163  */ };
/* 164  */ 
/* 165  */ exports.remove = function (element) {
/* 166  */   if (typeof element.remove !== 'undefined') {
/* 167  */     element.remove();
/* 168  */   } else {
/* 169  */     element.parentNode.removeChild(element);
/* 170  */   }
/* 171  */ };
/* 172  */ 
/* 173  */ },{}],4:[function(require,module,exports){
/* 174  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 175  *|  * Licensed under the MIT License
/* 176  *|  */
/* 177  */ 'use strict';
/* 178  */ 
/* 179  */ var EventElement = function (element) {
/* 180  */   this.element = element;
/* 181  */   this.events = {};
/* 182  */ };
/* 183  */ 
/* 184  */ EventElement.prototype.bind = function (eventName, handler) {
/* 185  */   if (typeof this.events[eventName] === 'undefined') {
/* 186  */     this.events[eventName] = [];
/* 187  */   }
/* 188  */   this.events[eventName].push(handler);
/* 189  */   this.element.addEventListener(eventName, handler, false);
/* 190  */ };
/* 191  */ 
/* 192  */ EventElement.prototype.unbind = function (eventName, handler) {
/* 193  */   var isHandlerProvided = (typeof handler !== 'undefined');
/* 194  */   this.events[eventName] = this.events[eventName].filter(function (hdlr) {
/* 195  */     if (isHandlerProvided && hdlr !== handler) {
/* 196  */       return true;
/* 197  */     }
/* 198  */     this.element.removeEventListener(eventName, hdlr, false);
/* 199  */     return false;
/* 200  */   }, this);

/* perfect-scrollbar.jquery.min.js */

/* 201  */ };
/* 202  */ 
/* 203  */ EventElement.prototype.unbindAll = function () {
/* 204  */   for (var name in this.events) {
/* 205  */     this.unbind(name);
/* 206  */   }
/* 207  */ };
/* 208  */ 
/* 209  */ var EventManager = function () {
/* 210  */   this.eventElements = [];
/* 211  */ };
/* 212  */ 
/* 213  */ EventManager.prototype.eventElement = function (element) {
/* 214  */   var ee = this.eventElements.filter(function (eventElement) {
/* 215  */     return eventElement.element === element;
/* 216  */   })[0];
/* 217  */   if (typeof ee === 'undefined') {
/* 218  */     ee = new EventElement(element);
/* 219  */     this.eventElements.push(ee);
/* 220  */   }
/* 221  */   return ee;
/* 222  */ };
/* 223  */ 
/* 224  */ EventManager.prototype.bind = function (element, eventName, handler) {
/* 225  */   this.eventElement(element).bind(eventName, handler);
/* 226  */ };
/* 227  */ 
/* 228  */ EventManager.prototype.unbind = function (element, eventName, handler) {
/* 229  */   this.eventElement(element).unbind(eventName, handler);
/* 230  */ };
/* 231  */ 
/* 232  */ EventManager.prototype.unbindAll = function () {
/* 233  */   for (var i = 0; i < this.eventElements.length; i++) {
/* 234  */     this.eventElements[i].unbindAll();
/* 235  */   }
/* 236  */ };
/* 237  */ 
/* 238  */ EventManager.prototype.once = function (element, eventName, handler) {
/* 239  */   var ee = this.eventElement(element);
/* 240  */   var onceHandler = function (e) {
/* 241  */     ee.unbind(eventName, onceHandler);
/* 242  */     handler(e);
/* 243  */   };
/* 244  */   ee.bind(eventName, onceHandler);
/* 245  */ };
/* 246  */ 
/* 247  */ module.exports = EventManager;
/* 248  */ 
/* 249  */ },{}],5:[function(require,module,exports){
/* 250  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors

/* perfect-scrollbar.jquery.min.js */

/* 251  *|  * Licensed under the MIT License
/* 252  *|  */
/* 253  */ 'use strict';
/* 254  */ 
/* 255  */ module.exports = (function () {
/* 256  */   function s4() {
/* 257  */     return Math.floor((1 + Math.random()) * 0x10000)
/* 258  */                .toString(16)
/* 259  */                .substring(1);
/* 260  */   }
/* 261  */   return function () {
/* 262  */     return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
/* 263  */            s4() + '-' + s4() + s4() + s4();
/* 264  */   };
/* 265  */ })();
/* 266  */ 
/* 267  */ },{}],6:[function(require,module,exports){
/* 268  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 269  *|  * Licensed under the MIT License
/* 270  *|  */
/* 271  */ 'use strict';
/* 272  */ 
/* 273  */ var cls = require('./class')
/* 274  */   , d = require('./dom');
/* 275  */ 
/* 276  */ exports.toInt = function (x) {
/* 277  */   if (typeof x === 'string') {
/* 278  */     return parseInt(x, 10);
/* 279  */   } else {
/* 280  */     return ~~x;
/* 281  */   }
/* 282  */ };
/* 283  */ 
/* 284  */ exports.clone = function (obj) {
/* 285  */   if (obj === null) {
/* 286  */     return null;
/* 287  */   } else if (typeof obj === 'object') {
/* 288  */     var result = {};
/* 289  */     for (var key in obj) {
/* 290  */       result[key] = this.clone(obj[key]);
/* 291  */     }
/* 292  */     return result;
/* 293  */   } else {
/* 294  */     return obj;
/* 295  */   }
/* 296  */ };
/* 297  */ 
/* 298  */ exports.extend = function (original, source) {
/* 299  */   var result = this.clone(original);
/* 300  */   for (var key in source) {

/* perfect-scrollbar.jquery.min.js */

/* 301  */     result[key] = this.clone(source[key]);
/* 302  */   }
/* 303  */   return result;
/* 304  */ };
/* 305  */ 
/* 306  */ exports.isEditable = function (el) {
/* 307  */   return d.matches(el, "input,[contenteditable]") ||
/* 308  */          d.matches(el, "select,[contenteditable]") ||
/* 309  */          d.matches(el, "textarea,[contenteditable]") ||
/* 310  */          d.matches(el, "button,[contenteditable]");
/* 311  */ };
/* 312  */ 
/* 313  */ exports.removePsClasses = function (element) {
/* 314  */   var clsList = cls.list(element);
/* 315  */   for (var i = 0; i < clsList.length; i++) {
/* 316  */     var className = clsList[i];
/* 317  */     if (className.indexOf('ps-') === 0) {
/* 318  */       cls.remove(element, className);
/* 319  */     }
/* 320  */   }
/* 321  */ };
/* 322  */ 
/* 323  */ exports.outerWidth = function (element) {
/* 324  */   return this.toInt(d.css(element, 'width')) +
/* 325  */          this.toInt(d.css(element, 'paddingLeft')) +
/* 326  */          this.toInt(d.css(element, 'paddingRight')) +
/* 327  */          this.toInt(d.css(element, 'borderLeftWidth')) +
/* 328  */          this.toInt(d.css(element, 'borderRightWidth'));
/* 329  */ };
/* 330  */ 
/* 331  */ exports.startScrolling = function (element, axis) {
/* 332  */   cls.add(element, 'ps-in-scrolling');
/* 333  */   if (typeof axis !== 'undefined') {
/* 334  */     cls.add(element, 'ps-' + axis);
/* 335  */   } else {
/* 336  */     cls.add(element, 'ps-x');
/* 337  */     cls.add(element, 'ps-y');
/* 338  */   }
/* 339  */ };
/* 340  */ 
/* 341  */ exports.stopScrolling = function (element, axis) {
/* 342  */   cls.remove(element, 'ps-in-scrolling');
/* 343  */   if (typeof axis !== 'undefined') {
/* 344  */     cls.remove(element, 'ps-' + axis);
/* 345  */   } else {
/* 346  */     cls.remove(element, 'ps-x');
/* 347  */     cls.remove(element, 'ps-y');
/* 348  */   }
/* 349  */ };
/* 350  */ 

/* perfect-scrollbar.jquery.min.js */

/* 351  */ exports.env = {
/* 352  */   isWebKit: 'WebkitAppearance' in document.documentElement.style,
/* 353  */   supportsTouch: (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch),
/* 354  */   supportsIePointer: window.navigator.msMaxTouchPoints !== null
/* 355  */ };
/* 356  */ 
/* 357  */ },{"./class":2,"./dom":3}],7:[function(require,module,exports){
/* 358  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 359  *|  * Licensed under the MIT License
/* 360  *|  */
/* 361  */ 'use strict';
/* 362  */ 
/* 363  */ var destroy = require('./plugin/destroy')
/* 364  */   , initialize = require('./plugin/initialize')
/* 365  */   , update = require('./plugin/update');
/* 366  */ 
/* 367  */ module.exports = {
/* 368  */   initialize: initialize,
/* 369  */   update: update,
/* 370  */   destroy: destroy
/* 371  */ };
/* 372  */ 
/* 373  */ },{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":20}],8:[function(require,module,exports){
/* 374  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 375  *|  * Licensed under the MIT License
/* 376  *|  */
/* 377  */ 'use strict';
/* 378  */ 
/* 379  */ module.exports = {
/* 380  */   wheelSpeed: 1,
/* 381  */   wheelPropagation: false,
/* 382  */   swipePropagation: true,
/* 383  */   minScrollbarLength: null,
/* 384  */   maxScrollbarLength: null,
/* 385  */   useBothWheelAxes: false,
/* 386  */   useKeyboard: true,
/* 387  */   suppressScrollX: false,
/* 388  */   suppressScrollY: false,
/* 389  */   scrollXMarginOffset: 0,
/* 390  */   scrollYMarginOffset: 0
/* 391  */ };
/* 392  */ 
/* 393  */ },{}],9:[function(require,module,exports){
/* 394  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 395  *|  * Licensed under the MIT License
/* 396  *|  */
/* 397  */ 'use strict';
/* 398  */ 
/* 399  */ var d = require('../lib/dom')
/* 400  */   , h = require('../lib/helper')

/* perfect-scrollbar.jquery.min.js */

/* 401  */   , instances = require('./instances');
/* 402  */ 
/* 403  */ module.exports = function (element) {
/* 404  */   var i = instances.get(element);
/* 405  */ 
/* 406  */   i.event.unbindAll();
/* 407  */   d.remove(i.scrollbarX);
/* 408  */   d.remove(i.scrollbarY);
/* 409  */   d.remove(i.scrollbarXRail);
/* 410  */   d.remove(i.scrollbarYRail);
/* 411  */   h.removePsClasses(element);
/* 412  */ 
/* 413  */   instances.remove(element);
/* 414  */ };
/* 415  */ 
/* 416  */ },{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(require,module,exports){
/* 417  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 418  *|  * Licensed under the MIT License
/* 419  *|  */
/* 420  */ 'use strict';
/* 421  */ 
/* 422  */ var h = require('../../lib/helper')
/* 423  */   , instances = require('../instances')
/* 424  */   , updateGeometry = require('../update-geometry');
/* 425  */ 
/* 426  */ function bindClickRailHandler(element, i) {
/* 427  */   function pageOffset(el) {
/* 428  */     return el.getBoundingClientRect();
/* 429  */   }
/* 430  */   var stopPropagation = window.Event.prototype.stopPropagation.bind;
/* 431  */ 
/* 432  */   i.event.bind(i.scrollbarY, 'click', stopPropagation);
/* 433  */   i.event.bind(i.scrollbarYRail, 'click', function (e) {
/* 434  */     var halfOfScrollbarLength = h.toInt(i.scrollbarYHeight / 2);
/* 435  */     var positionTop = e.pageY - pageOffset(i.scrollbarYRail).top - halfOfScrollbarLength;
/* 436  */     var maxPositionTop = i.containerHeight - i.scrollbarYHeight;
/* 437  */     var positionRatio = positionTop / maxPositionTop;
/* 438  */ 
/* 439  */     if (positionRatio < 0) {
/* 440  */       positionRatio = 0;
/* 441  */     } else if (positionRatio > 1) {
/* 442  */       positionRatio = 1;
/* 443  */     }
/* 444  */ 
/* 445  */     element.scrollTop = (i.contentHeight - i.containerHeight) * positionRatio;
/* 446  */     updateGeometry(element);
/* 447  */   });
/* 448  */ 
/* 449  */   i.event.bind(i.scrollbarX, 'click', stopPropagation);
/* 450  */   i.event.bind(i.scrollbarXRail, 'click', function (e) {

/* perfect-scrollbar.jquery.min.js */

/* 451  */     var halfOfScrollbarLength = h.toInt(i.scrollbarXWidth / 2);
/* 452  */     var positionLeft = e.pageX - pageOffset(i.scrollbarXRail).left - halfOfScrollbarLength;
/* 453  */     console.log(e.pageX, i.scrollbarXRail.offsetLeft);
/* 454  */     var maxPositionLeft = i.containerWidth - i.scrollbarXWidth;
/* 455  */     var positionRatio = positionLeft / maxPositionLeft;
/* 456  */ 
/* 457  */     if (positionRatio < 0) {
/* 458  */       positionRatio = 0;
/* 459  */     } else if (positionRatio > 1) {
/* 460  */       positionRatio = 1;
/* 461  */     }
/* 462  */ 
/* 463  */     element.scrollLeft = (i.contentWidth - i.containerWidth) * positionRatio;
/* 464  */     updateGeometry(element);
/* 465  */   });
/* 466  */ }
/* 467  */ 
/* 468  */ module.exports = function (element) {
/* 469  */   var i = instances.get(element);
/* 470  */   bindClickRailHandler(element, i);
/* 471  */ };
/* 472  */ 
/* 473  */ },{"../../lib/helper":6,"../instances":18,"../update-geometry":19}],11:[function(require,module,exports){
/* 474  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 475  *|  * Licensed under the MIT License
/* 476  *|  */
/* 477  */ 'use strict';
/* 478  */ 
/* 479  */ var d = require('../../lib/dom')
/* 480  */   , h = require('../../lib/helper')
/* 481  */   , instances = require('../instances')
/* 482  */   , updateGeometry = require('../update-geometry');
/* 483  */ 
/* 484  */ function bindMouseScrollXHandler(element, i) {
/* 485  */   var currentLeft = null;
/* 486  */   var currentPageX = null;
/* 487  */ 
/* 488  */   function updateScrollLeft(deltaX) {
/* 489  */     var newLeft = currentLeft + deltaX;
/* 490  */     var maxLeft = i.containerWidth - i.scrollbarXWidth;
/* 491  */ 
/* 492  */     if (newLeft < 0) {
/* 493  */       i.scrollbarXLeft = 0;
/* 494  */     } else if (newLeft > maxLeft) {
/* 495  */       i.scrollbarXLeft = maxLeft;
/* 496  */     } else {
/* 497  */       i.scrollbarXLeft = newLeft;
/* 498  */     }
/* 499  */ 
/* 500  */     var scrollLeft = h.toInt(i.scrollbarXLeft * (i.contentWidth - i.containerWidth) / (i.containerWidth - i.scrollbarXWidth));

/* perfect-scrollbar.jquery.min.js */

/* 501  */     element.scrollLeft = scrollLeft;
/* 502  */   }
/* 503  */ 
/* 504  */   var mouseMoveHandler = function (e) {
/* 505  */     updateScrollLeft(e.pageX - currentPageX);
/* 506  */     updateGeometry(element);
/* 507  */     e.stopPropagation();
/* 508  */     e.preventDefault();
/* 509  */   };
/* 510  */ 
/* 511  */   var mouseUpHandler = function () {
/* 512  */     h.stopScrolling(element, 'x');
/* 513  */     i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
/* 514  */   };
/* 515  */ 
/* 516  */   i.event.bind(i.scrollbarX, 'mousedown', function (e) {
/* 517  */     currentPageX = e.pageX;
/* 518  */     currentLeft = h.toInt(d.css(i.scrollbarX, 'left'));
/* 519  */     h.startScrolling(element, 'x');
/* 520  */ 
/* 521  */     i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
/* 522  */     i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
/* 523  */ 
/* 524  */     e.stopPropagation();
/* 525  */     e.preventDefault();
/* 526  */   });
/* 527  */ }
/* 528  */ 
/* 529  */ function bindMouseScrollYHandler(element, i) {
/* 530  */   var currentTop = null;
/* 531  */   var currentPageY = null;
/* 532  */ 
/* 533  */   function updateScrollTop(deltaY) {
/* 534  */     var newTop = currentTop + deltaY;
/* 535  */     var maxTop = i.containerHeight - i.scrollbarYHeight;
/* 536  */ 
/* 537  */     if (newTop < 0) {
/* 538  */       i.scrollbarYTop = 0;
/* 539  */     } else if (newTop > maxTop) {
/* 540  */       i.scrollbarYTop = maxTop;
/* 541  */     } else {
/* 542  */       i.scrollbarYTop = newTop;
/* 543  */     }
/* 544  */ 
/* 545  */     var scrollTop = h.toInt(i.scrollbarYTop * (i.contentHeight - i.containerHeight) / (i.containerHeight - i.scrollbarYHeight));
/* 546  */     element.scrollTop = scrollTop;
/* 547  */   }
/* 548  */ 
/* 549  */   var mouseMoveHandler = function (e) {
/* 550  */     updateScrollTop(e.pageY - currentPageY);

/* perfect-scrollbar.jquery.min.js */

/* 551  */     updateGeometry(element);
/* 552  */     e.stopPropagation();
/* 553  */     e.preventDefault();
/* 554  */   };
/* 555  */ 
/* 556  */   var mouseUpHandler = function () {
/* 557  */     h.stopScrolling(element, 'y');
/* 558  */     i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
/* 559  */   };
/* 560  */ 
/* 561  */   i.event.bind(i.scrollbarY, 'mousedown', function (e) {
/* 562  */     currentPageY = e.pageY;
/* 563  */     currentTop = h.toInt(d.css(i.scrollbarY, 'top'));
/* 564  */     h.startScrolling(element, 'y');
/* 565  */ 
/* 566  */     i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
/* 567  */     i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
/* 568  */ 
/* 569  */     e.stopPropagation();
/* 570  */     e.preventDefault();
/* 571  */   });
/* 572  */ }
/* 573  */ 
/* 574  */ module.exports = function (element) {
/* 575  */   var i = instances.get(element);
/* 576  */   bindMouseScrollXHandler(element, i);
/* 577  */   bindMouseScrollYHandler(element, i);
/* 578  */ };
/* 579  */ 
/* 580  */ },{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19}],12:[function(require,module,exports){
/* 581  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 582  *|  * Licensed under the MIT License
/* 583  *|  */
/* 584  */ 'use strict';
/* 585  */ 
/* 586  */ var h = require('../../lib/helper')
/* 587  */   , instances = require('../instances')
/* 588  */   , updateGeometry = require('../update-geometry');
/* 589  */ 
/* 590  */ function bindKeyboardHandler(element, i) {
/* 591  */   var hovered = false;
/* 592  */   i.event.bind(element, 'mouseenter', function () {
/* 593  */     hovered = true;
/* 594  */   });
/* 595  */   i.event.bind(element, 'mouseleave', function () {
/* 596  */     hovered = false;
/* 597  */   });
/* 598  */ 
/* 599  */   var shouldPrevent = false;
/* 600  */   function shouldPreventDefault(deltaX, deltaY) {

/* perfect-scrollbar.jquery.min.js */

/* 601  */     var scrollTop = element.scrollTop;
/* 602  */     if (deltaX === 0) {
/* 603  */       if (!i.scrollbarYActive) {
/* 604  */         return false;
/* 605  */       }
/* 606  */       if ((scrollTop === 0 && deltaY > 0) || (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)) {
/* 607  */         return !i.settings.wheelPropagation;
/* 608  */       }
/* 609  */     }
/* 610  */ 
/* 611  */     var scrollLeft = element.scrollLeft;
/* 612  */     if (deltaY === 0) {
/* 613  */       if (!i.scrollbarXActive) {
/* 614  */         return false;
/* 615  */       }
/* 616  */       if ((scrollLeft === 0 && deltaX < 0) || (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)) {
/* 617  */         return !i.settings.wheelPropagation;
/* 618  */       }
/* 619  */     }
/* 620  */     return true;
/* 621  */   }
/* 622  */ 
/* 623  */   i.event.bind(i.ownerDocument, 'keydown', function (e) {
/* 624  */     if (e.isDefaultPrevented && e.isDefaultPrevented()) {
/* 625  */       return;
/* 626  */     }
/* 627  */ 
/* 628  */     if (!hovered) {
/* 629  */       return;
/* 630  */     }
/* 631  */ 
/* 632  */     var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;
/* 633  */     if (activeElement) {
/* 634  */       // go deeper if element is a webcomponent
/* 635  */       while (activeElement.shadowRoot) {
/* 636  */         activeElement = activeElement.shadowRoot.activeElement;
/* 637  */       }
/* 638  */       if (h.isEditable(activeElement)) {
/* 639  */         return;
/* 640  */       }
/* 641  */     }
/* 642  */ 
/* 643  */     var deltaX = 0;
/* 644  */     var deltaY = 0;
/* 645  */ 
/* 646  */     switch (e.which) {
/* 647  */     case 37: // left
/* 648  */       deltaX = -30;
/* 649  */       break;
/* 650  */     case 38: // up

/* perfect-scrollbar.jquery.min.js */

/* 651  */       deltaY = 30;
/* 652  */       break;
/* 653  */     case 39: // right
/* 654  */       deltaX = 30;
/* 655  */       break;
/* 656  */     case 40: // down
/* 657  */       deltaY = -30;
/* 658  */       break;
/* 659  */     case 33: // page up
/* 660  */       deltaY = 90;
/* 661  */       break;
/* 662  */     case 32: // space bar
/* 663  */     case 34: // page down
/* 664  */       deltaY = -90;
/* 665  */       break;
/* 666  */     case 35: // end
/* 667  */       if (e.ctrlKey) {
/* 668  */         deltaY = -i.contentHeight;
/* 669  */       } else {
/* 670  */         deltaY = -i.containerHeight;
/* 671  */       }
/* 672  */       break;
/* 673  */     case 36: // home
/* 674  */       if (e.ctrlKey) {
/* 675  */         deltaY = element.scrollTop;
/* 676  */       } else {
/* 677  */         deltaY = i.containerHeight;
/* 678  */       }
/* 679  */       break;
/* 680  */     default:
/* 681  */       return;
/* 682  */     }
/* 683  */ 
/* 684  */     element.scrollTop = element.scrollTop - deltaY;
/* 685  */     element.scrollLeft = element.scrollLeft + deltaX;
/* 686  */     updateGeometry(element);
/* 687  */ 
/* 688  */     shouldPrevent = shouldPreventDefault(deltaX, deltaY);
/* 689  */     if (shouldPrevent) {
/* 690  */       e.preventDefault();
/* 691  */     }
/* 692  */   });
/* 693  */ }
/* 694  */ 
/* 695  */ module.exports = function (element) {
/* 696  */   var i = instances.get(element);
/* 697  */   bindKeyboardHandler(element, i);
/* 698  */ };
/* 699  */ 
/* 700  */ },{"../../lib/helper":6,"../instances":18,"../update-geometry":19}],13:[function(require,module,exports){

/* perfect-scrollbar.jquery.min.js */

/* 701  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 702  *|  * Licensed under the MIT License
/* 703  *|  */
/* 704  */ 'use strict';
/* 705  */ 
/* 706  */ var h = require('../../lib/helper')
/* 707  */   , instances = require('../instances')
/* 708  */   , updateGeometry = require('../update-geometry');
/* 709  */ 
/* 710  */ function bindMouseWheelHandler(element, i) {
/* 711  */   var shouldPrevent = false;
/* 712  */ 
/* 713  */   function shouldPreventDefault(deltaX, deltaY) {
/* 714  */     var scrollTop = element.scrollTop;
/* 715  */     if (deltaX === 0) {
/* 716  */       if (!i.scrollbarYActive) {
/* 717  */         return false;
/* 718  */       }
/* 719  */       if ((scrollTop === 0 && deltaY > 0) || (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)) {
/* 720  */         return !i.settings.wheelPropagation;
/* 721  */       }
/* 722  */     }
/* 723  */ 
/* 724  */     var scrollLeft = element.scrollLeft;
/* 725  */     if (deltaY === 0) {
/* 726  */       if (!i.scrollbarXActive) {
/* 727  */         return false;
/* 728  */       }
/* 729  */       if ((scrollLeft === 0 && deltaX < 0) || (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)) {
/* 730  */         return !i.settings.wheelPropagation;
/* 731  */       }
/* 732  */     }
/* 733  */     return true;
/* 734  */   }
/* 735  */ 
/* 736  */   function getDeltaFromEvent(e) {
/* 737  */     var deltaX = e.deltaX;
/* 738  */     var deltaY = -1 * e.deltaY;
/* 739  */ 
/* 740  */     if (typeof deltaX === "undefined" || typeof deltaY === "undefined") {
/* 741  */       // OS X Safari
/* 742  */       deltaX = -1 * e.wheelDeltaX / 6;
/* 743  */       deltaY = e.wheelDeltaY / 6;
/* 744  */     }
/* 745  */ 
/* 746  */     if (e.deltaMode && e.deltaMode === 1) {
/* 747  */       // Firefox in deltaMode 1: Line scrolling
/* 748  */       deltaX *= 10;
/* 749  */       deltaY *= 10;
/* 750  */     }

/* perfect-scrollbar.jquery.min.js */

/* 751  */ 
/* 752  */     if (deltaX !== deltaX && deltaY !== deltaY/* NaN checks */) {
/* 753  */       // IE in some mouse drivers
/* 754  */       deltaX = 0;
/* 755  */       deltaY = e.wheelDelta;
/* 756  */     }
/* 757  */ 
/* 758  */     return [deltaX, deltaY];
/* 759  */   }
/* 760  */ 
/* 761  */   function mousewheelHandler(e) {
/* 762  */     // FIXME: this is a quick fix for the select problem in FF and IE.
/* 763  */     // If there comes an effective way to deal with the problem,
/* 764  */     // this lines should be removed.
/* 765  */     if (!h.env.isWebKit && element.querySelector('select:focus')) {
/* 766  */       return;
/* 767  */     }
/* 768  */ 
/* 769  */     var delta = getDeltaFromEvent(e);
/* 770  */ 
/* 771  */     var deltaX = delta[0];
/* 772  */     var deltaY = delta[1];
/* 773  */ 
/* 774  */     shouldPrevent = false;
/* 775  */     if (!i.settings.useBothWheelAxes) {
/* 776  */       // deltaX will only be used for horizontal scrolling and deltaY will
/* 777  */       // only be used for vertical scrolling - this is the default
/* 778  */       element.scrollTop = element.scrollTop - (deltaY * i.settings.wheelSpeed);
/* 779  */       element.scrollLeft = element.scrollLeft + (deltaX * i.settings.wheelSpeed);
/* 780  */     } else if (i.scrollbarYActive && !i.scrollbarXActive) {
/* 781  */       // only vertical scrollbar is active and useBothWheelAxes option is
/* 782  */       // active, so let's scroll vertical bar using both mouse wheel axes
/* 783  */       if (deltaY) {
/* 784  */         element.scrollTop = element.scrollTop - (deltaY * i.settings.wheelSpeed);
/* 785  */       } else {
/* 786  */         element.scrollTop = element.scrollTop + (deltaX * i.settings.wheelSpeed);
/* 787  */       }
/* 788  */       shouldPrevent = true;
/* 789  */     } else if (i.scrollbarXActive && !i.scrollbarYActive) {
/* 790  */       // useBothWheelAxes and only horizontal bar is active, so use both
/* 791  */       // wheel axes for horizontal bar
/* 792  */       if (deltaX) {
/* 793  */         element.scrollLeft = element.scrollLeft + (deltaX * i.settings.wheelSpeed);
/* 794  */       } else {
/* 795  */         element.scrollLeft = element.scrollLeft - (deltaY * i.settings.wheelSpeed);
/* 796  */       }
/* 797  */       shouldPrevent = true;
/* 798  */     }
/* 799  */ 
/* 800  */     updateGeometry(element);

/* perfect-scrollbar.jquery.min.js */

/* 801  */ 
/* 802  */     shouldPrevent = (shouldPrevent || shouldPreventDefault(deltaX, deltaY));
/* 803  */     if (shouldPrevent) {
/* 804  */       e.stopPropagation();
/* 805  */       e.preventDefault();
/* 806  */     }
/* 807  */   }
/* 808  */ 
/* 809  */   if (typeof window.onwheel !== "undefined") {
/* 810  */     i.event.bind(element, 'wheel', mousewheelHandler);
/* 811  */   } else if (typeof window.onmousewheel !== "undefined") {
/* 812  */     i.event.bind(element, 'mousewheel', mousewheelHandler);
/* 813  */   }
/* 814  */ }
/* 815  */ 
/* 816  */ module.exports = function (element) {
/* 817  */   var i = instances.get(element);
/* 818  */   bindMouseWheelHandler(element, i);
/* 819  */ };
/* 820  */ 
/* 821  */ },{"../../lib/helper":6,"../instances":18,"../update-geometry":19}],14:[function(require,module,exports){
/* 822  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 823  *|  * Licensed under the MIT License
/* 824  *|  */
/* 825  */ 'use strict';
/* 826  */ 
/* 827  */ var instances = require('../instances')
/* 828  */   , updateGeometry = require('../update-geometry');
/* 829  */ 
/* 830  */ function bindNativeScrollHandler(element, i) {
/* 831  */   i.event.bind(element, 'scroll', function () {
/* 832  */     updateGeometry(element);
/* 833  */   });
/* 834  */ }
/* 835  */ 
/* 836  */ module.exports = function (element) {
/* 837  */   var i = instances.get(element);
/* 838  */   bindNativeScrollHandler(element, i);
/* 839  */ };
/* 840  */ 
/* 841  */ },{"../instances":18,"../update-geometry":19}],15:[function(require,module,exports){
/* 842  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 843  *|  * Licensed under the MIT License
/* 844  *|  */
/* 845  */ 'use strict';
/* 846  */ 
/* 847  */ var h = require('../../lib/helper')
/* 848  */   , instances = require('../instances')
/* 849  */   , updateGeometry = require('../update-geometry');
/* 850  */ 

/* perfect-scrollbar.jquery.min.js */

/* 851  */ function bindSelectionHandler(element, i) {
/* 852  */   function getRangeNode() {
/* 853  */     var selection = window.getSelection ? window.getSelection() :
/* 854  */                     document.getSelection ? document.getSelection() : '';
/* 855  */     if (selection.toString().length === 0) {
/* 856  */       return null;
/* 857  */     } else {
/* 858  */       return selection.getRangeAt(0).commonAncestorContainer;
/* 859  */     }
/* 860  */   }
/* 861  */ 
/* 862  */   var scrollingLoop = null;
/* 863  */   var scrollDiff = {top: 0, left: 0};
/* 864  */   function startScrolling() {
/* 865  */     if (!scrollingLoop) {
/* 866  */       scrollingLoop = setInterval(function () {
/* 867  */         if (!instances.get(element)) {
/* 868  */           clearInterval(scrollingLoop);
/* 869  */           return;
/* 870  */         }
/* 871  */ 
/* 872  */         element.scrollTop = element.scrollTop + scrollDiff.top;
/* 873  */         element.scrollLeft = element.scrollLeft + scrollDiff.left;
/* 874  */         updateGeometry(element);
/* 875  */       }, 50); // every .1 sec
/* 876  */     }
/* 877  */   }
/* 878  */   function stopScrolling() {
/* 879  */     if (scrollingLoop) {
/* 880  */       clearInterval(scrollingLoop);
/* 881  */       scrollingLoop = null;
/* 882  */     }
/* 883  */     h.stopScrolling(element);
/* 884  */   }
/* 885  */ 
/* 886  */   var isSelected = false;
/* 887  */   i.event.bind(i.ownerDocument, 'selectionchange', function () {
/* 888  */     if (element.contains(getRangeNode())) {
/* 889  */       isSelected = true;
/* 890  */     } else {
/* 891  */       isSelected = false;
/* 892  */       stopScrolling();
/* 893  */     }
/* 894  */   });
/* 895  */   i.event.bind(window, 'mouseup', function () {
/* 896  */     if (isSelected) {
/* 897  */       isSelected = false;
/* 898  */       stopScrolling();
/* 899  */     }
/* 900  */   });

/* perfect-scrollbar.jquery.min.js */

/* 901  */ 
/* 902  */   i.event.bind(window, 'mousemove', function (e) {
/* 903  */     if (isSelected) {
/* 904  */       var mousePosition = {x: e.pageX, y: e.pageY};
/* 905  */       var containerGeometry = {
/* 906  */         left: element.offsetLeft,
/* 907  */         right: element.offsetLeft + element.offsetWidth,
/* 908  */         top: element.offsetTop,
/* 909  */         bottom: element.offsetTop + element.offsetHeight
/* 910  */       };
/* 911  */ 
/* 912  */       if (mousePosition.x < containerGeometry.left + 3) {
/* 913  */         scrollDiff.left = -5;
/* 914  */         h.startScrolling(element, 'x');
/* 915  */       } else if (mousePosition.x > containerGeometry.right - 3) {
/* 916  */         scrollDiff.left = 5;
/* 917  */         h.startScrolling(element, 'x');
/* 918  */       } else {
/* 919  */         scrollDiff.left = 0;
/* 920  */       }
/* 921  */ 
/* 922  */       if (mousePosition.y < containerGeometry.top + 3) {
/* 923  */         if (containerGeometry.top + 3 - mousePosition.y < 5) {
/* 924  */           scrollDiff.top = -5;
/* 925  */         } else {
/* 926  */           scrollDiff.top = -20;
/* 927  */         }
/* 928  */         h.startScrolling(element, 'y');
/* 929  */       } else if (mousePosition.y > containerGeometry.bottom - 3) {
/* 930  */         if (mousePosition.y - containerGeometry.bottom + 3 < 5) {
/* 931  */           scrollDiff.top = 5;
/* 932  */         } else {
/* 933  */           scrollDiff.top = 20;
/* 934  */         }
/* 935  */         h.startScrolling(element, 'y');
/* 936  */       } else {
/* 937  */         scrollDiff.top = 0;
/* 938  */       }
/* 939  */ 
/* 940  */       if (scrollDiff.top === 0 && scrollDiff.left === 0) {
/* 941  */         stopScrolling();
/* 942  */       } else {
/* 943  */         startScrolling();
/* 944  */       }
/* 945  */     }
/* 946  */   });
/* 947  */ }
/* 948  */ 
/* 949  */ module.exports = function (element) {
/* 950  */   var i = instances.get(element);

/* perfect-scrollbar.jquery.min.js */

/* 951  */   bindSelectionHandler(element, i);
/* 952  */ };
/* 953  */ 
/* 954  */ },{"../../lib/helper":6,"../instances":18,"../update-geometry":19}],16:[function(require,module,exports){
/* 955  */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 956  *|  * Licensed under the MIT License
/* 957  *|  */
/* 958  */ 'use strict';
/* 959  */ 
/* 960  */ var instances = require('../instances')
/* 961  */   , updateGeometry = require('../update-geometry');
/* 962  */ 
/* 963  */ function bindTouchHandler(element, i, supportsTouch, supportsIePointer) {
/* 964  */   function shouldPreventDefault(deltaX, deltaY) {
/* 965  */     var scrollTop = element.scrollTop;
/* 966  */     var scrollLeft = element.scrollLeft;
/* 967  */     var magnitudeX = Math.abs(deltaX);
/* 968  */     var magnitudeY = Math.abs(deltaY);
/* 969  */ 
/* 970  */     if (magnitudeY > magnitudeX) {
/* 971  */       // user is perhaps trying to swipe up/down the page
/* 972  */ 
/* 973  */       if (((deltaY < 0) && (scrollTop === i.contentHeight - i.containerHeight)) ||
/* 974  */           ((deltaY > 0) && (scrollTop === 0))) {
/* 975  */         return !i.settings.swipePropagation;
/* 976  */       }
/* 977  */     } else if (magnitudeX > magnitudeY) {
/* 978  */       // user is perhaps trying to swipe left/right across the page
/* 979  */ 
/* 980  */       if (((deltaX < 0) && (scrollLeft === i.contentWidth - i.containerWidth)) ||
/* 981  */           ((deltaX > 0) && (scrollLeft === 0))) {
/* 982  */         return !i.settings.swipePropagation;
/* 983  */       }
/* 984  */     }
/* 985  */ 
/* 986  */     return true;
/* 987  */   }
/* 988  */ 
/* 989  */   function applyTouchMove(differenceX, differenceY) {
/* 990  */     element.scrollTop = element.scrollTop - differenceY;
/* 991  */     element.scrollLeft = element.scrollLeft - differenceX;
/* 992  */ 
/* 993  */     updateGeometry(element);
/* 994  */   }
/* 995  */ 
/* 996  */   var startOffset = {};
/* 997  */   var startTime = 0;
/* 998  */   var speed = {};
/* 999  */   var easingLoop = null;
/* 1000 */   var inGlobalTouch = false;

/* perfect-scrollbar.jquery.min.js */

/* 1001 */   var inLocalTouch = false;
/* 1002 */ 
/* 1003 */   function globalTouchStart() {
/* 1004 */     inGlobalTouch = true;
/* 1005 */   }
/* 1006 */   function globalTouchEnd() {
/* 1007 */     inGlobalTouch = false;
/* 1008 */   }
/* 1009 */ 
/* 1010 */   function getTouch(e) {
/* 1011 */     if (e.targetTouches) {
/* 1012 */       return e.targetTouches[0];
/* 1013 */     } else {
/* 1014 */       // Maybe IE pointer
/* 1015 */       return e;
/* 1016 */     }
/* 1017 */   }
/* 1018 */   function shouldHandle(e) {
/* 1019 */     if (e.targetTouches && e.targetTouches.length === 1) {
/* 1020 */       return true;
/* 1021 */     }
/* 1022 */     if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
/* 1023 */       return true;
/* 1024 */     }
/* 1025 */     return false;
/* 1026 */   }
/* 1027 */   function touchStart(e) {
/* 1028 */     if (shouldHandle(e)) {
/* 1029 */       inLocalTouch = true;
/* 1030 */ 
/* 1031 */       var touch = getTouch(e);
/* 1032 */ 
/* 1033 */       startOffset.pageX = touch.pageX;
/* 1034 */       startOffset.pageY = touch.pageY;
/* 1035 */ 
/* 1036 */       startTime = (new Date()).getTime();
/* 1037 */ 
/* 1038 */       if (easingLoop !== null) {
/* 1039 */         clearInterval(easingLoop);
/* 1040 */       }
/* 1041 */ 
/* 1042 */       e.stopPropagation();
/* 1043 */     }
/* 1044 */   }
/* 1045 */   function touchMove(e) {
/* 1046 */     if (!inGlobalTouch && inLocalTouch && shouldHandle(e)) {
/* 1047 */       var touch = getTouch(e);
/* 1048 */ 
/* 1049 */       var currentOffset = {pageX: touch.pageX, pageY: touch.pageY};
/* 1050 */ 

/* perfect-scrollbar.jquery.min.js */

/* 1051 */       var differenceX = currentOffset.pageX - startOffset.pageX;
/* 1052 */       var differenceY = currentOffset.pageY - startOffset.pageY;
/* 1053 */ 
/* 1054 */       applyTouchMove(differenceX, differenceY);
/* 1055 */       startOffset = currentOffset;
/* 1056 */ 
/* 1057 */       var currentTime = (new Date()).getTime();
/* 1058 */ 
/* 1059 */       var timeGap = currentTime - startTime;
/* 1060 */       if (timeGap > 0) {
/* 1061 */         speed.x = differenceX / timeGap;
/* 1062 */         speed.y = differenceY / timeGap;
/* 1063 */         startTime = currentTime;
/* 1064 */       }
/* 1065 */ 
/* 1066 */       if (shouldPreventDefault(differenceX, differenceY)) {
/* 1067 */         e.stopPropagation();
/* 1068 */         e.preventDefault();
/* 1069 */       }
/* 1070 */     }
/* 1071 */   }
/* 1072 */   function touchEnd() {
/* 1073 */     if (!inGlobalTouch && inLocalTouch) {
/* 1074 */       inLocalTouch = false;
/* 1075 */ 
/* 1076 */       clearInterval(easingLoop);
/* 1077 */       easingLoop = setInterval(function () {
/* 1078 */         if (!instances.get(element)) {
/* 1079 */           clearInterval(easingLoop);
/* 1080 */           return;
/* 1081 */         }
/* 1082 */ 
/* 1083 */         if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
/* 1084 */           clearInterval(easingLoop);
/* 1085 */           return;
/* 1086 */         }
/* 1087 */ 
/* 1088 */         applyTouchMove(speed.x * 30, speed.y * 30);
/* 1089 */ 
/* 1090 */         speed.x *= 0.8;
/* 1091 */         speed.y *= 0.8;
/* 1092 */       }, 10);
/* 1093 */     }
/* 1094 */   }
/* 1095 */ 
/* 1096 */   if (supportsTouch) {
/* 1097 */     i.event.bind(window, 'touchstart', globalTouchStart);
/* 1098 */     i.event.bind(window, 'touchend', globalTouchEnd);
/* 1099 */     i.event.bind(element, 'touchstart', touchStart);
/* 1100 */     i.event.bind(element, 'touchmove', touchMove);

/* perfect-scrollbar.jquery.min.js */

/* 1101 */     i.event.bind(element, 'touchend', touchEnd);
/* 1102 */   }
/* 1103 */ 
/* 1104 */   if (supportsIePointer) {
/* 1105 */     if (window.PointerEvent) {
/* 1106 */       i.event.bind(window, 'pointerdown', globalTouchStart);
/* 1107 */       i.event.bind(window, 'pointerup', globalTouchEnd);
/* 1108 */       i.event.bind(element, 'pointerdown', touchStart);
/* 1109 */       i.event.bind(element, 'pointermove', touchMove);
/* 1110 */       i.event.bind(element, 'pointerup', touchEnd);
/* 1111 */     } else if (window.MSPointerEvent) {
/* 1112 */       i.event.bind(window, 'MSPointerDown', globalTouchStart);
/* 1113 */       i.event.bind(window, 'MSPointerUp', globalTouchEnd);
/* 1114 */       i.event.bind(element, 'MSPointerDown', touchStart);
/* 1115 */       i.event.bind(element, 'MSPointerMove', touchMove);
/* 1116 */       i.event.bind(element, 'MSPointerUp', touchEnd);
/* 1117 */     }
/* 1118 */   }
/* 1119 */ }
/* 1120 */ 
/* 1121 */ module.exports = function (element, supportsTouch, supportsIePointer) {
/* 1122 */   var i = instances.get(element);
/* 1123 */   bindTouchHandler(element, i, supportsTouch, supportsIePointer);
/* 1124 */ };
/* 1125 */ 
/* 1126 */ },{"../instances":18,"../update-geometry":19}],17:[function(require,module,exports){
/* 1127 */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 1128 *|  * Licensed under the MIT License
/* 1129 *|  */
/* 1130 */ 'use strict';
/* 1131 */ 
/* 1132 */ var cls = require('../lib/class')
/* 1133 */   , h = require('../lib/helper')
/* 1134 */   , instances = require('./instances')
/* 1135 */   , updateGeometry = require('./update-geometry');
/* 1136 */ 
/* 1137 */ // Handlers
/* 1138 */ var clickRailHandler = require('./handler/click-rail')
/* 1139 */   , dragScrollbarHandler = require('./handler/drag-scrollbar')
/* 1140 */   , keyboardHandler = require('./handler/keyboard')
/* 1141 */   , mouseWheelHandler = require('./handler/mouse-wheel')
/* 1142 */   , nativeScrollHandler = require('./handler/native-scroll')
/* 1143 */   , selectionHandler = require('./handler/selection')
/* 1144 */   , touchHandler = require('./handler/touch');
/* 1145 */ 
/* 1146 */ module.exports = function (element, userSettings) {
/* 1147 */   userSettings = typeof userSettings === 'object' ? userSettings : {};
/* 1148 */ 
/* 1149 */   cls.add(element, 'ps-container');
/* 1150 */ 

/* perfect-scrollbar.jquery.min.js */

/* 1151 */   // Create a plugin instance.
/* 1152 */   var i = instances.add(element);
/* 1153 */ 
/* 1154 */   i.settings = h.extend(i.settings, userSettings);
/* 1155 */ 
/* 1156 */   clickRailHandler(element);
/* 1157 */   dragScrollbarHandler(element);
/* 1158 */   mouseWheelHandler(element);
/* 1159 */   nativeScrollHandler(element);
/* 1160 */   selectionHandler(element);
/* 1161 */ 
/* 1162 */   if (h.env.supportsTouch || h.env.supportsIePointer) {
/* 1163 */     touchHandler(element, h.env.supportsTouch, h.env.supportsIePointer);
/* 1164 */   }
/* 1165 */   if (i.settings.useKeyboard) {
/* 1166 */     keyboardHandler(element);
/* 1167 */   }
/* 1168 */ 
/* 1169 */   updateGeometry(element);
/* 1170 */ };
/* 1171 */ 
/* 1172 */ },{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(require,module,exports){
/* 1173 */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 1174 *|  * Licensed under the MIT License
/* 1175 *|  */
/* 1176 */ 'use strict';
/* 1177 */ 
/* 1178 */ var d = require('../lib/dom')
/* 1179 */   , defaultSettings = require('./default-setting')
/* 1180 */   , EventManager = require('../lib/event-manager')
/* 1181 */   , guid = require('../lib/guid')
/* 1182 */   , h = require('../lib/helper');
/* 1183 */ 
/* 1184 */ var instances = {};
/* 1185 */ 
/* 1186 */ function Instance(element) {
/* 1187 */   var i = this;
/* 1188 */ 
/* 1189 */   i.settings = h.clone(defaultSettings);
/* 1190 */   i.containerWidth = null;
/* 1191 */   i.containerHeight = null;
/* 1192 */   i.contentWidth = null;
/* 1193 */   i.contentHeight = null;
/* 1194 */ 
/* 1195 */   i.isRtl = d.css(element, 'direction') === "rtl";
/* 1196 */   i.event = new EventManager();
/* 1197 */   i.ownerDocument = element.ownerDocument || document;
/* 1198 */ 
/* 1199 */   i.scrollbarXRail = d.appendTo(d.e('div', 'ps-scrollbar-x-rail'), element);
/* 1200 */   i.scrollbarX = d.appendTo(d.e('div', 'ps-scrollbar-x'), i.scrollbarXRail);

/* perfect-scrollbar.jquery.min.js */

/* 1201 */   i.scrollbarXActive = null;
/* 1202 */   i.scrollbarXWidth = null;
/* 1203 */   i.scrollbarXLeft = null;
/* 1204 */   i.scrollbarXBottom = h.toInt(d.css(i.scrollbarXRail, 'bottom'));
/* 1205 */   i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom; // !isNaN
/* 1206 */   i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : h.toInt(d.css(i.scrollbarXRail, 'top'));
/* 1207 */   i.railBorderXWidth = h.toInt(d.css(i.scrollbarXRail, 'borderLeftWidth')) + h.toInt(d.css(i.scrollbarXRail, 'borderRightWidth'));
/* 1208 */   i.railXMarginWidth = h.toInt(d.css(i.scrollbarXRail, 'marginLeft')) + h.toInt(d.css(i.scrollbarXRail, 'marginRight'));
/* 1209 */   i.railXWidth = null;
/* 1210 */ 
/* 1211 */   i.scrollbarYRail = d.appendTo(d.e('div', 'ps-scrollbar-y-rail'), element);
/* 1212 */   i.scrollbarY = d.appendTo(d.e('div', 'ps-scrollbar-y'), i.scrollbarYRail);
/* 1213 */   i.scrollbarYActive = null;
/* 1214 */   i.scrollbarYHeight = null;
/* 1215 */   i.scrollbarYTop = null;
/* 1216 */   i.scrollbarYRight = h.toInt(d.css(i.scrollbarYRail, 'right'));
/* 1217 */   i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight; // !isNaN
/* 1218 */   i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : h.toInt(d.css(i.scrollbarYRail, 'left'));
/* 1219 */   i.scrollbarYOuterWidth = i.isRtl ? h.outerWidth(i.scrollbarY) : null;
/* 1220 */   i.railBorderYWidth = h.toInt(d.css(i.scrollbarYRail, 'borderTopWidth')) + h.toInt(d.css(i.scrollbarYRail, 'borderBottomWidth'));
/* 1221 */   i.railYMarginHeight = h.toInt(d.css(i.scrollbarYRail, 'marginTop')) + h.toInt(d.css(i.scrollbarYRail, 'marginBottom'));
/* 1222 */   i.railYHeight = null;
/* 1223 */ }
/* 1224 */ 
/* 1225 */ function getId(element) {
/* 1226 */   if (typeof element.dataset === 'undefined') {
/* 1227 */     return element.getAttribute('data-ps-id');
/* 1228 */   } else {
/* 1229 */     return element.dataset.psId;
/* 1230 */   }
/* 1231 */ }
/* 1232 */ 
/* 1233 */ function setId(element, id) {
/* 1234 */   if (typeof element.dataset === 'undefined') {
/* 1235 */     element.setAttribute('data-ps-id', id);
/* 1236 */   } else {
/* 1237 */     element.dataset.psId = id;
/* 1238 */   }
/* 1239 */ }
/* 1240 */ 
/* 1241 */ function removeId(element) {
/* 1242 */   if (typeof element.dataset === 'undefined') {
/* 1243 */     element.removeAttribute('data-ps-id');
/* 1244 */   } else {
/* 1245 */     delete element.dataset.psId;
/* 1246 */   }
/* 1247 */ }
/* 1248 */ 
/* 1249 */ exports.add = function (element) {
/* 1250 */   var newId = guid();

/* perfect-scrollbar.jquery.min.js */

/* 1251 */   setId(element, newId);
/* 1252 */   instances[newId] = new Instance(element);
/* 1253 */   return instances[newId];
/* 1254 */ };
/* 1255 */ 
/* 1256 */ exports.remove = function (element) {
/* 1257 */   delete instances[getId(element)];
/* 1258 */   removeId(element);
/* 1259 */ };
/* 1260 */ 
/* 1261 */ exports.get = function (element) {
/* 1262 */   return instances[getId(element)];
/* 1263 */ };
/* 1264 */ 
/* 1265 */ },{"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(require,module,exports){
/* 1266 */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 1267 *|  * Licensed under the MIT License
/* 1268 *|  */
/* 1269 */ 'use strict';
/* 1270 */ 
/* 1271 */ var cls = require('../lib/class')
/* 1272 */   , d = require('../lib/dom')
/* 1273 */   , h = require('../lib/helper')
/* 1274 */   , instances = require('./instances');
/* 1275 */ 
/* 1276 */ function getThumbSize(i, thumbSize) {
/* 1277 */   if (i.settings.minScrollbarLength) {
/* 1278 */     thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
/* 1279 */   }
/* 1280 */   if (i.settings.maxScrollbarLength) {
/* 1281 */     thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
/* 1282 */   }
/* 1283 */   return thumbSize;
/* 1284 */ }
/* 1285 */ 
/* 1286 */ function updateCss(element, i) {
/* 1287 */   var xRailOffset = {width: i.railXWidth};
/* 1288 */   if (i.isRtl) {
/* 1289 */     xRailOffset.left = element.scrollLeft + i.containerWidth - i.contentWidth;
/* 1290 */   } else {
/* 1291 */     xRailOffset.left = element.scrollLeft;
/* 1292 */   }
/* 1293 */   if (i.isScrollbarXUsingBottom) {
/* 1294 */     xRailOffset.bottom = i.scrollbarXBottom - element.scrollTop;
/* 1295 */   } else {
/* 1296 */     xRailOffset.top = i.scrollbarXTop + element.scrollTop;
/* 1297 */   }
/* 1298 */   d.css(i.scrollbarXRail, xRailOffset);
/* 1299 */ 
/* 1300 */   var yRailOffset = {top: element.scrollTop, height: i.railYHeight};

/* perfect-scrollbar.jquery.min.js */

/* 1301 */   if (i.isScrollbarYUsingRight) {
/* 1302 */     if (i.isRtl) {
/* 1303 */       yRailOffset.right = i.contentWidth - element.scrollLeft - i.scrollbarYRight - i.scrollbarYOuterWidth;
/* 1304 */     } else {
/* 1305 */       yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
/* 1306 */     }
/* 1307 */   } else {
/* 1308 */     if (i.isRtl) {
/* 1309 */       yRailOffset.left = element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
/* 1310 */     } else {
/* 1311 */       yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
/* 1312 */     }
/* 1313 */   }
/* 1314 */   d.css(i.scrollbarYRail, yRailOffset);
/* 1315 */ 
/* 1316 */   d.css(i.scrollbarX, {left: i.scrollbarXLeft, width: i.scrollbarXWidth - i.railBorderXWidth});
/* 1317 */   d.css(i.scrollbarY, {top: i.scrollbarYTop, height: i.scrollbarYHeight - i.railBorderYWidth});
/* 1318 */ }
/* 1319 */ 
/* 1320 */ module.exports = function (element) {
/* 1321 */   var i = instances.get(element);
/* 1322 */ 
/* 1323 */   i.containerWidth = element.clientWidth;
/* 1324 */   i.containerHeight = element.clientHeight;
/* 1325 */   i.contentWidth = element.scrollWidth;
/* 1326 */   i.contentHeight = element.scrollHeight;
/* 1327 */ 
/* 1328 */   if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
/* 1329 */     i.scrollbarXActive = true;
/* 1330 */     i.railXWidth = i.containerWidth - i.railXMarginWidth;
/* 1331 */     i.scrollbarXWidth = getThumbSize(i, h.toInt(i.railXWidth * i.containerWidth / i.contentWidth));
/* 1332 */     i.scrollbarXLeft = h.toInt(element.scrollLeft * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
/* 1333 */   } else {
/* 1334 */     i.scrollbarXActive = false;
/* 1335 */     i.scrollbarXWidth = 0;
/* 1336 */     i.scrollbarXLeft = 0;
/* 1337 */     element.scrollLeft = 0;
/* 1338 */   }
/* 1339 */ 
/* 1340 */   if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
/* 1341 */     i.scrollbarYActive = true;
/* 1342 */     i.railYHeight = i.containerHeight - i.railYMarginHeight;
/* 1343 */     i.scrollbarYHeight = getThumbSize(i, h.toInt(i.railYHeight * i.containerHeight / i.contentHeight));
/* 1344 */     i.scrollbarYTop = h.toInt(element.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
/* 1345 */   } else {
/* 1346 */     i.scrollbarYActive = false;
/* 1347 */     i.scrollbarYHeight = 0;
/* 1348 */     i.scrollbarYTop = 0;
/* 1349 */     element.scrollTop = 0;
/* 1350 */   }

/* perfect-scrollbar.jquery.min.js */

/* 1351 */ 
/* 1352 */   if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
/* 1353 */     i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
/* 1354 */   }
/* 1355 */   if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
/* 1356 */     i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
/* 1357 */   }
/* 1358 */ 
/* 1359 */   updateCss(element, i);
/* 1360 */ 
/* 1361 */   cls[i.scrollbarXActive ? 'add' : 'remove'](element, 'ps-active-x');
/* 1362 */   cls[i.scrollbarYActive ? 'add' : 'remove'](element, 'ps-active-y');
/* 1363 */ };
/* 1364 */ 
/* 1365 */ },{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18}],20:[function(require,module,exports){
/* 1366 */ /* Copyright (c) 2015 Hyunje Alex Jun and other contributors
/* 1367 *|  * Licensed under the MIT License
/* 1368 *|  */
/* 1369 */ 'use strict';
/* 1370 */ 
/* 1371 */ var d = require('../lib/dom')
/* 1372 */   , destroy = require('./destroy')
/* 1373 */   , initialize = require('./initialize')
/* 1374 */   , instances = require('./instances')
/* 1375 */   , updateGeometry = require('./update-geometry');
/* 1376 */ 
/* 1377 */ module.exports = function (element) {
/* 1378 */   var i = instances.get(element);
/* 1379 */ 
/* 1380 */   if (!i.scrollbarXRail || !element.contains(i.scrollbarXRail) ||
/* 1381 */       !i.scrollbarYRail || !element.contains(i.scrollbarYRail)) {
/* 1382 */     // If there's something wrong in the plugin, re-initialise.
/* 1383 */     destroy(element);
/* 1384 */     initialize(element);
/* 1385 */   } else {
/* 1386 */     // Hide scrollbars not to affect scrollWidth and scrollHeight
/* 1387 */     d.css(i.scrollbarXRail, 'display', 'none');
/* 1388 */     d.css(i.scrollbarYRail, 'display', 'none');
/* 1389 */ 
/* 1390 */     updateGeometry(element);
/* 1391 */ 
/* 1392 */     d.css(i.scrollbarXRail, 'display', 'block');
/* 1393 */     d.css(i.scrollbarYRail, 'display', 'block');
/* 1394 */   }
/* 1395 */ };
/* 1396 */ 
/* 1397 */ },{"../lib/dom":3,"./destroy":9,"./initialize":17,"./instances":18,"./update-geometry":19}]},{},[1]);
/* 1398 */ 

;
/* jquery.mCustomScrollbar.concat.min.js */

/* 1 */ /* == jquery mousewheel plugin == Version: 3.1.12, License: MIT License (MIT) */
/* 2 */ !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* 3 */ /* == malihu jquery custom scrollbar plugin == Version: 3.0.7, License: MIT License (MIT) */
/* 4 */ !function(e,t,a){!function(t){var o="function"==typeof define&&define.amd,n="https:"==a.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";o||e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E")),t()}(function(){var o,n="mCustomScrollbar",i="mCS",r=".mCustomScrollbar",l={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:!0},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},s=0,c={},d=t.attachEvent&&!t.addEventListener?1:0,u=!1,f=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],h={init:function(t){var t=e.extend(!0,{},l,t),a=m.call(this);if(t.live){var o=t.liveSelector||this.selector||r,n=e(o);if("off"===t.live)return void g(o);c[o]=setTimeout(function(){n.mCustomScrollbar(t),"once"===t.live&&n.length&&g(o)},500)}else g(o);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":v(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=x(t.scrollButtons.scrollType),p(t),e(a).each(function(){var a=e(this);if(!a.data(i)){a.data(i,{idx:++s,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:a.css("direction"),cbOffsets:null,trigger:null});var o=a.data(i),n=o.opt,r=a.data("mcs-axis"),l=a.data("mcs-scrollbar-position"),c=a.data("mcs-theme");r&&(n.axis=r),l&&(n.scrollbarPosition=l),c&&(n.theme=c,p(n)),_.call(this),e("#mCSB_"+o.idx+"_container img:not(."+f[2]+")").addClass(f[2]),h.update.call(null,a)}})},update:function(t,a){var o=t||m.call(this);return e(o).each(function(){var t=e(this);if(t.data(i)){var o=t.data(i),n=o.opt,r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(!r.length)return;o.tweenRunning&&Q(t),t.hasClass(f[3])&&t.removeClass(f[3]),t.hasClass(f[4])&&t.removeClass(f[4]),C.call(this),w.call(this),"y"===n.axis||n.advanced.autoExpandHorizontalScroll||r.css("width",S(r.children())),o.overflowed=k.call(this),R.call(this),n.autoDraggerLength&&y.call(this),B.call(this),O.call(this);var s=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==n.axis&&(o.overflowed[0]?l[0].height()>l[0].parent().height()?M.call(this):(G(t,s[0].toString(),{dir:"y",dur:0,overwrite:"none"}),o.contentReset.y=null):(M.call(this),"y"===n.axis?I.call(this):"yx"===n.axis&&o.overflowed[1]&&G(t,s[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==n.axis&&(o.overflowed[1]?l[1].width()>l[1].parent().width()?M.call(this):(G(t,s[1].toString(),{dir:"x",dur:0,overwrite:"none"}),o.contentReset.x=null):(M.call(this),"x"===n.axis?I.call(this):"yx"===n.axis&&o.overflowed[0]&&G(t,s[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),a&&o&&(2===a&&n.callbacks.onImageLoad&&"function"==typeof n.callbacks.onImageLoad?n.callbacks.onImageLoad.call(this):3===a&&n.callbacks.onSelectorChange&&"function"==typeof n.callbacks.onSelectorChange?n.callbacks.onSelectorChange.call(this):n.callbacks.onUpdate&&"function"==typeof n.callbacks.onUpdate&&n.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,a){if("undefined"!=typeof t&&null!=t){var o=m.call(this);return e(o).each(function(){var o=e(this);if(o.data(i)){var n=o.data(i),r=n.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,a),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=n.scrollRatio.y,c[1]*=n.scrollRatio.x),s.dur=d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&n.overflowed[0]&&(s.dir="y",s.overwrite="all",G(o,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&n.overflowed[1]&&(s.dir="x",s.overwrite="none",G(o,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=m.call(this);return e(t).each(function(){var t=e(this);t.data(i)&&Q(t)})},disable:function(t){var a=m.call(this);return e(a).each(function(){var a=e(this);if(a.data(i)){{a.data(i)}N.call(this,"remove"),I.call(this),t&&M.call(this),R.call(this,!0),a.addClass(f[3])}})},destroy:function(){var t=m.call(this);return e(t).each(function(){var a=e(this);if(a.data(i)){var o=a.data(i),r=o.opt,l=e("#mCSB_"+o.idx),s=e("#mCSB_"+o.idx+"_container"),c=e(".mCSB_"+o.idx+"_scrollbar");r.live&&g(r.liveSelector||e(t).selector),N.call(this,"remove"),I.call(this),M.call(this),a.removeData(i),$(this,"mcs"),c.remove(),s.find("img."+f[2]).removeClass(f[2]),l.replaceWith(s.contents()),a.removeClass(n+" _"+i+"_"+o.idx+" "+f[6]+" "+f[7]+" "+f[5]+" "+f[3]).addClass(f[4])}})}},m=function(){return"object"!=typeof e(this)||e(this).length<1?r:this},p=function(t){var a=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],o=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,a)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,o)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},g=function(e){c[e]&&(clearTimeout(c[e]),$(c,e))},v=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},x=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},_=function(){var t=e(this),a=t.data(i),o=a.opt,r=o.autoExpandScrollbar?" "+f[1]+"_expand":"",l=["<div id='mCSB_"+a.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+a.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+f[12]+"'><div id='mCSB_"+a.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+a.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+a.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+f[12]+"'><div id='mCSB_"+a.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===o.axis?"mCSB_vertical_horizontal":"x"===o.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===o.axis?l[0]+l[1]:"x"===o.axis?l[1]:l[0],d="yx"===o.axis?"<div id='mCSB_"+a.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",u=o.autoHideScrollbar?" "+f[6]:"",h="x"!==o.axis&&"rtl"===a.langDir?" "+f[7]:"";o.setWidth&&t.css("width",o.setWidth),o.setHeight&&t.css("height",o.setHeight),o.setLeft="y"!==o.axis&&"rtl"===a.langDir?"989999px":o.setLeft,t.addClass(n+" _"+i+"_"+a.idx+u+h).wrapInner("<div id='mCSB_"+a.idx+"' class='mCustomScrollBox mCS-"+o.theme+" "+s+"'><div id='mCSB_"+a.idx+"_container' class='mCSB_container' style='position:relative; top:"+o.setTop+"; left:"+o.setLeft+";' dir="+a.langDir+" /></div>");var m=e("#mCSB_"+a.idx),p=e("#mCSB_"+a.idx+"_container");"y"===o.axis||o.advanced.autoExpandHorizontalScroll||p.css("width",S(p.children())),"outside"===o.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(d)),b.call(this);var g=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},S=function(t){return Math.max.apply(Math,t.map(function(){return e(this).outerWidth(!0)}).get())},w=function(){var t=e(this),a=t.data(i),o=a.opt,n=e("#mCSB_"+a.idx+"_container");o.advanced.autoExpandHorizontalScroll&&"y"!==o.axis&&n.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(n[0].getBoundingClientRect().right+.4)-Math.floor(n[0].getBoundingClientRect().left),position:"relative"}).unwrap()},b=function(){var t=e(this),a=t.data(i),o=a.opt,n=e(".mCSB_"+a.idx+"_scrollbar:first"),r=at(o.scrollButtons.tabindex)?"tabindex='"+o.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+f[13]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+f[14]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+f[15]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+f[16]+"' oncontextmenu='return false;' "+r+" />"],s=["x"===o.axis?l[2]:l[0],"x"===o.axis?l[3]:l[1],l[2],l[3]];o.scrollButtons.enable&&n.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},C=function(){var t=e(this),a=t.data(i),o=e("#mCSB_"+a.idx),n=t.css("max-height")||"none",r=-1!==n.indexOf("%"),l=t.css("box-sizing");if("none"!==n){var s=r?t.parent().height()*parseInt(n)/100:parseInt(n);"border-box"===l&&(s-=t.innerHeight()-t.height()+(t.outerHeight()-t.innerHeight())),o.css("max-height",Math.round(s))}},y=function(){var t=e(this),a=t.data(i),o=e("#mCSB_"+a.idx),n=e("#mCSB_"+a.idx+"_container"),r=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")],l=[o.height()/n.outerHeight(!1),o.width()/n.outerWidth(!1)],s=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],c=d&&s[1]<s[0]?s[0]:s[1],u=d&&s[3]<s[2]?s[2]:s[3];r[0].css({height:c,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":s[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},B=function(){var t=e(this),a=t.data(i),o=e("#mCSB_"+a.idx),n=e("#mCSB_"+a.idx+"_container"),r=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")],l=[n.outerHeight(!1)-o.height(),n.outerWidth(!1)-o.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];a.scrollRatio={y:s[0],x:s[1]}},T=function(e,t,a){var o=a?f[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(f[0]+" "+o),n.toggleClass(f[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(f[0]),n.removeClass(f[1])):(e.addClass(f[0]),n.addClass(f[1])))},k=function(){var t=e(this),a=t.data(i),o=e("#mCSB_"+a.idx),n=e("#mCSB_"+a.idx+"_container"),r=null==a.overflowed?n.height():n.outerHeight(!1),l=null==a.overflowed?n.width():n.outerWidth(!1);return[r>o.height(),l>o.width()]},M=function(){var t=e(this),a=t.data(i),o=a.opt,n=e("#mCSB_"+a.idx),r=e("#mCSB_"+a.idx+"_container"),l=[e("#mCSB_"+a.idx+"_dragger_vertical"),e("#mCSB_"+a.idx+"_dragger_horizontal")];if(Q(t),("x"!==o.axis&&!a.overflowed[0]||"y"===o.axis&&a.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==o.axis&&!a.overflowed[1]||"x"===o.axis&&a.overflowed[1]){var s=dx=0;"rtl"===a.langDir&&(s=n.width()-r.outerWidth(!1),dx=Math.abs(s/a.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},O=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),A.call(a[0])):t()},100)}var a=e(this),o=a.data(i),n=o.opt;if(!o.bindEvents){if(D.call(this),n.contentTouchScroll&&L.call(this),W.call(this),n.mouseWheel.enable){var r;t()}z.call(this),U.call(this),n.advanced.autoScrollOnFocus&&H.call(this),n.scrollButtons.enable&&F.call(this),n.keyboard.enable&&q.call(this),o.bindEvents=!0}},I=function(){var t=e(this),o=t.data(i),n=o.opt,r=i+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+l+" ."+f[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+l+">a"),c=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&s.add(e(n.advanced.releaseDraggableSelectors)),o.bindEvents&&(e(a).unbind("."+r),s.each(function(){e(this).unbind("."+r)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(c[0].onCompleteTimeout),$(c[0],"onCompleteTimeout"),o.bindEvents=!1)},R=function(t){var a=e(this),o=a.data(i),n=o.opt,r=e("#mCSB_"+o.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+o.idx+"_container"),s=[e("#mCSB_"+o.idx+"_scrollbar_vertical"),e("#mCSB_"+o.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==n.axis&&(o.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(f[8]+" "+f[10])):(n.alwaysShowScrollbar?(2!==n.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(f[10])):(s[0].css("display","none"),l.addClass(f[10])),l.addClass(f[8]))),"y"!==n.axis&&(o.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(f[9]+" "+f[11])):(n.alwaysShowScrollbar?(2!==n.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(f[11])):(s[1].css("display","none"),l.addClass(f[11])),l.addClass(f[9]))),o.overflowed[0]||o.overflowed[1]?a.removeClass(f[5]):a.addClass(f[5])},E=function(e){var t=e.type;switch(t){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return[e.originalEvent.pageY,e.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var a=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],o=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return[a.pageY,a.pageX,o>1];default:return[e.pageY,e.pageX,!1]}},D=function(){function t(e){var t=p.find("iframe");if(t.length){var a=e?"auto":"none";t.css("pointer-events",a)}}function o(e,t,a,o){if(p[0].idleTimer=f.scrollInertia<233?250:0,n.attr("id")===m[1])var i="x",r=(n[0].offsetLeft-t+o)*c.scrollRatio.x;else var i="y",r=(n[0].offsetTop-e+a)*c.scrollRatio.y;G(s,r.toString(),{dir:i,drag:!0})}var n,r,l,s=e(this),c=s.data(i),f=c.opt,h=i+"_"+c.idx,m=["mCSB_"+c.idx+"_dragger_vertical","mCSB_"+c.idx+"_dragger_horizontal"],p=e("#mCSB_"+c.idx+"_container"),g=e("#"+m[0]+",#"+m[1]),v=f.advanced.releaseDraggableSelectors?g.add(e(f.advanced.releaseDraggableSelectors)):g;g.bind("mousedown."+h+" touchstart."+h+" pointerdown."+h+" MSPointerDown."+h,function(o){if(o.stopImmediatePropagation(),o.preventDefault(),et(o)){u=!0,d&&(a.onselectstart=function(){return!1}),t(!1),Q(s),n=e(this);var i=n.offset(),c=E(o)[0]-i.top,h=E(o)[1]-i.left,m=n.height()+i.top,p=n.width()+i.left;m>c&&c>0&&p>h&&h>0&&(r=c,l=h),T(n,"active",f.autoExpandScrollbar)}}).bind("touchmove."+h,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=n.offset(),a=E(e)[0]-t.top,i=E(e)[1]-t.left;o(r,l,a,i)}),e(a).bind("mousemove."+h+" pointermove."+h+" MSPointerMove."+h,function(e){if(n){var t=n.offset(),a=E(e)[0]-t.top,i=E(e)[1]-t.left;if(r===a)return;o(r,l,a,i)}}).add(v).bind("mouseup."+h+" touchend."+h+" pointerup."+h+" MSPointerUp."+h,function(){n&&(T(n,"active",f.autoExpandScrollbar),n=null),u=!1,d&&(a.onselectstart=null),t(!0)})},L=function(){function t(e,t){var a=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?a[0]:a[3]:e>60?t>3?a[3]:a[2]:e>30?t>8?a[1]:t>6?a[0]:t>4?t:a[2]:t>8?t:a[3]}function a(e,t,a,o,n,i){e&&G(_,e.toString(),{dur:t,scrollEasing:a,dir:o,overwrite:n,drag:i})}var n,r,l,s,c,d,f,h,m,p,g,v,x,_=e(this),S=_.data(i),w=S.opt,b=i+"_"+S.idx,C=e("#mCSB_"+S.idx),y=e("#mCSB_"+S.idx+"_container"),B=[e("#mCSB_"+S.idx+"_dragger_vertical"),e("#mCSB_"+S.idx+"_dragger_horizontal")],T=[],k=[],M=0,O="yx"===w.axis?"none":"all",I=[];y.bind("touchstart."+b+" pointerdown."+b+" MSPointerDown."+b,function(e){if(!tt(e)||u||E(e)[2])return void(o=0);o=1,v=0,x=0;var t=y.offset();n=E(e)[0]-t.top,r=E(e)[1]-t.left,I=[E(e)[0],E(e)[1]]}).bind("touchmove."+b+" pointermove."+b+" MSPointerMove."+b,function(e){if(tt(e)&&!u&&!E(e)[2]&&(e.stopImmediatePropagation(),!x||v)){d=K();var t=C.offset(),o=E(e)[0]-t.top,i=E(e)[1]-t.left,l="mcsLinearOut";if(T.push(o),k.push(i),I[2]=Math.abs(E(e)[0]-I[0]),I[3]=Math.abs(E(e)[1]-I[1]),S.overflowed[0])var s=B[0].parent().height()-B[0].height(),c=n-o>0&&o-n>-(s*S.scrollRatio.y)&&(2*I[3]<I[2]||"yx"===w.axis);if(S.overflowed[1])var f=B[1].parent().width()-B[1].width(),h=r-i>0&&i-r>-(f*S.scrollRatio.x)&&(2*I[2]<I[3]||"yx"===w.axis);c||h?(e.preventDefault(),v=1):x=1,p="yx"===w.axis?[n-o,r-i]:"x"===w.axis?[null,r-i]:[n-o,null],y[0].idleTimer=250,S.overflowed[0]&&a(p[0],M,l,"y","all",!0),S.overflowed[1]&&a(p[1],M,l,"x",O,!0)}}),C.bind("touchstart."+b+" pointerdown."+b+" MSPointerDown."+b,function(e){if(!tt(e)||u||E(e)[2])return void(o=0);o=1,e.stopImmediatePropagation(),Q(_),c=K();var t=C.offset();l=E(e)[0]-t.top,s=E(e)[1]-t.left,T=[],k=[]}).bind("touchend."+b+" pointerup."+b+" MSPointerUp."+b,function(e){if(tt(e)&&!u&&!E(e)[2]){e.stopImmediatePropagation(),v=0,x=0,f=K();var o=C.offset(),n=E(e)[0]-o.top,i=E(e)[1]-o.left;if(!(f-d>30)){m=1e3/(f-c);var r="mcsEaseOut",_=2.5>m,b=_?[T[T.length-2],k[k.length-2]]:[0,0];h=_?[n-b[0],i-b[1]]:[n-l,i-s];var B=[Math.abs(h[0]),Math.abs(h[1])];m=_?[Math.abs(h[0]/4),Math.abs(h[1]/4)]:[m,m];var M=[Math.abs(y[0].offsetTop)-h[0]*t(B[0]/m[0],m[0]),Math.abs(y[0].offsetLeft)-h[1]*t(B[1]/m[1],m[1])];p="yx"===w.axis?[M[0],M[1]]:"x"===w.axis?[null,M[1]]:[M[0],null],g=[4*B[0]+w.scrollInertia,4*B[1]+w.scrollInertia];var I=parseInt(w.contentTouchScroll)||0;p[0]=B[0]>I?p[0]:0,p[1]=B[1]>I?p[1]:0,S.overflowed[0]&&a(p[0],g[0],r,"y",O,!1),S.overflowed[1]&&a(p[1],g[1],r,"x",O,!1)}}})},W=function(){function n(){return t.getSelection?t.getSelection().toString():a.selection&&"Control"!=a.selection.type?a.selection.createRange().text:0}function r(e,t,a){f.type=a&&l?"stepped":"stepless",f.scrollAmount=10,j(s,e,t,"mcsLinearOut",a?60:null)}var l,s=e(this),c=s.data(i),d=c.opt,f=c.sequential,h=i+"_"+c.idx,m=e("#mCSB_"+c.idx+"_container"),p=m.parent();m.bind("mousedown."+h,function(){o||l||(l=1,u=!0)}).add(a).bind("mousemove."+h,function(e){if(!o&&l&&n()){var t=m.offset(),a=E(e)[0]-t.top+m[0].offsetTop,i=E(e)[1]-t.left+m[0].offsetLeft;a>0&&a<p.height()&&i>0&&i<p.width()?f.step&&r("off",null,"stepped"):("x"!==d.axis&&c.overflowed[0]&&(0>a?r("on",38):a>p.height()&&r("on",40)),"y"!==d.axis&&c.overflowed[1]&&(0>i?r("on",37):i>p.width()&&r("on",39)))}}).bind("mouseup."+h,function(){o||(l&&(l=0,r("off",null)),u=!1)})},A=function(){function t(e){var t=null;try{var a=e.contentDocument||e.contentWindow.document;t=a.body.innerHTML}catch(o){}return null!==t}var a=e(this),o=a.data(i);if(o){var n=o.opt,r=i+"_"+o.idx,l=e("#mCSB_"+o.idx),s=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],c=e("#mCSB_"+o.idx+"_container").find("iframe"),u=l;c.length&&c.each(function(){var a=this;t(a)&&(u=u.add(e(a).contents().find("body")))}),u.bind("mousewheel."+r,function(t,i){if(Q(a),!P(a,t.target)){var r="auto"!==n.mouseWheel.deltaFactor?parseInt(n.mouseWheel.deltaFactor):d&&t.deltaFactor<100?100:t.deltaFactor||100;if("x"===n.axis||"x"===n.mouseWheel.axis)var c="x",u=[Math.round(r*o.scrollRatio.x),parseInt(n.mouseWheel.scrollAmount)],f="auto"!==n.mouseWheel.scrollAmount?u[1]:u[0]>=l.width()?.9*l.width():u[0],h=Math.abs(e("#mCSB_"+o.idx+"_container")[0].offsetLeft),m=s[1][0].offsetLeft,p=s[1].parent().width()-s[1].width(),g=t.deltaX||t.deltaY||i;else var c="y",u=[Math.round(r*o.scrollRatio.y),parseInt(n.mouseWheel.scrollAmount)],f="auto"!==n.mouseWheel.scrollAmount?u[1]:u[0]>=l.height()?.9*l.height():u[0],h=Math.abs(e("#mCSB_"+o.idx+"_container")[0].offsetTop),m=s[0][0].offsetTop,p=s[0].parent().height()-s[0].height(),g=t.deltaY||i;"y"===c&&!o.overflowed[0]||"x"===c&&!o.overflowed[1]||(n.mouseWheel.invert&&(g=-g),n.mouseWheel.normalizeDelta&&(g=0>g?-1:1),(g>0&&0!==m||0>g&&m!==p||n.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),G(a,(h-g*f).toString(),{dir:c}))}})}},P=function(t,a){var o=a.nodeName.toLowerCase(),n=t.data(i).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(o,n)>-1&&!(e.inArray(o,r)>-1&&!e(a).is(":focus"))},z=function(){var t=e(this),a=t.data(i),o=i+"_"+a.idx,n=e("#mCSB_"+a.idx+"_container"),r=n.parent(),l=e(".mCSB_"+a.idx+"_scrollbar ."+f[12]);l.bind("touchstart."+o+" pointerdown."+o+" MSPointerDown."+o,function(){u=!0}).bind("touchend."+o+" pointerup."+o+" MSPointerUp."+o,function(){u=!1}).bind("click."+o,function(o){if(e(o.target).hasClass(f[12])||e(o.target).hasClass("mCSB_draggerRail")){Q(t);var i=e(this),l=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!a.overflowed[1])return;var s="x",c=o.pageX>l.offset().left?-1:1,d=Math.abs(n[0].offsetLeft)-.9*c*r.width()}else{if(!a.overflowed[0])return;var s="y",c=o.pageY>l.offset().top?-1:1,d=Math.abs(n[0].offsetTop)-.9*c*r.height()}G(t,d.toString(),{dir:s,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(i),n=o.opt,r=i+"_"+o.idx,l=e("#mCSB_"+o.idx+"_container"),s=l.parent();l.bind("focusin."+r,function(){var o=e(a.activeElement),i=l.find(".mCustomScrollBox").length,r=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=i?(r+17)*i:0,t[0]._focusTimeout=setTimeout(function(){var e=[ot(o)[0],ot(o)[1]],a=[l[0].offsetTop,l[0].offsetLeft],i=[a[0]+e[0]>=0&&a[0]+e[0]<s.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<s.width()-o.outerWidth(!1)],c="yx"!==n.axis||i[0]||i[1]?"all":"none";"x"===n.axis||i[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:r}),"y"===n.axis||i[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:r})},t[0]._focusTimer))})},U=function(){var t=e(this),a=t.data(i),o=i+"_"+a.idx,n=e("#mCSB_"+a.idx+"_container").parent();n.bind("scroll."+o,function(){(0!==n.scrollTop()||0!==n.scrollLeft())&&e(".mCSB_"+a.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),a=t.data(i),o=a.opt,n=a.sequential,r=i+"_"+a.idx,l=".mCSB_"+a.idx+"_scrollbar",s=e(l+">a");s.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(i){function r(e,a){n.scrollAmount=o.snapAmount||o.scrollButtons.scrollAmount,j(t,e,a)}if(i.preventDefault(),et(i)){var l=e(this).attr("class");switch(n.type=o.scrollButtons.scrollType,i.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===n.type)return;u=!0,a.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===n.type)return;u=!1,n.dir&&r("off",l);break;case"click":if("stepped"!==n.type||a.tweenRunning)return;r("on",l)}}})},q=function(){var t=e(this),o=t.data(i),n=o.opt,r=o.sequential,l=i+"_"+o.idx,s=e("#mCSB_"+o.idx),c=e("#mCSB_"+o.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']";s.attr("tabindex","0").bind("blur."+l+" keydown."+l+" keyup."+l,function(i){function l(e,a){r.type=n.keyboard.scrollType,r.scrollAmount=n.snapAmount||n.keyboard.scrollAmount,"stepped"===r.type&&o.tweenRunning||j(t,e,a)}switch(i.type){case"blur":o.tweenRunning&&r.dir&&l("off",null);break;case"keydown":case"keyup":var s=i.keyCode?i.keyCode:i.which,f="on";if("x"!==n.axis&&(38===s||40===s)||"y"!==n.axis&&(37===s||39===s)){if((38===s||40===s)&&!o.overflowed[0]||(37===s||39===s)&&!o.overflowed[1])return;"keyup"===i.type&&(f="off"),e(a.activeElement).is(u)||(i.preventDefault(),i.stopImmediatePropagation(),l(f,s))}else if(33===s||34===s){if((o.overflowed[0]||o.overflowed[1])&&(i.preventDefault(),i.stopImmediatePropagation()),"keyup"===i.type){Q(t);var h=34===s?-1:1;if("x"===n.axis||"yx"===n.axis&&o.overflowed[1]&&!o.overflowed[0])var m="x",p=Math.abs(c[0].offsetLeft)-.9*h*d.width();else var m="y",p=Math.abs(c[0].offsetTop)-.9*h*d.height();G(t,p.toString(),{dir:m,scrollEasing:"mcsEaseInOut"})}}else if((35===s||36===s)&&!e(a.activeElement).is(u)&&((o.overflowed[0]||o.overflowed[1])&&(i.preventDefault(),i.stopImmediatePropagation()),"keyup"===i.type)){if("x"===n.axis||"yx"===n.axis&&o.overflowed[1]&&!o.overflowed[0])var m="x",p=35===s?Math.abs(d.width()-c.outerWidth(!1)):0;else var m="y",p=35===s?Math.abs(d.height()-c.outerHeight(!1)):0;G(t,p.toString(),{dir:m,scrollEasing:"mcsEaseInOut"})}}})},j=function(t,a,o,n,r){function l(e){var a="stepped"!==u.type,o=r?r:e?a?p/1.5:g:1e3/60,i=e?a?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],f="x"===u.dir[0]?s[1]+u.dir[1]*d[1]*i:s[0]+u.dir[1]*d[0]*i,m="x"===u.dir[0]?s[1]+u.dir[1]*parseInt(u.scrollAmount):s[0]+u.dir[1]*parseInt(u.scrollAmount),v="auto"!==u.scrollAmount?m:f,x=n?n:e?a?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",_=e?!0:!1;return e&&17>o&&(v="x"===u.dir[0]?s[1]:s[0]),G(t,v.toString(),{dir:u.dir[0],scrollEasing:x,dur:o,onComplete:_}),e?void(u.dir=!1):(clearTimeout(u.step),void(u.step=setTimeout(function(){l()},o)))}function s(){clearTimeout(u.step),$(u,"step"),Q(t)}var c=t.data(i),d=c.opt,u=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===u.type?!0:!1,p=d.scrollInertia<26?26:d.scrollInertia,g=d.scrollInertia<1?17:d.scrollInertia;switch(a){case"on":if(u.dir=[o===f[16]||o===f[15]||39===o||37===o?"x":"y",o===f[13]||o===f[15]||38===o||37===o?-1:1],Q(t),at(o)&&"stepped"===u.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&u.dir)&&l(!0)}},Y=function(t){var a=e(this).data(i).opt,o=[];return"function"==typeof t&&(t=t()),t instanceof Array?o=t.length>1?[t[0],t[1]]:"x"===a.axis?[null,t[0]]:[t[0],null]:(o[0]=t.y?t.y:t.x||"x"===a.axis?null:t,o[1]=t.x?t.x:t.y||"y"===a.axis?null:t),"function"==typeof o[0]&&(o[0]=o[0]()),"function"==typeof o[1]&&(o[1]=o[1]()),o},X=function(t,a){if(null!=t&&"undefined"!=typeof t){var o=e(this),n=o.data(i),r=n.opt,l=e("#mCSB_"+n.idx+"_container"),s=l.parent(),c=typeof t;a||(a="x"===r.axis?"x":"y");var d="x"===a?l.outerWidth(!1):l.outerHeight(!1),u="x"===a?l[0].offsetLeft:l[0].offsetTop,f="x"===a?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===a?ot(m)[1]:ot(m)[0];case"string":case"number":if(at(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(u-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=u+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&at(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===a?ot(m)[1]:ot(m)[0]}return e(t).length?"x"===a?ot(e(t))[1]:ot(e(t))[0]:(l.css(f,t),void h.update.call(null,o[0]))}}},N=function(t){function a(){clearTimeout(u[0].autoUpdate),u[0].autoUpdate=setTimeout(function(){return d.advanced.updateOnSelectorChange&&(m=r(),m!==S)?(l(3),void(S=m)):(d.advanced.updateOnContentResize&&(p=[u.outerHeight(!1),u.outerWidth(!1),v.height(),v.width(),_()[0],_()[1]],(p[0]!==w[0]||p[1]!==w[1]||p[2]!==w[2]||p[3]!==w[3]||p[4]!==w[4]||p[5]!==w[5])&&(l(p[0]!==w[0]||p[1]!==w[1]),w=p)),d.advanced.updateOnImageLoad&&(g=o(),g!==b&&(u.find("img").each(function(){n(this)}),b=g)),void((d.advanced.updateOnSelectorChange||d.advanced.updateOnContentResize||d.advanced.updateOnImageLoad)&&a()))},60)}function o(){var e=0;return d.advanced.updateOnImageLoad&&(e=u.find("img").length),e}function n(t){function a(e,t){return function(){return t.apply(e,arguments)}}function o(){this.onload=null,e(t).addClass(f[2]),l(2)}if(e(t).hasClass(f[2]))return void l();var n=new Image;n.onload=a(n,o),n.src=t.src}function r(){d.advanced.updateOnSelectorChange===!0&&(d.advanced.updateOnSelectorChange="*");var t=0,a=u.find(d.advanced.updateOnSelectorChange);return d.advanced.updateOnSelectorChange&&a.length>0&&a.each(function(){t+=e(this).height()+e(this).width()}),t}function l(e){clearTimeout(u[0].autoUpdate),h.update.call(null,s[0],e)}var s=e(this),c=s.data(i),d=c.opt,u=e("#mCSB_"+c.idx+"_container");if(t)return clearTimeout(u[0].autoUpdate),void $(u[0],"autoUpdate");var m,p,g,v=u.parent(),x=[e("#mCSB_"+c.idx+"_scrollbar_vertical"),e("#mCSB_"+c.idx+"_scrollbar_horizontal")],_=function(){return[x[0].is(":visible")?x[0].outerHeight(!0):0,x[1].is(":visible")?x[1].outerWidth(!0):0]},S=r(),w=[u.outerHeight(!1),u.outerWidth(!1),v.height(),v.width(),_()[0],_()[1]],b=o();a()},V=function(e,t,a){return Math.round(e/t)*t-a},Q=function(t){var a=t.data(i),o=e("#mCSB_"+a.idx+"_container,#mCSB_"+a.idx+"_container_wrapper,#mCSB_"+a.idx+"_dragger_vertical,#mCSB_"+a.idx+"_dragger_horizontal");o.each(function(){Z.call(this)})},G=function(t,a,o){function n(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||_>=S[0]+b,c.callbacks.alwaysTriggerOffsets||-C>=_]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],a=[v[0].offsetTop,v[0].offsetLeft],n=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:a[0],draggerLeft:a[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(n[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(n[1])-i[1])),direction:o.dir}}var s=t.data(i),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},o=e.extend(d,o),u=[o.dur,o.drag?0:o.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=o.trigger,(0!==m.scrollTop()||0!==m.scrollLeft())&&(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==a||s.contentReset.y||(n("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==a||s.contentReset.x||(n("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==a&&"_resetX"!==a){switch(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(n("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(n("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount&&(a=V(a,c.snapAmount,c.snapOffset)),o.dir){case"x":var v=e("#mCSB_"+s.idx+"_dragger_horizontal"),x="left",_=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),v.parent().width()-v.width()],w=[a,0===a?0:a/s.scrollRatio.x],b=p[1],C=g[1],y=b>0?b/s.scrollRatio.x:0,B=C>0?C/s.scrollRatio.x:0;
/* 5 */ break;case"y":var v=e("#mCSB_"+s.idx+"_dragger_vertical"),x="top",_=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),v.parent().height()-v.height()],w=[a,0===a?0:a/s.scrollRatio.y],b=p[0],C=g[0],y=b>0?b/s.scrollRatio.y:0,B=C>0?C/s.scrollRatio.y:0}w[1]<0||0===w[0]&&0===w[1]?w=[0,0]:w[1]>=S[1]?w=[S[0],S[1]]:w[0]=-w[0],t[0].mcs||(l(),n("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),(s.tweenRunning||!(0===_&&w[0]>=0||_===S[0]&&w[0]<=S[0]))&&(J(v[0],x,Math.round(w[1]),u[1],o.scrollEasing),J(h[0],x,Math.round(w[0]),u[0],o.scrollEasing,o.overwrite,{onStart:function(){o.callbacks&&o.onStart&&!s.tweenRunning&&(n("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,T(v),s.cbOffsets=r())},onUpdate:function(){o.callbacks&&o.onUpdate&&n("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(o.callbacks&&o.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){n("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),n("onTotalScroll")&&w[1]>=S[1]-y&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),n("onTotalScrollBack")&&w[1]<=B&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,T(v,"hide")},e)}}}))}},J=function(e,a,o,n,i,r,l){function s(){b.stop||(_||p.call(),_=K()-x,c(),_>=b.time&&(b.time=_>b.time?_+h-(_-b.time):_+h-1,b.time<_+1&&(b.time=_+1)),b.time<n?b.id=m(s):v.call())}function c(){n>0?(b.currVal=f(b.time,S,C,n,i),w[a]=Math.round(b.currVal)+"px"):w[a]=o+"px",g.call()}function d(){h=1e3/60,b.time=_+h,m=t.requestAnimationFrame?t.requestAnimationFrame:function(e){return c(),setTimeout(e,.01)},b.id=m(s)}function u(){null!=b.id&&(t.requestAnimationFrame?t.cancelAnimationFrame(b.id):clearTimeout(b.id),b.id=null)}function f(e,t,a,o,n){switch(n){case"linear":case"mcsLinear":return a*e/o+t;case"mcsLinearOut":return e/=o,e--,a*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=o/2,1>e?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=o/2,1>e?a/2*Math.pow(2,10*(e-1))+t:(e--,a/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=o/2,1>e?a/2*e*e*e+t:(e-=2,a/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=o,e--,-a*(e*e*e*e-1)+t;case"easeOutStrong":return a*(-Math.pow(2,-10*e/o)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=o)*e,r=i*e;return t+a*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var h,m,l=l||{},p=l.onStart||function(){},g=l.onUpdate||function(){},v=l.onComplete||function(){},x=K(),_=0,S=e.offsetTop,w=e.style,b=e._mTween[a];"left"===a&&(S=e.offsetLeft);var C=o-S;b.stop=0,"none"!==r&&u(),d()},K=function(){return t.performance&&t.performance.now?t.performance.now():t.performance&&t.performance.webkitNow?t.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var a=["top","left"],o=0;o<a.length;o++){var n=a[o];e._mTween[n].id&&(t.requestAnimationFrame?t.cancelAnimationFrame(e._mTween[n].id):clearTimeout(e._mTween[n].id),e._mTween[n].id=null,e._mTween[n].stop=1)}},$=function(e,t){try{delete e[t]}catch(a){e[t]=null}},et=function(e){return!(e.which&&1!==e.which)},tt=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},at=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ot=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]};e.fn[n]=function(t){return h[t]?h[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):h.init.apply(this,arguments)},e[n]=function(t){return h[t]?h[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):h.init.apply(this,arguments)},e[n].defaults=l,t[n]=!0,e(t).load(function(){e(r)[n](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var a,o,n=e(t),i=n.parents(".mCSB_container");if(i.length)return a=i.parent(),o=[i[0].offsetTop,i[0].offsetLeft],o[0]+ot(n)[0]>=0&&o[0]+ot(n)[0]<a.height()-n.outerHeight(!1)&&o[1]+ot(n)[1]>=0&&o[1]+ot(n)[1]<a.width()-n.outerWidth(!1)},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var a=e(t).data(i);if(a)return a.overflowed[0]||a.overflowed[1]}})})})}(jQuery,window,document);

;
/* featherlight.js */

/* 1   */ /**
/* 2   *|  * Featherlight - ultra slim jQuery lightbox
/* 3   *|  * Version 1.0.3 - http://noelboss.github.io/featherlight/
/* 4   *|  *
/* 5   *|  * Copyright 2014, Noël Raoul Bossart (http://www.noelboss.com)
/* 6   *|  * MIT Licensed.
/* 7   *| **/
/* 8   */ (function($) {
/* 9   */ 	"use strict";
/* 10  */ 
/* 11  */ 	if('undefined' === typeof $) {
/* 12  */ 		if('console' in window){ window.console.info('Too much lightness, Featherlight needs jQuery.'); }
/* 13  */ 		return;
/* 14  */ 	}
/* 15  */ 
/* 16  */ 	/* Featherlight is exported as $.featherlight.
/* 17  *| 	   It is a function used to open a featherlight lightbox.
/* 18  *| 
/* 19  *| 	   [tech]
/* 20  *| 	   Featherlight uses prototype inheritance.
/* 21  *| 	   Each opened lightbox will have a corresponding object.
/* 22  *| 	   That object may have some attributes that override the
/* 23  *| 	   prototype's.
/* 24  *| 	   Extensions created with Featherlight.extend will have their
/* 25  *| 	   own prototype that inherits from Featherlight's prototype,
/* 26  *| 	   thus attributes can be overriden either at the object level,
/* 27  *| 	   or at the extension level.
/* 28  *| 	   To create callbacks that chain themselves instead of overriding,
/* 29  *| 	   use chainCallbacks.
/* 30  *| 	   For those familiar with CoffeeScript, this correspond to
/* 31  *| 	   Featherlight being a class and the Gallery being a class
/* 32  *| 	   extending Featherlight.
/* 33  *| 	   The chainCallbacks is used since we don't have access to
/* 34  *| 	   CoffeeScript's `super`.
/* 35  *| 	*/
/* 36  */ 
/* 37  */ 	function Featherlight($content, config) {
/* 38  */ 		if(this instanceof Featherlight) {  /* called with new */
/* 39  */ 			this.id = Featherlight.id++;
/* 40  */ 			this.setup($content, config);
/* 41  */ 			this.chainCallbacks(Featherlight._callbackChain);
/* 42  */ 		} else {
/* 43  */ 			var fl = new Featherlight($content, config);
/* 44  */ 			fl.open();
/* 45  */ 			return fl;
/* 46  */ 		}
/* 47  */ 	}
/* 48  */ 
/* 49  */ 	/* document wide key handler */
/* 50  */ 	var keyHelper = function(event) {

/* featherlight.js */

/* 51  */ 		if (!event.isDefaultPrevented()) { // esc keycode
/* 52  */ 			var self = Featherlight.current();
/* 53  */ 			if (self) {
/* 54  */ 				self.onKeyDown(event);
/* 55  */ 			}
/* 56  */ 		}
/* 57  */ 	};
/* 58  */ 
/* 59  */ 	Featherlight.prototype = {
/* 60  */ 		constructor: Featherlight,
/* 61  */ 		/*** defaults ***/
/* 62  */ 		/* extend featherlight with defaults and methods */
/* 63  */ 		namespace:    'featherlight',         /* Name of the events and css class prefix */
/* 64  */ 		targetAttr:   'data-featherlight',    /* Attribute of the triggered element that contains the selector to the lightbox content */
/* 65  */ 		variant:      null,                   /* Class that will be added to change look of the lightbox */
/* 66  */ 		resetCss:     false,                  /* Reset all css */
/* 67  */ 		background:   null,                   /* Custom DOM for the background, wrapper and the closebutton */
/* 68  */ 		openTrigger:  'click',                /* Event that triggers the lightbox */
/* 69  */ 		closeTrigger: 'click',                /* Event that triggers the closing of the lightbox */
/* 70  */ 		filter:       null,                   /* Selector to filter events. Think $(...).on('click', filter, eventHandler) */
/* 71  */ 		root:         'body',                 /* Where to append featherlights */
/* 72  */ 		openSpeed:    250,                    /* Duration of opening animation */
/* 73  */ 		closeSpeed:   250,                    /* Duration of closing animation */
/* 74  */ 		closeOnClick: 'background',           /* Close lightbox on click ('background', 'anywhere' or false) */
/* 75  */ 		closeOnEsc:   true,                   /* Close lightbox when pressing esc */
/* 76  */ 		closeIcon:    '&#10005;',             /* Close icon */
/* 77  */ 		otherClose:   null,                   /* Selector for alternate close buttons (e.g. "a.close") */
/* 78  */ 		beforeOpen:   $.noop,                 /* Called before open. can return false to prevent opening of lightbox. Gets event as parameter, this contains all data */
/* 79  */ 		beforeContent: $.noop,                /* Called when content is loaded. Gets event as parameter, this contains all data */
/* 80  */ 		beforeClose:  $.noop,                 /* Called before close. can return false to prevent opening of lightbox. Gets event as parameter, this contains all data */
/* 81  */ 		afterOpen:    $.noop,                 /* Called after open. Gets event as parameter, this contains all data */
/* 82  */ 		afterContent: $.noop,                 /* Called after content is ready and has been set. Gets event as parameter, this contains all data */
/* 83  */ 		afterClose:   $.noop,                 /* Called after close. Gets event as parameter, this contains all data */
/* 84  */ 		onKeyDown:    $.noop,									/* Called on key down for the frontmost featherlight */
/* 85  */ 		type:         null,                   /* Specify type of lightbox. If unset, it will check for the targetAttrs value. */
/* 86  */ 		contentFilters: ['jquery', 'image', 'html', 'ajax', 'text'], /* List of content filters to use to determine the content */
/* 87  */ 
/* 88  */ 		/*** methods ***/
/* 89  */ 		/* setup iterates over a single instance of featherlight and prepares the background and binds the events */
/* 90  */ 		setup: function(target, config){
/* 91  */ 			/* all arguments are optional */
/* 92  */ 			if (typeof target === 'object' && target instanceof $ === false && !config) {
/* 93  */ 				config = target;
/* 94  */ 				target = undefined;
/* 95  */ 			}
/* 96  */ 
/* 97  */ 			var self = $.extend(this, config, {target: target}),
/* 98  */ 				css = !self.resetCss ? self.namespace : self.namespace+'-reset', /* by adding -reset to the classname, we reset all the default css */
/* 99  */ 				$background = $(self.background || [
/* 100 */ 					'<div class="'+css+'">',

/* featherlight.js */

/* 101 */ 						'<div class="'+css+'-content">',
/* 102 */ 							'<span class="'+css+'-close-icon '+ self.namespace + '-close">',
/* 103 */ 								self.closeIcon,
/* 104 */ 							'</span>',
/* 105 */ 							'<div class="'+self.namespace+'-inner"></div>',
/* 106 */ 						'</div>',
/* 107 */ 					'</div>'].join('')),
/* 108 */ 				closeButtonSelector = '.'+self.namespace+'-close' + (self.otherClose ? ',' + self.otherClose : '');
/* 109 */ 
/* 110 */ 			self.$instance = $background.clone().addClass(self.variant); /* clone DOM for the background, wrapper and the close button */
/* 111 */ 
/* 112 */ 			/* close when click on background/anywhere/null or closebox */
/* 113 */ 			self.$instance.on(self.closeTrigger+'.'+self.namespace, function(event) {
/* 114 */ 				var $target = $(event.target);
/* 115 */ 				if( ('background' === self.closeOnClick  && $target.is('.'+self.namespace))
/* 116 */ 					|| 'anywhere' === self.closeOnClick
/* 117 */ 					|| $target.is(closeButtonSelector) ){
/* 118 */ 					event.preventDefault();
/* 119 */ 					self.close();
/* 120 */ 				}
/* 121 */ 			});
/* 122 */ 
/* 123 */ 			return this;
/* 124 */ 		},
/* 125 */ 
/* 126 */ 		/* this method prepares the content and converts it into a jQuery object or a promise */
/* 127 */ 		getContent: function(){
/* 128 */ 			var self = this,
/* 129 */ 				filters = this.constructor.contentFilters,
/* 130 */ 				readTargetAttr = function(name){ return self.$currentTarget && self.$currentTarget.attr(name); },
/* 131 */ 				targetValue = readTargetAttr(self.targetAttr),
/* 132 */ 				data = self.target || targetValue || '';
/* 133 */ 
/* 134 */ 			/* Find which filter applies */
/* 135 */ 			var filter = filters[self.type]; /* check explicit type like {type: 'image'} */
/* 136 */ 
/* 137 */ 			/* check explicit type like data-featherlight="image" */
/* 138 */ 			if(!filter && data in filters) {
/* 139 */ 				filter = filters[data];
/* 140 */ 				data = self.target && targetValue;
/* 141 */ 			}
/* 142 */ 			data = data || readTargetAttr('href') || '';
/* 143 */ 
/* 144 */ 			/* check explicity type & content like {image: 'photo.jpg'} */
/* 145 */ 			if(!filter) {
/* 146 */ 				for(var filterName in filters) {
/* 147 */ 					if(self[filterName]) {
/* 148 */ 						filter = filters[filterName];
/* 149 */ 						data = self[filterName];
/* 150 */ 					}

/* featherlight.js */

/* 151 */ 				}
/* 152 */ 			}
/* 153 */ 
/* 154 */ 			/* otherwise it's implicit, run checks */
/* 155 */ 			if(!filter) {
/* 156 */ 				var target = data;
/* 157 */ 				data = null;
/* 158 */ 				$.each(self.contentFilters, function() {
/* 159 */ 					filter = filters[this];
/* 160 */ 					if(filter.test)  {
/* 161 */ 						data = filter.test(target);
/* 162 */ 					}
/* 163 */ 					if(!data && filter.regex && target.match && target.match(filter.regex)) {
/* 164 */ 						data = target;
/* 165 */ 					}
/* 166 */ 					return !data;
/* 167 */ 				});
/* 168 */ 				if(!data) {
/* 169 */ 					if('console' in window){ window.console.error('Featherlight: no content filter found ' + (target ? ' for "' + target + '"' : ' (no target specified)')); }
/* 170 */ 					return false;
/* 171 */ 				}
/* 172 */ 			}
/* 173 */ 			/* Process it */
/* 174 */ 			return filter.process.call(self, data);
/* 175 */ 		},
/* 176 */ 
/* 177 */ 		/* sets the content of $instance to $content */
/* 178 */ 		setContent: function($content){
/* 179 */ 			var self = this;
/* 180 */ 			/* we need a special class for the iframe */
/* 181 */ 			if($content.is('iframe') || $('iframe', $content).length > 0){
/* 182 */ 				self.$instance.addClass(self.namespace+'-iframe');
/* 183 */ 			}
/* 184 */ 
/* 185 */ 			self.$content = $content.addClass(self.namespace+'-inner');
/* 186 */ 
/* 187 */ 			/* replace content by appending to existing one before it is removed
/* 188 *| 			   this insures that featherlight-inner remain at the same relative
/* 189 *| 				 position to any other items added to featherlight-content */
/* 190 */ 			self.$instance.find('.'+self.namespace+'-inner')
/* 191 */ 				.slice(1).remove().end()			/* In the unexpected event where there are many inner elements, remove all but the first one */
/* 192 */ 				.replaceWith(self.$content);
/* 193 */ 
/* 194 */ 			return self;
/* 195 */ 		},
/* 196 */ 
/* 197 */ 		/* opens the lightbox. "this" contains $instance with the lightbox, and with the config */
/* 198 */ 		open: function(event){
/* 199 */ 			var self = this;
/* 200 */ 			if((!event || !event.isDefaultPrevented())

/* featherlight.js */

/* 201 */ 				&& self.beforeOpen(event) !== false) {
/* 202 */ 
/* 203 */ 				if(event){
/* 204 */ 					event.preventDefault();
/* 205 */ 				}
/* 206 */ 				var $content = self.getContent();
/* 207 */ 
/* 208 */ 				if($content){
/* 209 */ 					/* Add to opened registry */
/* 210 */ 					self.constructor._opened.add(self._openedCallback = function(klass, response){
/* 211 */ 						if ((self instanceof klass) &&
/* 212 */ 								(self.$instance.closest('body').length > 0)) {
/* 213 */ 							response.currentFeatherlight = self;
/* 214 */ 						}
/* 215 */ 					});
/* 216 */ 
/* 217 */ 					/* attach key handler to document if needed */
/* 218 */ 					if(!Featherlight._keyHandlerInstalled) {
/* 219 */ 						$(document).on('keyup.'+Featherlight.prototype.namespace, keyHelper);
/* 220 */ 						Featherlight._keyHandlerInstalled = true;
/* 221 */ 					}
/* 222 */ 
/* 223 */ 					self.$instance.appendTo(self.root).fadeIn(self.openSpeed);
/* 224 */ 					self.beforeContent(event);
/* 225 */ 
/* 226 */ 					/* Set content and show */
/* 227 */ 					$.when($content).done(function($content){
/* 228 */ 						self.setContent($content);
/* 229 */ 						self.afterContent(event);
/* 230 */ 						/* Call afterOpen after fadeIn is done */
/* 231 */ 						$.when(self.$instance.promise()).done(function(){
/* 232 */ 							self.afterOpen(event);
/* 233 */ 						});
/* 234 */ 					});
/* 235 */ 					return self;
/* 236 */ 				}
/* 237 */ 			}
/* 238 */ 			return false;
/* 239 */ 		},
/* 240 */ 
/* 241 */ 		/* closes the lightbox. "this" contains $instance with the lightbox, and with the config */
/* 242 */ 		close: function(event){
/* 243 */ 			var self = this;
/* 244 */ 			if(self.beforeClose(event) === false) {
/* 245 */ 				return false;
/* 246 */ 			}
/* 247 */ 			self.constructor._opened.remove(self._openedCallback);
/* 248 */ 
/* 249 */ 			/* attach key handler to document if no opened Featherlight */
/* 250 */ 			if(!Featherlight.current()) {

/* featherlight.js */

/* 251 */ 				$(document).off('keyup.'+Featherlight.namespace, keyHelper);
/* 252 */ 				self.constructor._keyHandlerInstalled = false;
/* 253 */ 			}
/* 254 */ 
/* 255 */ 			self.$instance.fadeOut(self.closeSpeed,function(){
/* 256 */ 				self.$instance.detach();
/* 257 */ 				self.afterClose(event);
/* 258 */ 			});
/* 259 */ 		},
/* 260 */ 
/* 261 */ 		/* Utility function to chain callbacks
/* 262 *| 		   [Warning: guru-level]
/* 263 *| 		   Used be extensions that want to let users specify callbacks but
/* 264 *| 		   also need themselves to use the callbacks.
/* 265 *| 		   The argument 'chain' has callback names as keys and function(super, event)
/* 266 *| 		   as values. That function is meant to call `super` at some point.
/* 267 *| 		*/
/* 268 */ 		chainCallbacks: function(chain) {
/* 269 */ 			for (var name in chain) {
/* 270 */ 				this[name] = $.proxy(chain[name], this, $.proxy(this[name], this));
/* 271 */ 			}
/* 272 */ 		}
/* 273 */ 	};
/* 274 */ 
/* 275 */ 	$.extend(Featherlight, {
/* 276 */ 		id: 0,                                    /* Used to id single featherlight instances */
/* 277 */ 		autoBind:       '[data-featherlight]',    /* Will automatically bind elements matching this selector. Clear or set before onReady */
/* 278 */ 		defaults:       Featherlight.prototype,   /* You can access and override all defaults using $.featherlight.defaults, which is just a synonym for $.featherlight.prototype */
/* 279 */ 		/* Contains the logic to determine content */
/* 280 */ 		contentFilters: {
/* 281 */ 			jquery: {
/* 282 */ 				regex: /^[#.]\w/,         /* Anything that starts with a class name or identifiers */
/* 283 */ 				test: function(elem)    { return elem instanceof $ && elem; },
/* 284 */ 				process: function(elem) { return $(elem).clone(true); }
/* 285 */ 			},
/* 286 */ 			image: {
/* 287 */ 				regex: /\.(png|jpg|jpeg|gif|tiff|bmp)(\?\S*)?$/i,
/* 288 */ 				process: function(url)  {
/* 289 */ 					var self = this,
/* 290 */ 						deferred = $.Deferred(),
/* 291 */ 						img = new Image();
/* 292 */ 					img.onload  = function() { deferred.resolve(
/* 293 */ 						$('<img src="'+url+'" alt="" class="'+self.namespace+'-image" />')
/* 294 */ 					); };
/* 295 */ 					img.onerror = function() { deferred.reject(); };
/* 296 */ 					img.src = url;
/* 297 */ 					return deferred.promise();
/* 298 */ 				}
/* 299 */ 			},
/* 300 */ 			html: {

/* featherlight.js */

/* 301 */ 				regex: /^\s*<[\w!][^<]*>/, /* Anything that starts with some kind of valid tag */
/* 302 */ 				process: function(html) { return $(html); }
/* 303 */ 			},
/* 304 */ 			ajax: {
/* 305 */ 				regex: /./,            /* At this point, any content is assumed to be an URL */
/* 306 */ 				process: function(url)  {
/* 307 */ 					var self = this,
/* 308 */ 						deferred = $.Deferred();
/* 309 */ 					/* we are using load so one can specify a target with: url.html #targetelement */
/* 310 */ 					var $container = $('<div></div>').load(url, function(response, status){
/* 311 */ 						if ( status !== "error" ) {
/* 312 */ 							deferred.resolve($container.contents());
/* 313 */ 						}
/* 314 */ 						deferred.fail();
/* 315 */ 					});
/* 316 */ 					return deferred.promise();
/* 317 */ 				}
/* 318 */ 			},
/* 319 */ 			text: {
/* 320 */ 				process: function(text) { return $('<div>', {text: text}); }
/* 321 */ 			}
/* 322 */ 		},
/* 323 */ 
/* 324 */ 		functionAttributes: ['beforeOpen', 'afterOpen', 'beforeContent', 'afterContent', 'beforeClose', 'afterClose'],
/* 325 */ 
/* 326 */ 		/*** class methods ***/
/* 327 */ 		/* read element's attributes starting with data-featherlight- */
/* 328 */ 		readElementConfig: function(element) {
/* 329 */ 			var Klass = this,
/* 330 */ 				config = {};
/* 331 */ 			if (element && element.attributes) {
/* 332 */ 					$.each(element.attributes, function(){
/* 333 */ 					var match = this.name.match(/^data-featherlight-(.*)/);
/* 334 */ 					if (match) {
/* 335 */ 						var val = this.value,
/* 336 */ 							name = $.camelCase(match[1]);
/* 337 */ 						if ($.inArray(name, Klass.functionAttributes) >= 0) {  /* jshint -W054 */
/* 338 */ 							val = new Function(val);                           /* jshint +W054 */
/* 339 */ 						} else {
/* 340 */ 							try { val = $.parseJSON(val); }
/* 341 */ 							catch(e) {}
/* 342 */ 						}
/* 343 */ 						config[name] = val;
/* 344 */ 					}
/* 345 */ 				});
/* 346 */ 			}
/* 347 */ 			return config;
/* 348 */ 		},
/* 349 */ 
/* 350 */ 		/* Used to create a Featherlight extension

/* featherlight.js */

/* 351 *| 		   [Warning: guru-level]
/* 352 *| 		   Creates the extension's prototype that in turn
/* 353 *| 		   inherits Featherlight's prototype.
/* 354 *| 		   Could be used to extend an extension too...
/* 355 *| 		   This is pretty high level wizardy, it comes pretty much straight
/* 356 *| 		   from CoffeeScript and won't teach you anything about Featherlight
/* 357 *| 		   as it's not really specific to this library.
/* 358 *| 		   My suggestion: move along and keep your sanity.
/* 359 *| 		*/
/* 360 */ 		extend: function(child, defaults) {
/* 361 */ 			/* Setup class hierarchy, adapted from CoffeeScript */
/* 362 */ 			var Ctor = function(){ this.constructor = child; };
/* 363 */ 			Ctor.prototype = this.prototype;
/* 364 */ 			child.prototype = new Ctor();
/* 365 */ 			child.__super__ = this.prototype;
/* 366 */ 			/* Copy class methods & attributes */
/* 367 */ 			$.extend(child, this, defaults);
/* 368 */ 			child.defaults = child.prototype;
/* 369 */ 			return child;
/* 370 */ 		},
/* 371 */ 
/* 372 */ 		attach: function($source, $content, config) {
/* 373 */ 			var Klass = this;
/* 374 */ 			if (typeof $content === 'object' && $content instanceof $ === false && !config) {
/* 375 */ 				config = $content;
/* 376 */ 				$content = undefined;
/* 377 */ 			}
/* 378 */ 			/* make a copy */
/* 379 */ 			config = $.extend({}, config);
/* 380 */ 
/* 381 */ 			/* Only for openTrigger and namespace... */
/* 382 */ 			var tempConfig = $.extend({}, Klass.defaults, Klass.readElementConfig($source[0]), config);
/* 383 */ 
/* 384 */ 			$source.on(tempConfig.openTrigger+'.'+tempConfig.namespace, tempConfig.filter, function(event) {
/* 385 */ 				/* ... since we might as well compute the config on the actual target */
/* 386 */ 				var elemConfig = $.extend({$source: $source, $currentTarget: $(this)}, Klass.readElementConfig($source[0]), Klass.readElementConfig(this), config);
/* 387 */ 				new Klass($content, elemConfig).open(event);
/* 388 */ 			});
/* 389 */ 			return $source;
/* 390 */ 		},
/* 391 */ 
/* 392 */ 		current: function() {
/* 393 */ 			var response = {};
/* 394 */ 			this._opened.fire(this, response);
/* 395 */ 			return response.currentFeatherlight;
/* 396 */ 		},
/* 397 */ 
/* 398 */ 		close: function() {
/* 399 */ 			var cur = this.current();
/* 400 */ 			if(cur) { cur.close(); }

/* featherlight.js */

/* 401 */ 		},
/* 402 */ 
/* 403 */ 		/* Does the auto binding on startup.
/* 404 *| 		   Meant only to be used by Featherlight and its extensions
/* 405 *| 		*/
/* 406 */ 		_onReady: function() {
/* 407 */ 			var Klass = this;
/* 408 */ 			if(Klass.autoBind){
/* 409 */ 				/* First, bind click on document, so it will work for items added dynamically */
/* 410 */ 				Klass.attach($(document), {filter: Klass.autoBind});
/* 411 */ 				/* Auto bound elements with attr-featherlight-filter won't work
/* 412 *| 				   (since we already used it to bind on document), so bind these
/* 413 *| 				   directly. We can't easily support dynamically added element with filters */
/* 414 */ 				$(Klass.autoBind).filter('[data-featherlight-filter]').each(function(){
/* 415 */ 					Klass.attach($(this));
/* 416 */ 				});
/* 417 */ 			}
/* 418 */ 		},
/* 419 */ 
/* 420 */ 		/* Featherlight uses the onKeyDown callback to intercept the escape key.
/* 421 *| 		   Private to Featherlight.
/* 422 *| 		*/
/* 423 */ 		_callbackChain: {
/* 424 */ 			onKeyDown: function(_super, event){
/* 425 */ 				if(27 === event.keyCode && this.closeOnEsc) {
/* 426 */ 					this.$instance.find('.'+this.namespace+'-close:first').click();
/* 427 */ 					event.preventDefault();
/* 428 */ 				} else {
/* 429 */ 					console.log('pass');
/* 430 */ 					return _super(event);
/* 431 */ 				}
/* 432 */ 			}
/* 433 */ 		},
/* 434 */ 
/* 435 */ 		_opened: $.Callbacks()
/* 436 */ 	});
/* 437 */ 
/* 438 */ 	$.featherlight = Featherlight;
/* 439 */ 
/* 440 */ 	/* bind jQuery elements to trigger featherlight */
/* 441 */ 	$.fn.featherlight = function($content, config) {
/* 442 */ 		return Featherlight.attach(this, $content, config);
/* 443 */ 	};
/* 444 */ 
/* 445 */ 	/* bind featherlight on ready if config autoBind is set */
/* 446 */ 	$(document).ready(function(){ Featherlight._onReady(); });
/* 447 */ }(jQuery));
/* 448 */ 

;
/* jquery.validate.min.js */

/* 1 */ /*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
/* 2 *|  * http://jqueryvalidation.org/
/* 3 *|  * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
/* 4 */ !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});

;
/* main.js */

/* 1   */ // EnzaHome main javaScript document
/* 2   */ var isTouchDevice = 'ontouchstart' in document.documentElement;
/* 3   */ 
/* 4   */ $(document).ready(function () {
/* 5   */ 		$(".mKoleksiyon").bind("click", function () {
/* 6   */ 			//console.log("koleksiyon click");
/* 7   */ 
/* 8   */ 			$("#subMenuContainer").slideToggle(500, function(){});
/* 9   */ 
/* 10  */ 			// $("#subMenuContainer > ul > li > a.item-link").click();
/* 11  */ 		});
/* 12  */ 		$("#subMenuContainer").mouseleave(function () {
/* 13  */ 		    $("#subMenuContainer").slideUp('slow');
/* 14  */ 		});
/* 15  */ 
/* 16  */ 		$(".toggleMenu").click(function () {
/* 17  */ 			//console.log("toggle click");
/* 18  */ 			$('.toggleMenu').toggleClass('opened', '');
/* 19  */ 			$("#nav .nav").height(screenHeight);
/* 20  */ 
/* 21  */ 			$("#nav .nav").slideToggle(500).removeClass('hide').addClass('show');
/* 22  */ 			$("#maximage .mc-image video").toggle();   // menü açıkken video gizle
/* 23  */ 			// jQuery("#searchBox").addClass('hide');  		// şimdilik tamamen gizlendi
/* 24  */ 
/* 25  */ 			$("#subMenuContainer > ul > li > a").addClass('item-link');
/* 26  */ 			// jQuery("#subMenuContainer > ul > li > ul").addClass('lastSubMenu');
/* 27  */ 			$("#wrapper").toggleClass( "hidden" );  	   //arkaplanı pasif hale getirmeliyiz..
/* 28  */ 
/* 29  */ 			$(".back-btn").click();
/* 30  */ 
/* 31  */ 
/* 32  */ 			$("#subMenuContainer > ul > li > a.item-link").each(function(){
/* 33  */ 				$(this).bind("click", function () {
/* 34  */ 					//console.log("a click", $(this).parent().find(".products"));
/* 35  */ 
/* 36  */ 					$("#nav > ul > li").hide();
/* 37  */ 					$("#nav > ul > li.collection-item").show();
/* 38  */ 
/* 39  */ 					$("#subMenuContainer > ul > li").hide();
/* 40  */ 
/* 41  */ 					$(this).parent().toggleClass("activeItem");
/* 42  */ 
/* 43  */ 					$(".back-btn").remove();
/* 44  */ 
/* 45  */ 					$(this).parent().css("height", $(window).height() - 40);
/* 46  */ 					$(this).parent().show();
/* 47  */ 
/* 48  */ 					$(this).parent().prepend('<a class="back-btn" href="javascript:;">ANA MENÜ</a>');
/* 49  */ 
/* 50  */ 					$(this).parent().find(".products").show(500);

/* main.js */

/* 51  */ 
/* 52  */ 					$(".back-btn").bind("click", function(){
/* 53  */ 						$(this).remove();
/* 54  */ 						$(".activeItem").css("height", "auto");
/* 55  */ 						$(".activeItem").removeClass("activeItem");
/* 56  */ 						$(".products").hide();
/* 57  */ 
/* 58  */ 						$("#nav > ul > li").show();
/* 59  */ 						$("#subMenuContainer > ul > li").show();
/* 60  */ 
/* 61  */ 						return false;
/* 62  */ 
/* 63  */ 					});
/* 64  */ 
/* 65  */ 					$(window).resize(function(){
/* 66  */ 						//check resize
/* 67  */ 						$(".activeItem").height($(window).height() - 40);
/* 68  */ 					});
/* 69  */ 
/* 70  */ 					$(window).trigger('resize');
/* 71  */ 
/* 72  */ 					//return false;
/* 73  */ 
/* 74  */ 				});
/* 75  */ 			});
/* 76  */ 		});
/* 77  */ 		// console.log("isTouchDevice: ", isTouchDevice);
/* 78  */ 		var scrollTop = $(window).scrollTop();
/* 79  */ 		if(scrollTop > 0){
/* 80  */ 			$(".categoryArea .fixedArea").addClass("sticky");
/* 81  */ 		}
/* 82  */ 		if(!isTouchDevice){
/* 83  */ 			$("body").addClass("no-touch")
/* 84  */ 		}
/* 85  */ 
/* 86  */ 		$(".scrollTopBtn").on("click", function(){
/* 87  */ 			$("html,body").animate({
/* 88  */ 				scrollTop: 0
/* 89  */ 			},600);
/* 90  */ 		})
/* 91  */ 
/* 92  */ 		$(".left-arrow-area").on("click", function(){
/* 93  */ 			categorySlider("left");
/* 94  */ 		});
/* 95  */ 
/* 96  */ 		$(".right-arrow-area").on("click", function(){
/* 97  */ 			categorySlider("right");
/* 98  */ 		});
/* 99  */ 
/* 100 */ 		$(".category-left-left .categoryScroller").perfectScrollbar();

/* main.js */

/* 101 */ 
/* 102 */ 		// main header sticky
/* 103 */ 		if ( $('#header').length != 0 ) {
/* 104 */ 			var stickyNavTop = $('#header').offset().top;
/* 105 */ 			var stickyNav = function(){
/* 106 */ 				var scrollTop = $(window).scrollTop();
/* 107 */ 
/* 108 */ 				if (scrollTop > stickyNavTop ) {
/* 109 */ 					$('#header').addClass('cloned');
/* 110 */ 					$('#header #enza-logo').addClass('cloned');
/* 111 */ 					$('#header #enza-logo.patch').css('display', 'none');
/* 112 */ 					$('#footer-band').addClass('cloned');
/* 113 */ 					$('#favorilerBox').addClass('cloned');
/* 114 */ 					$('#hiddenTitle').addClass('cloned');
/* 115 */ 					$('#hiddenSubTitle').addClass('cloned');
/* 116 */ 					$('#actuel-left-nav-container').addClass('cloned');
/* 117 */ 					$('#actuel-left-nav-controller').addClass('cloned');
/* 118 */ 					$('#actuel-content-title').addClass('cloned');
/* 119 */ 					$('#left-container').addClass('cloned');
/* 120 */ 					$('#corporate-content-title').addClass('cloned');
/* 121 */ 
/* 122 */ 				} else {
/* 123 */ 					$('#header').removeClass('cloned');
/* 124 */ 					$('#header #enza-logo').removeClass('cloned');
/* 125 */ 					$('#header #enza-logo.patch').css('display', 'block');
/* 126 */ 					$('#favorilerBox').removeClass('cloned');
/* 127 */ 					$('#footer-band').removeClass('cloned');
/* 128 */ 					$('#hiddenTitle').removeClass('cloned');
/* 129 */ 					$('#hiddenSubTitle').removeClass('cloned');
/* 130 */ 					$('#actuel-left-nav-container').removeClass('cloned');
/* 131 */ 					$('#actuel-left-nav-controller').removeClass('cloned');
/* 132 */ 					$('#actuel-content-title').removeClass('cloned');
/* 133 */ 					$('#left-container').removeClass('cloned');
/* 134 */ 					$('#corporate-content-title').removeClass('cloned');
/* 135 */ 				}
/* 136 */ 			};
/* 137 */ 			stickyNav();
/* 138 */ 			$(window).scroll(function() {
/* 139 */ 				stickyNav();
/* 140 */ 				var scrollTop = $(window).scrollTop();
/* 141 */ 				if(scrollTop > 0){
/* 142 */ 					$(".categoryArea .fixedArea").addClass("sticky");
/* 143 */ 				} else {
/* 144 */ 					$(".categoryArea .fixedArea").removeClass("sticky");
/* 145 */ 				}
/* 146 */ 				if(scrollTop > 200) {
/* 147 */ 					$(".scrollTopBtn").show();
/* 148 */ 				} else {
/* 149 */ 					$(".scrollTopBtn").hide();
/* 150 */ 				}

/* main.js */

/* 151 */ 			});
/* 152 */ 		}
/* 153 */ 
/* 154 */ 
/* 155 */ 		// koleksiyon detay header / sticky
/* 156 */ 		if ( $('#collection-header').length != 0 ) {
/* 157 */ 			var stickyColHeaderTop = 400;
/* 158 */ 			var stickyColHeader = function(){
/* 159 */ 				var scrollTop = $(window).scrollTop();
/* 160 */ 
/* 161 */ 				if ( scrollTop > stickyColHeaderTop ) {
/* 162 */ 					$('#collection-header').addClass('cloned');
/* 163 */ 				} else {
/* 164 */ 					$('#collection-header').removeClass('cloned');
/* 165 */ 				}
/* 166 */ 			};
/* 167 */ 			stickyColHeader();
/* 168 */ 			$(window).scroll(function() {
/* 169 */ 				stickyColHeader();
/* 170 */ 			});
/* 171 */ 		}
/* 172 */ 
/* 173 */ 
/* 174 */ 		// daha fazlası icin tiklayiniz / slide jump
/* 175 */ 		if ( $('.jumper').length != 0 ) {
/* 176 */ 			$('.jumper').on("click", function( e ) {
/* 177 */ 
/* 178 */ 				e.preventDefault();
/* 179 */ 
/* 180 */ 				$("body, html").animate({
/* 181 */ 					scrollTop: $( $(this).attr('href') ).offset().top
/* 182 */ 				}, 600);
/* 183 */ 
/* 184 */ 			});
/* 185 */ 		}
/* 186 */ 
/* 187 */ 
/* 188 */ 
/* 189 */ 		// Satış Noktaları sayfasında footer fixed olmalı
/* 190 */ 		if ( $('#sales-contacts').length != 0 ) {
/* 191 */ 				$('#footer-band').addClass('cloned');
/* 192 */ 		}
/* 193 */ 
/* 194 */ 
/* 195 */ 		// odeme secenekleri detay aç/kapa
/* 196 */ 		if ( $('.odemeSecenekleri').length != 0 ) {
/* 197 */ 			jQuery(".odemeSecenekleri").click(function () {
/* 198 */ 				jQuery(".odemeSecenekleriContent").slideToggle(500);
/* 199 */ 			});
/* 200 */ 		}

/* main.js */

/* 201 */ 
/* 202 */ 
/* 203 */ 
/* 204 */ 		// aktüel konular detay aç/kapa
/* 205 */ 		if ( $('#actuel-left-nav-container').length != 0 ) {
/* 206 */ 			jQuery("#hiddenSubTitle").click(function () {
/* 207 */ 				jQuery("#actuel-left-nav-container").slideToggle(500);
/* 208 */ 			});
/* 209 */ 		}
/* 210 */ 
/* 211 */ 
/* 212 */ 
/* 213 */ 		// kurumsal altbaşlıklar detay aç/kapa
/* 214 */ 		if ( $('#left-container').length != 0 ) {
/* 215 */ 			jQuery("#hiddenSubTitle").click(function () {
/* 216 */ 				jQuery("#left-container").slideToggle(500);
/* 217 */ 			});
/* 218 */ 		}
/* 219 */ 
/* 220 */ 
/* 221 */ 		// kurumsal Medya alt başlıklar aç/kapa
/* 222 */ 		if ( $('#left-container > #left-nav ul li > ul.level2').length != 0 ) {
/* 223 */ 			jQuery("#left-container > #left-nav ul li span.linkMedia").click(function () {
/* 224 */ 				jQuery('#left-container > #left-nav ul li > ul.level2').slideToggle(500);
/* 225 */ 			});
/* 226 */ 		}
/* 227 */ 
/* 228 */ 
/* 229 */ 		// anaslider dikey yukseklik
/* 230 */ 		if ( $('#home-slider').length != 0 ) {
/* 231 */ 			$("#maximage").each(function()
/* 232 */ 				{
/* 233 */ 					// var height = $("#home-slider").height();
/* 234 */ 					// console.log(bodyHeight);
/* 235 */ 					// $(this).css("height", height "px !important;");
/* 236 */ 				});
/* 237 */ 		}
/* 238 */ 
/* 239 */ 
/* 240 */ 		/* urun slider fullscreen kapatildi.*/
/* 241 */ 		// urun detay dikey yukseklik
/* 242 */ 		if ( $('#collection-slider').length != 0 ) {
/* 243 */ 			$("#collection-slider, #collection #maximage").each(function()
/* 244 */ 				{
/* 245 */ 					// var bodyHeight = $(window).height();
/* 246 */ 					// $(this).css("height", bodyHeight - 50);
/* 247 */ 				});
/* 248 */ 		}
/* 249 */ 
/* 250 */ 

/* main.js */

/* 251 */ 		/*	Yapi ve tasarim degistigi icin pasife alindi */
/* 252 */ 		/*  fırsatlar dikey yukseklik
/* 253 *| 		if ( $('.firstItem').length != 0 ) {
/* 254 *| 			$(".firstItem").each(function()
/* 255 *| 				{
/* 256 *| 					var bodyHeight = screen.height;
/* 257 *| 					$(this).css("height", bodyHeight - 380);
/* 258 *| 				});
/* 259 *| 		}
/* 260 *| 		*/
/* 261 */ 
/* 262 */ 
/* 263 */ 		// mobil - Fırsatlar > Kampanyalar aç/kapa
/* 264 */ 		if ( $('#opportunities-left-nav-container').length != 0 ) {
/* 265 */ 			jQuery("#hiddenSubTitle").click(function () {
/* 266 */ 				jQuery("#opportunities-left-nav-container").slideToggle(500);
/* 267 */ 			});
/* 268 */ 		}
/* 269 */ 
/* 270 */ 		// Fırsatlar > Kampanyalar > Detaylar butonu aç/kapa
/* 271 */ 		if ( $('#opportunities-content').length != 0 ) {
/* 272 */ 			jQuery("#opportunities-content .btnIncele").click(function () {
/* 273 */ 				jQuery(".text-hidden").slideToggle(500);
/* 274 */ 					if ($(this).text() == "DETAYLAR") {
/* 275 */ 						$(this).text("GİZLE");
/* 276 */ 					}
/* 277 */ 					else {
/* 278 */ 						$(this).text("DETAYLAR");
/* 279 */ 					}
/* 280 */ 			});
/* 281 */ 		}
/* 282 */ 
/* 283 */ 
/* 284 */ 		// paylaş aç/kapa
/* 285 */ 		if ( $('.paylas').length != 0 ) {
/* 286 */ 			jQuery(".paylas").click(function () {
/* 287 */ 				jQuery(".paylasContent").slideToggle(500);
/* 288 */ 			});
/* 289 */ 		}
/* 290 */ 
/* 291 */ 
/* 292 */ 		// ürün detayda adet seçimi sonrası seçili yap
/* 293 */ 		$('.selectNumber select').on('change', function() {
/* 294 */ 		  $(this).parents('.addpiece-box').addClass('selected');
/* 295 */ 			// seçim geri alınırsa selected yok
/* 296 */ 			if ( $(this).find("option:first-child").html() == "Seçiniz" ) {
/* 297 */ 			  $(this).parents('.addpiece-box').removeClass('selected');
/* 298 */ 			}
/* 299 */ 
/* 300 */ 		});

/* main.js */

/* 301 */ 
/* 302 */ 
/* 303 */ 
/* 304 */ 		// ürün detayda tavsiye edilen ürünler autoscroll width hesaplama
/* 305 */ 		if ( $('#collection-other-content').length != 0 ) {
/* 306 */ 				var otherCollectionSlideCount = $('#collection-other-content .scroll').children('.collection-box').length;
/* 307 */ 				var otherCollectionSlideWidth = $('#collection-other-content .scroll').children('.collection-box').width();
/* 308 */ 				var otherCollectionSlideTotalWidth = otherCollectionSlideCount * otherCollectionSlideWidth;
/* 309 */ 			$('#collection-other-content .scroll').css('width', otherCollectionSlideTotalWidth + (otherCollectionSlideCount * 45 ) );
/* 310 */ 			$('#collection-other-content .scroll').perfectScrollbar();
/* 311 */ 		}
/* 312 */ 
/* 313 */ 
/* 314 */ 		// tablet ve mobilde ekrana göre menuHover
/* 315 */ 		screenWidth = $(window).width();
/* 316 */ 		screenHeight = $(window).height();
/* 317 */ 		if(screenWidth < 820){
/* 318 */ 			$("#searchBox h3 br").remove();
/* 319 */ 		}
/* 320 */ 		if(screenWidth > 1024){
/* 321 */ 			var thetimeout;
/* 322 */ 			/*
/* 323 *| 		    $(".collection-item").mouseover(function() {
/* 324 *| 
/* 325 *| 		    	//lock body
/* 326 *| 				// $("body").css("overflow", "hidden");
/* 327 *| 
/* 328 *| 
/* 329 *| 		        clearTimeout(thetimeout);
/* 330 *| 		        $("#subMenuContainer").slideDown();
/* 331 *| 		        $("#enza-logo").css("display", "block");
/* 332 *| 				$("#enza-logo").addClass('org');   // logoyu siyah versiyona dönüştür
/* 333 *| 		    });
/* 334 *| 		    $(".collection-item").mouseleave(function() {
/* 335 *| 		        thetimeout = setTimeout(function() {
/* 336 *| 		        	//unlock body
/* 337 *| 					// $("body").css("overflow", "auto");
/* 338 *| 
/* 339 *| 		            $("#subMenuContainer").slideUp();
/* 340 *| 					$("#enza-logo").removeClass('org');   // logoyu beyaz versiyona dönüştür
/* 341 *| 					$("#enza-logo").removeAttr("style");
/* 342 *| 		        }, 500);
/* 343 *| 		    });
/* 344 *| 			*/
/* 345 */ 
/* 346 */ 		// detay sayfalarda logoyu siyah versiyona dönüştür
/* 347 */ 		if ( $('#wrapper > .patch').length != 0 ) {
/* 348 */ 				$("#enza-logo").addClass('black');
/* 349 */ 		}
/* 350 */ 		// Runing scroll on hover on the categories

/* main.js */

/* 351 */ 		$("#subMenuContainer ul li").each(function(){
/* 352 */ 			$(this).hover(
/* 353 */ 				function(element) {
/* 354 */ 
/* 355 */ 					$(".catLink:gt("+$(this).index()+")").removeAttr("style");
/* 356 */ 					$(".catLink:lt("+$(this).index()+")").removeAttr("style");
/* 357 */ 
/* 358 */ 					$(".scroller:gt("+$(this).index()+")").css("display","none");
/* 359 */ 					$(".scroller:lt("+$(this).index()+")").css("display","none");
/* 360 */ 
/* 361 */ 					$(".scroller:eq("+$(this).index()+")").perfectScrollbar();
/* 362 */ 
/* 363 */ 				}
/* 364 */ 			)
/* 365 */ 		});
/* 366 */ 
/* 367 */ 			$(".scroller li").each(function(){
/* 368 */ 				$(this).hover(
/* 369 */ 					function(){
/* 370 */ 						var _target_index = $(this).index();
/* 371 */ 						//find product holder
/* 372 */ 						var _product_holder = $(this).parent().next();
/* 373 */ 						_product_holder.find("li").eq(_target_index).show();
/* 374 */ 
/* 375 */ 					},function(){
/* 376 */ 						var _target_index = $(this).index();
/* 377 */ 						//find product holder
/* 378 */ 						var _product_holder = $(this).parent().next();
/* 379 */ 						_product_holder.find("li").eq(_target_index).hide();
/* 380 */ 					}
/* 381 */ 				)
/* 382 */ 			});
/* 383 */ 
/* 384 */ 
/* 385 */ 			$('.scroller').each(function(){
/* 386 */ 
/* 387 */ 				$(this).mouseleave(function(element){
/* 388 */ 					//$(this).scrollTop(0);
/* 389 */ 				    $(this).css("display", "block");
/* 390 */ 				    $(this).prev().css("color", "#000");
/* 391 */ 				});
/* 392 */ 
/* 393 */ 				//mouse move scroll
/* 394 */ 				$(this).mousemove(function(e) {
/* 395 */ 		            var offset = $(this).offset();
/* 396 */ 		            var _mouse_position = (e.pageY - offset.top);
/* 397 */ 
/* 398 */ 		            var _holder_height = $(this).height();
/* 399 */ 		            var _scroll_value = _holder_height * .1;
/* 400 */ 

/* main.js */

/* 401 */ 		            var _scroll_max_value = 20;
/* 402 */ 		            var _scroll_height = $("#subMenuContainer > ul").height();
/* 403 */ 
/* 404 */ 					//console.log("_scroll_height:" , _scroll_height );
/* 405 */ 
/* 406 */ 		            if(_scroll_value >= _scroll_max_value){
/* 407 */ 		            	_scroll_value = 10;
/* 408 */ 		            }
/* 409 */ 		            if($(this).parent().parent().parent().parent().hasClass('collection-item')){
/* 410 */ 		            	_scroll_value = _scroll_value * .2;
/* 411 */ 		            	speed2 = 1;
/* 412 */ 		            	speed3 = 1;
/* 413 */ 		            }else{
/* 414 */ 		            	speed2 = 2;
/* 415 */ 		            	speed3 = 3;
/* 416 */ 		            }
/* 417 */ 
/* 418 */ 		            if(_holder_height >= _scroll_height){
/* 419 */ 		            	//console.log("Scroll:" , _mouse_position );
/* 420 */ 
/* 421 */ 		            	var _holder_position = $(this).scrollTop();
/* 422 */ 
/* 423 */ 		            	if(_mouse_position > _scroll_height - 40){
/* 424 */ 		            		// console.log("scroll down");
/* 425 */ 		            		$(this).scrollTop(_holder_position + _scroll_value);
/* 426 */ 		            	}
/* 427 */ 
/* 428 */ 		            	if(_mouse_position < 50){
/* 429 */ 		            		// console.log("scroll up");
/* 430 */ 		            		$(this).scrollTop(_holder_position - _scroll_value);
/* 431 */ 		            	}
/* 432 */ 
/* 433 */ 		            	// 2xfast move
/* 434 */ 		            	if(_mouse_position > _scroll_height - 20){
/* 435 */ 		            		$(this).scrollTop(_holder_position + (_scroll_value * speed2));
/* 436 */ 		            	}
/* 437 */ 
/* 438 */ 		            	if(_mouse_position < 15){
/* 439 */ 		            		$(this).scrollTop(_holder_position - (_scroll_value * speed2));
/* 440 */ 		            	}
/* 441 */ 
/* 442 */ 		            	// 3x fast move
/* 443 */ 		            	if(_mouse_position > _scroll_height - 10){
/* 444 */ 		            		$(this).scrollTop(_holder_position + (_scroll_value * speed2));
/* 445 */ 		            	}
/* 446 */ 
/* 447 */ 		            	if(_mouse_position < 5){
/* 448 */ 		            		$(this).scrollTop(_holder_position - (_scroll_value * speed3));
/* 449 */ 		            	}
/* 450 */ 

/* main.js */

/* 451 */ 
/* 452 */ 		            	// console.log( _scroll_value + " : " + _holder_position );
/* 453 */ 
/* 454 */ 		            };
/* 455 */ 
/* 456 */ 		      	});
/* 457 */ 			});
/* 458 */ 
/* 459 */ 		}else{
/* 460 */ 
/* 461 */ 
/* 462 */ 			// ürün detayda tavsiye edilen ürünler autoscroll ayarlama
/* 463 */ 			jQuery('#collection-other-content .scroll').width('auto');
/* 464 */ 
/* 465 */ 			$("#nav .nav").addClass('hide');
/* 466 */ 
/* 467 */ 
/* 468 */ 
/* 469 */ 
/* 470 */ 		}
/* 471 */ 
/* 472 */ 
/* 473 */ 		// $(".products li").each(function(){
/* 474 */ 		// 	$(this).hover(
/* 475 */ 		// 		function(){
/* 476 */ 		// 			var _target_index = $(this).index();
/* 477 */ 		// 			//find product holder
/* 478 */ 		// 			var _scroller_holder = $(this).parent().prev();
/* 479 */ 		// 			_scroller_holder.find("li").eq(_target_index).addClass("active");
/* 480 */ 		// 		},
/* 481 */ 		// 		function(){
/* 482 */ 		// 			var _target_index = $(this).index();
/* 483 */ 		// 			//find product holder
/* 484 */ 		// 			var _scroller_holder = $(this).parent().prev();
/* 485 */ 		// 			_scroller_holder.find("li").eq(_target_index).removeClass("active");
/* 486 */ 		// 		}
/* 487 */ 		// 	)
/* 488 */ 		// });
/* 489 */ 
/* 490 */ 		// $(".scroller").each(function(){
/* 491 */ 		// 	$(this).mCustomScrollbar({
/* 492 */ 		// 		theme:"dark"
/* 493 */ 		// 	});
/* 494 */ 		// });
/* 495 */ 
/* 496 */ 
/* 497 */ 
/* 498 */ 
/* 499 */ 	// left-nav active link selected
/* 500 */ 	if ( $('#corporate #left-nav').length != 0 ) {

/* main.js */

/* 501 */ 			var pathname = $(location).attr('pathname');
/* 502 */ 			var lastSlash = pathname.lastIndexOf("/");
/* 503 */ 
/* 504 */ 			$('#left-nav ul li > a[href*='+ pathname.substring(lastSlash+1) +']').each(function() {
/* 505 */ 				$(this).addClass('active');
/* 506 */ 			});
/* 507 */ 	}
/* 508 */ 	if ( $('#actuel #left-nav').length != 0 ) {
/* 509 */ 			var pathname = $(location).attr('pathname');
/* 510 */ 			var lastSlash = pathname.lastIndexOf("/");
/* 511 */ 			if(pathname.substring(lastSlash+1) == 'blog'){
/* 512 */ 				$('#actuel #left-nav ul li:eq(0) a').addClass('active');
/* 513 */ 			} else{
/* 514 */ 				$('#left-nav ul li > a[href*='+ pathname.substring(lastSlash+1) +']').each(function() {
/* 515 */ 					$(this).addClass('active');
/* 516 */ 				});
/* 517 */ 			}
/* 518 */ 			
/* 519 */ 	}
/* 520 */ 	if ( $('#opportunities-left-nav-container').length != 0 ) {
/* 521 */ 			var pathname = $(location).attr('pathname');
/* 522 */ 			var lastSlash = pathname.lastIndexOf("/");
/* 523 */ 
/* 524 */ 			$('#opportunities-left-content > a[href*='+ pathname.substring(lastSlash+1) +']').each(function() {
/* 525 */ 				$(this).addClass('active');
/* 526 */ 			});
/* 527 */ 	}
/* 528 */ 
/* 529 */ 
/* 530 */ 	// dilseçimi mobilde dokunmayla aç/kapa
/* 531 */ 	if ( $('#lang').length != 0 ) {
/* 532 */ 		jQuery("#lang .langAct").click(function () {
/* 533 */ 			jQuery(".langOther").slideToggle(500);
/* 534 */ 		});
/* 535 */ 	}
/* 536 */ 
/* 537 */ 	//	shareWithYourFriends
/* 538 */ 	if ( $('#emailShareLink').length != 0 ) {
/* 539 */ 			var sharedLinkPage = "mailto:?subject=Hadi Enza Home'a&body=Yemek odasından genç odasına, yatak çeşitlerinden, tekstil ve aksesuara kadar birbirinden geniş ürün yelpazesiyle hayatı şekillendiren Enza Home! İncelemek için :" + $(location).attr('href');
/* 540 */ 			$('#emailShareLink').attr("href", sharedLinkPage);
/* 541 */ 	}
/* 542 */ 
/* 543 */ 
/* 544 */ 	// ürün favorilere ekle butonu
/* 545 */ 	jQuery(".favoriler").click(function () {
/* 546 */ 		jQuery("#favorilerBox").show();
/* 547 */ 	});
/* 548 */ 
/* 549 */ 	// ürün favoriler box
/* 550 */ 	jQuery("#favorilerBox .favorilerTitle").click(function () {

/* main.js */

/* 551 */ 		jQuery("#favorilerBox .favorilerContainer").slideToggle(500);
/* 552 */ 	});
/* 553 */ 
/* 554 */ 
/* 555 */ 	// musteri memnuniyeti anketi
/* 556 */ 	if($(".satisfaction-form").length > 0){
/* 557 */ 		var error_holder = $(".validation-error-text");
/* 558 */ 
/* 559 */ 		$(".validation-success-text").hide();
/* 560 */ 
/* 561 */ 		$(".satisfaction-form").validate({
/* 562 */ 			rules: {
/* 563 */ 				question1: "required",
/* 564 */ 				question2: "required"
/* 565 */ 			},
/* 566 */ 			errorContainer: error_holder,
/* 567 */ 			errorPlacement: function(error, element) {},
/* 568 */ 			highlight: function(element, errorClass, validClass) {
/* 569 */ 
/* 570 */ 				$(element).each(function(){
/* 571 */ 					$(this).addClass(errorClass);
/* 572 */ 					// element is radio?
/* 573 */ 					if($(this).is("input[type='radio']")){
/* 574 */ 						$(this).parent().parent().addClass("error");
/* 575 */ 					}
/* 576 */ 					// element is checkbox?
/* 577 */ 					if($(this).is("input[type='checkbox']")){
/* 578 */ 						$(this).parent().parent().addClass("error");
/* 579 */ 					}
/* 580 */ 				});
/* 581 */ 			},
/* 582 */ 			unhighlight: function(element, errorClass, validClass) {
/* 583 */ 				// $(element).removeClass(errorClass).addClass(validClass);
/* 584 */ 
/* 585 */ 				$(element).each(function(){
/* 586 */ 					$(this).removeClass(errorClass);
/* 587 */ 					// element is radio?
/* 588 */ 					if($(this).is("input[type='radio']")){
/* 589 */ 						$(this).parent().parent().removeClass("error");
/* 590 */ 					}
/* 591 */ 					// element is checkbox?
/* 592 */ 					if($(this).is("input[type='checkbox']")){
/* 593 */ 						$(this).parent().parent().removeClass("error");
/* 594 */ 					}
/* 595 */ 				});
/* 596 */ 
/* 597 */ 			},
/* 598 */ 		});
/* 599 */ 	}
/* 600 */ 

/* main.js */

/* 601 */ });
/* 602 */ 
/* 603 */ function categorySlider(type){
/* 604 */ 
/* 605 */ 	var active = $(".slide-left.active").index();
/* 606 */ 	var count = $(".slide-left").size();
/* 607 */ 
/* 608 */ 	if(type == 'left') {
/* 609 */ 		var nextIndex = (active - 1) % count;
/* 610 */ 	} else {
/* 611 */ 		var nextIndex = (active + 1) % count;
/* 612 */ 	}
/* 613 */ 
/* 614 */ 	$(".slide-left").eq(nextIndex).fadeIn(500, function(){
/* 615 */ 		$(".slide-left").eq(nextIndex).addClass("active");
/* 616 */ 	});
/* 617 */ 
/* 618 */ 	$(".slide-left").eq(active).fadeOut(500, function(){
/* 619 */ 		$(".slide-left").eq(active).removeClass("active");
/* 620 */ 	});
/* 621 */ 
/* 622 */ 	$(".down-right img").eq(nextIndex).fadeIn(1500, function(){
/* 623 */ 		$(".down-right img").eq(nextIndex).addClass("active");
/* 624 */ 	});
/* 625 */ 
/* 626 */ 	$(".down-right img").eq(active).fadeOut(1500, function(){
/* 627 */ 		$(".down-right img").eq(active).removeClass("active");
/* 628 */ 	});
/* 629 */ }
/* 630 */ 

;
/* default.js */

/* 1   */ function visibleSuperElements(){
/* 2   */ 	if($(window).scrollTop() > 275){
/* 3   */ 		$("#home-supers .item").css({
/* 4   */ 			opacity: 1,
/* 5   */ 			marginTop: 0
/* 6   */ 		});
/* 7   */ 	} else {
/* 8   */ 		$("#home-supers .item").css({
/* 9   */ 			opacity: 0,
/* 10  */ 			marginTop: 40
/* 11  */ 		});
/* 12  */ 	}
/* 13  */ 	if($(window).scrollTop() > 500){
/* 14  */ 
/* 15  */ 		$("#home-supers .item .text .title").css({
/* 16  */ 			opacity: 1,
/* 17  */ 			marginTop: 15
/* 18  */ 		})
/* 19  */ 		$("#home-supers .item .text .desc").css({
/* 20  */ 			opacity: 1,
/* 21  */ 			marginTop: 15
/* 22  */ 		});
/* 23  */ 		$("#home-supers .item .text a").css({
/* 24  */ 			opacity: 1,
/* 25  */ 			marginTop: 0
/* 26  */ 		});
/* 27  */ 	} else {
/* 28  */ 		$("#home-supers .item .text .title").css({
/* 29  */ 			opacity: 0,
/* 30  */ 			marginTop: 50
/* 31  */ 		})
/* 32  */ 		$("#home-supers .item .text .desc").css({
/* 33  */ 			opacity: 0,
/* 34  */ 			marginTop: 50
/* 35  */ 		});
/* 36  */ 		$("#home-supers .item .text a").css({
/* 37  */ 			opacity: 0,
/* 38  */ 			marginTop: 30
/* 39  */ 		});
/* 40  */ 	}
/* 41  */ 	$("#home-supers .item .text.custom a").css({
/* 42  */ 		opacity: 1,
/* 43  */ 		marginTop: 15
/* 44  */ 	});
/* 45  */ }
/* 46  */ 
/* 47  */ $(document).ready(function() {
/* 48  */ 
/* 49  */ 	visibleSuperElements();
/* 50  */ 	$(window).on("scroll", function(){

/* default.js */

/* 51  */ 		visibleSuperElements();
/* 52  */ 	});
/* 53  */ 
/* 54  */ 	$( "#datepicker" ).datepicker({
/* 55  */ 		dateFormat: "yy-mm-dd",
/* 56  */ 		changeYear: true,
/* 57  */ 		yearRange: "c-60:c+10",
/* 58  */ 		maxDate: "-12y"
/* 59  */ 	});
/* 60  */ 	$.datepicker.setDefaults($.datepicker.regional[site_locale]);
/* 61  */ 	$('#contactCountries').change(function() {
/* 62  */ 	  $('#contactCities').empty();
/* 63  */ 	  $.ajax({
/* 64  */ 			type: 'POST',
/* 65  */ 	    url: base_url + "/contact/get-cities",
/* 66  */ 	    data: 'country_id=' + $(this).val(),
/* 67  */ 			success: function(data) {
/* 68  */ 				console.log(data);
/* 69  */ 	      $('#contactCities').append('<option value="">' + lang_sehir + '</option>');
/* 70  */ 	      data = $.parseJSON(data);
/* 71  */ 	      $.each(data, function(key, value) {
/* 72  */ 	        $('#contactCities').append('<option value="' + value.id + '">' + value.name + '</option>');
/* 73  */ 	      });
/* 74  */ 	  	}
/* 75  */ 	  });
/* 76  */ 	});
/* 77  */ 
/* 78  */ 	$(document).on('submit', '#eBulletinForm', function(e) {
/* 79  */     e.preventDefault();
/* 80  */     $.ajax({
/* 81  */       type: 'POST',
/* 82  */       url: $(this).attr("action"),
/* 83  */       data: $(this).serialize(),
/* 84  */       success: function(data) {
/* 85  */         var oData = $.parseJSON(data);
/* 86  */         if(oData.status == 1) {
/* 87  */           $(".formSubmit").prop('disabled', true);
/* 88  */ 					$("#eBulletinForm").fadeOut(500, function(){
/* 89  */ 						$(this).remove();
/* 90  */ 					});
/* 91  */         }
/* 92  */         $(".formResult").html(oData.message);
/* 93  */       }
/* 94  */     });
/* 95  */   });
/* 96  */ 	/*
/* 97  *| 	if($('.home-slider').length > 0){
/* 98  *| 		 $('#maximage a, a.btnIncele').css("display","none");
/* 99  *| 	}
/* 100 *| 	*/

/* default.js */

/* 101 */   var menuBarCount = $(".menuBar ul li").size();
/* 102 */ 
/* 103 */   var menuBarItemWidth = 100 / menuBarCount;
/* 104 */   $(".menuBar ul li").css("width", menuBarItemWidth + "%");
/* 105 */ 
/* 106 */   $(".category .slider-in").fadeIn(1500);
/* 107 */ 
/* 108 */   $('.productAmount').change(function( event, param ) {
/* 109 */     var productAmount = $(this).val();
/* 110 */     $.ajax({
/* 111 */       url: base_url + "/product/calculator",
/* 112 */       data: 'productAmount=' + productAmount + '&productURL=' + product_url
/* 113 */     }).done(function(data) {
/* 114 */       data = $.parseJSON(data);
/* 115 */       console.log(data);
/* 116 */ 
/* 117 */       $('#totalAmount').html(data.totalAmount);
/* 118 */       $('#totalPrice').html(data.totalPrice);
/* 119 */ 			$("#totalCachePrice").html(data.totalCachePrice);
/* 120 */ 
/* 121 */       $('#installmentYapiKredi').html(data.installments.nine);
/* 122 */       $('#installmentOthers').html(data.installments.six);
/* 123 */ 
/* 124 */       if(data.productGroupDiscountedLimit > 0) {
/* 125 */ 
/* 126 */         if(data.totalPriceFloat > data.productGroupDiscountedLimit) {
/* 127 */           if(product_url != '/Yatak-Odasi/Lina-Yatak-Odasi' && product_url != '/Yatak-Odasi/Polka-Yatak-Odasi' && product_url != '/Yatak-Odasi/Santiago-Yatak-Odasi'){
/* 128 */             $(".toplamFiyat").hide();
/* 129 */             $(".newPriceContent").hide();
/* 130 */           }
/* 131 */         } else {
/* 132 */           $(".toplamFiyat").show();
/* 133 */           $(".newPriceContent").show();
/* 134 */         }
/* 135 */ 
/* 136 */         $(".productGroupDiscountedPrice").show();
/* 137 */         $(".productGroupDiscountedTotalPrice").show();
/* 138 */         $(".productGroupDiscountedTotalPrice #totalGroupPrice").html(data.totalGroupPrice);
/* 139 */       } else {
/* 140 */         $(".productGroupDiscountedPrice").hide();
/* 141 */         $(".productGroupDiscountedTotalPrice").hide();
/* 142 */       }
/* 143 */ 
/* 144 */       $('#seciliUrunler').empty();
/* 145 */       $.each(data.products, function(key, value) {
/* 146 */         if (value.amount >= 1) {
/* 147 */           $('#seciliUrunler').append('<div>' + value.amount + ' ' + lang_adet + ' ' + value.name + '</div>');
/* 148 */         }
/* 149 */       });
/* 150 */     });

/* default.js */

/* 151 */   });
/* 152 */ 
/* 153 */   $('#sIl').change(function() {
/* 154 */     $('#sIlce').empty();
/* 155 */ 
/* 156 */     var cityCode = $(this).val();
/* 157 */ 
/* 158 */     $.ajax({
/* 159 */       url: base_url + "/get-location",
/* 160 */       data: 'type=districts&cityCode=' + cityCode
/* 161 */     }).done(function(data) {
/* 162 */       data = $.parseJSON(data);
/* 163 */ 
/* 164 */       $.each(data, function(key, value) {
/* 165 */         $('#sIlce').append('<option value="' + value.districtName + '">' + value.districtName + '</option>');
/* 166 */       });
/* 167 */     });
/* 168 */   });
/* 169 */ 
/* 170 */   $('#salesPointCountries').change(function() {
/* 171 */     $('#salesPointCities').empty();
/* 172 */ 
/* 173 */     var countryName = encodeURIComponent($(this).val());
/* 174 */ 
/* 175 */     $.ajax({
/* 176 */       url: base_url + "/get-location",
/* 177 */       data: 'type=sales-point-cities&countryName=' + countryName
/* 178 */     }).done(function(data) {
/* 179 */       $('#salesPointCities').append('<option value="">' + lang_sehir + '</option>');
/* 180 */       data = $.parseJSON(data);
/* 181 */       $.each(data, function(key, value) {
/* 182 */         $('#salesPointCities').append('<option value="' + value.salesPointCity + '">' + value.salesPointCity + '</option>');
/* 183 */       });
/* 184 */     });
/* 185 */   });
/* 186 */ 
/* 187 */   $('#salesPointCities').change(function() {
/* 188 */     $('#salesPointDistricts').empty();
/* 189 */ 
/* 190 */     var cityName = encodeURIComponent($(this).val());
/* 191 */ 
/* 192 */     $.ajax({
/* 193 */       url: base_url + "/get-location",
/* 194 */       data: 'type=sales-point-districts&cityName=' + cityName
/* 195 */     }).done(function(data) {
/* 196 */ 			data = $.parseJSON(data);
/* 197 */ 			console.log(data);
/* 198 */ 			if(data[0].salesPointDistrict == ""){
/* 199 */ 				$('#salesPointDistricts').append('<option value="ALL">' + lang_tum_ilceler + '</option>');
/* 200 */ 				$('#salesPointDistricts').trigger("change");

/* default.js */

/* 201 */ 				$('#salesPointDistricts').hide();
/* 202 */ 			} else {
/* 203 */ 				$('#salesPointDistricts').show();
/* 204 */ 	      $('#salesPointDistricts').append('<option value="">' + lang_ilce + '</option>');
/* 205 */ 	      $('#salesPointDistricts').append('<option value="ALL">' + lang_tum_ilceler + '</option>');
/* 206 */ 
/* 207 */ 	      $.each(data, function(key, value) {
/* 208 */ 	        $('#salesPointDistricts').append('<option value="' + value.salesPointDistrict + '">' + value.salesPointDistrict + '</option>');
/* 209 */ 	      });
/* 210 */ 			}
/* 211 */     });
/* 212 */   });
/* 213 */ 
/* 214 */   $('#salesPointDistricts').change(function() {
/* 215 */     $('#salesPointResults').empty();
/* 216 */ 
/* 217 */     var cityName = encodeURIComponent($('#salesPointCities').val());
/* 218 */     var districtName = encodeURIComponent($(this).val());
/* 219 */ 
/* 220 */     $.ajax({
/* 221 */       url: base_url + "/get-location",
/* 222 */       data: 'type=sales-point&cityName=' + cityName + '&districtName=' + districtName
/* 223 */     }).done(function(data) {
/* 224 */       data = $.parseJSON(data);
/* 225 */ 
/* 226 */       $.each(data, function(key, value) {
/* 227 */         var salesPointPhoneAreaCode = "";
/* 228 */         if(value.salesPointPhoneAreaCode > 0) {
/* 229 */           salesPointPhoneAreaCode = '(' + value.salesPointPhoneAreaCode + ')';
/* 230 */         }
/* 231 */         $('#salesPointResults').append('<div id="sales-search"><h3>' + value.salesPointName + '</h3><p>' + value.salesPointAddress + '</p><p class="faNumber">' + salesPointPhoneAreaCode + value.salesPointPhoneNumber + '</p><a href="https://maps.google.com/maps?q=' + value.salesPointCoordinateLatitude + ',' + value.salesPointCoordinateLongitude + '" target="_blank" class="haritadaGoster">' + lang_google_mapste_goster + '</a></div>');
/* 232 */       });
/* 233 */     });
/* 234 */   });
/* 235 */ 
/* 236 */   $('.favorilerContainer').empty();
/* 237 */   $.ajax({
/* 238 */     url: base_url + "/product/favorite",
/* 239 */     data: 'type=list'
/* 240 */   }).done(function(data) {
/* 241 */     data = $.parseJSON(data);
/* 242 */     if (data.response) {
/* 243 */       $.each(data.response, function(key, value) {
/* 244 */         var displayTitle;
/* 245 */         if (value.productGroupCode) {
/* 246 */           displayTitle = value.productGroupName;
/* 247 */         } else {
/* 248 */           displayTitle = value.productBrandName + ' - ' + value.productCategoryName;
/* 249 */         }
/* 250 */         $('.favorilerContainer').append('<div class="box"><span data-product-id="' + value.spProductId + '" class="close closeFavorite">X</span><a href="' + base_url + '/' + value.productURL + '"><img src="' + base_url + '/' + value.productMenuThumbnailImage + '" /><br />' + displayTitle + '</a></div>');

/* default.js */

/* 251 */       });
/* 252 */       $('.favorilerContainer').append('<div class="clear"></div>');
/* 253 */ 
/* 254 */       jQuery("#favorilerBox").show();
/* 255 */       jQuery("#favorilerBox .favorilerContainer").toggle();
/* 256 */     }
/* 257 */   });
/* 258 */ 
/* 259 */   $('#addFavorite').click(function() {
/* 260 */     $('.favorilerContainer').empty();
/* 261 */ 
/* 262 */     var productId = $(this).attr('data-product-id');
/* 263 */ 
/* 264 */     $.ajax({
/* 265 */       url: base_url + "/product/favorite",
/* 266 */       data: 'type=add&productId=' + productId
/* 267 */     }).done(function(data) {
/* 268 */       data = $.parseJSON(data);
/* 269 */       if (data.response) {
/* 270 */         $.each(data.response, function(key, value) {
/* 271 */           var displayTitle;
/* 272 */           if (value.productGroupCode) {
/* 273 */             displayTitle = value.productGroupName;
/* 274 */           } else {
/* 275 */             displayTitle = value.productBrandName + ' - ' + value.productCategoryName;
/* 276 */           }
/* 277 */           $('.favorilerContainer').append('<div class="box"><span data-product-id="' + value.spProductId + '" class="close closeFavorite">X</span><a href="' + base_url + '/' + value.productURL + '"><img src="' + base_url + '/' + value.productMenuThumbnailImage + '" /><br />' + displayTitle + '</a></div>');
/* 278 */         });
/* 279 */         $('.favorilerContainer').append('<div class="clear"></div>');
/* 280 */ 
/* 281 */         jQuery("#favorilerBox .favorilerContainer").show();
/* 282 */       }
/* 283 */     });
/* 284 */   });
/* 285 */ 
/* 286 */   $('.closeFavorite').live('click', function() {
/* 287 */     $('.favorilerContainer').empty();
/* 288 */ 
/* 289 */     var productId = $(this).attr('data-product-id');
/* 290 */ 
/* 291 */     $.ajax({
/* 292 */       url: base_url + "/product/favorite",
/* 293 */       data: 'type=remove&productId=' + productId
/* 294 */     }).done(function(data) {
/* 295 */       data = $.parseJSON(data);
/* 296 */       if (data.response) {
/* 297 */         $.each(data.response, function(key, value) {
/* 298 */           var displayTitle;
/* 299 */           if (value.productGroupCode) {
/* 300 */             displayTitle = value.productGroupName;

/* default.js */

/* 301 */           } else {
/* 302 */             displayTitle = value.productBrandName + ' - ' + value.productCategoryName;
/* 303 */           }
/* 304 */           $('.favorilerContainer').append('<div class="box"><span data-product-id="' + value.spProductId + '" class="close closeFavorite">X</span><a href="' + base_url + '/' + value.productURL + '"><img src="' + base_url + '/' + value.productMenuThumbnailImage + '" /><br />' + displayTitle + '</a></div>');
/* 305 */         });
/* 306 */       }
/* 307 */       $('.favorilerContainer').append('<div class="clear"></div>');
/* 308 */     });
/* 309 */   });
/* 310 */ 
/* 311 */   $("#im_slickSlider div.slick-slide").live("click", function(e){
/* 312 */     if(!$(this).children().hasClass("noclick")){
/* 313 */       var link = $(this).find(".btnIncele").attr("href");
/* 314 */       var target = $(this).find(".btnIncele").attr("target");
/* 315 */       if(link){
/* 316 */         if(target){
/* 317 */           window.open(link, target);
/* 318 */         } else {
/* 319 */           window.location.href = link;
/* 320 */         }
/* 321 */       }
/* 322 */     }
/* 323 */   });
/* 324 */ 
/* 325 */   $('#im_slickSlider').slick({
/* 326 */     autoplay: true,
/* 327 */     fade: true,
/* 328 */     dots: true,
/* 329 */     arrows: true,
/* 330 */     speed: 1600,
/* 331 */     autoplaySpeed: 10000,
/* 332 */     prevArrow: '<button type="button" class="slick-prev"></button>',
/* 333 */     nextArrow: '<button type="button" class="slick-next"></button>'
/* 334 */   });
/* 335 */ 
/* 336 */   // On before slide change
/* 337 */   $('#im_slickSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
/* 338 */     
/* 339 */     if(typeof player !== 'undefined' && player != null){
/* 340 */       player.stopVideo();
/* 341 */       $("#yt_player").hide();
/* 342 */       $('#im_slickSlider').slick("slickPlay");
/* 343 */     }
/* 344 */ 
/* 345 */     var curentSlideElement = $("#im_slickSlider div.slick-slide").eq(currentSlide);
/* 346 */     if($(curentSlideElement).find('.firstFade').length > 0){
/* 347 */       $(curentSlideElement).find('.firstFade').fadeOut(10);
/* 348 */     }
/* 349 */     if($(curentSlideElement).find('.secondFade').length > 0){
/* 350 */       $(curentSlideElement).find('.secondFade').fadeOut(10);

/* default.js */

/* 351 */     }
/* 352 */     $(curentSlideElement).find('a').fadeOut(10);
/* 353 */   });
/* 354 */ 
/* 355 */   // On after slide change
/* 356 */   $('#im_slickSlider').on('afterChange', function(event, slick, currentSlide){
/* 357 */ 
/* 358 */     var currentSlideElement = $("#im_slickSlider div.slick-slide").eq(currentSlide);
/* 359 */     if($(currentSlideElement).find('.firstFade').length > 0){
/* 360 */       $(currentSlideElement).find('.firstFade').fadeIn(800,function(){
/* 361 */         if($(currentSlideElement).find('.secondFade').length > 0){
/* 362 */           $(currentSlideElement).find('.secondFade').fadeIn(800,function(){
/* 363 */             $(currentSlideElement).find('a').fadeIn(700,function(){});
/* 364 */           });
/* 365 */         }else{
/* 366 */           $(currentSlideElement).find('a').fadeIn(700,function(){});
/* 367 */         }
/* 368 */       });
/* 369 */     }else{
/* 370 */       if($(currentSlideElement).find('.secondFade').length > 0){
/* 371 */         $(currentSlideElement).find('.secondFade').fadeIn(800,function(){
/* 372 */           $(currentSlideElement).find('a').fadeIn(700,function(){});
/* 373 */         });
/* 374 */       }else{
/* 375 */         $(currentSlideElement).find('a').fadeIn(700,function(){});
/* 376 */       }
/* 377 */     }
/* 378 */   });
/* 379 */ 
/* 380 */   $(".open-page-area").delay(3000).fadeOut(1500);
/* 381 */   $(".open-text-area").delay(2500).fadeOut(900);
/* 382 */   $(".open-line").delay(2000).fadeOut(500);
/* 383 */ 
/* 384 */   $('.listele-area a').click(function(){
/* 385 */       $(".down-slider-list").removeClass("none-active").addClass("down-slider-list-active");
/* 386 */   });
/* 387 */   $('.listele-area a').click(function(){
/* 388 */       $(".down-right").addClass("down-right-width");
/* 389 */   });
/* 390 */ 
/* 391 */   $('.list-close-icon img').click(function(){
/* 392 */       $(".down-slider-list").removeClass("down-slider-list-active").addClass("none-active");
/* 393 */   });
/* 394 */   $('.list-close-icon img').click(function(){
/* 395 */       $(".down-right").removeClass("down-right-width");
/* 396 */   });
/* 397 */ 
/* 398 */   $('.down-left-top span').click(function(){
/* 399 */       $(".down-slider-list-mob").removeClass("none-active-mob").addClass("down-slider-list-mob-active active");
/* 400 */   });

/* default.js */

/* 401 */ 
/* 402 */   $('.list-close-icon img').click(function(){
/* 403 */       $(".down-slider-list-mob").removeClass("down-slider-list-mob-active").addClass("none-active-mob");
/* 404 */   });
/* 405 */ 
/* 406 */   $('.category-left-left ul li').hover(function(){
/* 407 */       var hoverIndex =  $(this).index();
/* 408 */       $('.category-hover-text').html($(this).text());
/* 409 */       $(".category-left-right img").removeClass('active');
/* 410 */       $(".category-left-right img").eq(hoverIndex).addClass("active");
/* 411 */   });
/* 412 */ 
/* 413 */   $(".slider_link").click(function() {
/* 414 */       var ind = $(this).attr("id");
/* 415 */       $('html, body').animate({
/* 416 */           scrollTop: $("."+ind).offset().top
/* 417 */       }, 1000);
/* 418 */   });
/* 419 */ 
/* 420 */ });
/* 421 */ 
/* 422 */ var openedWindow;
/* 423 */ 
/* 424 */ function shareWindow(siteName) {
/* 425 */   var sharedPage = site_webhost  + '/?locale=' + site_locale;
/* 426 */   var sharedLink = site_webhost  + '/?locale=' + site_locale;
/* 427 */   var sharedPageLink = $(location).attr('href') + '/?locale=' + site_locale;
/* 428 */   var sharedName = lang_hadi_enza_homea;
/* 429 */   var sharedImageUrl = site_webhost + '/frontEnd/site/images/enza_fbshare.jpg';
/* 430 */   if (siteName == "facebook") {
/* 431 */     t = 'Enza Home';
/* 432 */     openedWindow = window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(sharedPageLink) + '&t=' + encodeURIComponent(sharedName), 'sharer', 'toolbar=0,status=0,width=500,height=350' + 'v=1');
/* 433 */     setTimeout(openedWindow.location.reload, 3000);
/* 434 */   } else if (siteName == "twitter") {
/* 435 */     window.open('http://twitter.com/?status=' + encodeURIComponent(sharedPageLink), 'sharer', 'toolbar=1,status=1,width=500,height=350');
/* 436 */   } else if (siteName == "pinterest") {
/* 437 */     window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(sharedPageLink) + '&media=' + encodeURIComponent(sharedImageUrl) + '&description=' + encodeURIComponent(sharedName) + '', 'sharer', 'toolbar=1,status=1,width=400,height=300');
/* 438 */   } else if (siteName == "googleplus") {
/* 439 */     window.open('https://plus.google.com/share?url=' + encodeURIComponent(sharedPageLink), 'sharer', 'toolbar=1,status=1,width=500,height=350');
/* 440 */   }
/* 441 */ }
/* 442 */ 
/* 443 */ function detectLocation() {
/* 444 */   if (navigator.geolocation) {
/* 445 */     navigator.geolocation.getCurrentPosition(callbackDetectLocation, callbackDetectLocationError);
/* 446 */   } else {
/* 447 */     $('#geoLocationStatus h1').html(lang_tarayicinizin_konum_belirleme_ozelligi_bulunmamaktadir);
/* 448 */   }
/* 449 */ }
/* 450 */ 

/* default.js */

/* 451 */ function callbackDetectLocation(position) {
/* 452 */   $('#geoLocationStatus h1').html(lang_size_yakin_bir_satis_noktasi_araniyor);
/* 453 */ 
/* 454 */   var latitude = position.coords.latitude;
/* 455 */   var longitude = position.coords.longitude;
/* 456 */ 
/* 457 */   $.ajax({
/* 458 */     url: base_url + "/get-location",
/* 459 */     data: 'type=sales-point-nearest&latitude=' + latitude + '&longitude=' + longitude
/* 460 */   }).done(function(data) {
/* 461 */     data = $.parseJSON(data);
/* 462 */     if (data) {
/* 463 */       $('#geoLocationStatus h1').html(lang_size_en_yakin_satis_noktasi);
/* 464 */       $('#geoLocationStatus h3').html(data.salesPointName);
/* 465 */       $('#geoLocationStatus p').html(data.salesPointAddress);
/* 466 */       $('#geoLocationStatus #map').html('<iframe src="https://maps.google.com/maps?q=' + data.salesPointCoordinateLatitude + ',' + data.salesPointCoordinateLongitude + '&hl=es;z=14&output=embed" width="710" height="111" frameborder="0" style="border:0"></iframe>');
/* 467 */       $('#geoLocationStatus #map').show();
/* 468 */     } else {
/* 469 */       $('#geoLocationStatus h1').html(lang_size_yakin_bir_satis_noktasi_bulunamadi);
/* 470 */     }
/* 471 */   });
/* 472 */ }
/* 473 */ 
/* 474 */ function callbackDetectLocationError(error) {
/* 475 */   switch(error.code) {
/* 476 */     case error.PERMISSION_DENIED:
/* 477 */     case error.POSITION_UNAVAILABLE:
/* 478 */     case error.TIMEOUT:
/* 479 */     case error.UNKNOWN_ERROR:
/* 480 */       $('#geoLocationStatus h1').html(lang_konum_bulma_ozelligi_icin_onay_veriniz);
/* 481 */     break;
/* 482 */   }
/* 483 */ }
/* 484 */ 
