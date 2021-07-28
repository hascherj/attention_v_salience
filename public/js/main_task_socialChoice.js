//////////////
/** To Do **/
/////////////

//array numbers show up as brackets in csv
//random identities from cohen and ahn paper

//////////////////
/** Reminders **/
/////////////////
//turn on all timeline
//VX refers to more variable side, SP refers to more rewarding side

/**************/
/** Constants */
/**************/

const ntrials = (scenarios.length*1)/2; //number of trials per condition

const rating_req = true;
const fixation_duration = 500;
const npractice = 3;
const debugModeCaliDot = 1;
const realCaliDot = 1;

//date constants
var TODAY = new Date();
var DD = String(TODAY.getDate()).padStart(2,"0");
var MM = String(TODAY.getMonth() + 1).padStart(2,"0");
var YYYY = TODAY.getFullYear();
const DATE = MM + DD + YYYY;

/////////////////////
/** Create Stimuli */
/////////////////////


which_first = (Math.random() < 0.5);


/*Example Stimuli - for testing code*/
var stim_SP_more = [
  {
    type: "SP",
    more_less: "more",
    self_amt: 8,
    other_amt: 2
  },
  {
    type: "SP",
    more_less: "more",
    self_amt: 8,
    other_amt: 2
  },{
    type: "SP",
    more_less: "more",
    self_amt: 8,
    other_amt: 2
  },{
    type: "SP",
    more_less: "more",
    self_amt: 7,
    other_amt: 3
  },{
    type: "SP",
    more_less: "more",
    self_amt: 7,
    other_amt: 3
  },{
    type: "SP",
    more_less: "more",
    self_amt: 7,
    other_amt: 3
  },{
    type: "SP",
    more_less: "more",
    self_amt: 7,
    other_amt: 3
  },{
    type: "SP",
    more_less: "more",
    self_amt: 6,
    other_amt: 4
  },{
    type: "SP",
    more_less: "more",
    self_amt: 6,
    other_amt: 4
  },{
    type: "SP",
    more_less: "more",
    self_amt: 6,
    other_amt: 4
  }
];

var stim_SP_less = [
  {
    type: "SP",
    more_less: "less",
    self_amt: 6,
    other_amt: 4
  },
  {
    type: "SP",
    more_less: "less",
    self_amt: 6,
    other_amt: 4
  },{
    type: "SP",
    more_less: "less",
    self_amt: 6,
    other_amt: 4
  },{
    type: "SP",
    more_less: "less",
    self_amt: 6,
    other_amt: 4
  },{
    type: "SP",
    more_less: "less",
    self_amt: 7,
    other_amt: 3
  },{
    type: "SP",
    more_less: "less",
    self_amt: 7,
    other_amt: 3
  },{
    type: "SP",
    more_less: "less",
    self_amt: 7,
    other_amt: 3
  },{
    type: "SP",
    more_less: "less",
    self_amt: 5,
    other_amt: 5
  },{
    type: "SP",
    more_less: "less",
    self_amt: 5,
    other_amt: 5
  },{
    type: "SP",
    more_less: "less",
    self_amt: 5,
    other_amt: 5
  }
];

var stim_VX_more = [
  {
    type: "VX",
    more_less: "more",
    self_amt: 7,
    other_amt: 3
  },
  {
    type: "VX",
    more_less: "more",
    self_amt: 7,
    other_amt: 3
  },{
    type: "VX",
    more_less: "more",
    self_amt: 7,
    other_amt: 3
  },{
    type: "VX",
    more_less: "more",
    self_amt: 7,
    other_amt: 3
  },{
    type: "VX",
    more_less: "more",
    self_amt: 8,
    other_amt: 2
  },{
    type: "VX",
    more_less: "more",
    self_amt: 8,
    other_amt: 2
  },{
    type: "VX",
    more_less: "more",
    self_amt: 9,
    other_amt: 1
  },{
    type: "VX",
    more_less: "more",
    self_amt: 6,
    other_amt: 4
  },{
    type: "VX",
    more_less: "more",
    self_amt: 6,
    other_amt: 4
  },{
    type: "VX",
    more_less: "more",
    self_amt: 5,
    other_amt: 5
  },
];

