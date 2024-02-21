export default `
# 使用 Suspense 自己完结数据加载

<code>

lazy + Suspense无非便是三种状况:

初始化：查询数据，抛出 promise

加载中: 直接抛出 promise

加载完结：设置 promise 回来的数据

</code>

<pre>
<code>

  function delay(ms){

    return new Promise((resolve, reject) => {

      setTimeout(resolve, ms)

    })

  }

  function mockApi(){

    return delay(3000).then(() => "data fetched")

  }

  function fetchData(){

    let status = "uninit"

    let data = null

    let promise = null

    return () => {

      switch(status){

        // 初始状况，宣布恳求并抛出 promise

        case "uninit": {

          const p = mockApi()

            .then(x => {

              status = "resolved"

              data = x

            })
            status = "loading"

            promise = p

          throw promise

        };

        // 加载状况，直接抛出 promise

        case "loading": throw promise;

        // 假如加载完结直接回来数据

        case "resolved": return data;

        default: break;

      }
    }
  }

  const reader = fetchData()


  function TestDataLoad(){

    const data = reader()

    return (

        &lt;p&gt;{data}&lt;/p&gt;

    )

  }
  </code>
  </pre>

<pre>
<code>
  function ST() {

    return (

        &lt;>
            &lt;Suspense fallback={"loading"}>
                &lt;TestDataLoad/>
            &lt;/Suspense>
        &lt;/>
   )
  }
  </code>
  </pre>

`