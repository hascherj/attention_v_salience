//////////////
/** To Do **/
/////////////


//////////////////
/** Reminders **/
/////////////////
//turn on all timeline
//trials (=scenarios.length*2)
//ratings_means
//ratings_actions
//ratings_items

/**************/
/** Constants */
/**************/
const ntrials = 3;  //=scenarios.length*2
const fixation_duration = 500;
const npractice = 3;
const nImageInst = 2;
const debugModeCaliDot = 1;
const realCaliDot = 1;

//date constants
var TODAY = new Date();
var DD = String(TODAY.getDate()).padStart(2,"0");
var MM = String(TODAY.getMonth() + 1).padStart(2,"0");
var YYYY = TODAY.getFullYear();
const DATE = MM + DD + YYYY;

/////////////
/** Setup */
////////////

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function repeatArray(arr, count) {
  var ln = arr.length;
  var b = new Array();
  for(i=0; i<count; i++) {
    b.push(arr[i%ln]);
   }
  return b;
}

function makeSurveyCode(status) {
  uploadSubjectStatus(status);
  var prefix = {'success': 'cg', 'failed': 'sb'}[status]
  return `${prefix}${subject_id}`;
}

function uploadSubjectStatus(status) {
  $.ajax({
    type: "POST",
    url: "/subject-status",
    data: JSON.stringify({subject_id, status}),
    contentType: "application/json"
  });
}

var instruct_img = [];
for (var i = 0; i < nImageInst; i++) {
  instruct_img.push('img/instruct' + i + '.jpg');
}

var practice_images = [];
for (var i = 0; i <= npractice*2-1; i++) {
  practice_images.push('img/pracImg/instructions_ex' + i + '.jpg');
}


//only use general items and non-negative items (ie pedophiles)
var items_to_use = items.filter(obj => obj.negative == 0);

///////////////////////////////
/** Set Subject Parameters **/
//////////////////////////////

var subject_id = jsPsych.randomization.randomID(7);
var experiment_code = 'mc_';
subject_id = experiment_code + subject_id;
console.log(subject_id);


var action_top = jsPsych.randomization.sampleWithoutReplacement([1,2], 1);
//var action_top = 1;

//if the untimed is first, or timed is first
var timed_first = jsPsych.randomization.sampleWithoutReplacement([0,1], 1);

var ratings_order = jsPsych.randomization.sampleWithoutReplacement([1,2], 1);


/////////////////////////
/** Add Subject Info **/
////////////////////////

jsPsych.data.addProperties({
  subject: subject_id,
  date: DATE,
  subid_date: subject_id + DATE,
  action_top: action_top,
  timed_order: timed_first,
  ratings_order: ratings_order
});

//////////////////
/** Experiment */
/////////////////

/** full screen */
var fullscreenEnter = {
  type: 'fullscreen',
  message: `<div> 
  Welcome to the study! For participating in this study you will receive 1 hour of REP credit. <br/>
  Before we begin, please close any unnecessary programs or applications on your computer. <br/>
  This will help the study run more smoothly.    <br/>
   Also, please close any browser tabs that could produce popups or alerts that would interfere with the study.    <br/>
   Finally, once the study has started, <b>DO NOT EXIT</b> fullscreen mode or you will terminate the study and not receive credit. <br/>   
  <br><br/>
  The study will switch to full screen mode when you press the button below.  <br/>
  When you are ready to begin, press the button.</div>`,
  fullscreen_mode: true,
  on_finish: function () {
    document.body.style.cursor = 'none'
  }
};

var eyeTrackingInstruction1 = {
  type: 'html-keyboard-response',
  stimulus: `<div> <font size=120%; font color = 'green';>Calibration & Validation </font><br/>
                                             <br><br/>
                Before we begin with the study, we need to turn on and adjust your webcam for eye-tracking.   <br/>
                
                There are two parts to this process. The first part is calibration and the second part is validation.<br/>
                <br><br/>
                During calibration, you will see a series of dots like this <span id="calibration_dot_instruction"></span> appear on the screen, each for 3 seconds.<br/>
                Your task is simply to stare directly at each dot until it disappears.<br/>
                Then, quickly move your eyes to the next dot and repeat.<br/>
                <br><br/>
                Validation is basically the same as calibration. You simply need to stare at each dot until it turns <b><font color='green'>green</font></b> and disappears.<br/>
                During validation, the dot may turn <b><font color='yellow'>yellow</font></b>, indicating that you don’t seem to be staring directly at it.  <br/>
                Try to keep this from happening! 
                <br><br/>
                When you are ready, press the SPACEBAR to continue. </div>`,
  post_trial_gap: 500,
  choices: ['spacebar']
}

