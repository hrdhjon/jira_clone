import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Avatar } from 'shared/components';

export const Comment = styled.div`
  position: relative;
  margin-top: 25px;
  ${font.size(15)}
`;

export const UserAvatar = styled(Avatar)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  padding-left: 44px;
  margin: 0;
`;

export const Username = styled.div`
  display: inline-block;
  padding-right: 12px;
  padding-bottom: 10px;
  color: ${color.textDark};
  ${font.medium}
`;

export const CreatedAt = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  color: ${color.textDark};
  ${font.size(14.5)}
`;

export const Body = styled.p`
  padding-bottom: 10px;
  white-space: pre-wrap;
`;
