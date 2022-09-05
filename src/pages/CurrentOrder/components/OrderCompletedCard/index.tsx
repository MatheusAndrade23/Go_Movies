import { OrderCompletedCardContainer, Card } from './styles';

interface HiddenProps {
  active: boolean;
  name: '';
}

interface OderCompletedCardProps {
  show: boolean;
  name: string;
  hidden: ({ active, name }: HiddenProps) => void;
}

export const OrderCompletedCard = ({
  show,
  name,
  hidden,
}: OderCompletedCardProps) => {
  const handleHiddenCard = () => {
    window.location.href = '/';
    hidden({ active: false, name: '' });
  };

  return (
    <>
      {show && (
        <OrderCompletedCardContainer>
          <Card>
            <h2>{`Obrigado ${name}!`}</h2>
            <p>Sua compra foi finalizada com sucesso!</p>
            <button
              onClick={handleHiddenCard}
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
