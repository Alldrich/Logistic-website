'use server'
import 'server-only'
import { cookies } from 'next/headers'
import { permanentRedirect, redirect } from 'next/navigation'
import type { paths, components } from '@/types/schemav2'
import type {
  CreatedUser,
  Packages,
  PackageStatuses,
  Roles,
  TrackedPackage,
  Users,
} from '@/types/dashboard'
import { revalidateTag } from 'next/cache'

export async function createPackagePartial(data: FormData) {
  var cookie = cookies().get('.AspNetCore.Identity.Application')
  let add_data = JSON.stringify({
    senderEmail: data.get('senderEmail'),
    receiverEmail: data.get('receiverEmail'),
    deliveryAddress: data.get('deliveryAddress'),
    weight: data.get('weight'),
    toAdress: data.get('toAdress'),
    companyName: data.get('companyName'),
    description: data.get('description'),
    fragile: data.get('fragile'),
    hazardous: data.get('hazardous'),
  })
  console.log(add_data)
  try {
    const response = await fetch('http://localhost:7028/package', {
      method: 'POST',
      credentials: 'include',
      body: add_data,
      headers: {
        'Content-Type': 'application/json',
        Cookie: `.AspNetCore.Identity.Application=${cookie?.value}`,
      },
    })
    console.log(response)
    let result = await response.json()
    revalidateTag('package')
    return result
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
  redirect('http://localhost:3000/dashboard/shipments')
}

export async function GetPackages(status?: string) {
  var cookie = cookies().get('.AspNetCore.Identity.Application')
  if (status) {
    var url = `http://localhost:7028/package?registered=${status}`
  } else {
    var url = `http://localhost:7028/package`
  }
  try {
    const response = await fetch(url, {
      next: { tags: ['package'] },
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `.AspNetCore.Identity.Application=${cookie?.value}`,
      },
    })
    let result: Packages = await response.json()
    return result
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}
export async function GetPackageByTracker(id: string) {
  var cookie = cookies().get('.AspNetCore.Identity.Application')
  try {
    const response = await fetch(`http://localhost:7028/package/track/${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `.AspNetCore.Identity.Application=${cookie?.value}`,
      },
    })
    let result: TrackedPackage = await response.json()
    return result
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}

export async function changePackageDataById(data: FormData, id: string) {
  var cookie = cookies().get('.AspNetCore.Identity.Application')
  let change_data = JSON.stringify({
    status: data.get('status'),
    address: data.get('address'),
    toAdress: data.get('toAdress'),
  })
  let url = `http://localhost:7028/package/${id}`
  try {
    const response = await fetch(url, {
      method: 'PUT',
      credentials: 'include',
      body: change_data,
      headers: {
        'Content-Type': 'application/json',
        Cookie: `.AspNetCore.Identity.Application=${cookie?.value}`,
      },
    })
    console.log(response)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    revalidateTag('package')
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
  redirect('http://localhost:3000/dashboard/shipments')
}

export async function DeletePackageById(id: string) {
  var cookie = cookies().get('.AspNetCore.Identity.Application')
  let url = `http://localhost:7028/package/${id}`
  try {
    const response = await fetch(url, {
      cache: 'no-store',
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `.AspNetCore.Identity.Application=${cookie?.value}`,
      },
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
  redirect('http://localhost:3000/dashboard/shipments')
}
export async function RegisterPackageById(id: string) {
  var cookie = cookies().get('.AspNetCore.Identity.Application')
  let url = `http://localhost:7028/package/${id}/register`
  try {
    const response = await fetch(url, {
      cache: 'no-store',
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `.AspNetCore.Identity.Application=${cookie?.value}`,
      },
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}

export const package_status_fetcher = async (url: string) => {
  var cookie = cookies().get('.AspNetCore.Identity.Application')
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `.AspNetCore.Identity.Application=${cookie?.value}`,
    },
  })
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.')
  }
  var result: PackageStatuses = await response.json()
  return result
}
