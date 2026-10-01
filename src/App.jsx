import { useState } from "react";
import "./App.css";

const questions = [
    {
        id: 1,
        question: "A train passes a platform in 36 seconds and a person standing beside it in 20 seconds. At 54 km/h, how long is the platform?",
        options: ["120 m", "240 m", "300 m", "360 m"],
        correctIndex: 1,
        explanation: "54 km/h is 15 m/s. The train is 15 x 20 = 300 m long. In 36 seconds it travels 540 m, so the platform is 540 - 300 = 240 m.",
    },
    {
        id: 2,
        question: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        correctIndex: 2,
        explanation: "15% of 200 is 0.15 x 200 = 30.",
    },
    {
        id: 3,
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctIndex: 2,
        explanation: "2 is the smallest prime number and the only even prime.",
    },
    {
        id: 4,
        question: "A car travels 60 km in 1.5 hours. What is its average speed?",
        options: ["30 km/h", "35 km/h", "40 km/h", "45 km/h"],
        correctIndex: 2,
        explanation: "Average speed is distance divided by time: 60 / 1.5 = 40 km/h.",
    },
    {
        id: 5,
        question: "What is the next number in the series: 2, 4, 8, 16, ...?",
        options: ["24", "28", "32", "36"],
        correctIndex: 2,
        explanation: "Each number doubles. The next number is 16 x 2 = 32.",
    },
    {
        id: 6,
        question: "An item costs Rs. 500 and sells for Rs. 550. What is the profit percentage?",
        options: ["5%", "8%", "10%", "12%"],
        correctIndex: 2,
        explanation: "The profit is Rs. 50. Divide by the Rs. 500 cost price and multiply by 100: 10%.",
    },
    {
        id: 7,
        question: "Which word is the odd one out: Apple, Banana, Carrot, Mango?",
        options: ["Apple", "Banana", "Carrot", "Mango"],
        correctIndex: 2,
        explanation: "Apple, banana and mango are fruits. Carrot is a vegetable.",
    },
    {
        id: 8,
        question: "If today is Monday, what day will it be after 10 days?",
        options: ["Wednesday", "Thursday", "Friday", "Saturday"],
        correctIndex: 1,
        explanation: "Ten days is one week plus three days. Three days after Monday is Thursday.",
    },
    {
        id: 9,
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        correctIndex: 2,
        explanation: "5 + 7 = 12.",
    },
    {
        id: 10,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctIndex: 1,
        explanation: "Iron-rich dust gives Mars its distinctive reddish appearance.",
    },
    {
        id: 11,
        question: "How many days are there in a leap year?",
        options: ["364", "365", "366", "367"],
        correctIndex: 2,
        explanation: "A leap year has 366 days because February has 29 days.",
    },
    {
        id: 12,
        question: "What is the capital of Pakistan?",
        options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
        correctIndex: 2,
        explanation: "Islamabad is the capital city of Pakistan.",
    },
    {
        id: 13,
        question: "Which of these is an even number?",
        options: ["7", "9", "12", "15"],
        correctIndex: 2,
        explanation: "12 is divisible by 2 with no remainder, so it is even.",
    },
    {
        id: 14,
        question: "What is 9 x 3?",
        options: ["18", "24", "27", "30"],
        correctIndex: 2,
        explanation: "9 multiplied by 3 equals 27.",
    },
    {
        id: 15,
        question: "Which is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctIndex: 3,
        explanation: "The Pacific Ocean is the largest and deepest ocean on Earth.",
    },
    {
        id: 16,
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correctIndex: 1,
        explanation: "A hexagon is a polygon with six sides.",
    },
    {
        id: 17,
        question: "What is the opposite of 'hot'?",
        options: ["Warm", "Cool", "Cold", "Mild"],
        correctIndex: 2,
        explanation: "Cold is the direct opposite of hot.",
    },
    {
        id: 18,
        question: "Which gas do humans need to breathe to survive?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correctIndex: 1,
        explanation: "Our cells use oxygen to release energy from food.",
    },
    {
        id: 19,
        question: "What is 100 divided by 4?",
        options: ["20", "25", "30", "35"],
        correctIndex: 1,
        explanation: "100 / 4 = 25.",
    },
    {
        id: 20,
        question: "Which is the first month of the year?",
        options: ["February", "March", "January", "December"],
        correctIndex: 2,
        explanation: "January is the first month in the Gregorian calendar.",
    },
    {
        id: 21,
        question: "What is 12 squared?",
        options: ["124", "144", "154", "164"],
        correctIndex: 1,
        explanation: "12 squared means 12 x 12, which equals 144.",
    },
    {
        id: 22,
        question: "Which is the smallest continent by land area?",
        options: ["Europe", "Antarctica", "Australia", "South America"],
        correctIndex: 2,
        explanation: "Australia is the smallest continent by land area.",
    },
    {
        id: 23,
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Helium"],
        correctIndex: 1,
        explanation: "Plants absorb carbon dioxide and use light energy to turn it into sugars.",
    },
    {
        id: 24,
        question: "What is the angle between the hands of a clock at 3 o'clock?",
        options: ["45 degrees", "60 degrees", "90 degrees", "120 degrees"],
        correctIndex: 2,
        explanation: "Each hour mark is 30 degrees apart. At 3 o'clock, the hands are three marks apart: 3 x 30 = 90 degrees.",
    },
];

