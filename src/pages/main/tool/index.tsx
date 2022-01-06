import React, { Fragment, useEffect } from "react";

import MyHeader from "@/components/header";

const useDidMount = (setCur: any) => {
  useEffect(() => {
  }, [])
}

function ToolPage() {

  return (
    <Fragment>
      <MyHeader showWhichItem="3" />
      <div>
        tool
      </div>
    </Fragment>
  )
}

export default ToolPage