var stim_VX_less = [
  {
    type: "VX",
    more_less: "less",
    self_amt: 7,
    other_amt: 3
  },{
    type: "VX",
    more_less: "less",
    self_amt: 7,
    other_amt: 3
  },{
    type: "VX",
    more_less: "less",
    self_amt: 7,
    other_amt: 3
  },{
    type: "VX",
    more_less: "less",
    self_amt: 7,
    other_amt: 3
  },{
    type: "VX",
    more_less: "less",
    self_amt: 8,
    other_amt: 2
  },{
    type: "VX",
    more_less: "less",
    self_amt: 8,
    other_amt: 2
  },{
    type: "VX",
    more_less: "less",
    self_amt: 8,
    other_amt: 2
  },{
    type: "VX",
    more_less: "less",
    self_amt: 6,
    other_amt: 4
  },{
    type: "VX",
    more_less: "less",
    self_amt: 6,
    other_amt: 4
  },{
    type: "VX",
    more_less: "less",
    self_amt: 6,
    other_amt: 4
  },
];

//Randomize within blocks
var block_length = stim_SP_more.length; //10 in the example blocks

//For timed trials...
var stim_SP_more_timed = jsPsych.randomization.repeat(stim_SP_more, 1);
var stim_SP_less_timed = jsPsych.randomization.repeat(stim_SP_less, 1);
var stim_VX_more_timed = jsPsych.randomization.repeat(stim_VX_more, 1);
var stim_VX_less_timed = jsPsych.randomization.repeat(stim_VX_less, 1);

//and untimed trials
var stim_SP_more_untimed = jsPsych.randomization.repeat(stim_SP_more, 1);
var stim_SP_less_untimed = jsPsych.randomization.repeat(stim_SP_less, 1);
var stim_VX_more_untimed = jsPsych.randomization.repeat(stim_VX_more, 1);
var stim_VX_less_untimed = jsPsych.randomization.repeat(stim_VX_less, 1);


//Now stack the "more" stimuli on top of each other -- we will call them in order later on
//Do this for both timed and untimed trials
//This randomizes whether SP or VX trials come first, but timed trials will always come after untimed, so we don't need to randomize that
if(which_first) {
  var stim_more_timed = stim_SP_more_timed.concat(stim_VX_more_timed);
  var stim_less_timed = stim_SP_less_timed.concat(stim_VX_less_timed);
  var stim_more_untimed = stim_SP_more_untimed.concat(stim_VX_more_untimed);
  var stim_less_untimed = stim_SP_less_untimed.concat(stim_VX_less_untimed);
}else{
  var stim_more_timed = stim_VX_more_timed.concat(stim_SP_more_timed);
  var stim_less_timed = stim_VX_less_timed.concat(stim_SP_less_timed);
  var stim_more_untimed = stim_VX_more_untimed.concat(stim_SP_more_untimed);
  var stim_less_untimed = stim_VX_less_untimed.concat(stim_SP_less_untimed);
}

//Randomize whether the "more" side is on the left or right for each block (1 will mean the more side is on the left)

var randLR1 = (Math.random() < 0.5);
var randLR2 = (Math.random() < 0.5);
var randLR3 = (Math.random() < 0.5);
var randLR4 = (Math.random() < 0.5);






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
  var suffix = {'success': 'su', 'failed': 'fa'}[status]
  return `${subject_id}${suffix}`;
}

function uploadSubjectStatus(status) {
  $.ajax({
    type: "POST",
    url: "/subject-status",
    data: JSON.stringify({subject_id, status}),
    contentType: "application/json"
  });
}


//////////////////////
/** Import Images **/
/////////////////////

var instruct_img = [];
for (var i = 0; i < 4; i++) {
  instruct_img.push('img/instruct' + i + '.jpg');
}

///////////////////////////////
/** Set Subject Parameters **/
//////////////////////////////

var subject_id = jsPsych.randomization.randomID(7);
var experiment_code = 'mc_';
subject_id = experiment_code + subject_id;

