import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Translator = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const [typedText, setTypedText] = useState("");
  const [messages, setMessages] = useState([]);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (recognizedText) {
      (async () => {
        await addMessage(recognizedText, "voice");
      })();
    }
  }, [recognizedText]);

  const startSpeechRecognition = () => {
    if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser. Try using Chrome.");
      console.error("Speech recognition is not supported.");
      return;
    }

    recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;

    recognitionRef.current.onstart = () => {
      console.log("🎤 Speech recognition started.");
      setIsRecording(true);
    };

    recognitionRef.current.onresult = async (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("📝 Recognized Text:", transcript);
      setRecognizedText(transcript);
    };

    recognitionRef.current.onerror = (event) => {
      console.error("❌ Speech recognition error:", event.error);
      alert("Error in speech recognition: " + event.error);
      setIsRecording(false);
    };

    recognitionRef.current.onend = () => {
      console.log("🛑 Speech recognition stopped.");
      setIsRecording(false);
    };

    recognitionRef.current.start();
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const imageExists = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  const translateToSignLanguage = async (text) => {
    console.log(text);
    
    const signs = [];
    
    // Step 1: Check if a full sentence GIF exists
    const sentenceImagePath = `/images/ISL_Gifs/${text.replace(/\s/g, " ")}.gif`;
    console.log(sentenceImagePath);
    
    if (await imageExists(sentenceImagePath)) { 
      return [sentenceImagePath]; // If found, return only this
    }
  
    // Step 2: Split into words and check for each word image
    const words = text.toLowerCase().split(" ");
    const wordImagePath = `/images/words/${text}.png`;
    
    if (await imageExists(wordImagePath)) {
      signs.push(wordImagePath); // Add word-level sign
    } else {
      // Step 3: If word image doesn't exist, break into individual letters
      for (const word of words) {
          const wordImagePath = `/images/words/${word}.png`;

        if (await imageExists(wordImagePath)) {
          signs.push(wordImagePath); // Add word-level sign
        }else{

          for (const letter of word) {
            const letterImagePath = `/images/letters/${letter.toUpperCase()}.png`;
            if (await imageExists(letterImagePath)) {
              signs.push(letterImagePath); // Add letter sign
            }
          }
        }
      }
    }
  
    return signs;
  };

  const handleTextSend = async () => {
    if (typedText.trim()) {
      await addMessage(typedText, "text");
      setTypedText("");
    }
  };

  const addMessage = async (text, type) => {
    const signs = await translateToSignLanguage(text.replace(/\.$/, ""));
    const newMessage = {
      id: messages.length + 1,
      text,
      type,
      signs,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="container p-4">
      <h1 className="text-center">Voice & Text to Sign Language</h1>
      <div className="chat-box border p-3 mb-3" style={{ height: "400px", overflowY: "scroll" }}>
        {messages.map((msg) => (
          <div key={msg.id} className={`d-flex flex-column ${msg.type === "text" ? "align-self-end" : "align-self-start"}`}>
            <div className="alert alert-secondary" style={{ fontSize: "1.2rem" }}>{msg.text.replace(/\.$/, "")}</div>
            <div className="d-flex flex-wrap">
              {msg.signs.map((src, index) => (
                <img key={index} src={src} alt="Sign" className="m-1" style={{ width: "150px", height: "150px" }} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-primary m-2" onClick={startSpeechRecognition} disabled={isRecording} style={{ fontSize: "1.5rem", padding: "15px 30px" }}>
          🎤 Start Listening
        </button>
        <button className="btn btn-danger m-2" onClick={stopSpeechRecognition} disabled={!isRecording} style={{ fontSize: "1.5rem", padding: "15px 30px" }}>
          ⏹ Stop Listening
        </button>
      </div>
      <div className="input-group mt-3" style={{ fontSize: "1.2rem" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Type a message..."
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          style={{ height: "60px", fontSize: "1.2rem" }}
        />
        <button className="btn btn-success" onClick={handleTextSend} style={{ fontSize: "1.5rem", padding: "15px 30px" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Translator;