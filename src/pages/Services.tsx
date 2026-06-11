import { ServicesPageHeader } from '@/components/sections/services/page-header'
import { ServicesGrid } from '@/components/sections/services/services-grid'
import Awards from '@/components/sections/Awards'
import Provenprocess from '@/components/sections/proven-process'

export default function Services() {
  return (
    <>
      <ServicesPageHeader />
      <ServicesGrid />
      <Awards />
      <Provenprocess />
    </>
  )
}
