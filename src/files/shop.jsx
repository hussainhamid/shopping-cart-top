import styled from "styled-components";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const { addToCart } = useOutletContext();

  const Div = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const H1 = styled.h1`
    font-weight: 500;
    margin: 0;
  `;

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

  const Product = styled.div`
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
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      background-color: #0056b3;
      transform: scale(1.1);
      cursor: pointer;
    }
  `;

  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        setProducts(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Div>
          <H1>loading...</H1>
        </Div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Div>
          <H1>Error: {error}</H1>
          <H3>we are working on it.</H3>
        </Div>
      </>
    );
  }

  return (
    <div>
      <ProductsDiv>
        {products.map((product) => (
          <Product key={product.id}>
            <H3>
              {product.title.length > 50
                ? `${product.title.slice(0, 50)}...`
                : product.title}
            </H3>
            <Img src={product.image} />
            <p>${product.price}</p>
            <Button onClick={() => addToCart(product)}>Add to cart</Button>
          </Product>
        ))}
      </ProductsDiv>
    </div>
  );
}
