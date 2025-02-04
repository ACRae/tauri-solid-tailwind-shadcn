import Link from "@/components/Link"

export default function Main(){
  return (
    <main class="text-center justify-center text-2xl">
      <h1 class="text-5xl text-blue-500 font-bold mb-10">MyApp Template</h1>
      <p class="mb-4">
        This is a <Link href="https://www.tauri.app/">Tauri</Link> +{' '}
        <Link href="https://www.solidjs.com/">Solid</Link> +{' '}
        <Link href="https://tailwindcss.com/">Tailwind</Link> +{' '}
        <Link href="https://shadcn-solid.com/">Shadcn-Solid</Link> +{' '}
        <Link href="https://www.typescriptlang.org/">Typescript</Link> App!
      </p>
    </main>
  )
}
