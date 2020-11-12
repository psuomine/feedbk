import BaseButton from './BaseButton';

const PrimaryButton = ({ onClick, children, ...rest }) => {
  return (
    <BaseButton onClick={onClick} colorScheme="brand" {...rest}>
      {children}
    </BaseButton>
  );
};

export default PrimaryButton;
