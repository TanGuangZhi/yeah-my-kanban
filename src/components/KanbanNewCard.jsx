import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { kanbanCardStyles, kanbanCardTitleStyles } from "./KanbanCard";

export const KanbanNewCard = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSubmit({ title, status: new Date().toString() });
    }
  };

  const inputElem = useRef(null);

  useEffect(() => {
    inputElem.current.focus();
  }, []);

  return (
    <li css={kanbanCardStyles}>
      <h3>添加新卡片</h3>
      <div
        css={css`
          ${kanbanCardTitleStyles}

          & > input[type="text"] {
            width: 80%;
          }
        `}
      >
        <input
          type="text"
          value={title}
          ref={inputElem}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </li>
  );
};
