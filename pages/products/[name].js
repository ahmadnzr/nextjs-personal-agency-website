import Image from "next/image";
import Link from "next/link";
import { data } from "../../data";
import styles from "../../styles/Product.module.css";

const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        {product.images.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image
              src={img.url}
              width={`100%`}
              height={`100%`}
              objectFit="cover"
              layout="responsive"
            />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.desc}>{product.longDesc}</div>
        <button className={styles.button}>
          <Link href={`/contact`}>Contact</Link>
        </button>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];
  return {
    props: { product },
  };
};

export default Product;
