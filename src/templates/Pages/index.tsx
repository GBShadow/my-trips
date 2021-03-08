import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';
import * as S from './styles';

const PageTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi minus harum
          voluptatum facilis natus quam magnam? Doloremque autem quaerat doloribus
          reprehenderit dignissimos? Deserunt voluptates doloremque rem voluptate tempore,
          praesentium perferendis.
        </p>
      </S.Body>
    </S.Content>
  );
};

export default PageTemplate;
