import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import BodyForm from './BodyForm';
import { Avatar } from '../../../../shared/components';
import api from '../../../../shared/utils/api';
import useCurrentUser from '../../../../shared/hooks/currentUser';
import { Comments, Title, Create, Right, UserAvatar, FakeTextarea, Tip, TipLetter } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  fetchIssue: PropTypes.func.isRequired,
};

const CommentsComponent = ({ issue, fetchIssue }) => {
  const [isFormOpen, setEditing] = React.useState(false);
  const [body, setBody] = React.useState('');
  const [sortedComments, setSortedComments] = React.useState([]);

  const { currentUser } = useCurrentUser();

  React.useEffect(() => {
    setSortedComments(issue.comments.sort((a, b) => a.createdAt < b.createdAt));
  }, [issue]);

  React.useEffect(() => {
    const handleKeyDown = event => {
      console.log(event);
      if (event.key === 'm') {
        setEditing(true);
      }
    };

    document.addEventListener('keypress', handleKeyDown);
  }, [setEditing]);

  const createComment = () =>
    api
      .post(`/comments`, { body, issueId: issue.id, userId: currentUser.id })
      .then(fetchIssue)
      .then(() => {
        setEditing(false);
      });

  return (
    <Comments>
      <Title>Comments</Title>
      <Create>
        {currentUser ? (
          <UserAvatar>
            <Avatar name={currentUser.name} avatarUrl={currentUser.avatarUrl} />
          </UserAvatar>
        ) : null}
        <Right>
          {isFormOpen ? (
            <BodyForm
              value={body}
              setComment={setBody}
              handleComentCreate={createComment}
              onCancel={() => setEditing(false)}
            />
          ) : (
            <Fragment>
              <FakeTextarea onClick={() => setEditing(true)}>Add a comment...</FakeTextarea>
              <Tip>
                <strong>Pro tip:</strong>press<TipLetter>M</TipLetter>to comment
              </Tip>
            </Fragment>
          )}
        </Right>
      </Create>

      {sortedComments.map(comment => (
        <Comment comment={comment} fetchIssue={fetchIssue} />
      ))}
    </Comments>
  );
};

CommentsComponent.propTypes = propTypes;

export default CommentsComponent;
