import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';


const UserInfo = ({ user }) => (
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

export default connect(mapStateToProps)(UserInfo);
