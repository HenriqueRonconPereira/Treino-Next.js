import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="alunos flex min-h-screen flex-col items-center justify-between p-24">
      Essa é a home
      <Link href="/sobre">Ir para Sobre</Link>
    </main>
  )
}