var action_top = jsPsych.randomization.sampleWithoutReplacement([1,2], 1)[0];

//if the untimed is first, or timed is first
var timed_first = jsPsych.randomization.sampleWithoutReplacement([0,1], 1)[0];

/////////////////////////
/** Add Subject Info **/
////////////////////////

jsPsych.data.addProperties({
  subject: subject_id,
  date: DATE,
  subid_date: subject_id + DATE,
  action_top: action_top,
  timed_first: timed_first
});

//////////////////
/** Experiment */
/////////////////

/** full screen */
var fullscreenEnter = {
  type: 'fullscreen',
  message: `<div> 
  Welcome to the study! For participating in this study you will receive 0.5 hour of REP credit. <br/>
  Before we begin, please close any unnecessary programs or applications on your computer. <br/>
  This will help the study run more smoothly.    <br/><br/>
   Also, please close any browser tabs that could produce popups or alerts that would interfere with the study.    <br/>
   Finally, once the study has started, <b>DO NOT EXIT</b> fullscreen mode or you will terminate the study and not receive credit.  
  <br><br/>
  The study will switch to full screen mode when you press the button below.  <br/>
  When you are ready to begin, press the button.</div>`,
  fullscreen_mode: true,
  on_finish: function () {
    document.body.style.cursor = 'none'
  }
};

//////////////////////////
/** Set-up Eyetracking */
/////////////////////////

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
            (1) Use your eyes to look around the screen and try to avoid moving your head. <br/>
            (2) Try to keep lights in front of you rather than behind you so that the webcam can clearly see your face. Avoid sitting with a window behind you. <br/>
            (3) After you have made these adjustments, check again that your face fits nicely within the box on the video feed and that the box is green. <br/>
            (4) Turn up the brightness on your screen.</div>
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
            In this part of the study, your task is to indicate what you SHOULD do in a series of hypothetical scenarios.
            <br><br/>
            In each scenario, you could do nothing and let one group of people or animals die, or you could take an action that saves that group but kills another group.
            <br><br/>
           When you are ready, press the  <b>SPACEBAR</b> to see an example scenario.  </div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
  on_finish: () => document.body.style.cursor = 'none'
}


/************************************/
/******** Instructions Setup *******/
/***********************************/

instructions_ex0 = ["In the example below, a bear is charging toward a group of five professional basketball players. There are two options for you: one shown on the left and one on the right. If you do nothing, the bear will maul these football players to death. Alternatively, you could push one professional football player in front of the bear, killing them but saving the five basketball players.<br><br/>"+
"You must indicate what you SHOULD do in this situation:  do nothing or push one professional football player in front of the bear.</br></br></br>"];
instructions_ex1 = ["In the example below, poison gas is moving towards twenty butterflies. If you do nothing, the gas will poison these butterflies to death. Alternatively, you could push a button to divert the poison gas toward fifty ladybugs, killing them but saving the twenty butterflies.<br><br/>"+
"You must indicate what you SHOULD do in this situation:  do nothing or push the button to divert the poison gas toward the fifty ladybugs.</br></br></br>"];
instructions_ex2 = ["In the example below, a runaway trolley is moving toward four navy veterans. If you do nothing, the trolley will crush the veterans to death. Alternatively, you could pull a lever to divert the trolley toward one army veteran, killing them but saving the navy veterans.<br><br/>"+
"You must indicate what you SHOULD do in this situation:  do nothing or pull the lever killing the one army veteran.</br></br></br>"];


//example 1
    var action_line1 = 'by pushing them in front of the bear';
    var inaction_line1 = 'by leaving them in the path of the bear';
    var fewer_line1 = 'you sacrifice one pro football player near you';
    var more_line1 = 'you watch a group of five pro basketball players die';

    //example 2 (catch trial)
    var action_line2 = 'by pushing a button to release poisonous gas';
    var inaction_line2 = 'by allowing them to be suffocated by poisonous gas';
    var fewer_line2 = 'you sacrifice a group of fifty lady bugs';
    var more_line2 = 'you watch a group of twenty butterflies die';