var eyeTrackingInstruction2 = {
  type: 'html-keyboard-response',
  stimulus: `<div><font size=120%; font color = 'green';>Calibration & Validation </font><br/>
                                                                          <br><br/>
      When the calibration begins, you will see a video feed with your face at the top left corner of your screen like this:  <br/>
        <br><br/>
         <img height="220px" width="270px" src="${instruct_img[0]}"><br/>
       <br><br/>
                         Try to keep your entire face within the box. When your face is in a good position, the box will turn <b><font color='green'>green</font></b>. <br/>
                         <font size=5px; font color = 'red';> <b>NOTE</b>: the video feed only appears during calibration.</font><br/>
                         <br><br/>
                         <font size=5px; >When you are ready, press the  <b>SPACEBAR</b> to continue.</font>
              
                         </div>`,
  post_trial_gap: 500,
  choices: ['spacebar']
}

var eyeTrackingNote = {
  type: 'html-keyboard-response',
  stimulus: `<div><font size=120%; font color = 'green';> Calibration & Validation</font><br/>
                                                                          <br><br/>
             <font size = 5px font color = "yellow">There are several <b>IMPORTANT</b> tips that are useful for passing the calibration task:<br/></font>
             <img height="200px" width="1000px" src="${instruct_img[1]}"><br/>
             <br><br/>
             <div style="text-align-last:left">
            In addition to the tips in the figure: <br/>
            (1). Use your eyes to look around the screen and try to avoid moving your head. <br/>
            (2). Try to keep lights in front of you rather than behind you so that the webcam can clearly see your face. Avoid sitting with a window behind you. <br/>
            (3). After you have made these adjustments, check again that your face fits nicely within the box on the video feed and that the box is green. <br/></div>
             <br><br/>
             <font size=5px; font color = 'red';> <b>NOTE</b>:  <br/>
            If you are back on this page, it means the calibration and validation did not work as well as we would like.  <br/>
            Please read the tips above again, make any adjustments, and try again.  <br/>
            There are only <b>THREE</b> chances to get this right.  <br/>
            Otherwise, the study cannot proceed.  </font><br/>
            <br><br/>
             <font size=5px; >When you are ready, press the <b>SPACEBAR</b> to bring up the video feed and make these adjustments. </font></div>`,
  post_trial_gap: 500,
  choices: ['spacebar']
}

//eye tracking parameters
var calibrationMax = 3;
var calibrationAttempt = 0;
var success = false; //update if there's a success
var eye_calibration_state = {
  doInit: true
};

var init_flag = function () {
  if (calibrationAttempt == 0) {
    return true;
  } else return false;
};

var validationTols = [130, 165, 200];
var validationAccuracys = [0.8, 0.7, 0.6];

/** first we need a calibration and validation step before entering into the main choice task */
var inital_eye_calibration = {
  timeline: [
    eyeTrackingNote,
    {
      type: "eye-tracking",
      doInit: () => init_flag(),
      doCalibration: true,
      doValidation: true,
      calibrationDots:  realCaliDot , // change to 12
      calibrationDuration: 3, //change to 5
      doValidation: true,
      validationDots:  realCaliDot , //change to 12
      validationDuration: 2,
      validationTol: validationTols[calibrationAttempt],
      // showPoint: true,
      on_finish: function (data) {
        console.log(JSON.parse(data.validationPoints)[0].hitRatio == null);
       if(JSON.parse(data.validationPoints)[0].hitRatio == null) {
        jsPsych.endExperiment('The study has ended. You may have exited full screen mode, or your browser may not be compatible with our study.  We will still assign you REP credit.');
       } else {
        calibrationAttempt++;
        if (data.accuracy >= validationAccuracys[calibrationAttempt - 1]) success = true;
        if (!success && calibrationAttempt == calibrationMax) {
          survey_code = makeSurveyCode('failed');
          closeFullscreen();
          jsPsych.endExperiment(`Sorry, unfortunately the webcam calibration has failed.  We can't proceed with the study.  Thank you for your time!  We will still assign you REP credit.` );
        }
       }
      }
    }
  ],
  loop_function: () => (calibrationAttempt < calibrationMax) && (!success),
};

