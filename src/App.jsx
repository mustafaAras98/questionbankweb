import { useEffect } from "react";
import "./App.css";
import questionBankLogo from "/QuestionbankLogo.png";

const redirectArray = ["Album", "Image"];
function App() {
  function getMobileOS() {
    const userAgent = navigator.userAgent || window.opera;
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }
  }

  useEffect(() => {
    function redirectUser() {
      const path = window.location.pathname;
      const pathSegments = path.split("/").filter(Boolean);

      if (
        redirectArray.includes(pathSegments[0]) &&
        pathSegments.length === 2
      ) {
        const playStore =
          "https://play.google.com/store/apps/details?id=com.questionbank";
        const os = getMobileOS();
        if (os === "Android") {
          setTimeout(() => {
            window.location.href = playStore;
          }, 1500);
        }
      }
    }
    redirectUser();
  }, []);

  return (
    <>
      <div>
        <img src={questionBankLogo} className="logo" alt="QuestionBank logo" />
      </div>
      <h1>QuestionBank</h1>
      <p className="info">
        This open-source React Native app helps students tackle academic
        challenges through a collaborative learning platform. Users can quickly
        capture photos of incorrect exam questions and share them with their
        study groups for better understanding.
      </p>
      <button
        onClick={() => {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.questionbank";
        }}
      >
        Download QuestionBank on Play Store
      </button>
    </>
  );
}

export default App;