//example 3 
var action_line3 = 'by pulling a lever to divert the trolley';
var inaction_line3 = 'by leaving them in the path of the trolley';
var fewer_line3 = 'you sacrifice one army veteran near you';
var more_line3 = 'you watch a group of four navy veterans die';

if(action_top==1){
  var UL1 = action_line1;
  var UR1 = inaction_line1;
  var LL1 = fewer_line1;
  var LR1 = more_line1;

  var UL2 = inaction_line2;
  var UR2 = action_line2;
  var LL2 = more_line2;
  var LR2 = fewer_line2;

  var UL3 = inaction_line3;
  var UR3 = action_line3;
  var LL3 = more_line3;
  var LR3 = fewer_line3;

}else if(action_top==2){
  var LL1 = action_line1;
  var LR1 = inaction_line1;
  var UL1 = more_line1;
  var UR1 = fewer_line1;

  var LL2 = inaction_line2;
  var LR2 = action_line2;
  var UL2 = more_line2;
  var UR2 = fewer_line2;

  var LL3 = inaction_line3;
  var LR3 = action_line3;
  var UL3 = more_line3;
  var UR3 = fewer_line3;
};

ex1_image = '';
ex1_image += '<div class="grid-container-instr">';
ex1_image += `<div id="UL">${UL1}</div>`;
ex1_image += `<div id="UR">${UR1}</div>`;
ex1_image += `<div id="LL">${LL1}</div>`;
ex1_image += `<div id="LR">${LR1}</div>`;
ex1_image += '</div>';

ex2_image = '';
ex2_image += '<div class="grid-container-instr">';
ex2_image += `<div id="UL">${UL2}</div>`;
ex2_image += `<div id="UR">${UR2}</div>`;
ex2_image += `<div id="LL">${LL2}</div>`;
ex2_image += `<div id="LR">${LR2}</div>`;
ex2_image += '</div>';

ex3_image = '';
ex3_image += '<div class="grid-container-instr">';
ex3_image += `<div id="UL">${UL3}</div>`;
ex3_image += `<div id="UR">${UR3}</div>`;
ex3_image += `<div id="LL">${LL3}</div>`;
ex3_image += `<div id="LR">${LR3}</div>`;
ex3_image += '</div>';

var instructions_examples = {
  data:{
    screen_id: "instructions_examples"
  },
  type: "instructions",
  pages: [
    "<div></br><font size=100%; font color = 'green';>Example 1</font><br/><br><br/></div>"+
    [instructions_ex0]+
  [ex1_image]+
  "Please press the spacebar to see another example.",

  "<div></br><font size=100%; font color = 'green';>Example 2</font><br/><br><br/></div>"+
  [instructions_ex1]+
  [ex2_image]+
  "Please press the spacebar to see another example.",

  "<div></br><font size=100%; font color = 'green';>Example 3</font><br/><br><br/></div>"+
  [instructions_ex2]+
  [ex3_image]+
  "Please press the spacebar to continue."],

  allow_backward: false, 
  key_forward: 'spacebar'
};