var experimentOverview = {
  type: 'html-keyboard-response',
  on_start: function () {
    webgazer.pause(),
      webgazer.clearData()
  },
  stimulus: `<div> <font size=120%; font color = 'green';>Experiment Overview </font><br/>
                                                     <br><br/>
                         Success! The calibration and validation were successful. <br/>
                          Now, we will begin with the study. In today's study, you will be making a series of decisions.<br/> 
                          There will be multiple parts to the study, and you will receive instructions before each new part. <br/>
                                                        <br><br/>
                          When you are ready, press the  <b>SPACEBAR</b> to continue. </div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
}


/***********************/
/******** Trials *******/
/***********************/

var choiceOverview = {
  type: 'html-keyboard-response',
  stimulus: `<div><font size=120%; font color = 'green';>Instructions</font><br/>
                                        <br><br/>
            In this part of the study, you will decide what you SHOULD do in a series of hypothetical scenarios.
            <br><br/>
            In each question, you will be asked to decide if you would do nothing and let a group of people die. Or, if you would take a certain action that would save this group of people, but would kill another group.
            <br><br/>
           When you are ready, press the  <b>SPACEBAR</b> to see an example question.  </div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
  on_finish: () => document.body.style.cursor = 'none'
}


instructions_ex0 = ["In the example below, a bear is charging toward a group of five professional athletes. There are two options for you: one shown on the left and one on the right. If you do nothing, the bear will maul these athletes. But you can take the other action, push one athlete in front of the bear. If you do this, those 5 athletes will be saved.<br><br/>"+
"You must decide what you SHOULD do if you were in this situation:  do nothing or push one professional athlete in front of the bear.</br></br></br>"];
instructions_ex1 = ["In the example below, poisonous gas is moving towards 200 butterflies. If you do nothing, the gas will poison these butterflies. But you can take the other action, push a button to divert the poison gas toward another group of 25 butterflies. If you do this, those 200 butterflies will be saved.<br><br/>"+
"You must decide what you SHOULD do if you were in this situation:  do nothing or push the button to divert the poison gas.</br></br></br>"];
instructions_ex2 = ["In the example below, a trolley is moving toward one military veteran. If you do nothing, the trolley will crush the veteran. But you can take the other action, pull a lever to divert the trolley toward a group of 4 military veterans. If you do this, then the 1 veteran will be saved.<br><br/>"+
"You must decide what you SHOULD do if you were in this situation:  do nothing or push one miliatry veteran in front of the bear.</br></br></br>"];

if(action_top == 1){
var instructions_examples = {
  data:{
    screen_id: "instructions_examples"
  },
  type: "instructions",
  pages: [[instructions_ex0]+
  `<div style = 'float: center;'><img src= ${practice_images[0]} width = 'auto' height='400' border='1px white';></div></br>`+
  "</br>Please press the spacebar to see another example.",
  [instructions_ex1]+
  `<div style = 'float: center;'><img src= ${practice_images[1]} width = 'auto' height='400' border='1px white'></div></br>`+
  "</br>Please press the spacebar to see another example.",
  [instructions_ex2]+
  `<div style = 'float: center;'><img src= ${practice_images[2]} width = 'auto' height='400' border='1px white'></div></br>`+
  "</br>Please press the spacebar to continue."],
  allow_backward: false, 
  key_forward: 'spacebar'
}
}else{
  var instructions_examples = {
    data:{
      screen_id: "instructions_examples"
    },
    type: "instructions",
    pages: [[instructions_ex0]+
    `<div style = 'float: center;'><img src= ${practice_images[3]} width = 'auto' height='400' border='1px solid white';></div></br>`+
    "</br>Please press the spacebar to see another example.",
    [instructions_ex1]+
    `<div style = 'float: center;'><img src= ${practice_images[4]} width = 'auto' height='400' border='1px solid white'></div></br>`+
    "</br>Please press the spacebar to see another example.",
    [instructions_ex2]+
    `<div style = 'float: center;'><img src= ${practice_images[5]} width = 'auto' height='400' border='1px solid white'></div></br>`+
    "</br>Please press the spacebar to continue."],
    allow_backward: false, 
    key_forward: 'spacebar'
  }
};


var recalibrationInstruction = {
  type: "html-keyboard-response",
  on_start: function ()  {
    webgazer.resume(),
   document.body.style.cursor = 'none'
  },
  stimulus: `<div>We need to redo the calibration and validation before you begin with the choice task. </br>
   As before, make sure you stare at each dot until it disappears and make sure you don’t move your head.</br>
   <br></br>
   Please press <b>SPACEBAR</b> when you are ready to begin.</div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
};

var recalibration = {
  timeline: [
    recalibrationInstruction,
    {
      type: "eye-tracking",
      doCalibration: true,
      calibrationDots: realCaliDot, // change to 12
      calibrationDuration: 3,
      doValidation: true,
      validationDots: realCaliDot,// change to 12
      validationDuration: 2,
      validationTol: 200
    }
  ],
};

var choiceInstructionReinforce = {
  type: 'html-keyboard-response',
  stimulus: `<div><font size=120%; font color = 'green';>Instructions</font><br/>
                                        <br><br/>
       Now, we will begin with the choice task. Please keep your head still, otherwise we may have to redo the calibration and validation.<br/>
       There will be a break halfway through the task. During the break you can move your head if you need to.    <br/>
       Remember, you are choosing what you SHOULD do in each of these scenarios: <br/>
       If you think you should take the action on the left, press the <b><font color='green'>F</font></b> key; <br/>
       If you think you should take the action on the right, press the <b><font color='green'>J</font></b>  key;<br/>
                  <br><br/>
       After each choice, make sure to stare at the red circles that will appear on the screen, until they disappear.  <br/>
       This is part of ongoing adjustments to the eye-tracking.    <br/>
       <br><br/>
       NOTE: If the computer thinks that you are looking somewhere other than directly at the red dot,   <br/>
       you may need to redo the calibration and validation process, slowing down the study.   <br/>
                                               <br><br/>
      When you are ready, press the <b>SPACEBAR</b> to begin with a couple of practice rounds. </div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
  on_finish: function() {
  } 
}

