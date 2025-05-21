export const quartos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          quarto: 1,
          leito: 1,
          responsavel: 'João',
          status: 'livre',
        },
        {
          quarto: 2,
          leito: 2,
          responsavel: 'Maria',
          status: 'ocupado',
        },
        {
          quarto: 3,
          leito: 1,
          responsavel: 'Lucas',
          status: 'aguardando limpeza',
        },
        {
          quarto: 4,
          leito: 2,
          responsavel: 'Ana',
          status: 'ocupado',
        },
        {
          quarto: 5,
          leito: 1,
          responsavel: 'João',
          status: 'aguardando manutenção',
        },
        {
          quarto: 6,
          leito: 2,
          responsavel: 'Maria',
          status: 'livre',
        },
        {
          quarto: 7,
          leito: 1,
          responsavel: 'Lucas',
          status: 'ocupado',
        },
        {
          quarto: 8,
          leito: 2,
          responsavel: 'Ana',
          status: 'aguardando limpeza',
        },
        {
          quarto: 9,
          leito: 1,
          responsavel: 'João',
          status: 'ocupado',
        },
        {
          quarto: 10,
          leito: 2,
          responsavel: 'Maria',
          status: 'aguardando manutenção',
        },
        {
          quarto: 11,
          leito: 1,
          responsavel: 'Lucas',
          status: 'livre',
        },
        {
          quarto: 12,
          leito: 2,
          responsavel: 'Ana',
          status: 'ocupado',
        },
        {
          quarto: 13,
          leito: 1,
          responsavel: 'João',
          status: 'aguardando limpeza',
        },
        {
          quarto: 14,
          leito: 2,
          responsavel: 'Maria',
          status: 'livre',
        },
        {
          quarto: 15,
          leito: 1,
          responsavel: 'Lucas',
          status: 'aguardando manutenção',
        }
      ]);
    }, 1000);
  });
};