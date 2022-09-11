import { OrderCompletedCardContainer, Card } from './styles';

interface OderCompletedCardProps {
  show: boolean;
  name: string;
  close: () => void;
}

export const OrderCompletedCard = ({
  show,
  name,
  close,
}: OderCompletedCardProps) => {
  const handleCloseCard = () => {
    window.location.href = '/';
    close();
  };

  return (
    <>
      {show && (
        <OrderCompletedCardContainer>
          <Card>
            <h2>{`Obrigado ${name}!`}</h2>
            <p>Sua compra foi finalizada com sucesso!</p>
            <button
              onClick={handleCloseCard}
              title="Clique para ir para a loja!"
            >
              Ir para loja
            </button>
          </Card>
        </OrderCompletedCardContainer>
      )}
    </>
  );
};
