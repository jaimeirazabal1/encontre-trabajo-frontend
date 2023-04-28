import { Inter } from 'next/font/google'
import Login from '@/components/Login'
import Register from '@/components/Register'
import PageTitle from '@/components/PageTitle'
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <PageTitle title="Mi página de inicio" />
    <Login/>
    </>
  )
}
