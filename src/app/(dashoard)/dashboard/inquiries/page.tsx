import { lusitana } from '@/components/font'
import { SearchBar } from '@/components/component/search'
import { cookies } from 'next/headers'

async function setCoockies() {
  'use server'
  if (cookies().has('JSESSIONID') === false) {
    cookies().set('JSESSIONID', '6FD9325FF41756302EAF84EB429CC12E')
  }
}

export default async function Inquiries() {
  // setCoockies();
  // const data = await fetch('http://localhost:8080/package',{cache: 'no-store'});
  // console.log(data);
  return <div>Test</div>
}
