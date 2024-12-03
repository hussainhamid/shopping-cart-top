import styled from "styled-components";
import { useContext, useMemo } from "react";
import { ShopContext } from "../App";

export default function Cart() {
  const { cart, removeFromCart } = useContext(ShopContext);

  const H3 = styled.h3`
    font-weight: 500;
  `;

  const ProductsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
  `;

  const EachProducts = styled.div`
    border: 5px solid #ccc;
    padding: 1rem;
    border-radius: 20px;
    width: 200px;
    height: 370px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  `;

  const Img = styled.img`
    width: 100%;
    height: 150px;
    object-fit: contain;
  `;

  const Button = styled.button`
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
    background-color: rgb(194, 67, 58);
    color: white;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      background-color: rgb(105, 49, 45);
      transform: scale(1.1);
      cursor: pointer;
    }
  `;

  const H1 = styled.h1`
    text-align: center;
    font-weight: 400;
  `;

  if (cart.length === 0) {
    return <H1>your cart is empty.</H1>;
  }

  //eslint-disable-next-line
  const totalPrice = useMemo(() => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  }, [cart]);

  return (
    <div>
      <H3>Total price: ${totalPrice}</H3>
      <ProductsDiv>
        {cart.map((product, index) => (
          <EachProducts key={index}>
            <H3>
              {product.title.length > 50
                ? `${product.title.slice(0, 50)}...`
                : product.title}
            </H3>
            <Img src={product.image} alt={product.title} />
            <p>${product.price}</p>

            <Button onClick={() => removeFromCart(index)}>
              Remove from cart
            </Button>
          </EachProducts>
        ))}
      </ProductsDiv>
    </div>
  );
}
