import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';

import { Textarea } from 'shared/components';

import { Actions, FormButton } from './Styles';

const propTypes = {
  value: PropTypes.string.isRequired,
  setComment: PropTypes.func.isRequired,
  isWorking: PropTypes.bool.isRequired,
  handleComentCreate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsCommentsBodyForm = ({
  value,
  handleComentCreate,
  isWorking,
  setComment,
  onCancel,
}) => {
  const $textareaRef = useRef();

  const handleSubmit = () => {
    handleComentCreate();
  };

  return (
    <Fragment>
      <Textarea
        autoFocus
        placeholder="Add a comment..."
        value={value}
        onChange={setComment}
        ref={$textareaRef}
      />
      <Actions>
        <FormButton variant="primary" isWorking={isWorking} onClick={handleSubmit}>
          Save
        </FormButton>
        <FormButton variant="empty" onClick={onCancel}>
          Cancel
        </FormButton>
      </Actions>
    </Fragment>
  );
};

ProjectBoardIssueDetailsCommentsBodyForm.propTypes = propTypes;

export default ProjectBoardIssueDetailsCommentsBodyForm;
