import Card from './Card';
import useCounter from '../hooks/use-counter';

const BackwardCounter = () => {
  const counter = useCounter(false); //sending un-truthy value of 'countForward'
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
