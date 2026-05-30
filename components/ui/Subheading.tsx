interface SubheadingProps {
    text: string;
}

export default function Subheading({ text }: SubheadingProps) {
    return(
        <strong className="border-l border-l-green-color uppercase pl-1 text-green-color">{text}</strong>
    )
}