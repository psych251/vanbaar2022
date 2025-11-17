/*
 * This file contains the main functions for running the study.
 */


// HTML for the landing page
function getLandingPageHTML() {
    return "<div class='prevent-select bounding-div'> \
                <p><u>Welcome to the Social Prediction Game!</u></p> \
                <p>This study consists of a task (the Social Prediction Game) \
                and several questionnaires.</p> \
                <p>We expect this study to take approximately 20 minutes to complete, \
                    including the time it takes to read these instructions. \
                </p> \
            </div>";
}


// HTML for consent form
function getConsentHTML() {
    return "<div class='prevent-select bounding-div'> \
                <p id='legal'><u>Consent to Participate</u></p> \
                <p id='legal'> By answering the following questions, you are participating in a \
                study being performed by cognitive scientists in the Stanford Department of Psychology. \
                If you have questions about this research, please contact us at \
                <b><a href='mailto://stanfordpsych251@gmail.com'>stanfordpsych251@gmail.com</a></b>. \
                You must be at least 18 years old to participate. Your participation in this research is voluntary. \
                You may decline to answer any or all of the following questions. You may decline further \
                participation, at any time, without adverse consequences. Your anonymity is assured; the \
                researchers who have requested your participation will not receive any personal information about you.</p> \
            </div> \
            <div class='prevent-select bounding-div'> \
                <p>Click 'Next' to continue participating in this study.</p> \
            </div>";
}


// HTML for fullscreen notification
function getFullscreenHTML() {
    var fullscreenHTML = "<div class='prevent-select bounding-div'> \
        <p>Let's get started!</p> \
        <p>The experiment will switch to fullscreen mode when you press the button below.</p> \
        </div>";
    return fullscreenHTML;
}


// get participant age
function getAgeHTML() {
    var ageHTML = "<div class='prevent-select bounding-div'> \
        <p>Age:&emsp;&emsp;&emsp;&emsp;&emsp;<input name='age' type='number' min=18 required/></p> \
        </div>";
    return ageHTML;
}


// get participant gender
function getGenderHTML() {
    var genderHTML = "<div class='prevent-select bounding-div'> \
        <p><label for='gender'>Gender:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</label>";
    genderHTML += "<select id='gender' name='gender' required>";
    genderHTML += "<option disabled selected></option>";
    genderHTML += "<option value='Male'>Male</option>";
    genderHTML += "<option value='Female'>Female</option>";
    genderHTML += "<option value='Non-binary'>Non-binary</option>";
    genderHTML += "<option value='Prefer Not to Say'>Prefer Not to Say</option></select></p></div>";
    return genderHTML;
}


// ask if any technical issues
function getTechnicalHTML() {
    var technicalHTML = "<div class='prevent-select bounding-div'> \
        <p>Did you encounter any technical issues? If so, can you please decribe them?</p>";
    technicalHTML += "<p><textarea id='technical' name='technical' rows='4' cols='80'></textarea></p></div>";
    return technicalHTML;
}


// ask if any feedback
function getFeedbackHTML() {
    var feedbackHTML = "<div class='prevent-select bounding-div'> \
        <p>Do you have any other suggestions, feedback, or question ideas for the researchers?</p>";
    feedbackHTML += "<p><textarea id='feedback' name='feedback' rows='4' cols='80'></textarea></p></div>";
    return feedbackHTML;
}


// provide completition message
function getCompletionHTML() {
    var completionHTML = `<div class='prevent-select bounding-div'> \
        <p>Thanks for participating! You are all done. <strong>Click Finish to submit this study to Prolific.</strong></p> \
        <p> The goal of this study was to learn how humans predict the behavior of others.</p> \
        <p>However, you were not actually predicting the behavior of real people. The behavior of the \
        each of the "participants" was artificially generated. \
        This is an attempt to replicate the findings from \
        <a href=https://www.nature.com/articles/s41562-021-01207-4> this paper</a> (van Baar et al., 2022). \
        </div>`;
    return completionHTML;
}


