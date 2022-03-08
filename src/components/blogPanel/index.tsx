import React, { Fragment } from 'react';

import ContentCard from '@/components/contentCard';
import { useParams } from 'react-router-dom';
import { Pagination } from '@arco-design/web-react'

function BlogPanel(props: any) {

  const params = useParams()

  console.log('blog--pp--:', params)

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