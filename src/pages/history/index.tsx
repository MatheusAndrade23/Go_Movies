import { HistoryContainer, HistoryCard, MoviesContainer } from './styles';

import Carousel from 'react-elastic-carousel';

import { useContext } from 'react';
import { OrdersContext } from '../../providers/OrdersProvider';

import { IoLocationSharp } from 'react-icons/io5';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { BsCalendarDate } from 'react-icons/bs';

import { MovieProps } from '../Home';

import { FullMovieCard } from '../../components/FullMovieCard';

export const History = () => {
  const { completedOrders } = useContext(OrdersContext);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 650, itemsToShow: 3 },
    { width: 1100, itemsToShow: 4 },
  ];

  return (
    <HistoryContainer>
      {completedOrders.length === 0 && (
        <h2>Você ainda não completou nenhum pedido!</h2>
      )}
      {completedOrders.map((order) => (
        <HistoryCard key={order.id} title="Clique para ver os filmes comprados">
          <summary>
            <div>
              <BsCalendarDate /> <span>{order.date}</span>
            </div>
            <div>
              <FaMoneyBillAlt />
              <span>{`R$ ${order.totalPrice
                .toString()
                .replace('.', ',')}`}</span>
            </div>
            <div>
              <IoLocationSharp />
              <span>{`${order.address}, ${order.city}, ${order.estate}`}</span>
            </div>
          </summary>
          <MoviesContainer>
            {/* Está dando erro, dizendo que Carousel não recebe Children, não achei uma solução em tempo*/}
            {/* @ts-ignore */}
            <Carousel isRtl breakPoints={breakPoints}>
              {order.cart.map((movie) => (
                <FullMovieCard key={movie.id} {...movie} />
              ))}
            </Carousel>
          </MoviesContainer>
        </HistoryCard>
      ))}
    </HistoryContainer>
  );
};
