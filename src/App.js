import React, { useState } from "react";

const QuoteMachine = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: { 'X-Api-Key': 'wTHyhr0/ZY9VkxH2+GRT/w==k8izfviHusLAX9Ya' }
      });
      const data = await response.json();
      if (data.length > 0) {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } else {
        setQuote("No quotes available at the moment.");
        setAuthor("");
      }
    } catch (error) {
      console.error("Error fetching the quote: ", error);
      setQuote("Failed to fetch a new quote. Please try again.");
      setAuthor("");
    }
  };

  return (
    <div
      id="quote-box"
      style={styles.quoteBox}
      onMouseOver={() => (document.getElementById('quote-box').style.transform = "scale(1.02)")}
      onMouseOut={() => (document.getElementById('quote-box').style.transform = "scale(1)")}
    >
      <p id="text" style={styles.text}>{quote}</p>
      <p id="author" style={styles.author}>- {author}</p>

      <button id="new-quote" onClick={fetchQuote} style={styles.button}>
        New Quote
      </button>

      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quote}" - ${author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.tweetLink}
      >
        Tweet
      </a>
    </div>
  );
};

const styles = {
  quoteBox: {
    width: "60%",
    margin: "100px auto",
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "15px",
    background: "linear-gradient(to bottom right, #f0f4f8, #e0e4e8)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  text: {
    fontSize: "24px",
    fontStyle: "italic",
    margin: "0 0 10px 0",
  },
  author: {
    fontSize: "20px",
    margin: "0",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    background: "linear-gradient(to right, #0062E6, #33AEFF)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s ease, transform 0.3s ease",
  },
  tweetLink: {
    display: "inline-block",
    padding: "10px 20px",
    background: "linear-gradient(to right, #1DA1F2, #0D95E8)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s ease, transform 0.3s ease",
  },
};

export default QuoteMachine;
