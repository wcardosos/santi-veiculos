import Button from "./Button"

interface LinkProps {
  description: string
  domain: string
  url: string
}

export default function Link({ description, domain, url }: LinkProps) {
  const formattedLinkText = `${description} | ${domain}`

  return (
    <a
      href={url}
      target="_blank'"
      rel="noreferrer"
      className="w-full"
    >
      <Button>{formattedLinkText}</Button>
    </a>
  )
}