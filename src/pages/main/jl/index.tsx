import React, { Fragment, useEffect } from "react";

function Jl(props: any) {
  useEffect(() => {
    props.setCur('1')
  }, [])

  return (
    <Fragment>
      <div>jlllll</div>
    </Fragment>
  )
}

export default Jl