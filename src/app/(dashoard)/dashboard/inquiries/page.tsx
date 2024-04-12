import { lusitana } from '@/components/font'
import { SearchBar } from '@/components/component/search'
import { cookies } from 'next/headers'
import type { paths, components } from '@/types/schema'

// Schema Obj
type Company = components['schemas']['CompanyDto']

// Path params
type EndpointParams = paths['/companies']['get']['parameters']

export default async function Inquiries() {
  // const data = await fetch('http://192.168.0.107/LogisticCompany/Main/Dispatcher',{cache: 'no-store' , method: 'GET',}).then(response => response.json());
  // console.log("Data" , data);
  // return <div>{data}</div>
  return <div>Hello</div>
}
