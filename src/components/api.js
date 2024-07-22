const API_URL = "https://ranekapi.origamid.dev/json/api/produto";


export const GET_ALL_PRODUTOS = () => {
  return {
    url: API_URL,
    options: {
      method: "GET",
    },
    headers: { "Content-Type": "application/json" },
  };
};

export const GET_PRODUTO = (id) => {
    return {
      url:  `${API_URL}/${id}`,
      options: {
        method: "GET",
      },
      headers: { "Content-Type": "application/json" },
    };
  };
  
