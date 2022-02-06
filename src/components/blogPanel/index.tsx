import React, {Fragment} from 'react';

import ContentCard from '@/components/contentCard';
import { useParams } from 'react-router-dom';
import contentCard from '@/components/contentCard';

function BlogPanel(props: any) {

  const params = useParams()

  console.log(params)

  return(
    <div className='df fw h100 jcsa acsa'>
      {
        Array(6).fill(0).map((ele, idx) => {
          return (
            <ContentCard></ContentCard>
          )
        })
      }
    </div>
  )
}

export default BlogPanel