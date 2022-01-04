import React, { useEffect } from "react";

const useDidMount = (setCur: any) => {
  useEffect(() => {
    setCur('3')
  }, [])
}

function ToolPage(props: any) {

  useDidMount(props.func)

  return 'tool'
}

export default ToolPage