var recalibrationInstruction = {
  type: "html-keyboard-response",
  on_start: function ()  {
    webgazer.resume(),
   document.body.style.cursor = 'none'
  },
  stimulus: `<div>We need to redo the calibration and validation before you begin. </br>
   As before, make sure you stare at each dot until it disappears and try not to move your head.</br>
   <br></br>
   Please press <b>SPACEBAR</b> when you are ready to begin.</div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
};

/////////////////////////////////////////////
/** Eyetracking Re-Calibration Parameters */
////////////////////////////////////////////

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
       Now, we will begin. Please keep your head still, otherwise we may have to redo the calibration and validation.<br/>
       There will be a break halfway through. During the break you can move your head if you need to.    <br><br/>
       Remember, you are indicating what you SHOULD do in each scenarios: <br/>
       If you think you SHOULD take the action on the left, press the <b><font color='green'>F</font></b> key; <br/>
       If you think you SHOULD take the action on the right, press the <b><font color='green'>J</font></b>  key;<br/>
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

var fixation1 = {
  type: 'html-keyboard-response',
  on_start: () => document.body.style.cursor = 'none',
  stimulus: '<span id="calibration_dot_instruction"></span>',
  choices: jsPsych.NO_KEYS,
  trial_duration: fixation_duration,
};

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
      if(Math.round(trial_count_overall%5) == 0){
          return true;
      } else {
          return false;
      }
  }
}

var if_node2 = {
  timeline: [fixation1],
  conditional_function: function(){
      if(Math.round(trial_count_overall%5) != 0){
          return true;
      } else {
          return false;
      }
  }
}

///////////////////////////////
/** Setup All Trial Counters */
///////////////////////////////

var prac_choice_count = 0;
var trial_count_overall = 0;

var trial_count_untimed1 = 0;
var trial_count_untimed2 = 0;

var trial_count_timed1 = 0;
var trial_count_timed2 = 0;


//all 26 scenarios randomized
var trial_order = jsPsych.randomization.shuffle(Array.from(Array(scenarios.length).keys()))

//var trial_order_untimed = jsPsych.randomization.shuffle(Array.from(Array(scenarios.length).keys()))
//var trial_order_timed = jsPsych.randomization.shuffle(Array.from(Array(scenarios.length).keys()))

//console.log(trial_order_untimed);
//console.log(trial_order_timed);

////////////////////////
/** Setup All Trials */
///////////////////////

//ntrials = 13
var act_side_untimed_vector = jsPsych.randomization.sampleWithReplacement([1,2], ntrials)
var act_side_timed_vector = jsPsych.randomization.sampleWithReplacement([1,2], ntrials)

var number_fewer_untimed_vector = [];
var number_more_untimed_vector = [];
var number_fewer_timed_vector = [];
var number_more_timed_vector = [];

//ntrials = 13
for (let i = 0; i < ntrials; i++) {
  number_fewer_untimed_vector.push(jsPsych.randomization.sampleWithoutReplacement([1,2,3,4,20], 1));
  if(number_fewer_untimed_vector[i]==1){
    number_more_untimed_vector.push(jsPsych.randomization.sampleWithReplacement([2,3,4,5,10,50], 1));
  }else if(number_fewer_untimed_vector[i]==2){
    number_more_untimed_vector.push(jsPsych.randomization.sampleWithReplacement([3,4,5,10,50], 1));
  }else if(number_fewer_untimed_vector[i]==3){
    number_more_untimed_vector.push(jsPsych.randomization.sampleWithReplacement([4,5,10,50], 1));
  }
  else if(number_fewer_untimed_vector[i]==4){
    number_more_untimed_vector.push(jsPsych.randomization.sampleWithReplacement([5,10,50], 1));
  }
  else{
    number_more_untimed_vector.push(jsPsych.randomization.sampleWithReplacement([50], 1));
  };
}

for (let i = 0; i < ntrials; i++) {
  number_fewer_timed_vector.push(jsPsych.randomization.sampleWithoutReplacement([1,2,3,4,20], 1));
  if(number_fewer_timed_vector[i]==1){
    number_more_timed_vector.push(jsPsych.randomization.sampleWithReplacement([2,3,4,5,10,50], 1));
  }else if(number_fewer_timed_vector[i]==2){
    number_more_timed_vector.push(jsPsych.randomization.sampleWithReplacement([3,4,5,10,50], 1));
  }else if(number_fewer_timed_vector[i]==3){
    number_more_timed_vector.push(jsPsych.randomization.sampleWithReplacement([4,5,10,50], 1));
  }
  else if(number_fewer_timed_vector[i]==4){
    number_more_timed_vector.push(jsPsych.randomization.sampleWithReplacement([5,10,50], 1));
  }
  else{
    number_more_timed_vector.push(jsPsych.randomization.sampleWithReplacement([50], 1));
  };
}

//10 percent catch trials
//1 = real trial; 0 = catch trial
var catch_trial_untimed = jsPsych.randomization.shuffle(Array(Math.round(ntrials-ntrials*.10)).fill(1).concat(Array(Math.round(ntrials*.10)).fill(0)))
var catch_trial_timed = jsPsych.randomization.shuffle(Array(Math.round(ntrials-ntrials*.10)).fill(1).concat(Array(Math.round(ntrials*.10)).fill(0)))

//items
var list_practice_pairs = [];
for(var i = 0; i < items_practice.length/2; i++)
     {
        list_practice_pairs.push(
        {M_index: items_practice[i].index,
          M_name: items_practice[i].name,
          M_singular: items_practice[i].singular,
          M_plural: items_practice[i].plural,
          M_general: items_practice[i].general,
          M_numbermax: items_practice[i].number_max,
          F_index: items_practice[i+3].index,
          F_name: items_practice[i+3].name,
          F_singular: items_practice[i+3].singular,
          F_plural: items_practice[i+3].plural,
          F_general: items_practice[i+3].general,
          F_numbermax: items_practice[i+3].number_max}
          );
  };

var list_all_pairsMF = [];
var list_all_pairsFM = [];
const distinctCat = [...new Set(items.map(x => x.category))];

for(var i = 0; i < distinctCat.length; i++){

  let items_this_cat = items.filter(obj => obj.category == distinctCat[i]);

     for(var j = 0; j < items_this_cat.length - 1; j++)
     {
      for (let k = j + 1; k < items_this_cat.length; k++) {

      list_all_pairsMF.push(
        {M_index: items_this_cat[j].index,
          M_name: items_this_cat[j].name,
          M_singular: items_this_cat[j].singular,
          M_plural: items_this_cat[j].plural,
          M_general: items_this_cat[j].general,
          //M_category: items_this_cat[j].category,
          M_numbermax: items_this_cat[j].number_max,
          F_index: items_this_cat[k].index,
          F_name: items_this_cat[k].name,
          F_singular: items_this_cat[k].singular,
          F_plural: items_this_cat[k].plural,
          F_general: items_this_cat[k].general,
          //F_category: items_this_cat[k].category,
          F_numbermax: items_this_cat[k].number_max}
          );

          list_all_pairsFM.push(
            {M_index: items_this_cat[k].index,
            M_name: items_this_cat[k].name,
            M_singular: items_this_cat[k].singular,
            M_plural: items_this_cat[k].plural,
            M_general: items_this_cat[k].general,
            //M_category: items_this_cat[k].category,
            M_numbermax: items_this_cat[k].number_max,
            F_index: items_this_cat[j].index,
            F_name: items_this_cat[j].name,
            F_singular: items_this_cat[j].singular,
            F_plural: items_this_cat[j].plural,
            F_general: items_this_cat[j].general,
            //F_category: items_this_cat[j].category,
            F_numbermax: items_this_cat[j].number_max}
        );
    }
  }
};

var list_all_pairs = list_all_pairsMF.concat(list_all_pairsFM);
list_all_pairs = jsPsych.randomization.sampleWithoutReplacement(list_all_pairs, ntrials*2);

console.log(list_all_pairs);




///////////////
/** Practice */
//////////////

var prac_choice = {
  timeline: [
    fixation1,
    {
      type: "moral-binary-choice",
      on_start: function(){
        document.body.style.cursor = 'none';
        //console.log(data);
      },
      overall_trial_number: 0,
      condition_trial_number: () => prac_choice_count+1,
      action: () =>   scenarios_practice[prac_choice_count],
      number_fewer: () => [1,20,1][prac_choice_count],
      number_more: () =>  [5,50,4][prac_choice_count],
      items: () => list_practice_pairs[prac_choice_count],
      action_top: action_top,
      act_side: () => [1,2,2][prac_choice_count],
      choices: ["F", "J"],
      realOrCatch: () => [1,0,1][prac_choice_count],
      timing_response: 0,
      doEyeTracking: true,
      realOrPrac: false,
      data: { choice_type: 'practice'},
      on_finish: () => prac_choice_count++,
    }
  ],
  loop_function: () => prac_choice_count < 3,
};


//////////////////////
/** Re-calibration */
////////////////////

var breaktime = {
  type: "html-keyboard-response",
  stimulus: `<div>Now, you can take a short break if you want. You can move your head during the break.</br>
             <br></br>
             When you are ready to continue, press the <b>SPACEBAR</b>.</div>`,
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
  As before, make sure you stare at each dot until it disappears and try not to move your head.</br>
   <br></br>
   Press the <b>SPACEBAR</b> when you are ready to begin.</div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
};



///////////////////
/** Real Trials */
//////////////////

var instructionsReal = {
  type: 'html-keyboard-response',
  stimulus: `<div> Now you can move on to the real choices. When you are ready, press the <b>SPACEBAR</b> to begin.</div>`,
  choices: ['spacebar'],
  post_trial_gap: 500,
}

///////////////
/** Untimed */
//////////////

var instructions_RealUntimed = {
  data:{
    screen_id: "instructions_real_untimed"
  },
  type: "instructions",
  pages: ["In this part of the study, you should carefully consider your choices.  "+  
  "Please press the spacebar to continue."
  ],
  allow_backward: false, 
  key_forward: 'spacebar'
}

var choices_untimed1 = {
  timeline: [
    //if_node1,
    //if_node2,
    {
      type: "dictator-binary-choice",
      on_start: function(){
        document.body.style.cursor = 'none';
      },
      overall_trial_number: () => trial_count_overall+1,
      condition_trial_number: () => trial_count_untimed1+1,
      trial_type: stim_more_untimed[trial_count_untimed1].type,
      more_side: randLR1,
      more_self_amount: stim_more_untimed[trial_count_untimed1].self_amt,
      more_other_amount: stim_more_untimed[trial_count_untimed1].other_amt,
      less_self_amount: stim_less_untimed[trial_count_untimed1].self_amt,
      less_other_amount: stim_less_untimed[trial_count_untimed1].other_amt,
      choices: ["F", "J"],
      timing_response: 0,
      doEyeTracking: true,
      realOrPrac: true,
      on_finish: function() {
        trial_count_untimed1++;
        trial_count_overall++;
      },
    }
  ],
  loop_function: () => trial_count_untimed1 < block_length,
};

var choices_untimed2 = {
  timeline: [
    //if_node1,
    //if_node2,
    {
      type: "dictator-binary-choice",
      on_start: function(){
        document.body.style.cursor = 'none';
      },
      overall_trial_number: () => trial_count_overall+1,
      condition_trial_number: () => trial_count_untimed2+1,
      trial_type: stim_more_untimed[trial_count_untimed2+block_length].type,
      more_side: randLR2,
      more_self_amount: stim_more_untimed[trial_count_untimed2+block_length].self_amt,
      more_other_amount: stim_more_untimed[trial_count_untimed2+block_length].other_amt,
      less_self_amount: stim_less_untimed[trial_count_untimed2+block_length].self_amt,
      less_other_amount: stim_less_untimed[trial_count_untimed2+block_length].other_amt,
      choices: ["F", "J"],
      timing_response: 0,
      doEyeTracking: true,
      realOrPrac: true,
      on_finish: function() {
        trial_count_untimed2++;
        trial_count_overall++;
      },
    }
  ],
  loop_function: () => trial_count_untimed2 < block_length,
};

///////////////
/** Timed */
//////////////

var instructions_RealTimed = {
  data:{
    screen_id: "instructions_real_timed"
  },
  type: "instructions",
  pages: ["In this part of the study, you should make your choices as  <font color = 'Tomato'>very quickly</font> as you can.  "+
  "You should try to make ALL of the decisions in just 1 minute.  This means that you have about 4 seconds per decision. <br/><br/>" + 
  "Please press the <b>SPACEBAR</b> to continue."
  ],
  allow_backward: false, 
  key_forward: 'spacebar'
}

var choices_timed1 = {
  timeline: [ 
    //if_node1,
    //if_node2,
    {
      type: "dictator-binary-choice",
      on_start: function(){
        document.body.style.cursor = 'none';
      },
      overall_trial_number: () => trial_count_overall+1,
      condition_trial_number: () => trial_count_timed1+1,
      trial_type: stim_more_timed[trial_count_timed1].type,
      more_side: randLR3,
      more_self_amount: stim_more_timed[trial_count_timed1].self_amt,
      more_other_amount: stim_more_timed[trial_count_timed1].other_amt,
      less_self_amount: stim_less_timed[trial_count_timed1].self_amt,
      less_other_amount: stim_less_timed[trial_count_timed1].other_amt,
      choices: ["F", "J"],
      timing_response: 0,
      doEyeTracking: true,
      realOrPrac: true,
      timed_trial: true,
      max_time: 2000,
      on_finish: function() {
        trial_count_timed1++;
        trial_count_overall++;
      },
    }
  ],
  loop_function: () => trial_count_timed1 < block_length,
};


var choices_timed2 = {
  timeline: [ 
    //if_node1,
    //if_node2,
    {
      type: "dictator-binary-choice",
      on_start: function(){
        document.body.style.cursor = 'none';
      },
      overall_trial_number: () => trial_count_overall+1,
      condition_trial_number: () => trial_count_timed2+1,
      trial_type: stim_more_timed[trial_count_timed2+block_length].type,
      more_side: randLR4,
      more_self_amount: stim_more_timed[trial_count_timed2+block_length].self_amt,
      more_other_amount: stim_more_timed[trial_count_timed2+block_length].other_amt,
      less_self_amount: stim_less_timed[trial_count_timed2+block_length].self_amt,
      less_other_amount: stim_less_timed[trial_count_timed2+block_length].other_amt,
      choices: ["F", "J"],
      timing_response: 0,
      doEyeTracking: true,
      realOrPrac: true,
      timed_trial: true,
      max_time: 2000,
      on_finish: function() {
        trial_count_timed2++;
        trial_count_overall++;
      },
    }
  ],
  loop_function: () => trial_count_timed2 < block_length,
};


//////////////////////
/** Order of Phases */
/////////////////////

var block_order = {
  timeline: [
    choices_untimed1,
    choices_timed1,
    choices_untimed2,
    choices_timed2
  ]
};

/***********************/
/******** Survey *******/
/***********************/

var demographic_survey = {
  type: 'survey-text',
  questions: [
    {prompt: "What is your gender?", rows: 1, columns:50 , required:true}, 
    {prompt: "What is your age?", rows: 1, columns: 50, required:true},
    {prompt: "What is your first language?", rows: 1, columns: 50, require: false},
    {prompt: "What is your name (only used to assign REP credit)?", rows: 1, columns: 50, require: false},
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
  pages: ["The study that you have just completed is concerned with how people make moral decisions in different hypothetical scenarios.  Specifically, we are interested in under which conditions people think it is morally permissible to take an action that will harm fewer people.  Across the different scenarios, we used different means of death (e.g., lion, gunman, etc.) and different actions you might have to take (e.g. performing surgery, pushing a button, pushing the person).  We are investigating whether these different factors influence decisions.</br></br>"+
  "We were also interested in seeing how people’s decisions change when are asked to make these decisions quickly.  Would they focus more on certain aspects of the decision than others?  We use eye-tracking to determine where people are looking as a proxy for what aspects of the decision they are considering at that moment.</br></br>"+
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
      //eyeTrackingInstruction1,eyeTrackingInstruction2, inital_eye_calibration,
      experimentOverview,
      //slideshow_instr, slideshow,
      //ratings_instr, ratings_task,
      //recalibration,
      //prac_choice,
      //instructionsReal
      block_order,
      demographic_survey,
      debriefing_page,
      success_guard
    ],
    on_trial_finish: function () {
      trialcounter = jsPsych.data.get().count();
     if(successExp) {
      closeFullscreen()
      document.body.style.cursor = 'pointer'
      survey_code = makeSurveyCode('pass');
      jsPsych.endExperiment(`<div>
      Thank you for your participation! You can close the browser to end the experiment now. </br>
                  The webcam will turn off when you close the browser. </div>`);
      }
      if (trialcounter == 10) {
        on_finish_callback();
        jsPsych.data.reset();
      }
    },
    preload: [instruct_img],
    on_finish: () => on_finish_callback(),
    on_close: () => on_finish_callback()

  });
};
