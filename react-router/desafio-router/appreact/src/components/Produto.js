import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";

import style from "./Produto.module.css";

const Produto = () => {
  const { id } = useParams();

  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setProduto(data);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={style.produto + " animeLeft"}>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Ranek | Esse é um produto: ${produto.nome}`}
      />
      {produto.fotos.map((foto) => (
        <img key={foto.src} src={foto.src} alt={foto.titulo} />
      ))}
      <div>
        <h1>{produto.nome}</h1>
        <span className={style.preco}>R$ {produto.preco}</span>
        <p className={style.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
