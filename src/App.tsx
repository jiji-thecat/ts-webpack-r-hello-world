import { useState } from 'react';
import cx from 'classnames';

function LikeButton() {
  const [likes, setLikes] = useState(100);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLikes(likes + (liked ? -1 : 1));
    setLiked(!liked);
  };

  return (
    <>
      <button className={cx('like-button', { liked })} onClick={handleClick}>
        Like | <span className="likes-counter">{likes}</span>
      </button>
      <style>{`
        .like-button {
          font-size: 1rem;
          padding: 5px 10px;
          color:  #585858;
        }
        .liked {
          font-weight: bold;
          color: #1565c0;
        }
      `}</style>
    </>
  );
}

export default LikeButton;
