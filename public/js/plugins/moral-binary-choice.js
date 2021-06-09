/*
 * a plugin for binary choices - two attributes
 * type for params: BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
 */

jsPsych.plugins["moral-binary-choice"] = (function () {

  var plugin = {};

  plugin.info = {

    name: "moral-binary-choice",
    parameters: {
      overall_trial_number:{
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'overall trial number',
        default: undefined,
        description: 'the trial number in the block'
      },
      condition_trial_number:{
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
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'numbers',
        default: undefined,
        description: 'the number of people killed: fewer'
      },
      number_more: {
        type: jsPsych.plugins.parameterType.INT,
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
        default: 1,
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

      var n_more;
      var n_fewer;

//if it's an item with a number restriction, change numbers
if(trial.items.M_numbermax!=null && trial.items.F_numbermax!=null){
  n_more = getRandomInt(2, trial.items.M_numbermax);
  n_fewer = getRandomInt(1, n_more-1);

} else if (trial.items.M_numbermax!=null && trial.items.F_numbermax==null){
  n_more = getRandomInt(2, trial.items.M_numbermax);
  n_fewer = getRandomInt(1, n_more-1);

} else if (trial.items.M_numbermax==null && trial.items.F_numbermax!=null){
  n_fewer = getRandomInt(1, trial.items.F_numbermax);
  if(trial.number_more < n_fewer){
    n_more = n_fewer;
    n_fewer = trial.number_more;
  } else {
    n_more = trial.number_more;
  };

} else{
  n_more = trial.number_more;
  n_fewer = trial.number_fewer;
};


    //if catch trial, switch fewer and more lines
    if(trial.realOrCatch==0){
      var n_more0 = n_more;
      var n_fewer0 = n_fewer;
      n_more = n_fewer0;
      n_fewer = n_more0;
    };

//if it's a personal item
if(trial.items.M_general==0){
  var personal_identifier_M = "your ";
}else{
  var personal_identifier_M = "";
};
if(trial.items.F_general==0){
  var personal_identifier_F = "your ";
}else{
  var personal_identifier_F = "";
}

//[1,2,3,4,5,10,20,50,100,200]
//convert numbers to words 
var number_fewer_words; 
var number_more_words; 

if(n_fewer==1){
  number_fewer_words = "one";
}else if(n_fewer==2){
  number_fewer_words = "two";
}else if(n_fewer==3){
  number_fewer_words = "three";
}else if(n_fewer==4){
  number_fewer_words = "four";
}else if(n_fewer==5){
  number_fewer_words = "five";
}else if(n_fewer==10){
  number_fewer_words = "ten";
}else if(n_fewer==20){
  number_fewer_words = "twenty";
}else if(n_fewer==50){
    number_fewer_words = "fifty";
  }else if(n_fewer==100){
    number_fewer_words = "one-hundred";
  }else if(n_fewer==200){
    number_fewer_words = "two-hundred";
  };

  if(n_more==1){
    number_more_words = "one";
  }else if(n_more==2){
    number_more_words = "two";
  }else if(n_more==3){
    number_more_words = "three";
  }else if(n_more==4){
    number_more_words = "four";
  }else if(n_more==5){
    number_more_words = "five";
  }else if(n_more==10){
    number_more_words = "ten";
  }else if(n_more==20){
    number_more_words = "twenty";
  }else if(n_more==50){
    number_more_words = "fifty";
    }else if(n_more==100){
      number_more_words = "one-hundred";
    }else if(n_more==200){
      number_more_words = "two-hundred";
    };

console.log(n_more);
console.log(n_fewer);
console.log(number_fewer_words);
console.log(number_more_words);

    //set up action lines
    var action_line = `${trial.action.act}`;
    var inaction_line = `${trial.action.dont_act}`;

    //set up outcome lines
    if (n_fewer==1){
      var fewer_line = `you sacrifice ${personal_identifier_F}${number_fewer_words} ${trial.items.F_singular} near you`;
    }else{
      var fewer_line = `you sacrifice a group of ${personal_identifier_F}${number_fewer_words} ${trial.items.F_plural}`;
    };
    
    if (n_more==1){
      var more_line = `you watch ${personal_identifier_M}${number_more_words} ${trial.items.M_singular} die`;
    }else{
      var more_line = `you watch a group of ${personal_identifier_M}${number_more_words} ${trial.items.M_plural} die`;
    };


//set up text in each quadrant
if (trial.action_top == 1 && trial.act_side == 1){
//action on top & outcome on bottom
//act on left & in action right

// by pushing them towards the shark      by leaving them in the shark's path
// you sacrifice 1 lifegaurd near you     you let a group of 2 lifegaurds die

  var UL = action_line;
  var UR = inaction_line;
  var LL = fewer_line;
  var LR = more_line;

} else if (trial.action_top == 1 && trial.act_side == 2){
//action on top & outcome on bottom
//act on right & in action left

// by leaving them in the shark's path    by pushing them towards the shark      
// you let a group of 2 lifegaurds die    you sacrifice 1 lifegaurd near you 

var UR = action_line;
var UL = inaction_line;
var LR = fewer_line;
var LL = more_line;
  
} else if (trial.action_top == 2 && trial.act_side == 1){
  //action on bottom & outcome on top
//act on left & in action right

// you sacrifice 1 lifegaurd near you     you let a group of 2 lifegaurds die
// by pushing them towards the shark      by leaving them in the shark's path

var LL = action_line;
var LR = inaction_line;
var UL = fewer_line;
var UR = more_line;
  
} else if (trial.action_top == 2 && trial.act_side == 2){
//action on bottom & outcome on top
//act on right & in action left

// you let a group of 2 lifegaurds die    you sacrifice 1 lifegaurd near you  
// by leaving them in the shark's path    by pushing them towards the shark 

var LR = action_line;
var LL = inaction_line;
var UR = fewer_line;
var UL = more_line;
};

//get new variables ready for output
trial.n_fewer = n_fewer;
trial.n_more = n_more;

trial.LR = LR;
trial.LL = LL;
trial.UR = UR;
trial.UL = UL;


//show the text
new_html += '<div class="grid-container">';
new_html += `<div id="UL">${UL}</div>`;
new_html += `<div id="UR">${UR}</div>`;
new_html += `<div id="LL">${LL}</div>`;
new_html += `<div id="LR">${LR}</div>`;
new_html += '</div>'




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
        "overall_trial_number": trial.overall_trial_number,
        "condition_trial_number": trial.condition_trial_number,
        "rt": response.rt,
        "key_press": response.key,
        "choices": trial.choices,

        "scenario": trial.action.full,
        "action": trial.action.act,
        "inaction": trial.action.dont_act,

        "act_side": trial.act_side,

        "number_fewer": trial.n_fewer,
        "number_more": trial.n_more,
        "item_fewer": trial.items.F_singular,
        "item_more": trial.items.M_singular,
        "item_fewer_name": trial.items.F_name,
        "item_more_name": trial.items.M_name,

        "UL": trial.UL,
        "LL": trial.LL,
        "UR": trial.UR,
        "LR": trial.LR,

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