import { compose } from 'recompose';
import { connect } from 'react-redux';

import withDataLoading from 'src/hocs/with-data-loading';
import HomePage from 'src/pages/HomePage';
import * as serviceCallsActions from 'src/actions/service-call';

const getServiceCalls = state => Object.values(state.serviceCalls);

const mapStateToProps = state => ({
  serviceCalls: getServiceCalls(state),
});

const mapDispatchToProps = {
  connectSocket: socketActions.connectSocket,
  loadServiceCalls: serviceCallsActions.loadServiceCalls,
};

const loadData = props => props.loadServiceCalls();

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withDataLoading(loadData)
)(HomePage);
