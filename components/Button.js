export default function Button(props) {
    
    return (
        <>
            {props.type === "product" && (
                <button type="button" className="product-button text">Lihat Produk</button>
            )}
            {props.type === "social" && (
                <button type="button" className="social-button text">{props.title}</button>
            )}
        </>
    )
}