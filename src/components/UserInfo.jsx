import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export const UserInfo = ({ user }) => (
  <div>
    <span>
      {user}
    </span>
  </div>
);

UserInfo.propTypes = {
  user: PropTypes.string,
};
UserInfo.defaultProps = {
  user: 'some user',
};

const mapStateToProps = state => ({ user: state.user });

const connectedUserInfo = connect(mapStateToProps)(UserInfo);
export default connectedUserInfo;
