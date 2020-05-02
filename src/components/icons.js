/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"

const Icon = ({ IconName }) => {
  // You can add your own svg icons and control names, accessibility and styles

  switch (IconName) {
    case "github":
      return (
        <svg
          aria-labelledby="githubTitle githubDescription"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          sx={{ width: 24, height: 24, fill: `background` }}
        >
          <title id="githubTitle">Github</title>
          <desc id="githubDescription">See repository on Github</desc>
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-labelledby="lightTitle lightDescription"
          role="img"
          sx={{ width: 24, height: 24, fill: `background` }}
        >
          <title id="lightTitle">Light Theme</title>
          <desc id="lightDescription">Turn to light theme</desc>
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
        </svg>
      )
    case "dark":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-labelledby="darkTitle darkDescription"
          role="img"
          sx={{ width: 24, height: 24, fill: `background` }}
        >
          <title id="darkTitle">Dark Theme</title>
          <desc id="darkDescription">Turn to dark theme</desc>
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07C10.9 17.77 12 14.95 12 12s-1.1-5.77-3.01-7.93C9.32 4.02 9.66 4 10 4m0-2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z" />
        </svg>
      )

    // Feel free to add as many as you need

    default:
      return null
  }
}

export default Icon
