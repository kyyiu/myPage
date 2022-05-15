import React, { Fragment, useEffect } from "react";

import MyHeader from "@/components/header";

function ToolPage(props: any) {
  useEffect(() => {
    props.setCur('3')
  }, [])

  return (
    <Fragment>
      <div>
        tool
      </div>
    </Fragment>
  )
}

export default ToolPage