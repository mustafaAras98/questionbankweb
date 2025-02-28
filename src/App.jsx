import { useEffect } from "react";
import "./App.css";
import questionBankLogo from "/QuestionbankLogo.png";

function App() {
  const path = window.location.pathname;

  function getMobileOS() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) return "Android";
    return "unknown";
  }

  function redirectUser() {
    const deepLink = `https://questionbankwebhost.firebaseapp.com${path}`;
    const playStore =
      "https://play.google.com/store/apps/details?id=com.questionbank";

    const os = getMobileOS();

    if (os === "Android") {
      window.location.href = deepLink;
      setTimeout(() => {
        window.location.href = playStore;
      }, 1500);
    }
  }

  useEffect(() => {
    redirectUser();
  });
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