///////////////
/** Practice */
//////////////

var fixation1 = {
  type: 'html-keyboard-response',
  on_start: () => document.body.style.cursor = 'none',
  stimulus: '<span id="calibration_dot_instruction"></span>',
  choices: jsPsych.NO_KEYS,
  trial_duration: fixation_duration,
};

var prac_choice_count = 0;
var prac_choice = {
  timeline: [
    
    fixation1,
    {
      type: "binary-choice",
      trial_number: () => prac_choice_count+1,
      action: () =>   scenarios_practice[prac_choice_count],
      number_fewer: () => [1,25,4][prac_choice_count],
      number_more: () =>  [5,200,1][prac_choice_count],
      items: () => items_practice[prac_choice_count],
      action_top: action_top,
      act_side: () => [1,2,1][prac_choice_count],
      choices: ["F", "J"],
      realOrCatch: 1,
      timing_response: 0,
      doEyeTracking: true,
      realOrPrac: false,
      on_finish: () => prac_choice_count++,
    }
  ],
  loop_function: () => prac_choice_count < 3,
};

var instructionsReal = {
  type: 'html-keyboard-response',
  stimulus: `<div> Now you can move on to the real choices. When you are ready, press the <b>SPACEBAR</b> to begin.</div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
}

var binary_choice_states = {
  //set the default 
  doCalibration: false,
  calibrationDots: 10,
  dovalidation: true,
  validationDots: 2
};

var validate_counter = 0;
validationAccuracy = 0.6;

function binary_choice_state_logger(finish_data_accuracy) {
  if (finish_data_accuracy >= validationAccuracy) {
    binary_choice_states = {
        doCalibration: false,
        dovalidation: true,
        validationDots: 2
      },
      validate_counter = 0;
  }
  if (finish_data_accuracy < validationAccuracy & validate_counter <= 2) {
    binary_choice_states = {
        doCalibration: false,
        dovalidation: true,
        validationDots: 2
      },
      validate_counter += 1;
  }
  if (validate_counter == 3) {
    binary_choice_states = {
      //set the default 
      doCalibration: true,
      calibrationDots: 12, ///change to 12
      dovalidation: false,
    }
    validate_counter = 0;
  }
};

var binary_state_updater = function () {
  return binary_choice_states;
};

/** choices */
var fixation = {
  type: "eye-tracking",
  doInit: false,
 // doCalibration: () => binary_state_updater().doCalibration,
  doCalibration: false,
  //calibrationDots: () => binary_state_updater().calibrationDots,
 // doValidation: () => binary_state_updater().dovalidation,
  doValidation: true,
 // validationDots: () => binary_state_updater().validationDots,
  validationDots: 3,
  validationTol: 130,
  validationDuration: 2,
//  calibrationDuration: 5,
  on_finish: (data) => binary_choice_state_logger(data.accuracy)
};


var if_node1 = {
  timeline: [fixation],
  conditional_function: function(){
      if(Math.round(trial_count_untimed%10) == 0){
          return true;
      } else {
          return false;
      }
  }
}

var if_node2 = {
  timeline: [fixation1],
  conditional_function: function(){
      if(Math.round(trial_count_untimed%10) != 0){
          return true;
      } else {
          return false;
      }
  }
}

///////////////////
/** Real Trials */
//////////////////

///////////////
/** Untimed */
//////////////

var instructions_RealUntimed = {
  data:{
    screen_id: "instructions_real_untimed"
  },
  type: "instructions",
  pages: ["In this part of the study, you should carefully consider your choices.  "+  
  "You will make a sequence of decisions with a break halfway through. <br/><br/>" + 
  "Please press the spacebar to continue."
  ],
  allow_backward: false, 
  key_forward: 'spacebar'
}

var trial_order_untimed = jsPsych.randomization.shuffle(Array.from(Array(ntrials/2).keys())).concat(jsPsych.randomization.shuffle(Array.from(Array(ntrials/2).keys())));
var trial_count_untimed = 0;
var act_side_untimed_vector = jsPsych.randomization.sampleWithReplacement([1,2], ntrials)

//create untimed numbers
var number_fewer_untimed_vector = [];
var number_more_untimed_vector = [];

for (let i = 0; i <= ntrials-1; i++) {
  number_fewer_untimed_vector.push(jsPsych.randomization.sampleWithoutReplacement([1,2,3,4,25], 1));
  if(number_fewer_untimed_vector[i]==1){
    number_more_untimed_vector.push(jsPsych.randomization.sampleWithReplacement([2,5,10,20,50,100,200], 1))
  }else if(number_fewer_untimed_vector[i]==2){
    number_more_untimed_vector.push(jsPsych.randomization.sampleWithReplacement([5,10,20,50,100,200], 1))
  }else if(number_fewer_untimed_vector[i]==3){
    number_more_untimed_vector.push(jsPsych.randomization.sampleWithReplacement([5,10,20,50,100,200], 1))
  }
  else if(number_fewer_untimed_vector[i]==4){
    number_more_untimed_vector.push(jsPsych.randomization.sampleWithReplacement([5,10,20,50,100,200], 1))
  }
  else{
    number_more_untimed_vector.push(jsPsych.randomization.sampleWithReplacement([50,100,200], 1))
  };
}

var catch_trial_untimed = jsPsych.randomization.shuffle(Array(ntrials-5).fill(1).concat(Array(5).fill(0)))

var items_to_use_order_vector_untimed = jsPsych.randomization.shuffle(Array.from(Array(items_to_use.length).keys()));

var choices_untimed = {
  timeline: [ 
    if_node1,
    if_node2,
    {
      type: "binary-choice",
      on_start: function(){
        document.body.style.cursor = 'none';
        //console.log(scenarios[trial_order_untimed[trial_count_untimed]]);
        //console.log(number_fewer_untimed_vector[trial_count_untimed]);
        //console.log(number_more_untimed_vector[trial_count_untimed]);
        //console.log(act_side_untimed_vector[trial_count_untimed]);
        //console.log(items_to_use[items_to_use_order_vector_untimed[trial_count_untimed]]);
        //console.log(catch_trial_untimed[trial_count_untimed]);
        console.log(trial_count_untimed);
      },
      trial_number: () => trial_count_untimed+1,
      action: () =>   scenarios[trial_order_untimed[trial_count_untimed]],
      number_fewer: () => number_fewer_untimed_vector[trial_count_untimed],
      number_more: () => number_more_untimed_vector[trial_count_untimed],
      items: () => items_to_use[items_to_use_order_vector_untimed[trial_count_untimed]],
      action_top: action_top,
      act_side: () => act_side_untimed_vector[trial_count_untimed],
      choices: ["F", "J"],
      realOrCatch: () => catch_trial_untimed[trial_count_untimed],
      timing_response: 0,
      doEyeTracking: true,
      realOrPrac: true,
      on_finish: function() {
        trial_count_untimed++;
        //console.log(items);
      },
    }
  ],
  loop_function: () => trial_count_untimed < ntrials,

};


//////////////////////
/** Re-calibration */
////////////////////

var breaktime = {
  type: "html-keyboard-response",
  stimulus: `<div>You are halfway done! Now you can take a short break if you want. You can move your head during the break.</br>
             <br></br>
             When you are ready to continue the study, press the <b>SPACEBAR</b>.</div>`,
  choices: ['spacebar'],
  on_start: function () {
    webgazer.pause(),
      webgazer.clearData()
  },
  post_trial_gap: 500,
};

var recalibrationInstruction2 = {
  type: "html-keyboard-response",
  on_start: () => webgazer.resume(),
  stimulus: `<div>We need to redo the calibration and validation before you return to the study.  </br>
  As before, make sure you stare at each dot until it disappears and make sure you don’t move your head.</br>
   <br></br>
   Press the <b>SPACEBAR</b> when you are ready to begin.</div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
};


