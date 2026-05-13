import React, { useState } from "react";
import "./RictTextBox.css";
import { MdTextFields, MdClear, MdContentCopy } from "react-icons/md";
import { RxLetterCaseLowercase } from "react-icons/rx";

const RictTextBox = () => {
  const [text, setText] = useState("");
  const [previewText, setPreviewText] = useState("");

  function analyzeText(e) {
    const value = e.target.value;
    setText(value);
    setPreviewText(value);
  }

  function convertToUpper() {
    setPreviewText(text.toUpperCase());
  }

  function convertToLower() {
    setPreviewText(text.toLowerCase());
  }

  function capitalizeText() {
    const result = text
      .toLowerCase()
      .split(" ")
      .filter(word => word !== "")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setPreviewText(result);
  }

  function removeExtraSpaces() {
    const cleaned = text.trim().replace(/\s+/g, " ");
    setPreviewText(cleaned);
  }

  function clearData() {
    setText("");
    setPreviewText("");
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(previewText);
      alert("Text copied successfully!");
    } catch (err) {
      alert("Copy failed!");
    }
  }

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;
  const readingTime = (wordCount / 200).toFixed(2);

  return (
    <div className="app-container">
      <h1 className="title">✨Welcome To <span>Text Studio</span></h1>

      <div className="card">
        
        {/* LEFT PANEL */}
        <div className="left-section">
          <h3>Input Text</h3>
          <textarea
            placeholder="Type your text here..."
            value={text}
            onChange={analyzeText}
          />
        </div>

        {/* RIGHT PANEL */}
        <div className="right-section">
          <h3>Preview Output</h3>

          <div className="preview-box">
            {previewText || "Your transformed text will appear here..."}
          </div>

          <div className="buttons">
            <button onClick={convertToUpper} disabled={!text}>
              Upper <MdTextFields />
            </button>

            <button onClick={convertToLower} disabled={!text}>
              Lower <RxLetterCaseLowercase />
            </button>

            <button onClick={capitalizeText} disabled={!text}>
              Capitalize
            </button>

            <button onClick={removeExtraSpaces} disabled={!text}>
              Clean
            </button>

            <button onClick={copyToClipboard} disabled={!previewText}>
              Copy <MdContentCopy />
            </button>

            <button className="danger" onClick={clearData} disabled={!text}>
              Clear <MdClear />
            </button>
          </div>

          {/* STATS */}
          <div className="stats">
            <div>
              <span>{charCount}</span>
              <p>Characters</p>
            </div>

            <div>
              <span>{wordCount}</span>
              <p>Words</p>
            </div>

            <div>
              <span>{readingTime}</span>
              <p>Min Read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RictTextBox;