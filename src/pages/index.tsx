import type { ReactElement } from 'react'
import Layout from '@/components/layout/layout'
import type { NextPageWithLayout } from './_app'
 
const Page: NextPageWithLayout = () => {
  return <p>One</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Page