import React, { useState } from "react";
import "../styles/Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AnsuzRune, FehuRune } from "../components/Emblems";
import { experience } from "../content/site";

function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="experience">
      <div className="page-heading">
        <h1>Experience</h1>
        <p>Education and work, roughly in the order it happened.</p>
      </div>

      <VerticalTimeline lineColor="var(--rule)">
        {experience.map((item, idx) => {
          const isWork = item.type === "work";
          const isOpen = openIndex === idx;

          return (
            <VerticalTimelineElement
              key={idx}
              className={`vertical-timeline-element--${item.type}`}
              date={item.date}
              iconStyle={{
                background: isWork ? "var(--wine)" : "var(--ink-soft)",
                color: "var(--paper)",
              }}
              icon={isWork ? <FehuRune /> : <AnsuzRune />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.title}, {item.location}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>

              {item.description && <p>{item.description}</p>}

              {isWork && item.tags && item.tags.length > 0 && (
                <>
                  <button
                    type="button"
                    className="text-link expandToggle"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    {isOpen ? "Hide skills used" : "Show skills used"}
                  </button>

                  {isOpen && (
                    <div className="tagRow">
                      {item.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
