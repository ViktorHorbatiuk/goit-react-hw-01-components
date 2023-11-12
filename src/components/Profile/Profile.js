import PropTypes from 'prop-types';
import css from './Profile.module.css'


export default function Profile({username, tag, location, avatar, stats}) {
    return (
      <div className={css.profileStyles}>
        <div className={css.descriptionStyles}>
          <img src={avatar} alt="Avatar of user" className={css.avatarStyles} />
          <p className={css.usernameStyles}>{username}</p>
          <p className={css.infoStyles}>@{tag}</p>
          <p className={css.infoStyles}>{location}</p>
        </div>

        <ul className={css.statsStyles}>
          <li>
            <span className={css.labelStyles}>Followers</span>
            <span className={css.quantityStyles}>{stats.followers}</span>
          </li>
          <li>
            <span className={css.labelStyles}>Views</span>
            <span className={css.quantityStyles}>{stats.views}</span>
          </li>
          <li>
            <span className={css.labelStyles}>Likes</span>
            <span className={css.quantityStyles}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