const challenges = [
    { count: 10, name: "Quick warm-up", detail: "A little brain stretch", time: "~5 min" },
    { count: 20, name: "The full mix", detail: "A balanced challenge", time: "~10 min" },
    { count: 24, name: "Go all in", detail: "Every question, no shortcuts", time: "~12 min" },
];

export default function App() {
    const [view, setView] = useState("home");
    const [challengeLength, setChallengeLength] = useState(10);
    const [sessionQuestions, setSessionQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});

    const answeredCount = Object.keys(answers).length;
    const correctCount = sessionQuestions.filter(
        (question) => answers[question.id] === question.correctIndex
    ).length;
    const current = sessionQuestions[currentIndex];

    function startQuiz() {
        setSessionQuestions(questions.slice(0, challengeLength));
        setAnswers({});
        setCurrentIndex(0);
        setView("quiz");
    }

    function selectOption(optionIndex) {
        setAnswers((previousAnswers) => ({
            ...previousAnswers,
            [current.id]: optionIndex,
        }));
    }

    function finishQuiz() {
        setView("results");
    }

    function returnHome() {
        setView("home");
    }

    return (
        <main className="appShell">
            <header className="topbar">
                <button className="brand" onClick={returnHome} aria-label="Mindful home">
                    <span className="brandMark" aria-hidden="true">m.</span>
                    <span>mindful<span className="brandDot">.</span></span>
                </button>
                <div className="topbarNote"><span className="statusDot" /> A small practice for a sharper mind</div>
                <span className="freeLabel">ALWAYS FREE</span>
            </header>

            {view === "home" && (
                <section className="homeLayout" aria-labelledby="home-title">
                    <div className="welcomePanel">
                        <p className="eyebrow"><span className="eyebrowLine" /> YOUR DAILY MOMENT OF CURIOSITY</p>
                        <h1 id="home-title">Make room<br />for <em>a little</em><br />wonder.</h1>
                        <p className="welcomeCopy">A thoughtful mix of questions to wake up what you know and discover something new.</p>
                        <div className="welcomeMeta">
                            <span><strong>24</strong> hand-picked questions</span>
                            <span className="metaDivider" />
                            <span>Knowledge · Logic · Nature</span>
                        </div>
                        <div className="decorativeStamp" aria-hidden="true"><span>STAY<br />CURIOUS</span><i>✳</i></div>
                    </div>

                    <div className="challengePanel">
                        <div className="panelHeading">
                            <div>
                                <p className="eyebrow">PICK YOUR PACE</p>
                                <h2>How far today?</h2>
                            </div>
                            <span className="sparkle" aria-hidden="true">✳</span>
                        </div>
                        <div className="challengeList" role="radiogroup" aria-label="Choose quiz length">
                            {challenges.map((challenge, index) => (
                                <button
                                    key={challenge.count}
                                    className={`challengeOption${challengeLength === challenge.count ? " challengeSelected" : ""}`}
                                    role="radio"
                                    aria-checked={challengeLength === challenge.count}
                                    onClick={() => setChallengeLength(challenge.count)}
                                >
                                    <span className={`challengeNumber challengeNumber${index + 1}`}>0{index + 1}</span>
                                    <span className="challengeText"><strong>{challenge.name}</strong><small>{challenge.detail}</small></span>
                                    <span className="challengeTime">{challenge.count} Q<span>{challenge.time}</span></span>
                                </button>
                            ))}
                        </div>
                        <button className="primaryButton startButton" onClick={startQuiz}>
                            Start your quiz <span aria-hidden="true">↗</span>
                        </button>
                        <p className="panelFootnote">No timer. No pressure. Just you and your curiosity.</p>
                    </div>
                </section>
            )}

            {view === "quiz" && current && (
                <section className="quizLayout" aria-label="Quiz">
                    <div className="quizMain">
                        <div className="quizTopline">
                            <button className="textButton" onClick={returnHome}>← <span>Exit quiz</span></button>
                            <span className="quizTag">MIXED PRACTICE</span>
                            <span className="answeredLabel">{answeredCount} of {sessionQuestions.length} answered</span>
                        </div>
                        <div className="progressTrack" aria-label={`${currentIndex + 1} of ${sessionQuestions.length} questions`}>
                            <span style={{ width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%` }} />
                        </div>
                        <div className="questionContent">
                            <p className="questionKicker">QUESTION <span>{String(currentIndex + 1).padStart(2, "0")}</span><i /> {sessionQuestions.length} TOTAL</p>
                            <h1 className="questionTitle">{current.question}</h1>
                            <p className="selectHint">Choose the best answer</p>
                            <div className="answerList">
                                {current.options.map((option, index) => (
                                    <button
                                        key={option}
                                        className={`answerOption${answers[current.id] === index ? " answerSelected" : ""}`}
                                        onClick={() => selectOption(index)}
                                        aria-pressed={answers[current.id] === index}
                                    >
                                        <span className="answerLetter">{String.fromCharCode(65 + index)}</span>
                                        <span>{option}</span>
                                        <span className="answerCheck" aria-hidden="true">{answers[current.id] === index ? "✓" : ""}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="quizFooter">
                            <button className="secondaryButton" onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))} disabled={currentIndex === 0}>← Previous</button>
                            <span className="footerProgress">{String(currentIndex + 1).padStart(2, "0")} <i>/</i> {String(sessionQuestions.length).padStart(2, "0")}</span>
                            {currentIndex === sessionQuestions.length - 1 ? (
                                <button className="primaryButton footerPrimary" onClick={finishQuiz}>See my results <span aria-hidden="true">↗</span></button>
                            ) : (
                                <button className="primaryButton footerPrimary" onClick={() => setCurrentIndex((index) => index + 1)}>Next question <span aria-hidden="true">→</span></button>
                            )}
                        </div>
                    </div>
                    <aside className="questionSidebar">
                        <div className="sidebarHeading"><div><p className="eyebrow">YOUR PROGRESS</p><h2>Question map</h2></div><span>{answeredCount}/{sessionQuestions.length}</span></div>
                        <p className="mapHint">Jump to any question</p>
                        <div className="questionMap">
                            {sessionQuestions.map((question, index) => (
                                <button
                                    key={question.id}
                                    className={`mapNumber${index === currentIndex ? " mapCurrent" : ""}${answers[question.id] !== undefined ? " mapAnswered" : ""}`}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`Go to question ${index + 1}${answers[question.id] !== undefined ? ", answered" : ", unanswered"}`}
                                    aria-current={index === currentIndex ? "step" : undefined}
                                >{String(index + 1).padStart(2, "0")}</button>
                            ))}
                        </div>
                        <div className="mapLegend"><span><i className="legendCurrent" /> Current</span><span><i className="legendAnswered" /> Answered</span></div>
                        <div className="sidebarTip"><span aria-hidden="true">✳</span><p>You can change an answer any time before you finish.</p></div>
                        <button className="finishLink" onClick={finishQuiz}>Finish quiz now <span aria-hidden="true">↗</span></button>
                    </aside>
                </section>
            )}

            {view === "results" && (
                <section className="resultsLayout" aria-labelledby="results-title">
                    <div className="resultsHero">
                        <p className="eyebrow"><span className="eyebrowLine" /> YOUR QUIZ IS COMPLETE</p>
                        <div className="scoreRow">
                            <div><h1 id="results-title">Nicely<br /><em>done.</em></h1><p className="resultsCopy">Every question is a chance to learn. Here's how this round went.</p></div>
                            <div className="scoreSeal"><span>YOUR SCORE</span><strong>{correctCount}<i>/{sessionQuestions.length}</i></strong><small>{Math.round((correctCount / sessionQuestions.length) * 100)}% correct</small></div>
                        </div>
                        <div className="resultsStats">
                            <div><strong>{correctCount}</strong><span>Correct</span></div>
                            <div><strong>{sessionQuestions.length - correctCount}</strong><span>To revisit</span></div>
                            <div><strong>{answeredCount}</strong><span>Answered</span></div>
                        </div>
                        <div className="resultsActions"><button className="primaryButton" onClick={startQuiz}>Try again <span aria-hidden="true">↗</span></button><button className="secondaryButton" onClick={returnHome}>Choose another length</button></div>
                    </div>
                    <div className="reviewSection">
                        <div className="reviewHeading"><div><p className="eyebrow">THE ANSWER KEY</p><h2>Take a closer look</h2></div><span>{sessionQuestions.length} QUESTIONS</span></div>
                        <div className="reviewList">
                            {sessionQuestions.map((question, index) => {
                                const wasCorrect = answers[question.id] === question.correctIndex;
                                const chosenAnswer = answers[question.id];
                                return (
                                    <article className={`reviewItem${wasCorrect ? " reviewCorrect" : " reviewIncorrect"}`} key={question.id}>
                                        <span className="reviewIndex">{String(index + 1).padStart(2, "0")}</span>
                                        <div className="reviewBody"><h3>{question.question}</h3><p className="reviewOutcome">{wasCorrect ? "Correct" : chosenAnswer === undefined ? "Not answered" : "Not quite"}<span>{wasCorrect ? "✓" : "·"}</span></p>{!wasCorrect && <p className="reviewCorrectAnswer">Answer: <strong>{question.options[question.correctIndex]}</strong></p>}<p className="reviewExplanation">{question.explanation}</p></div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            <footer className="siteFooter"><span>mindful<span className="brandDot">.</span></span><span>A curious mind is a growing mind.</span><span>MADE FOR THE JOY OF KNOWING</span></footer>
        </main>
    );
}
