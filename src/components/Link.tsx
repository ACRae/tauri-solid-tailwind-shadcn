interface LinkProps {
  href: string
  children: string
}

export default function Link(props: LinkProps) {
  return (
    <a href={props.href} target="_blank" class="text-blue-500 underline">
      {props.children}
    </a>
  )
}
