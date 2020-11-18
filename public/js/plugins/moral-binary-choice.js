/*
 * a plugin for binary choices - two attributes
 * type for params: BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
 */

jsPsych.plugins["moral-binary-choice"] = (function () {

  var plugin = {};

  plugin.info = {

    name: "moral-binary-choice",
    parameters: {
      trial_number:{
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'trial number',
        default: undefined,
        description: 'the trial number in the block'
      },
      action: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'action',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      number_fewer: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'numbers',
        default: undefined,
        description: 'the number of people killed: fewer'
      },
      number_more: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'numbers',
        default: undefined,
        description: 'the number of people killed: more'
      },
      items: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'item',
        default: undefined,
        description: 'the identity of the people killed'
      },
      action_top: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'action top',
        default: undefined,
        description: 'is the action on the top or bottom (vs means)'
      },
      act_side: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'act side',
        default: undefined,
        description: 'is act on the left or right (vs inaction)'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'choices',
        default: ['F', 'J'], //jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      realOrCatch: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'real-catch',
        default: true,
        description: 'Whether it is a real choice or catch, real- true'
      },
      timing_response: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'timing_response',
        default: 0,
        description: 'timing_response.'
      },
      doEyeTracking: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'eye-tracking',
        default: true,
        description: 'Whether to do the eye tracking during this trial.'
      },
      realOrPrac: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'real-prac',
        default: true,
        description: 'Whether it is a real choice, real- true'
      }
      }  
  };

  /**
   * trial method is responsible for running a single trial. 
   * parameters:
   * display_element: DOM element where jsPsych content is being generated --> HTML element
   * this parameter can change th content of the display: display_element.innerHTML = html_content;
   * trial: an object containing all the parameters specified in the correspnding TimelineNode. Need to call jsPsych.finishTrial() when it is done.
   */

  plugin.trial = function (display_element, trial) {
    // set default values for the parameters
    trial.choices = trial.choices || [];
    trial.timing_response = trial.timing_response || -1;
    var setTimeoutHandlers = [];
    var keyboardListener;

    var response = {
      rt: -1,
      key: -1
    };

    // display stimuli
    var display_stage = function () {
    
      kill_timers();
      kill_listeners();

      display_element.innerHTML = '';
      var new_html = '';

      //if catch trial, switch fewer and more numbers
      if(trial.realOrCatch==0){
     var more = trial.number_more;
     var fewer = trial.number_fewer;

      trial.number_fewer = more;
      trial.number_more= fewer;
      };

//if it's an item with a number restriction, change numbers
if(trial.items.number_max!=null){
  trial.number_fewer = 1;
  trial.number_more = getRandomInt(2, trial.items.number_max);
};

//if it's a personal item
if(trial.items.general==0){
  var personal_identifier = "your ";
}else{
  var personal_identifier = "";
}

var number_fewer_words; //[1,2,3,4,20]
var number_more_words; //[2,5,10,50,100,200]

//convert numbers to words 
if(trial.number_fewer=="1"){
  number_fewer_words = "one";
}else if(trial.number_fewer=="2"){
  number_fewer_words = "two";
}else if(trial.number_fewer=="3"){
  number_fewer_words = "three";
}else if(trial.number_fewer=="4"){
  number_fewer_words = "four";
}else if(trial.number_fewer=="20"){
  number_fewer_words = "twenty";
};

if(trial.number_more=="2"){
  number_more_words = "two";
}else if(trial.number_more=="5"){
  number_more_words = "five";
}else if(trial.number_more=="10"){
  number_more_words = "ten";
}else if(trial.number_more=="50"){
  number_more_words = "fifty";
}else if(trial.number_more=="100"){
  number_more_words = "one hundred";
}else if(trial.number_more=="200"){
  number_more_words = "two hundred";
};

console.log(trial.number_fewer);
console.log(number_fewer_words);

console.log(trial.number_more);
console.log(number_more_words);


      if (action_top == 1 && trial.act_side == 1){
//action on top & outcome on bottom
//act on left & in action right

// by pushing them towards the shark      by leaving them in the shark's path
// you sacrifice 1 lifegaurd near you     you let a group of 2 lifegaurds die
      new_html += '<div class="grid-container">';
      new_html += `<div id="UL">${trial.action.act}</div>`;
      new_html += `<div id="UR">${trial.action.dont_act}</div>`;

      if (trial.number_fewer=="1"){
        new_html += `<div id="LL">you sacrifice ${personal_identifier}${number_fewer_words} ${trial.items.singular} near you </div>`;
      }else{
        new_html += `<div id="LL">you sacrifice a group of ${personal_identifier}${number_fewer_words} ${trial.items.plural}</div>`;
      }
      if(trial.number_more=="1"){
        new_html += `<div id="LR">you let ${personal_identifier}${number_more_words} ${trial.items.singular} die </div>`;
      }else{
        new_html += `<div id="LR">you let a group of ${personal_identifier}${number_more_words} ${trial.items.plural} die </div>`;
      }
      new_html += '</div>';
        


      } else if (action_top == 1 && trial.act_side == 2){
//action on top & outcome on bottom
//act on right & in action left

// by leaving them in the shark's path    by pushing them towards the shark      
// you let a group of 2 lifegaurds die    you sacrifice 1 lifegaurd near you     
new_html += '<div class="grid-container">';
new_html += `<div id="UL">${trial.action.dont_act}</div>`;
new_html += `<div id="UR">${trial.action.act}</div>`;


if(trial.number_more=="1"){
  new_html += `<div id="LL">you let ${personal_identifier}${number_more_words} ${trial.items.singular} die </div>`;
}else{
  new_html += `<div id="LL">you let a group of ${personal_identifier}${number_more_words} ${trial.items.plural} die </div>`;
}

if (trial.number_fewer=="1"){
  new_html += `<div id="LR">you sacrifice ${personal_identifier}${number_fewer_words} ${trial.items.singular} near you </div>`;
}else{
  new_html += `<div id="LR">you sacrifice a group of ${personal_identifier}${number_fewer_words} ${trial.items.plural}</div>`;
}
new_html += '</div>';



}else if (action_top == 2 && trial.act_side == 1){
//action on bottom & outcome on top
//act on left & in action right

// you sacrifice 1 lifegaurd near you     you let a group of 2 lifegaurds die
// by pushing them towards the shark      by leaving them in the shark's path
new_html += '<div class="grid-container">';
if (trial.number_fewer=="1"){
  new_html += `<div id="UL">you sacrifice ${personal_identifier}${number_fewer_words} ${trial.items.singular} near you </div>`;
}else{
  new_html += `<div id="UL">you sacrifice a group of ${personal_identifier}${number_fewer_words} ${trial.items.plural}</div>`;
}

if(trial.number_more=="1"){
  new_html += `<div id="UR">you let ${personal_identifier}${number_more_words} ${trial.items.singular} die </div>`;
}else{
  new_html += `<div id="UR">you let a group of ${personal_identifier}${number_more_words} ${trial.items.plural} die </div>`;
}

new_html += `<div id="LL">${trial.action.act}</div>`;
new_html += `<div id="LR">${trial.action.dont_act}</div>`;
new_html += '</div>';

   

}else if (action_top == 2 && trial.act_side == 2){
//action on bottom & outcome on top
//act on right & in action left

// you let a group of 2 lifegaurds die    you sacrifice 1 lifegaurd near you  
// by leaving them in the shark's path    by pushing them towards the shark   
new_html += '<div class="grid-container">';

if(trial.number_more=="1"){
  new_html += `<div id="UL">you let ${personal_identifier}${number_more_words} ${trial.items.singular} die </div>`;
}else{
  new_html += `<div id="UL">you let a group of ${personal_identifier}${number_more_words} ${trial.items.plural} die </div>`;
}

if (trial.number_fewer=="1"){
  new_html += `<div id="UR">you sacrifice ${personal_identifier}${number_fewer_words} ${trial.items.singular} near you </div>`;
}else{
  new_html += `<div id="UR">you sacrifice a group of ${number_fewer_words} ${trial.items.plural}</div>`;
}
new_html += `<div id="LL"> ${trial.action.dont_act} </div>`;
new_html += `<div id="LR"> ${trial.action.act}</div>`;
new_html += '</div>';

}

      display_element.innerHTML = new_html;
    };

    var display_selection = function () {
      if (String.fromCharCode(response.key) == trial.choices[0]) {
        $("#UL").css("color", "red");
        $("#LL").css("color", "red");
      } else if (String.fromCharCode(response.key) == trial.choices[1]) {
        $("#UR").css("color", "red");
        $("#LR").css("color", "red");
      }
    };

    var display_timeout = function () {
      $('binary-timeoutinfo').text('Please make your selection more quickly!');
    };

    var kill_timers = function () {
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }
    };


    var kill_listeners = function () {
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }
    };

    var start_response_listener = function () {
      if (trial.choices != jsPsych.NO_KEYS) {
        keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
          valid_responses: trial.choices,
          rt_method: 'performance',
          persist: false,
          allow_held_key: false,
          callback_function: function (info) {
            kill_listeners();
            kill_timers();
            response = info;
            display_selection();
            setTimeout(() => end_trial(false), 500);
          },
        });
      }
    };

    var display_stimuli = function () {
      kill_timers();
      kill_listeners();
      display_stage();
      start_response_listener();
  
      if (trial.timing_response > 0) {
        var response_timer = setTimeout(function () {
          kill_listeners();
          display_timeout();
          setTimeout(() => end_trial(true), 500);
        }, trial.timing_response);
         setTimeoutHandlers.push(response_timer);
      }
    };


    var end_trial = function (timeout) {

   //   webgazer.pause();
   ///   clearInterval(eye_tracking_interval);
   if(trial.doEyeTracking) {
    webgazer.pause();
    clearInterval(eye_tracking_interval); }
      // data saving
      var trial_data = {
        "trial_number": trial.trial_number,
        "rt": response.rt,
        "key_press": response.key,
        "choices": trial.choices,
        "action": trial.action.act,
        "inaction": trial.action.dont_act,
        "number_fewer": trial.number_fewer,
        "number_more": trial.number_more,
        "item": trial.items.singular,
        "action_top": trial.action_top,
        "act_side": trial.act_side,
        "eyeData": JSON.stringify(eyeData),
        "realOrCatch": trial.realOrCatch,
        "timing_response": trial.timing_response,
        "realtrial":  trial.realOrPrac
      };
      jsPsych.finishTrial(trial_data);
    };

    var eyeData = {history:[]};
    display_stimuli();
    if(trial.doEyeTracking) {
      webgazer.resume();
    webgazer.showVideo(false);
    webgazer.showPredictionPoints(false);
    webgazer.showFaceOverlay(false);
    webgazer.showFaceFeedbackBox(false);
    var starttime = performance.now();
    var eye_tracking_interval = setInterval(
      function() {
        var pos = webgazer.getCurrentPrediction();
        if (pos) {

          var relativePosX = pos.x/screen.width ;
          var relativePosY = pos.y/screen.height;
          var relativePosX2= pos.x/innerWidth ;
          var relativePosY2 = pos.y/innerHeight;
          eyeData.history.push({
           // 'x': pos.x,
          //  'y': pos.y,
            'relative-x': relativePosX,
            'relative-y': relativePosY,
            'relative-x2': relativePosX2,
            'relative-y2': relativePosY2,
            'elapse-time': performance.now() - starttime
          });
        }
      },20);
    }
  };

  return plugin;
})();