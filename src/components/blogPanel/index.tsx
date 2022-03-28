import React, { Fragment, useEffect } from 'react';

import ContentCard from '@/components/contentCard';
import { useParams } from 'react-router-dom';
import { Pagination } from '@arco-design/web-react'
import { useRequest } from 'ahooks';
import { BASE_URL } from '@/constants/config';
import axios from 'axios';

function BlogPanel(props: any) {

  const params = useParams()

  const req = () => axios.get(`${BASE_URL}/admin/getArticle/${params.id}`)

  const { loading, run } = useRequest(req, {
    manual: true,
    onSuccess: res => {
      console.log(res)
    },
    onError: err => {
      console.log(err)
    }
  })

  useEffect(() => {
    run()
  }, [])

  console.log('blog--pp--:', params, loading)

  return (
    <div className='df fdc h100'>
      <div
        style={{ paddingTop: '10px' }}
        className='df fw jcsa acsa f1'>
        {
          Array(15).fill(0).map((ele, idx) => {
            return (
              <ContentCard></ContentCard>
            )
          })
        }

      </div>
      <div className='df jce'
        style={{
          marginRight: '20px',
          marginBottom: '10px'
        }}>
        <Pagination
          simple
          showTotal
          pageSize={3}
          size='small'
          total={10} />
      </div>

    </div>
  )
}

export default BlogPanel