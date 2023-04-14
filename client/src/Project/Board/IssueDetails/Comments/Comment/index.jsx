import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { formatDateTimeConversational } from 'shared/utils/dateTime';

import { Comment, UserAvatar, Content, Username, CreatedAt, Body } from './Styles';

const propTypes = {
  comment: PropTypes.object.isRequired,
};

const CommentComp = ({ comment }) => {
  return (
    <Comment data-testid="issue-comment">
      <UserAvatar name={comment.user.name} avatarUrl={comment.user.avatarUrl} />
      <Content>
        <Username>{comment.user.name}</Username>
        <CreatedAt>{formatDateTimeConversational(comment.createdAt)}</CreatedAt>
        <Fragment>
          <Body>{comment.body}</Body>
        </Fragment>
      </Content>
    </Comment>
  );
};

CommentComp.propTypes = propTypes;

export default CommentComp;
