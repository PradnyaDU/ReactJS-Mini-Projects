import React from "react";

export default function About({ themeStyles = {} }) {
  const { accordionStyle = {}, accordionButtonStyle = {}, accordionBodyStyle = {} } = themeStyles;

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {[1, 2, 3].map((i) => (
        <div className="accordion-item" style={accordionStyle} key={i}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${i}`}
              aria-expanded="false"
              aria-controls={`flush-collapse${i}`}
              style={accordionButtonStyle}
            >
              Accordion Item #{i}
            </button>
          </h2>
          <div
            id={`flush-collapse${i}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={accordionBodyStyle}>
              Placeholder content for accordion item #{i}. This content changes based on the theme.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
