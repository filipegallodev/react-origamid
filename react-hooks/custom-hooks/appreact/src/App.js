import React from "react";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) {
    return <p>{error}</p>;
  }
  if (loading) {
    return <p>Carregando...</p>;
  }
  if (data) {
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        {data &&
          data.map((produto) => (
            <div key={produto.id}>
              <h1>{produto.nome}</h1>
            </div>
          ))}
      </div>
    );
  }
  return null;
};

export default App;
