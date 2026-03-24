export function BigButton({ content, link }: { content: string, link:string }) {
    return (
        <div className="bigButton">
            <p><a href={link}>{content}</a></p>
        </div>
    );
}