// provide conversation instructions
function getInstructionsHTML() {
    var instructionsHTML = "<div class='prevent-select bounding-div'> \
        <p><u>Social Prediction Game</u></p> \
        <p>This game is designed to study how we make predictions about the decisions \
        of other people. You will observe Decision Games played by pairs of other \
        people. These people took part in a previous experiment (in 2015) where \
        they played these Decision Games. These people could earn money in these \
        Decision Games: the more points they earned, the more money they earned. \
        Therefore, these people were motivated to play the Decision Games well. </p> \
        <p><u>Goal of the task</u></p> \
        <p>In the Social Prediction Game, your job is to predict the choices that \
        other people (the Players) have already made in these Decision Games. The \
        current Player you will be asked to follow will always be indicated by their \
        initials, for example A.B. You will see this Player play 16 Decision Games, \
        each time with a different Opponent. Keep in mind, these scenarios were really \
        played out between these people. Your job is to predict what action the current \
        Player (for example A.B.) will take in each scenario. You do NOT have to predict \
        how the Opponent will decide, just the current Player.</p> \
        <p><u>Earning a bonus</u></p> \
        <p>If you predict correctly what the Player does in each scenario, you will earn \
        a Point. The more Points you earn, the more money you will earn for doing \
        this study. You will see 4 different Players play 16 Decision Games each. \
        This means you can earn at most 64 points. Each Point is worth $0.01 in the \
        Social Prediction Game (your task). This will be added as a bonus to your base \
        payment of $4.00.</p> \
        <p><u>Next steps</u><p/> \
        <p>On the next screens, you will read more about the Decision Games and see \
        some examples. Afterwards, you will be quizzed to make sure you fully understand \
        the Social Prediction Game task. Then, you will be asked to indicate how you \
        yourself would play the Decision Game, if you were a Player. Finally, you will \
        start the actual task: the Social Prediction Game. After the game is over, \
        you will be asked to complete several questionnaires.</p> \
        <p> NOTE: You will need to answer all quiz questions correctly to start the task \
        and complete this study. </p> \
        </div>";
    return instructionsHTML;
}


// get all possible payoff matrices
function getAllPayoffMatrices(s_values, t_values) {
    const R = 10;
    const P = 5;
    const matrices = [];

    for (let s of s_values) {
        for (let t of t_values) {
            matrices.push({ R, P, S: s, T: t });
        }
    }

    return matrices;
}


// get payoff matrix HTML from given matrix
function getPayoffMatrixHTML(matrixArray, initialPair, colorPair, predictionGame) {
    
    // payoff matrix HTML for playing the social prediction game
    if (predictionGame == 1) {
        var payoffMatrixHTML = `<div style="flex:1; text-align:center;">
            <table style="border-collapse: collapse; margin:auto; text-align:center; font-size:16px;">
                <tr>
                    <th></th>
                    <th colspan="3" style="font-size:18px; padding:10px">Opponent Can Choose:</th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th style="border:1px solid black; padding:10px; color:${colorPair[0]}; font-size:18px;">${colorPair[0]}</th>
                    <th style="border:1px solid black; padding:10px; color:${colorPair[1]}; font-size:18px;">${colorPair[1]}</th>
                </tr>
                <tr>
                    <th rowspan="3" style="font-size:18px; padding:10px">${initialPair}<br>Can<br>Choose:</th>
                    <th style="border:1px solid black; padding:10px; color:${colorPair[0]}; font-size:18px;">${colorPair[0]}</th>
                    <td style="border:1px solid black; padding:10px; position:relative; width:140px; height:80px; font-size:16px;">
                        <span style="position:absolute; top:4px; right:4px; font-size:18px; padding:5px;">Opponent: ${matrixArray.R}</span>
                        <span style="position:absolute; bottom:4px; left:4px; font-size:18px; padding:5px;">${initialPair}: ${matrixArray.R}</span>
                    </td>
                    <td style="border:1px solid black; padding:10px; position:relative; width:140px; height:80px; font-size:18px;">
                        <span style="position:absolute; top:4px; right:4px; font-size:18px; padding:5px;">Opponent: ${matrixArray.T}</span>
                        <span style="position:absolute; bottom:4px; left:4px; font-size:18px; padding:5px;">${initialPair}: ${matrixArray.S}</span>
                    </td>
                </tr>
                <tr>
                    <th style="border:1px solid black; padding:10px; color:${colorPair[1]}; font-size:18px;">${colorPair[1]}</th>
                    <td style="border:1px solid black; padding:10px; position:relative; width:140px; height:80px; font-size:18px;">
                        <span style="position:absolute; top:4px; right:4px; font-size:18px; padding:5px;">Opponent: ${matrixArray.S}</span>
                        <span style="position:absolute; bottom:4px; left:4px; font-size:18px; padding:5px;">${initialPair}: ${matrixArray.T}</span>
                    </td>
                    <td style="border:1px solid black; padding:10px; position:relative; width:140px; height:80px; font-size:16px;">
                        <span style="position:absolute; top:4px; right:4px; font-size:18px; padding:5px;">Opponent: ${matrixArray.P}</span>
                        <span style="position:absolute; bottom:4px; left:4px; font-size:18px; padding:5px;">${initialPair}: ${matrixArray.P}</span>
                    </td>
                </tr>
            </table>
        </div>
        <p style="text-align:center; margin-top:20px; font-size:18px;">What do you think ${initialPair} will do?</p>`;
    }
    
    // payoff matrix HTML for when playing game oneself
    if (predictionGame == 0) {
        var payoffMatrixHTML = 
        `<div style="flex:1; text-align:center;">
            <table style="border-collapse: collapse; margin:auto; text-align:center; font-size:16px;">
                <tr>
                    <th></th>
                    <th colspan="3" style="font-size:18px; padding:10px">Opponent Can Choose:</th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th style="border:1px solid black; padding:10px; color:${colorPair[0]}; font-size:18px;">${colorPair[0]}</th>
                    <th style="border:1px solid black; padding:10px; color:${colorPair[1]}; font-size:18px;">${colorPair[1]}</th>
                </tr>
                <tr>
                    <th rowspan="3" style="font-size:18px; padding:10px">You<br>Can<br>Choose:</th>
                    <th style="border:1px solid black; padding:10px; color:${colorPair[0]}; font-size:18px;">${colorPair[0]}</th>
                    <td style="border:1px solid black; padding:10px; position:relative; width:140px; height:80px; font-size:16px;">
                        <span style="position:absolute; top:4px; right:4px; font-size:18px; padding:5px;">Opponent: ${matrixArray.R}</span>
                        <span style="position:absolute; bottom:4px; left:4px; font-size:18px; padding:5px;">You: ${matrixArray.R}</span>
                    </td>
                    <td style="border:1px solid black; padding:10px; position:relative; width:140px; height:80px; font-size:18px;">
                        <span style="position:absolute; top:4px; right:4px; font-size:18px; padding:5px;">Opponent: ${matrixArray.T}</span>
                        <span style="position:absolute; bottom:4px; left:4px; font-size:18px; padding:5px;">You: ${matrixArray.S}</span>
                    </td>
                </tr>
                <tr>
                    <th style="border:1px solid black; padding:10px; color:${colorPair[1]}; font-size:18px;">${colorPair[1]}</th>
                    <td style="border:1px solid black; padding:10px; position:relative; width:140px; height:80px; font-size:18px;">
                        <span style="position:absolute; top:4px; right:4px; font-size:18px; padding:5px;">Opponent: ${matrixArray.S}</span>
                        <span style="position:absolute; bottom:4px; left:4px; font-size:18px; padding:5px;">You: ${matrixArray.T}</span>
                    </td>
                    <td style="border:1px solid black; padding:10px; position:relative; width:140px; height:80px; font-size:16px;">
                        <span style="position:absolute; top:4px; right:4px; font-size:18px; padding:5px;">Opponent: ${matrixArray.P}</span>
                        <span style="position:absolute; bottom:4px; left:4px; font-size:18px; padding:5px;">You: ${matrixArray.P}</span>
                    </td>
                </tr>
            </table>
        </div>
        <p style="text-align:center; margin-top:20px; font-size:18px;">What do you choose?</p>`;  
    };
    return payoffMatrixHTML;
}


