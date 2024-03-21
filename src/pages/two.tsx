import type { ReactElement } from 'react'
import LayoutTwo from '@/components/layout/layoutTwo'
import type { NextPageWithLayout } from './_app'
 
const Page: NextPageWithLayout = () => {
  return <p>2222222333       page</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutTwo>
      {page}
    </LayoutTwo>
  )
}
 
export default Page