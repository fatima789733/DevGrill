"use client";
import React from "react";
import "../Button/button.css";

export default function DownloadButton() {
  return (
    <div className="download-button ">
      <div className="icon ">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 16l4-4h-3V4h-2v8H8l4 4zM5 18v2h14v-2H5z" fill="#fff" />
        </svg>
      </div>
      <div className="label">Download</div>
      <div className="loading">
        <span></span>
      </div>
    </div>
  );
}
