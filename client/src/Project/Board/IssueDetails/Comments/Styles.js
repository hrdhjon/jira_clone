import styled from 'styled-components';
import { color, font } from 'shared/utils/styles';

export const Comments = styled.div`
  padding-top: 40px;
`;

export const Create = styled.div`
  position: relative;
  margin-top: 25px;
  font-size: 15px;
`;

export const Title = styled.div`
  font-family: 'CircularStdMedium';
  font-weight: normal;
  font-size: 15px;
`;

export const FakeTextarea = styled.div`
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid #dfe1e6;
  color: #8993a4;
  cursor: pointer;
  user-select: none;
  &:hover {
    border: 1px solid #c1c7d0;
  }
`;

export const UserAvatar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Right = styled.div`
  padding-left: 44px;
`;

export const Tip = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  color: ${color.textMedium};
  ${font.size(13)}
  strong {
    padding-right: 4px;
  }
`;

export const TipLetter = styled.span`
  position: relative;
  top: 1px;
  display: inline-block;
  margin: 0 4px;
  padding: 0 4px;
  border-radius: 2px;
  color: ${color.textDarkest};
  background: ${color.backgroundMedium};
  ${font.bold}
  ${font.size(12)}
`;
