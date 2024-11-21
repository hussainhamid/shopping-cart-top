import styled from "styled-components";

export default function Home() {
  const HomeDiv = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const H1 = styled.h1`
    margin: 0;
    font-weight: 500;
  `;

  const H2 = styled.h2`
    font-weight: 500;
  `;

  return (
    <>
      <HomeDiv>
        <H1>this is the home page,</H1>
        <H2>of a wonderful website.</H2>
      </HomeDiv>
    </>
  );
}
