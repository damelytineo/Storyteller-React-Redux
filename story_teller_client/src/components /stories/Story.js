import React from 'react';
import CommentsContainer from '../../containers/CommentsContainer';

const Story = ({ match, stories }) => {
  if (stories.length === 0) return null
  return (
    <div className="container">
      <div className="mt-3">
        <img src={stories.find(s => s.id == match.params.storyId).image} alt={'Story Scene'} className="center" />
      </div>
      <h3>{stories.find(s => s.id == match.params.storyId).opening_line}</h3>
      <p>Created By: {stories.find(s => s.id == match.params.storyId).author}</p>
      <CommentsContainer story_id={stories.find(s => s.id == match.params.storyId).id} />
    </div>
  );
};

export default Story;