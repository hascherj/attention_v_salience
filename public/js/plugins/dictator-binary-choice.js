/*
 * a plugin for binary choices - two attributes
 * type for params: BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
 */

jsPsych.plugins["dictator-binary-choice"] = (function () {

    var plugin = {};
  
    plugin.info = {
  
      name: "dictator-binary-choice",
      parameters: {
        overall_trial_number:{
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'overall trial number',
          default: undefined,
          description: 'the overall trial number'
        },
        condition_trial_number:{
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'trial number',
          default: undefined,
          description: 'the trial number in the block'
        },
        trial_type: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'trial type',
            default: undefined,
            description: 'is this an SP or VS trial'
        },
        more_side: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'more left',
            default: true,
            description: 'is the side with more (SP/VX) on the left or right'
        },
        more_self_amount: {
            type: jsPsych.plugins.parameterType.HTML_STRING,
            pretty_name: 'more self amount',
            default: undefined,
            description: 'how much money goes to the decision maker'
        },
        more_other_amount: {
            type: jsPsych.plugins.parameterType.HTML_STRING,
            pretty_name: 'more other amount',
            default: undefined,
            description: 'how much money goes to the other'
        },
        less_self_amount: {
            type: jsPsych.plugins.parameterType.HTML_STRING,
            pretty_name: 'less self amount',
            default: undefined,
            description: 'how much money goes to the decision maker'
        },
        less_other_amount: {
            type: jsPsych.plugins.parameterType.HTML_STRING,
            pretty_name: 'less other amount',
            default: undefined,
            description: 'how much money goes to the other'
        },
        choices: {
          type: jsPsych.plugins.parameterType.KEYCODE,
          array: true,
          pretty_name: 'choices',
          default: ['F', 'J'], //jsPsych.ALL_KEYS,
          description: 'The keys the subject is allowed to press to respond to the stimulus.'
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
          description: 'Whether it is a real choice or practise, real- true'
        },
        timed_trial: {
          type: jsPsych.plugins.parameterType.BOOL,
          pretty_name: 'timed trial',
          default: false,
          description: 'Whether it is timed or untimed trial'
        },
        max_time: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: "max time",
          default: null,
          description: 'If the trial is timed, what is the max time before warning'
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
  
  
  
  
  
  
  //set up text in each quadrant - here, the self amount is always on top
  if (trial.more_side){
  
  //if more (SP/VX) side is on the left:
  
    var UL = trial.more_self_amount.toString();
    var UR = trial.less_self_amount.toString();
    var LL = trial.more_other_amount.toString();
    var LR = trial.less_other_amount.toString();
  
  } else {
 
  //or on the right:

  var UL = trial.less_self_amount.toString();
  var UR = trial.more_self_amount.toString();
  var LL = trial.less_other_amount.toString();
  var LR = trial.more_other_amount.toString();
    
  };
  
  //get new variables ready for output
  
  
  trial.LR = LR;
  trial.LL = LL;
  trial.UR = UR;
  trial.UL = UL;
  
  
  //show the text
  new_html += '<div id = "timeoutText">Please make your selection more quickly!</div>'
  new_html += '<div class="grid-container">';
  new_html += `<div id="UL">${UL}</div>`;
  new_html += `<div id="UR">${UR}</div>`;
  new_html += `<div id="LL">${LL}</div>`;
  new_html += `<div id="LR">${LR}</div>`;
  new_html += '</div>'
  
  
  
  
        display_element.innerHTML = new_html;
        display_element.querySelector('#timeoutText').style.visibility = 'hidden';
      };
  
      if (trial.timed_trial) {
        jsPsych.pluginAPI.setTimeout(function() {
          display_element.querySelector('#timeoutText');
        }, trial.max_time);
      } else{
        jsPsych.pluginAPI.setTimeout(function() {
          display_element.querySelector('#timeoutText');
        }, 100000);
      }





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
          "trial_type": trial.trial_type,

          "more_side": trial.more_side,
          "more_self": trial.more_self_amount,
          "more_other": trial.more_other_amount,
          "less_self": trial.less_self_amount,
          "less_other": trial.less_other_amount,
  
          "UL": trial.UL,
          "LL": trial.LL,
          "UR": trial.UR,
          "LR": trial.LR,
  
          "eyeData": JSON.stringify(eyeData),
          "timing_response": trial.timing_response,
          "realtrial":  trial.realOrPrac,
          "timed": trial.timed_trial
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
  
            //console.log(relativePosX);
            console.log(relativePosY);
  
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