interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {
  width: number
  marks: string[]
  heading: React.ReactNode
  shortcuts: Shortcut[]
  description: string
  children?: React.ReactNode
}

interface Shortcut {
  name: string
  icon: React.ReactNode
  url?: string
}

export default function Slide({ width, marks, heading, shortcuts, description, children, className, style, ...props }: SlideProps) {
  return <div className={'Slide' + (className ? ` ${className}` : '')} style={{ ...style, width: `${width}px` }} {...props}>
    <div className="content">
      <div className="marks">
        {marks.reduce<React.ReactNode[]>((acc, name, i) => {
          if (i > 0) acc.push(<span key={`dot-${i}`}>•</span>)
          acc.push(<span key={`mark-${i}`}>{name}</span>)
          return acc
        }, [])}
      </div>
      <h1>{heading}</h1>
      <div className="shortcutsContainer">
        {shortcuts.map((item, i) => (
          <a key={`${i}-${item.name}`} draggable={false} target='_blank' href={item.url} className="shortcut">
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
      <p>{description}</p>
    </div>
    <div className="children">{children}</div>
  </div>
}