jsPsych.plugins['enter-text'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'enter-text',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        array: false,
        description: 'Label of the button to advance.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: undefined,
        description: 'Any content here will be displayed below the slider.'
      },
      required: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'is a response required',
        default: true,
        description: 'if the prompt is required to advance'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
    }
  }
  }

  plugin.trial = function(display_element, trial) {

    var html = trial.prompt;

    html += '</br>';
    html += '</br>';
    html += '</br>';
    html += '</br>';

    html += '<div id="jspsych-html-slider-response-stimulus">' + trial.stimulus + '</div>';
   
    html += '</br>';
    html += '</br>';

    var autofocus = 0 == 0 ? "autofocus" : "";
    var req = true ? "required" : "";

    html += '<input type="text" id="input"  name="#jspsych-survey-text-response" data-name="data" size="50" '+autofocus+' '+req+' placeholder=" enter number here"></input>';


    html += '</br>';
    html += '</br>';

    // add submit button
    html += '<button id="jspsych-html-slider-response-next" class="jspsych-btn" '+ (false ? "disabled" : "") + '>'+trial.button_label+'</button>';

    display_element.innerHTML = html;

    
    // backup in case autofocus doesn't work
    display_element.querySelector('#input').focus();

    var response = {
      rt: null,
      response: null
    };

    display_element.querySelector('#jspsych-html-slider-response-next').addEventListener('click', function() {
            // measure response time
      var endTime = performance.now();
      response.rt = endTime - startTime;
      var q_element = document.querySelector('#input').value; 
      console.log(q_element)
      response.response  = q_element.value;

      if(trial.response_ends_trial){
        end_trial();
      } else {
        display_element.querySelector('#jspsych-html-slider-response-next').disabled = true;
        end_trial();
      }

    });

    function end_trial(){

      jsPsych.pluginAPI.clearAllTimeouts();

      // save data
      var trialdata = {
        "rt": response.rt,
        "response": response.response,
        "stimulus": trial.stimulus,
        "prompt": trial.prompt
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trialdata);
    }

    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-html-slider-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

    var startTime = performance.now();
  };

  return plugin;
})();
