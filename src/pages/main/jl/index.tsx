import React, { Fragment, useEffect } from "react";

function Jl(props: any) {
  useEffect(() => {
    props.setCur('1')
  }, [])

  return (
    <Fragment>
      <div className="df jcc h100 aic" style={{fontSize: '20px'}}> 
        <a href="https://docs.qq.com/pdf/DSUdodWZLWlduU0lD">点我去查看下载</a>
      </div>
    </Fragment>
  )
}

export default Jl