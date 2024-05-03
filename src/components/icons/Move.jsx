import { MoveIcon } from '@radix-ui/react-icons';

const Move = ({ size = '4rem' }) => {
  return (
    <MoveIcon
      width={size}
      height={size}
      style={{ rotate: '45deg' }}
    />
  );
};

export default Move;
