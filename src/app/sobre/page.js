import Link from "next/link";

export default function Sobre(){
    return(
        <main className="alunos flex min-h-screen flex-col items-center justify-between p-24">
            Página Sobre
            <Link href="/">Voltar para home</Link>
        </main>
    )
}