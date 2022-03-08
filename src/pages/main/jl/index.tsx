import React, { Fragment, useEffect } from "react";

const useDidMount = (setCur: any) => {
  useEffect(() => {
    setCur('1')
  }, [setCur])
}

function Jl(props: any) {
  useDidMount(props.setCur)

  return (
    <Fragment>
      <div>jlllll</div>
    </Fragment>
  )
}

export default Jl