var recalibration2 = {
  timeline: [
    recalibrationInstruction2,
    {
      type: "eye-tracking",
      doCalibration: true,
      calibrationDots: realCaliDot, ///change to 12
      calibrationDuration: 3,
      doValidation: true, 
       validationDots:  8, ///change to 6
      validationDuration: 2,
    }
  ],
};


///////////////
/** Timed */
//////////////

var instructions_RealTimed = {
  data:{
    screen_id: "instructions_real_timed"
  },
  type: "instructions",
  pages: ["In this part of the study, you should make your choices as  <font color = 'Tomato'>quickly</font> as you can.  "+
  "You should try to make all of the decisions in 5 minutes.<br/><br/>" + 
  "Please press the spacebar to continue to the rounds."
  ],
  allow_backward: false, 
  key_forward: 'spacebar'
}

var trial_order_timed = jsPsych.randomization.shuffle(Array.from(Array(ntrials/2).keys())).concat(jsPsych.randomization.shuffle(Array.from(Array(ntrials/2).keys())));
var trial_count_timed = 0;
var act_side_timed_vector = jsPsych.randomization.sampleWithReplacement([1,2], ntrials)

//create timed numbers
var number_fewer_timed_vector = [];
var number_more_timed_vector = [];

for (let i = 0; i <= ntrials-1; i++) {
  number_fewer_timed_vector.push(jsPsych.randomization.sampleWithoutReplacement([1,2,3,4,25], 1));
  if(number_fewer_timed_vector[i]==1){
    number_more_timed_vector.push(jsPsych.randomization.sampleWithReplacement([2,5,10,20,50,100,200], 1))
  }else if(number_fewer_timed_vector[i]==2){
    number_more_timed_vector.push(jsPsych.randomization.sampleWithReplacement([5,10,20,50,100,200], 1))
  }else if(number_fewer_timed_vector[i]==3){
    number_more_timed_vector.push(jsPsych.randomization.sampleWithReplacement([5,10,20,50,100,200], 1))
  }
  else if(number_fewer_timed_vector[i]==4){
    number_more_timed_vector.push(jsPsych.randomization.sampleWithReplacement([5,10,20,50,100,200], 1))
  }
  else{
    number_more_timed_vector.push(jsPsych.randomization.sampleWithReplacement([50,100,200], 1))
  };
};