// shuffle an array using Fisher-Yates Shuffle
// source: https://www.geeksforgeeks.org/javascript/how-to-shuffle-an-array-using-javascript/
function shuffleArray(array) {

	// iterate over the array in reverse order
	for (let i = array.length - 1; i > 0; i--) {

		// generate random index
		const j = Math.floor(Math.random() * (i + 1));

		// swap elements
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}


// get array of all possible stimuli
function getStimuliArray() {

    // get matrices and their HTML
    const matrices = getAllPayoffMatrices(s_values, t_values);
        const stimuli = matrices.map((matrixArray) => ({
            trial_matrix: matrixArray,
            matrixHTML: getPayoffMatrixHTML(matrixArray, initialPair, colorPair, 1)
    }));

    // randomize matrix order
    randomizedMatrices = shuffleArray(stimuli);

    return randomizedMatrices;
}


// get true player choice from a given matrix and player type
function getPlayerChoice(matrixArray, playerType) {
    let CorrAns;

    if (playerType == 'opt_nat') {
        if (matrixArray.T >= 12) {
            CorrAns = 'def';
        }
        else {
            CorrAns = 'coop';
        }
    }
    if (playerType == 'pess_nat') {
        if (matrixArray.S >= 7) {
            CorrAns = 'coop';
        }
        else {
            CorrAns = 'def';
        }
    }
    if (playerType == 'opt_inv') {
        if (matrixArray.T >= 12) {
            CorrAns = 'coop';
        }
        else {
            CorrAns = 'def';
        }
    }
    if (playerType == 'pess_inv') {
        if (matrixArray.S >= 7) {
            CorrAns = 'def';
        }
        else {
            CorrAns = 'coop';
        }
    }
    
    return CorrAns;
}


// get array of all blocks 
function getBlocks() {
    
    // initialize array of blocks
    let blocks = [];

    // shuffle order of initials
    const shuffledInitials = shuffleArray(initials);

    // shuffle order of player types
    const shuffledPlayerTypes = shuffleArray(playerTypes);

    // shuffle order of color pairs
    const shuffledColorPairs = shuffleArray(colorPairs);

    // create four blocks containing all the relevant stimuli info
    for (let i = 0; i < 4; i++) {

        // select initials and player type
        const initialPair = shuffledInitials[i];
        const playerType = shuffledPlayerTypes[i];
        const colorPair = shuffledColorPairs[i];

        // Get payoff matrices
        const matrices = getAllPayoffMatrices(s_values, t_values);

        // create stimuli of payoff matrices, html, initial pair, and player type
        const stimuli = matrices.map((matrixArray) => ({
            trial_matrix: matrixArray,
            matrixHTML: getPayoffMatrixHTML(matrixArray, initialPair, colorPair, 1),
            initialPair: initialPair,
            playerType: playerType,
            corrAns: getPlayerChoice(matrixArray, playerType),
            colorPair: colorPair
        }));

        // Randomize matrix order
        const randomizedMatrices = shuffleArray(stimuli);

        // Append to blocks
        blocks.push(randomizedMatrices);
    }

    return blocks;
}


// get scale which asks how confident in prediction
function getConfidenceScale() {
  return `
    <div style="text-align: center; user-select: none;">
      Please rate how confident you are in your choice:<br>
      <div id="confidence-scale" style="
          display: flex; 
          justify-content: center; 
          gap: 8px; 
          max-width: 400px; 
          margin: 10px auto 0 auto;
      ">
        ${[...Array(10)].map((_, i) => `
          <div 
            class="confidence-square" 
            data-value="${i + 1}" 
            style="
              width: 30px; 
              height: 30px; 
              border: 2px solid #999; 
              cursor: pointer; 
              display: flex; 
              align-items: center; 
              justify-content: center;
              font-size: 14px;
              user-select: none;
              border-radius: 4px;
            "
            title="${i + 1}"
          >
            ${i + 1}
          </div>
        `).join('')}
      </div>
      <input type="hidden" name="confidence" id="confidence-input" value="">
    </div>
  `;
}


// get game type
function getGameType(matrixArray) {    
    let game;
    
    if (matrixArray.S >= 7) {

        // snowdrift game: high sucker's payoff and high temptation
        if (matrixArray.T >= 12) {
            game = 'SG';
        }

        // harmony game: high sucker's payoff and low temptation
        else {
            game = 'HG';
        }
    }
    else {

        // prisoner's dilemma: low sucker's payoff and high temptation
        if (matrixArray.T >= 12) {
            game = 'PD';
        }
        // stag hunt: low sucker's payoff and low temptation
        else {
            game = 'SH';
        }
    }
    return game;
}


// get one game of each type for participant to play themselves
function getOneGameEachType() {
    
    // get all payoff matrices
    const matrices = getAllPayoffMatrices(s_values, t_values);
    
    // shuffle array of all games
    const randomizedMatrices = shuffleArray(matrices);

    // initialize array of games to play
    const oneGameEachType = [];

    // initialize array of game types already in new array
    const gameTypesAlreadyIncluded = [];

    // randomly shuffle color pairs and pick one
    const shuffledColorPairs = shuffleArray(colorPairs);
    const colorPair = shuffledColorPairs[1];

    // loop over all possible matrices
    for (const matrix of randomizedMatrices) {
        
        // check game type
        const currentGameType = getGameType(matrix);

        // append matrix if a game of its type hasn't already been added
        if (!gameTypesAlreadyIncluded.includes(currentGameType)) {
            oneGameEachType.push({
                trial_matrix: matrix,
                matrixHTML: getPayoffMatrixHTML(matrix, null, colorPair, 0),
                colorPair: colorPair
            });
            gameTypesAlreadyIncluded.push(currentGameType);
        }
    }

    // return four matrices, one of each type
    return oneGameEachType;
}

// get instructions HTML explaining that participants will play four games themselves
function getGameInstructionsHTML() {
    var gameInstructionsHTML = "<div class='prevent-select bounding-div'> \
        <p>Before starting the Social Prediction Game, we want to learn how you \
        would play games like these.</p> \
        <p>In the following stage, you will see four such games.</p> \
        <p>For each one, please indicate which choice you would make.</p> \
        </div>";
    return gameInstructionsHTML;
}


// get instructions HTML for the comprehension check
function getComprehensionCheckInstructionsHTML() {
    var comprehensionCheckInstructionsHTML = "<div class='prevent-select bounding-div'> \
    '<p>On the next page, you will answer some questions to assess your understanding \
    of the Social Prediction Game.</p> \
    <p>If you answer incorrectly, you will be redirected back to the instructions to improve your understanding.</p> \
    </div>";
    return comprehensionCheckInstructionsHTML;
}


// get HTML for the comprehension check
function getComprehensionCheckHTML() {
    var comprehensionCheckHTML = `
        <div style = "text-align: left">
            <p><b>1.</b> What is your task in the Social Prediction Game?</p>
            <label><input type="radio" name="q1" value="wrong1"> Choose the option you would take if you were playing the game</label><br>
            <label><input type="radio" name="q1" value="correct"> Choose the option the anonymized participant chose</label><br>
            <label><input type="radio" name="q1" value="wrong2"> Choose a random option</label><br><br>

            <p><b>2.</b> How many options will you choose between in the Social Prediction Game?</p>
            <label><input type="radio" name="q2" value="wrong1"> 1 option</label><br>
            <label><input type="radio" name="q2" value="correct"> 2 options</label><br><br>

            <p><i>You must answer both questions correctly to continue.</i></p>
            <div id="feedback" style="color:red; font-weight:bold; display:none;">
            Some answers are incorrect — please review and try again.
            </div>
        </div>`;
    return comprehensionCheckHTML;
}


// get HTML for transition to social prediction game
function getTransitionToSocialPredictionGameHTML() {
    var transitionToSocialPredictionGameHTML = "<div class='prevent-select bounding-div'> \
        <p>Great job! Now you're ready to play the Social Prediction Game.</p> \
        <p>Proceed to the next page to begin.</p> \
        </div>";
    return transitionToSocialPredictionGameHTML;
}


// get HTML for transition between blocks
function getTransitionBetweenBlocksHTML() {
    var transitionToSocialPredictionGameHTML = "<div class='prevent-select bounding-div'> \
            <p>Great job! Now, you'll play the Social Prediction Game with the behavior \
            of a different previous participant. </p> \
            </div>";
        return transitionToSocialPredictionGameHTML;
}


// get HTML for participants to report prediction of player's strategy
function getStrategyPredictionHTML(initials) {
    var strategyPredictionHTML = `<div class='prevent-select bounding-div'> \
                <p>What do you think ${initials}'s strategy was?</p> \
                </div>`;
    strategyPredictionHTML += `<p><textarea id='strategyPrediction' name='strategyPrediction' rows='2' cols='80' required></textarea></p></div>`
            return strategyPredictionHTML;
}

// initialize bonus points
var bonusPoints = 0


// run the experiment
function initStudy() {
    logToBrowser('Initializing...', null);
    
    
    // get experiment ID information from URL
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var prolificID = urlParams.get('PROLIFIC_PID');   // ID unique to the participant
    var studyID = urlParams.get('STUDY_ID');          // ID unique to the study
    var sessionID = urlParams.get('SESSION_ID');      // ID unique to the particular submission
    logToBrowser('PROLIFIC_PID', prolificID);
    logToBrowser('STUDY_ID', studyID);
    logToBrowser('SESSION_ID', sessionID);


    // initialize jsPsych
    var jsPsych = initJsPsych({
        show_progress_bar: true
    });


    // add participant, subject, study, and session IDs
    jsPsych.data.addProperties({subjectID: jsPsych.randomization.randomID(10)}); // initialize subject ID
    jsPsych.data.addProperties({prolificID: prolificID});
    jsPsych.data.addProperties({studyID: studyID});
    jsPsych.data.addProperties({sessionID: sessionID});


    // initialize timeline
    var timeline = [];


    // initialize landing page, consent
    var landingPageHTML = getLandingPageHTML();
    var consentHTML = getConsentHTML();
    var landingPage = {
        type: jsPsychInstructions,
        show_clickable_nav: true,
        allow_keys: false,
        allow_backward: false,
        pages: [
            landingPageHTML,
            consentHTML
        ],
    };
    timeline.push(landingPage);

    
    // add fullscreen notification
    var fullscreenHTML = getFullscreenHTML();
    var fullscreenMsg = {
        type: jsPsychFullscreen,
        fullscreen_mode: true,
        message: fullscreenHTML
    };
    timeline.push(fullscreenMsg);

    
    // instructions about the game
    var instructionsHTML = getInstructionsHTML();
    var instructionsMsg = {
        type: jsPsychInstructions,
        show_clickable_nav: true,
        allow_backward: true,
        allow_keys: false,
        pages: [instructionsHTML]
    }


    // comprehension check transition page
    var comprehensionCheckInstructionsHTML = getComprehensionCheckInstructionsHTML();
    var comprehensionCheckInstructions = {
        type: jsPsychInstructions,
        show_clickable_nav: true,
        allow_backward: true,
        allow_keys: false,
        pages: [comprehensionCheckInstructionsHTML]
    }


    // comprehension check
    var comprehensionCheck = {
        type: jsPsychSurveyMultiChoice,
        questions: [{prompt: 'What is your task in the Social Prediction Game?',
                    options:
                        ['Choose the option you would take if you were playing the game',
                        'Choose the option the anonymized participant chose',
                        'Choose a random option'],
                    required: true,
                    name: 'task'},
                    {prompt: 'How many options will you choose between in the Social Prediction Game?',
                    options: ['1 option', '2 options'],
                    required: true,
                    name: 'numChoices'}],
        data: {task: 'comprehensionCheck'}
    }


    // loop: repeat instructions + comprehension until correct
    var comprehensionLoop = {
        timeline: [instructionsMsg, comprehensionCheckInstructions, comprehensionCheck],
        loop_function: function(data) {
            
            // extract last comprehension responses
            var last_trial = data.values().slice(-1)[0];
            var responses = last_trial.response;

            // define correct answers
            var correct = {
                task: 'Choose the option the anonymized participant chose',
                numChoices: '2 options'
            };

            // check if both are correct
            if (
                responses.task === correct.task && responses.num_options === correct.num_options
            ) {
                return false; // stop looping
            } else {
                alert('Some answers were incorrect. Please review the instructions again.');
                return true; // repeat loop
            }
        }
    };
    timeline.push(comprehensionLoop);
    

    // instructions before participants play decision games themselves
    var gameInstructionsHTML = getGameInstructionsHTML();
    var gameInstructionsMsg = {
        type: jsPsychInstructions,
        show_clickable_nav: true,
        allow_keys: false,
        pages: [gameInstructionsHTML],
    }
    timeline.push(gameInstructionsMsg);


    // participants play one game of each type themselves
    for (let matrix of getOneGameEachType()) {
        const play_game_trial = {
                type: jsPsychHtmlKeyboardResponse,
                stimulus: `
                    <div>
                    ${matrix.matrixHTML}
                    </div>
                    <div id="choice-buttons" style="
                    margin-top: 20px; 
                    display: flex; 
                    justify-content: center; 
                    gap: 20px; 
                    width: 100%;
                    ">
                    <button id="left-btn" style="padding:10px 20px;">${matrix.colorPair[0]}</button>
                    <button id="right-btn" style="padding:10px 20px;">${matrix.colorPair[1]}</button>
                    </div>
                    <div style="margin-top: 40px; text-align: center;">
                    <button id="submit-btn" style="padding: 10px 30px;" disabled>Submit</button>
                    </div>
                `,
                choices: "NO_KEYS",
                on_load: function() {

                    let selectedChoice = null;
                    let GivenAns = null;

                    const leftBtn = document.getElementById('left-btn');
                    const rightBtn = document.getElementById('right-btn');
                    const submitBtn = document.getElementById('submit-btn');

                    // check if both prediction and confidence are made
                    function canSubmit() {
                        return selectedChoice !== null;
                    }

                    // enable or disable submit button based on selections
                    function updateSubmitButton() {
                        submitBtn.disabled = !canSubmit();
                    }
                    
                    function updateSelected(choice) {
                        selectedChoice = choice;

                        // Reset both buttons
                        leftBtn.style.backgroundColor = '';
                        leftBtn.style.color = '';
                        rightBtn.style.backgroundColor = '';
                        rightBtn.style.color = '';

                        // Highlight selected
                        if (choice === matrix.colorPair[0]) {
                            leftBtn.style.backgroundColor = matrix.colorPair[0];
                            leftBtn.style.color = 'white';
                            GivenAns = 'coop';
                        } else if (choice === matrix.colorPair[1]) {
                            rightBtn.style.backgroundColor = matrix.colorPair[1];
                            rightBtn.style.color = 'white';
                            GivenAns = 'def';
                        }

                        updateSubmitButton();
                    }

                    leftBtn.addEventListener('click', () => updateSelected(matrix.colorPair[0]));
                    rightBtn.addEventListener('click', () => updateSelected(matrix.colorPair[1]));

                    // enable submit button if prediction made and confidence value chosen
                    if (selectedChoice !== null) {
                            submitBtn.disabled = false 
                    }

                    submitBtn.addEventListener('click', () => {

                        // finish the trial, logging choice
                        jsPsych.finishTrial({
                            choice: selectedChoice,
                            GivenAns: GivenAns,
                        });
                    });
                },
                data: {
                    task: 'playOwnGame',
                    Matrix: matrix.trial_matrix,
                    S: matrix.trial_matrix.S,
                    T: matrix.trial_matrix.T,
                    R: matrix.trial_matrix.R,
                    P: matrix.trial_matrix.P, 
                    GameType: getGameType(matrix.trial_matrix)
                },
                on_finish: function(data) {
                    console.log("Trial data:", data);
            }
        }
        timeline.push(play_game_trial);
    };

    // transition to social prediction game
    var transitionToSocialPredictionGameHTML = getTransitionToSocialPredictionGameHTML();
    var transitionToSocialPredictionGameMsg = {
        type: jsPsychInstructions,
        show_clickable_nav: true,
        allow_backward: true,
        allow_keys: false,
        pages: [transitionToSocialPredictionGameHTML]
    }
    timeline.push(transitionToSocialPredictionGameMsg);


    // create randomized blocks
    var blocks = getBlocks();


    // loop over array of blocks
    for (let block of blocks) {

        // within block, loop over array of trials
        for (let matrix of block) {  
            const game_trial = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: `
                <div>
                ${matrix.matrixHTML}
                </div>
                <div id="choice-buttons" style="
                margin-top: 20px; 
                display: flex; 
                justify-content: center; 
                gap: 20px; 
                width: 100%;
                ">
                <button id="left-btn" style="padding:10px 20px;">${matrix.colorPair[0]}</button>
                <button id="right-btn" style="padding:10px 20px;">${matrix.colorPair[1]}</button>
                </div>
                <div style="margin-top: 30px;">
                ${getConfidenceScale()}
                </div>
                <div style="margin-top: 40px; text-align: center;">
                <button id="submit-btn" style="padding: 10px 30px;" disabled>Submit</button>
                </div>
            `,
            choices: "NO_KEYS",
            on_load: function() {

                let selectedChoice = null;
                let GivenAns = null;

                const leftBtn = document.getElementById('left-btn');
                const rightBtn = document.getElementById('right-btn');
                const submitBtn = document.getElementById('submit-btn');

                // check if both prediction and confidence are recorded
                function canSubmit() {
                    return selectedChoice !== null && confidenceInput.value;
                }

                // enable or disable submit button based on selections
                function updateSubmitButton() {
                    submitBtn.disabled = !canSubmit();
                }
                
                function updateSelected(choice) {
                    selectedChoice = choice;

                    // reset both buttons
                    leftBtn.style.backgroundColor = '';
                    leftBtn.style.color = '';
                    rightBtn.style.backgroundColor = '';
                    rightBtn.style.color = '';

                    // highlight selected button
                    if (choice === matrix.colorPair[0]) {
                        leftBtn.style.backgroundColor = matrix.colorPair[0];
                        leftBtn.style.color = 'white';
                        GivenAns = 'coop';
                    } else if (choice === matrix.colorPair[1]) {
                        rightBtn.style.backgroundColor = matrix.colorPair[1];
                        rightBtn.style.color = 'white';
                        GivenAns = 'def';
                    }
                    updateSubmitButton();
                }

                leftBtn.addEventListener('click', () => updateSelected(matrix.colorPair[0]));
                rightBtn.addEventListener('click', () => updateSelected(matrix.colorPair[1]));

                // confidence squares handling
                const squares = document.querySelectorAll('.confidence-square');
                const confidenceInput = document.getElementById('confidence-input');

                squares.forEach(square => {
                    square.addEventListener('click', () => {
                        // clear previous highlights
                        squares.forEach(sq => {
                            sq.style.borderColor = '#999';
                            sq.style.backgroundColor = '';
                            sq.style.color = 'black';
                    });
                
                    // highlight clicked square
                    square.style.borderColor = '#007BFF';
                    square.style.backgroundColor = '#cce5ff';
                    square.style.color = '#004085';

                    // set hidden input value
                    confidenceInput.value = square.dataset.value;
                    updateSubmitButton();
                    });
                }); 

                // enable submit button if prediction made and confidence value chosen
                if (selectedChoice !== null && confidenceInput.value) {
                        submitBtn.disabled = false; 
                }

                submitBtn.addEventListener('click', () => {

                    // get confidence value from hidden input
                    const confidenceValue = confidenceInput.value || null;

                    // check that prediction and confidence value chosen
                    if (!selectedChoice || !confidenceValue) {
                        alert(`Please make both a color choice and a confidence selection before submitting.`);
                        return;
                    }
                    
                    // check if participant was correct
                    const CorrAns = matrix.corrAns;
                    const ScoreNum = (GivenAns === CorrAns) ? 1 : 0;


                    // finish the trial, logging prediction and confidence value
                    jsPsych.finishTrial({
                        choice: selectedChoice,
                        confidence: confidenceValue,
                        GivenAns: GivenAns,
                        ScoreNum: ScoreNum
                    });
                });
            },
            data: {
                task: 'socialPredictionGame',
                Matrix: matrix.trial_matrix,
                S: matrix.trial_matrix.S,
                T: matrix.trial_matrix.T,
                R: matrix.trial_matrix.R,
                P: matrix.trial_matrix.P, 
                Player: matrix.initialPair,
                GameType: getGameType(matrix.trial_matrix),
                PlayerType: matrix.playerType,
                CorrAns: matrix.corrAns
            },
            on_finish: function(data) {
                console.log("Trial data:", data);
            }
            };

            // participant receives feedback
            const feedback_trial = {
                type: jsPsychHtmlKeyboardResponse,
                stimulus: function() {
                    
                    // get prediction from trial
                    const GivenAns = jsPsych.data.getLastTrialData().values()[0].GivenAns;

                    // get correct answer
                    const CorrAns = matrix.corrAns;

                    // compare prediction against correct answer
                    const ScoreNum = GivenAns === CorrAns;

                    // if participant was correct, add point
                    if (ScoreNum == 1) {
                        bonusPoints += 1
                    }

                    let feedbackText = ScoreNum
                    ? `<p style="color:green; font-size:24px;">Correct!</p><p>You now have ${bonusPoints} points.</p>`
                    : `<p style="color:red; font-size:24px;">Incorrect</p><p>You still have ${bonusPoints} points.</p>`;

                    return `
                    <div style="text-align:center;">
                        ${feedbackText}
                        <p> Press any key to continue. </p>
                    </div>
                    `;
                },
                choices: "ALL_KEYS",
                data: {task: 'feedbackTrial'}
            };
            
            // push trial
            timeline.push(game_trial);

            // push feedback page
            timeline.push(feedback_trial);
        }
        
        // particpant's report what they think a player's strategy was
        var predictStrategyHTML = getStrategyPredictionHTML(block[0].initialPair);
        var predictStrategyMsg = {
            type: jsPsychSurveyHtmlForm,
            html: predictStrategyHTML,
            data: {task: 'strategyPrediction'}
        }
        timeline.push(predictStrategyMsg);

        // transition between blocks
        if (block != blocks[3]) {
            var transitionBetweenBlocksHTML = getTransitionBetweenBlocksHTML();
            var transitionBetweenBlocksMsg = {
                type: jsPsychInstructions,
                show_clickable_nav: true,
                allow_keys: false,
                pages: [transitionBetweenBlocksHTML]
            }
            timeline.push(transitionBetweenBlocksMsg);
        }
    }
    

    // add bonus points received to data
    jsPsych.data.addProperties({finalBonusPoints: bonusPoints})


    // demographics
    var ageHTML = getAgeHTML();
    var genderHTML = getGenderHTML();
    var demographicMsg = {
        type: jsPsychSurveyHtmlForm,
        preamble: "<div class='prevent-select'> \
            <p><b>Thank you for completing the experiment! \
            Please answer the following demographic questions:</b></p> \
            </div>",
        html:  ageHTML + genderHTML,
        data: {task: 'demographics'}
    }
    timeline.push(demographicMsg);


    // technical issues and empty space
    var technicalHTML = getTechnicalHTML();
    var feedbackHTML = getFeedbackHTML();
    var technicalMsg = {
        type: jsPsychSurveyHtmlForm,
        preamble: "<div class='prevent-select'> \
            <p><b>Please answer the following questions about the experiment:</b></p> \
            </div>",
        html: technicalHTML + feedbackHTML,
        data: {task: 'technical'}
    };
    timeline.push(technicalMsg);
    

    // save trial data to DataPipe
    var trialDataFile = `${jsPsych.data.dataProperties.subjectID}_trials.csv`; // .json
    var saveTrialData = {
        type: jsPsychPipe,
        action: 'save',
        experiment_id: experimentIdOSF, // global variable
        filename: trialDataFile,
        data_string: ()=>jsPsych.data.get().csv(),
        on_finish: console.log('Data logged!')
    };
    timeline.push(saveTrialData); // Uncomment this when ready to send data to DataPipe


    // add completion page, re-direct to Prolific for payment
    var completionHTML = getCompletionHTML();
    var completionMsg = {
        type: jsPsychInstructions,
        pages: [completionHTML],
        show_clickable_nav: true,
        allow_backward: false,
        delay: false,
        button_label_next: 'Finish',

        // on_finish: function() {
        //   window.onbeforeunload = null; // prevent warning message on redirect
        //   window.open(prolificCompletionURL, '_self');
        // }
    };
    timeline.push(completionMsg);


    // run experiment
    jsPsych.run(timeline);
}