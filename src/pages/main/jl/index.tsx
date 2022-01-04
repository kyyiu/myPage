import React, { useEffect } from "react";

const useDidMount = (setCur: any) => {
  useEffect(() => {
    setCur('1')
  }, [])
}

function Jl(props: any) {
  useDidMount(props.func)

  return 'jl'
}

export default Jl