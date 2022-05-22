import Link from "next/link"

export function Routes() {
  return (
    <ul>
      <li>
        <Link href="/about">Sobre Nós</Link>
      </li>
      <li>
        <Link href="/how">Como Funcionamos</Link>
      </li>
      <li>
        <Link href="/services">Serviços</Link>
      </li>
      <li>
        <Link href="/support">Suporte</Link>
      </li>
    </ul>
  )
}
