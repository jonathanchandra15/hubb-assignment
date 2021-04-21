import Head from 'next/head'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductCard from '../components/ProductCard.js'
import Button from '../components/Button.js'

export const getStaticProps = async () => {
  const productResult = await (await fetch('https://hubb-server.herokuapp.com/test-product')).json();
  const linkResult = await (await fetch('https://hubb-server.herokuapp.com/test-link')).json();
  console.log(linkResult)

  return {
    props: {
      products: productResult,
      links: linkResult,
    }
  }
}

export default function Home({ products, links }) {
  return (
    <div>
      <Head>
        <title>Hubb Assignment</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet"/ > 
      </Head>

      <main>
        <div id="profile-section">
          <div className="profile-picture">
            <img src="/profile.png" />
          </div>
          <div className="profile-name">
            <FontAwesomeIcon icon={faInstagram} className="text-dark-blue instagram-icon"/>
            <p className='text-sm text'>@hubb.link</p>
          </div>
        </div>
        <div id="product-section">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              img={product.product_img}
              title={product.product_title}
              price={product.product_price}
              url={product.product_url} />
          ))}
        </div>
        <div id="link-section">
          {links.map(link => (
            <a key={link.id} href={link.product_url} target="_blank">
              <Button
                type="social"
                title={link.link_title} />
            </a>
          ))}
        </div>
      </main>

    </div>
  )
}