var catch_trial_timed = jsPsych.randomization.shuffle(Array(ntrials-5).fill(1).concat(Array(5).fill(0)))

var items_to_use_order_vector_timed = jsPsych.randomization.shuffle(Array.from(Array(items_to_use.length).keys()));


var choices_timed = {
  timeline: [ 
    if_node1,
    if_node2,
    {
      type: "binary-choice",
      on_start: function(){
        //document.body.style.cursor = 'none';
        //console.log(scenarios[trial_order_timed[trial_count_timed]]);
        //console.log(number_fewer_timed_vector[trial_count_timed]);
        //console.log(number_more_timed_vector[trial_count_timed]);
        //console.log(act_side_timed_vector[trial_count_timed]);
        //console.log(items_to_use[items_to_use_order_vector_timed[trial_count_timed]]);
        //console.log(catch_trial_timed[trial_count_timed]);
        //console.log(trial_count_untimed);
      },
      trial_number: () => trial_count_timed+1,
      action: () =>   scenarios[trial_order_timed[trial_count_timed]],
      number_fewer: () => number_fewer_timed_vector[trial_count_timed],
      number_more: () => number_more_timed_vector[trial_count_timed],
      items: () => items_to_use[items_to_use_order_vector_timed[trial_count_timed]],
      action_top: action_top,
      act_side: () => act_side_timed_vector[trial_count_timed],
      choices: ["F", "J"],
      realOrCatch:  () => catch_trial_timed[trial_count_timed],
      timing_response: 0,
      doEyeTracking: true,
      realOrPrac: true,
      on_finish: function() {
        trial_count_timed++;
        //console.log(items);
      },
    }
  ],
  loop_function: () => trial_count_timed < ntrials,

};

//////////////////////
/** Order of Phases */
/////////////////////

var trials_Untimed_First = {
  timeline: [instructions_RealUntimed,
    choices_untimed, 
    breaktime, recalibration2, 
    instructions_RealTimed,
  choices_timed],

  conditional_function: function(){
      if(timed_first == 0){
          return true;
      } else {
          return false;
      }
  }
}
var trials_Timed_First = {
  timeline: [instructions_RealTimed,
    choices_timed, 
    breaktime, recalibration2, 
    instructions_RealUntimed,
    choices_untimed],

  conditional_function: function(){
      if(timed_first == 1){
          return true;
      } else {
          return false;
      }
  }
}

///////////////
/** Ratings */
//////////////

//////////////////////
/** Action Ratings */
/////////////////////

var ratings_overview = {
  type: 'html-keyboard-response',
  on_start:   function(){
    webgazer.end();
    document.body.style.cursor = 'pointer';
  },
  stimulus: `<div> <font size=120%; font color = 'green';>Rating Tasks</font><br/>
                                       <br><br/>
     Welcome to the next part of the experiment.  You can take a short break if you would like.<br/> 
                                          <br><br/>
            When you are ready, press the  <b>SPACEBAR</b> to start.  </div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
};


var ratings_items_instr = {
  type: 'html-keyboard-response',
  on_start:   () => document.body.style.cursor = 'pointer',
  stimulus: `<div> <font size=120%; font color = 'green';>Rating of Items</font><br/>
                                       <br><br/>
                                       Now, you will make decisions about the personal value of various items. <br/> 
                                       For each item, please their personal value to you.  You can define “personal value” in any way you find appropriate. Personal value is not necessarily the same as monetary value. For example, we may ask the personal value of your first report card. Here, the monetary value may differ dramatically from the personal value. 
                                       <br><br/>
                                       Please enter this personal value in the box. <br/> 
                                          <br><br/>
            When you are ready, press the  <b>SPACEBAR</b> to start.  </div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
};



