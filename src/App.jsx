import { useEffect, useRef } from "react";
import "./App.css";
import questionBankLogo from "/QuestionbankLogo.png";

function App() {
  const hasRedirected = useRef(false);
  const path = window.location.pathname;

  function getMobileOS() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) return "Android";
    return "unknown";
  }

  function redirectUser() {
    if (hasRedirected.current) return;
    hasRedirected.current = true;
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
  }, []);

  return (
    <>
      <div>
          <img
            src={questionBankLogo}
            className="logo"
            alt="QuestionBank logo"
          />
      </div>
      <h1>QuestionBank</h1>
      <p className="info">
        This open-source React Native app empowers students to overcome academic
        challenges by providing a collaborative learning platform. Users can
        easily snap photos of incorrect exam questions and share them with their
        study groups
      </p>
      <button
        onClick={() => {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.questionbank";
        }}
      >
        Download QuestionBank on Appstore
      </button>
    </>
  );
}

export default App;
