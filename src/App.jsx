import "./App.css";
import questionBankLogo from "/QuestionbankLogo.png";

function App() {
  return (
    <>
      <div>
        <a href="" target="_blank">
          <img
            src={questionBankLogo}
            className="logo"
            alt="QuestionBank logo"
          />
        </a>
      </div>
      <h1>QuestionBank</h1>
      <p className="info">
        This open-source React Native app empowers students to overcome academic
        challenges by providing a collaborative learning platform. Users can
        easily snap photos of incorrect exam questions and share them with their
        study groups
      </p>
      <button onClick={() => console.log("Go to AppStore")}>
        Download QuestionBank on Appstore
      </button>
    </>
  );
}

export default App;
