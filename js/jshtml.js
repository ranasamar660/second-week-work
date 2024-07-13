// html Questions
let questionsHtml = [
    {
      question: "What does Html stand for?",
      choices: [
        "Hyper Text Markup Language",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the purpose of the <head> element in an HTML document?",
      choices: [
          "To contain the main content of the document", 
          "To contain meta-information about the document",
          "To create hyperlinks",
          "To add images"
        ],
      correctAnswer: 1
    },
    
    {
        question: "Which HTML attribute is used to define inline styles?",
        choices: [
          "font",
          "styles",
          "style",
          "class"
        ],
        correctAnswer: 0
      },
      {
        question: "what is the HTML tag used to define a list item?",
        choices: [
          "ol",
          "ul",
          "li",
          "array"
        ],
        correctAnswer: 2
      },
      {
        question: "what is the HTML tag used to define a haeding?",
        choices: [
          "h1",
          "h6",
          "b",
          "body"
        ],
        correctAnswer: 0
      },
      {
        question: "what is the HTML tag used to define a image?",
        choices: [
          "img",
          "GIF",
          "url",
          "JPEG"
        ],
        correctAnswer: 0
      },
      {
        question: "what is the HTML tag used to define a paragraph?",
        choices: [
          "/p",
          "p",
          "b",
          "title"
        ],
        correctAnswer: 1
      },
      {
    question: "What is the purpose of the alt attribute in an <img> tag?",
    choices: [
       "To provide alternative text for the image",
       "To specify the image width",
       "To link to an external stylesheet",
       "To set the background color"
        ],
    correctAnswer: 0
  },

    {
        question: "What is the HTML tag used to define a table?",
        choices: [
          "list",
          "data",
          "table",
          "/table"
        ],
        correctAnswer: 2
      }
  ];
  // css Questions
  let questionsCss = [
    {
      question: "What does CSS stand for?",
      choices: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      correctAnswer: 0
    },
    {
      question: "How to give space between two elements?",
      choices: [
        "margin",
        "padding",
        "padding-top",
        "class"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the css property used to make text italic?",
      choices: [
        "font-style",
        "text-decoration",
        "font-weight",
        "text-align"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the CSS property used to hide an element ?",
      choices: [
        "margin",
        "display",
        "opacity",
        "background"
      ],
      correctAnswer: 1
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      choices: [
        "fgcolor",
        "text-color",
        "color",
        "font-color"
      ],
      correctAnswer: 2
    },
    {
      question: "Which CSS property is used to change the background-color of an element?",
      choices: [
        "background-color",
        "background",
        "background-image",
        "all above these"
      ],
      correctAnswer: 2
    },
    {
        question: "Which CSS property is used to change the  text size of an element?",
        choices: [
          "text-size",
          "size",
          "font-size",
          "font-color"
        ],
        correctAnswer: 0
      }
  ];
  // Js Questions
  let questionsJs = [
    {
      question: "What does JS stand for?",
      choices: [
        "Java Scripting",
        "JavaScript",
        "Json Style",
        "Jquery Syntax"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the correct syntax to access the first element of an array 'arr'?",
      choices: [
        "arr(0)",
        "arr[0]",
        "arr{0}",
        "arr=>0"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the method to add an element to the end of an array 'arr'?",
      choices: [
        "arr.push()",
        "arr.pop()",
        "arr.shift()",
        "arr.unshift()"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you create an array in JavaScript?",
      choices: [
        "let arr={}",
        "let arr=[]",
        "let arr{}",
        "let arr=="
      ],
      correctAnswer: 1
    },
    {
      question: "How do you access the length of an array in JavaScript?",
      choices: [
        "arr.length()",
        "arr.size",
        "arr.length",
        "arr.Length"
      ],
      correctAnswer: 2
    },
    {
      question: "How do you write a function in JavaScript?",
      choices: [
        "function greet(name) { return 'Hello, ' + name; }",
         "def greet(name): return 'Hello, ' + name",
          "function = greet(name) { return 'Hello, ' + name; }",
           "let greet = function(name) { return 'Hello, ' + name; };"
          ],
      correctAnswer: 0
    },
    {
      question: "How do you add an element to the end of an array in JavaScript?",
      choices: [
        "arr.append(4);",
         "arr.add(4);", 
         "arr.insert(4);", 
         "arr.push(4);"
        ],
      correctAnswer: 3
    },
    {
      question: "How do you declare a variable in JavaScript?",
      choices: [
        "variable x = 10;",
         "var x = 10;",
          "int x = 10;", 
          "let variable x = 10;"
        ],
      correctAnswer: 1
    },
  ];
  
  let currentQuestionIndex = 0;
  let countdownTimer;
  let globalTimer;
  let totalTime = 0;
  let countdownTime = 60;
  let correctAnswer=1;
  let wrongAnswer=1;
    
 
    
  // html question
  function startHtmlGlobalTimer() {
    globalTimer = setInterval(() => {
      totalTime++;
      updateGlobalTimer();
    }, 1000);
  }
  // css question
  function startCssGlobalTimer() {
    globalTimer = setInterval(() => {
      totalTime++;
      updateGlobalTimer();
    }, 1000);
  }
  // js question
  function startJsGlobalTimer() {
    globalTimer = setInterval(() => {
      totalTime++;
      updateGlobalTimer();
    }, 1000);
  }
  
  function updateGlobalTimer() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 30;
    document.querySelector('#globalTimer').textContent = `Total Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  // html question
  function startHtmlCountdown() {
    countdownTime = 60;
    countdownTimer = setInterval(() => {
      if (countdownTime > 0) {
        countdownTime--;
        updateHtmlCountdown();
      }
       else {
        htmlnextQuestion();
      }
    }, 1000);
  }
  // css question
  function startCssCountdown() {
    countdownTime = 60;
    countdownTimer = setInterval(() => {
      if (countdownTime > 0) {
        countdownTime--;
        updateCssCountdown();
      }
       else {
       cssnextQuestion();
      }
    }, 1000);
  }
   // js question
   function startJsCountdown() {
    countdownTime = 60;
    countdownTimer = setInterval(() => {
      if (countdownTime > 0) {
        countdownTime--;
        updateJsCountdown();
      }
       else {
        jsnextQuestion();
      }
    }, 1000);
  }
  // html question
  function updateHtmlCountdown() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 30;
    document.querySelector('#countdown').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  // css question
  function updateCssCountdown() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 30;
    document.querySelector('#countdown1').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  // js question
  function updateJsCountdown() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 30;
    document.querySelector('#countdown2').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  

// html question
  function loadHtmlQuestion() {
    if (currentQuestionIndex >= questionsHtml.length) {
      clearInterval(globalTimer);
      clearInterval(countdownTimer);
      alert("Exam completed!");
      return;
    }
    const questionData = questionsHtml[currentQuestionIndex];
    const questionContainer = document.getElementById('questionContainer');
    document.getElementById('questionContainer').style.background="black";
    document.getElementById('questionContainer').style.color="white";
    questionContainer.innerHTML = `
      <div class="question">${questionData.question}</div>
      <div class="choices">
        ${questionData.choices.map((choice, index) => `
          <div>
            <input type="radio" name="choice" id="choice${index}" value="${index}">
            <label for="choice${index}">${choice}</label>
          </div>
        `).join('')}
      </div>
    `;
  }
// css Questions
function loadCssQuestion() {
  if (currentQuestionIndex >= questionsCss.length) {
    clearInterval(globalTimer);
    clearInterval(countdownTimer);
    alert("Exam completed!");
    return;
  }
  const questionData = questionsCss[currentQuestionIndex];
  const questionContainer = document.getElementById('questionContainer');
  document.getElementById('questionContainer').style.background="red";
  questionContainer.innerHTML = `
    <div class="question">${questionData.question}</div>
    <div class="choices">
      ${questionData.choices.map((choice, index) => `
        <div>
          <input type="radio" name="choice" id="choice${index}" value="${index}">
          <label for="choice${index}">${choice}</label>
        </div>
      `).join('')}
    </div>
  `;
}
// js question
function loadJsQuestion() {
  if (currentQuestionIndex >= questionsJs.length) {
    clearInterval(globalTimer);
    clearInterval(countdownTimer);
    alert("Exam completed!");
    return;
  }
  const questionData = questionsJs[currentQuestionIndex];
  const questionContainer = document.getElementById('questionContainer');  
  document.getElementById('questionContainer').style.background="orange";
  questionContainer.innerHTML = `
    <div class="question">${questionData.question}</div>
    <div class="choices">
      ${questionData.choices.map((choice, index) => `
        <div>
          <input type="radio" name="choice" id="choice${index}" value="${index}">
          <label for="choice${index}">${choice}</label>
        </div>
      `).join('')}
    </div>
  `;
}

// html question
  function htmlnextQuestion() {
    clearInterval(countdownTimer);
    currentQuestionIndex++;
    loadHtmlQuestion();
    startHtmlCountdown();
  }
  function htmlbackQuestion() {
    clearInterval(countdownTimer);
    currentQuestionIndex--;
    loadHtmlQuestion();
    startHtmlCountdown();
  }
  // css question
  function cssnextQuestion() {
    clearInterval(countdownTimer);
    currentQuestionIndex++;
    loadCssQuestion();
    startCssCountdown();
  }
  function cssbackQuestion() {
    clearInterval(countdownTimer);
    currentQuestionIndex--;
    loadCssQuestion();
    startCssCountdown();
  }
   // js question
   function jsnextQuestion() {
    clearInterval(countdownTimer);
    currentQuestionIndex++;
    loadJsQuestion();
    startJsCountdown();
  }
  function jsbackQuestion() {
    clearInterval(countdownTimer);
    currentQuestionIndex--;
    loadJsQuestion();
    startJsCountdown();
  }
 
   // js question
   function initializejsExam() {
    document.querySelector('#JsQuestion').style.display="block";
    document.querySelector('#HtmlQuestion').style.display="none";
    document.querySelector('#CssQuestion').style.display="none";
    const wrapper =document.getElementById('wrap').style.display="block";
   
    loadJsQuestion();
  }
   // css question
   function initializeCssExam() {
    const wrapper =document.getElementById('wrap').style.display="block";
    document.querySelector('#CssQuestion').style.display="block";
    document.querySelector('#JsQuestion').style.display="none";
    document.querySelector('#HtmlQuestion').style.display="none";
    
    loadCssQuestion();
  }
  
  // html question
  function initializeHtmlExam() {
    const wrapper =document.getElementById('wrap').style.display="block";
    document.querySelector('#HtmlQuestion').style.display="block";
    document.querySelector('#CssQuestion').style.display="none";
    document.querySelector('#JsQuestion').style.display="none";
  
    loadHtmlQuestion();
  
    
    
  }
  
  function AllbtnExam(){
    document.querySelector('#allbtn').style.display="none";
    initializeHtmlExam();
    document.querySelector('#html-btn').style.display="block";
    initializeCssExam();
    document.querySelector('#css-btn').style.display="block";
    initializejsExam();
    document.querySelector('#js-btn').style.display="block";
    startHtmlGlobalTimer();
    startHtmlCountdown();
    const x = document.getElementById('startExam');
    x.style.display="none";
  }