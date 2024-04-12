export type Packages = {
  createdAt: string
  Sender: string
  Resiver: string
  adress: string
  status: string
  weight: number
  ToOffice: boolean
  id: string
}

export type Customers = {
  createdAt: string
  name: string
  email: string
  adress: string
  id: string
}

export type Company = {
  id: number
  name: string
  date_of_foundation: string
  company_adress: string
}
