export const GifItem = ({ title, src }) => (
    <div className="card">
        <img src={src} alt={title} />
        <p>{ title }</p>
    </div>
)