import React, { Fragment } from "react";
import './index.less'

function MyLoading() {
  return (
    <div className="loading_body">
      <div className="loading_loader">
        {
          Array(12).fill(0).map((i, idx) => {
            const s = {
              '--i': idx
            }
            // as React.CSSProperties
            return (
              <span style={s} className="loading_span" key={idx}>
                <i className="loading_i fa-solid fa-star"></i>
              </span>
            )
          })
        }
      </div>
    </div>
  )
}

export default MyLoading