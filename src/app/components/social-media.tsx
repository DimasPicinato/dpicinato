export default function SocialMedia({
  name,
  logo,
  url,
}: {
  name: string;
  logo: React.ElementType;
  url: string;
}) {
  const Logo = logo;
  return (
    <a
      className="flex items-center rounded-sm p-2 transition-colors hover:bg-zinc-900"
      href={url}
      target="_blank"
    >
      <Logo className="text-3xl" />
      <span className="px-2">{name}</span>
    </a>
  );
}
