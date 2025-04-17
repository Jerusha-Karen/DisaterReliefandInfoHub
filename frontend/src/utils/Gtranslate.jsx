import { useEffect } from "react";

const GTranslate = () => {
  useEffect(() => {
    // Load GTranslate settings with float disabled
    const script1 = document.createElement("script");
    script1.innerHTML = `
      window.gtranslateSettings = {
        "default_language": "en",
        "languages": ["en", "fr", "es", "hi", "te"],
        "wrapper_selector": ".gtranslate_wrapper",
        "float_switcher": false
      };
    `;
    document.body.appendChild(script1);

    // Load GTranslate script
    const script2 = document.createElement("script");
    script2.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslate;
