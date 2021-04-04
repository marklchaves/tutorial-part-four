import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <navbar
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Link to={`/`}>
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/`}
          css={css`
            padding-left: 1%;
          `}
        >
          Home
        </Link>
        <Link
          to={`/about/`}
          css={css`
            padding-left: 1%;
          `}
        >
          About
        </Link>
      </navbar>
      {children}
    </div>
  )
}
