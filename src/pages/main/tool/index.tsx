import React, { Fragment, useEffect } from "react";

import MyHeader from "@/components/header";

const useDidMount = (setCur: any) => {
  useEffect(() => {
    setCur('3')
  }, [])
}

function ToolPage(props: any) {

  useDidMount(props.setCur)

  return (
    <Fragment>
      <div>
        tool
      </div>
    </Fragment>
  )
}

export default ToolPage