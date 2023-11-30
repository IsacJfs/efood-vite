
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../../store';
import { setResponseData } from '../redux/responseSlice';

const CheckoutButton = () => {
  // Acessa os estados do carrinho, entrega e pagamento do Redux.
  const cart = useSelector((state: RootReducer) => state.cart);
  const delivery = useSelector((state: RootReducer) => state.delivery);
  const payment = useSelector((state: RootReducer) => state.payment);
  const dispatch = useDispatch()

  const handleCheckout = async () => {
    const checkoutData = {
      // Prepara os dados para o checkout formatando-os de acordo com o schema da API.
      products: cart.items.map(item => ({
      // Mapeia os itens do carrinho para criar um array com os IDs e preços dos produtos.
        id: item.id,        // ID do produto
        price: item.preco   // Preço do produto
      })),
      // Estrutura as informações de entrega, obtidas no AddressForm
      delivery: {
        receiver: delivery.receiver,     // Nome do destinatário
        address: {
          description: delivery.description,  // Contém as informações de Logradouro, bairro, lote
          city: delivery.city,                // Nome da cidade
          zipCode: delivery.zipCode,          // CEP
          number: delivery.number,            // Número do Lote/Casa
          complement: delivery.complement     // Algum complemento, não é obrigatório
        }
      },
      payment: {
        // Estrutura as informações de pagamento, obtidas no PaymentForm
        card: {
          name: payment.name,     // Nome contido no cartão
          number: payment.number, // Número do cartão
          code: payment.code,     // Código do cartão
          expires: {
            month: payment.month, // Mês de vencimento do cartão
            year: payment.year    // Ano de vencimento do cartão
          }
        }
      }
    };

    try {
      // Realiza a requisição POST para a API de checkout com os dados formatados.
      const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify(checkoutData),   // Converte os dados do checkout para JSON
      });

      // Verifica se a resposta da API foi bem-sucedida.
      if (!response.ok) {
        throw new Error('Erro no envio do checkout');
      }

      // Processa a resposta da API.
      const responseData = await response.json();
      console.log('Checkout bem-sucedido:', responseData);
      dispatch(setResponseData(responseData))
    } catch (error) {
      // Captura e registra erros ocorridos durante a requisição ou processamento da resposta.
      console.error('Erro no checkout:', error);
    }
  };


  // Renderiza um botão que, quando clicado, dispara o processo de checkout.
  return (
    <button type='submit' onClick={handleCheckout}>Finalizar Pedido</button>
  );
};

export default CheckoutButton;
