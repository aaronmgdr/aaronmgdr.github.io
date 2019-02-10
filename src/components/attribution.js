import React from "react"
import { css } from "@emotion/core"

export default ({ photographer }) => (
  <a
    css={css({ position: "fixed", bottom: 10, right: 20, fontSize: "0.5rem" })}
    href={`https://unsplash.com/${photographer}?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge`}
    target="_blank"
    rel="noopener noreferrer"
    title={`Download free do whatever you want high-resolution photos from ${photographer}`}
  >
    Photo by {photographer}
  </a>
)