var ratings_actions_instr = {
  type: 'html-keyboard-response',
  on_start:   () => document.body.style.cursor = 'pointer',
  stimulus: `<div> <font size=120%; font color = 'green';>Rating of Actions</font><br/>
                                       <br><br/>
             Now, you will make decisions about how you would feel if you had to take certain actions. <br/> 
             For each action, please rate it on a scale from -100 to 100 based on how bad or good you would feel to take an action.
             <br><br/> 
             -100 means that you would feel as bad as possible if you were to take this action.<br/> 
             0 means that you would feel neutral toward this action. <br/> 
             100 means that you would feel as good as possible if you were to take this action.
             <br><br/>
             During the task, you need to use your mouse to move the slider to your desired rating. <br/> 
                                          <br><br/>
            When you are ready, press the  <b>SPACEBAR</b> to start.  </div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
};

var ratings_means_instr = {
  type: 'html-keyboard-response',
  on_start:   () => document.body.style.cursor = 'pointer',
  stimulus: `<div> <font size=120%; font color = 'green';>Rating of Ways to Die</font><br/>
                                       <br><br/>
                                       Now, you will make decisions about how you would feel if you saw someone die in a certain way. <br/> 
                                       For each death, please rate it on a scale from -100 to 100 based on how bad or good you would feel to take an action.
                                       <br><br/>
                                       -100 means that you would feel as bad as possible if you saw someone die in this way.  <br/> 
                                       0 means that you would feel neutral. <br/> 
                                       100 means that you would feel as good as possible if you saw someone die in this way.
                                       <br><br/>
                                       During the task, you need to use your mouse to move the slider to your desired rating. <br/> 
                                          <br><br/>
            When you are ready, press the  <b>SPACEBAR</b> to start.  </div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
};


const distinctActions = [...new Set(scenarios.map(x => x.action))];
var actions_to_rate = jsPsych.randomization.shuffle(distinctActions);
var ratings_actions_counter = 0;


var ratings_actions_task = {
  timeline: [{
    type: 'html-slider-response',
    on_start:   () => document.body.style.cursor = 'pointer',
    stimulus: () => actions_to_rate[ratings_actions_counter],
    labels: ['-100','-75','-50','-25','0','25','50','75','100'],
    min: -100,
    max: 100,
    step: 1,
    start: () => getRandomFloat(-100, 100),
    prompt: `<div>Rate how you would feel if you had to take the following action?</div>`,
    require_movement: true,
    slider_width: 750,
    response_ends_trial: true,
    on_finish: () => {
      ratings_actions_counter++;
    }
}],
//loop_function: () => ratings_actions_counter < distinctActions.length
loop_function: () => ratings_actions_counter < 3
};


const distinctMeans = [...new Set(scenarios.map(x => x.means))];
var means_to_rate = jsPsych.randomization.shuffle(distinctMeans);
var ratings_means_counter = 0;

var ratings_means_task = {
  timeline: [{
    type: 'html-slider-response',
    on_start:   () => document.body.style.cursor = 'pointer',
    stimulus: () => means_to_rate[ratings_means_counter],
    labels: ['-100','-75','-50','-25','0','25','50','75','100'],
    min: -100,
    max: 100,
    step: 1,
    start: () => getRandomFloat(-100, 100),
    prompt: `<div>Rate how you would feel if you saw someone die in the following way?</div>`,
    require_movement: true,
    slider_width: 750,
    response_ends_trial: true,
    on_finish: () => {
      ratings_means_counter++;
    }
}],
//loop_function: () => ratings_means_counter < distinctMeans.length
loop_function: () => ratings_means_counter < 3
};

var ratings_items_counter = 0;
var ratings_items_order = jsPsych.randomization.shuffle(Array.from(Array(items.length).keys()));

console.log(items[ratings_items_order[ratings_items_counter]].name);
console.log(items.length);

var ratings_items_task = {
  timeline: [{
    type: 'enter-text',
    on_start:   () => document.body.style.cursor = 'pointer',
    stimulus: ()=> items[ratings_items_order[ratings_items_counter]].name,
    prompt: `<div>What is your personal value of the following item?</div>`,
    on_finish: () => {
      ratings_items_counter++;
    }
  }],
  //loop_function: () => ratings_items_counter < items.length
  loop_function: () => ratings_items_counter < 3
}
  


