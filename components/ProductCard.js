import Button from './Button.js'

export default function ProductCard(props) {
    const price = processPrice(props.price);

    function processPrice(rawPrice) {
        const lengthPrice = rawPrice.length;
        let resultPrice = "";
        let counter = 0
        for(let i=(lengthPrice-1); i >= 0; i--) {
            counter ++;
            resultPrice = rawPrice[i] + resultPrice;
            if(counter == 3) {
                resultPrice = '.' + resultPrice;
                counter = 0;
            }
        }
        return resultPrice;
    }

    return (
        <div className="product-card">
            <img src={props.img} className="product-picture" />
            <p className="text text-xs mb-1">{props.title}</p>
            <p className="text text-base mb-2">Rp. {price}</p>
            <a href={props.url} target="_blank">
                <Button type="product" />
            </a>
        </div>
    )
}