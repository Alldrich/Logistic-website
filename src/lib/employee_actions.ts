'use server'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import type { Employee, Positions } from '@/types/dashboard'

export async function GetPositions() {
  var cookie = cookies().get('.AspNetCore.Identity.Application')
  try {
    const response = await fetch('http://localhost:7028/position', {
      next: { revalidate: 30 },
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `.AspNetCore.Identity.Application=${cookie?.value}`,
      },
    })
    let result: Positions = await response.json()
    return result
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}

export async function GetEmployees() {
  var cookie = cookies().get('.AspNetCore.Identity.Application')
  try {
    const response = await fetch('http://localhost:7028/employee', {
      cache: 'no-store',
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `.AspNetCore.Identity.Application=${cookie?.value}`,
      },
    })
    let result: Employee[] = await response.json()
    return result
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}

export async function AddEmployeePartial(data: FormData) {
  var cookie = cookies().get('.AspNetCore.Identity.Application')
  let add_data = JSON.stringify({
    id: data.get('id'),
    salary: data.get('salary'),
    positionId: data.get('positionId'),
    officeId: data.get('officeId'),
  })
  console.log(add_data)
  try {
    const response = await fetch('http://localhost:7028/employee', {
      cache: 'no-store',
      method: 'POST',
      credentials: 'include',
      body: add_data,
      headers: {
        'Content-Type': 'application/json',
        Cookie: `.AspNetCore.Identity.Application=${cookie?.value}`,
      },
    })
    let result = await response.json()
    return result
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
  redirect('http://localhost:3000/dashboard/employees')
}

export async function changeEmployeeDataById(data: FormData) {
  var cookie = cookies().get('.AspNetCore.Identity.Application')
  let change_data = JSON.stringify({
    id: data.get('id'),
    salary: data.get('salary'),
    positionId: data.get('positionId'),
    officeId: data.get('officeId'),
  })
  let url = `http://localhost:7028/employee/${data.get('id')} `
  try {
    const response = await fetch(url, {
      cache: 'no-store',
      method: 'PUT',
      credentials: 'include',
      body: change_data,
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
  redirect('http://localhost:3000/dashboard/employees')
}

export async function DeleteEmployeeById(id: string) {
  var cookie = cookies().get('.AspNetCore.Identity.Application')
  let url = `http://localhost:7028/employee/${id}`
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
    var res = await response.json()
    console.log(res)
    return res
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
  redirect('http://localhost:3000/dashboard/employees')
}

export const position_fetcher = async (url: string) => {
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
  var result: Positions = await response.json()
  return result
}