///////////////////////
/** Order of Ratings */
//////////////////////

var ratings_actions_items_means = {
  timeline: [ratings_actions_instr, ratings_actions_task,
    ratings_items_instr, ratings_items_task,
    ratings_means_instr, ratings_means_task],

  conditional_function: function(){
      if(ratings_order == 1){
          return true;
      } else {
          return false;
      }
  }
}

var ratings_means_items_actions = {
  timeline: [ratings_means_instr, ratings_means_task,
    ratings_items_instr, ratings_items_task,
    ratings_actions_instr, ratings_actions_task],

  conditional_function: function(){
      if(ratings_order == 2){
          return true;
      } else {
          return false;
      }
  }
}




/***********************/
/******** Survey *******/
/***********************/

var demographic_survey = {
  type: 'survey-text',
  questions: [
    {prompt: "What is your gender?", rows: 2, columns:50 , required:true}, 
    {prompt: "What is your age?", rows: 1, columns: 50, required:true},
    {prompt: "What is your first language?", rows: 1, columns: 50, require: false},
    {prompt: "What is your name (to assign REP credit)?", rows: 1, columns: 50, require: false},
  ],
  preamble: `<div>Thanks for taking our study! Please answer the following questions before seeing the debriefing page. </div>`,
};


//////////////////
/** Debriefing */
/////////////////

var debriefing_page = {
  data:{
    screen_id: "debriefing page"
  },
  type: "instructions",
  pages: ["The study that you have just completed is concerned with how people make moral decisions in different hypothetical scenarios.  Specifically, we are interested in under which conditions people think it is morally permissible to take an action that will harm fewer people.  Across the different scenarios, we used different means of death (e.g., lion, gunman, etc.) and different actions you might have to take (e.g. performing surgery, pushing a button, pushing the person).  We are investigating whether these different factors influence decisions."+
  "We were also interested in seeing how people’s decisions change when are asked to make these decisions quickly.  Would they focus more on certain aspects of the decision than others?  We use eye-tracking to determine where people are looking as a proxy for what aspects of the decision they are considering at that moment."+
  "If you have any questions, concerns, or complaints about this set of studies, you may contact Dr. Ian Krajbich of The Ohio State University at krajbich.1@osu.edu. For questions about your rights as a participant in this study or to discuss other study-related concerns or complaints with someone who is not part of the research team, you may contact Ms. Sandra Meadows in the Office of Responsible Research Practices at 1-800-678-6251.",],
  allow_backward: false, 
  key_forward: 'spacebar'
}

////////////////////////
/** End of Experiment */
///////////////////////

 var successExp = false
 var success_guard = {
   type: 'call-function',
   func: () => {successExp = true}
 }

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}


var on_finish_callback = function () {
 // jsPsych.data.displayData();
  jsPsych.data.addProperties({
    browser_name: bowser.name,
    browser_type: bowser.version,
    subject: subject_id,
    interaction: jsPsych.data.getInteractionData().json(),
    windowWidth: screen.width,
    windowHight: screen.height
  });
  var data = JSON.stringify(jsPsych.data.get().values());
  $.ajax({
      type: "POST",
      url: "/data",
      data: data,
      contentType: "application/json"
    })
    .done(function () {
      // alert("your data has been saved!")
    })
    .fail(function () {
      //alert("problem occured while writing data to box.");
    })
}

var trialcounter;
function startExperiment() {
  jsPsych.init({
    timeline: [
      fullscreenEnter,
      eyeTrackingInstruction1 ,eyeTrackingInstruction2 , inital_eye_calibration ,
      experimentOverview,
      choiceOverview, 
      instructions_examples,
      recalibration,
      choiceInstructionReinforce,
      prac_choice,
     instructionsReal, 
     trials_Untimed_First,
     trials_Timed_First,
     ratings_overview,
     ratings_actions_items_means, ratings_means_items_actions,
     demographic_survey,
    debriefing_page,

    success_guard
    ],
    on_trial_finish: function () {
      trialcounter = jsPsych.data.get().count();
     if(successExp) {
      closeFullscreen()
      document.body.style.cursor = 'pointer'
      jsPsych.endExperiment(`<div>
      Thank you for your participation! You can close the browser to end the experiment now. </br>
                  The webcam will turn off when you close the browser. </div>`);
      }
      if (trialcounter == 10) {
        on_finish_callback();
        jsPsych.data.reset();
      }
    },
    preload: [instruct_img, practice_images],
    on_finish: () => on_finish_callback(),
    on_close: () => on_finish_callback()

  });
};