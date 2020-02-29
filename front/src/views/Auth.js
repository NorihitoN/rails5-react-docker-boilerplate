import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

function AppLoading() {
  return (
    <div className="loading-page">
      <Spinner animation="border" variant="danger" />
    </div>
  );
}

// 要修正
// すべてのページにgetFetchを書くよりも、Authに書いたほうが管理しやすい
// Wrapper関数とする
// /app内の画面遷移でgetFetchは毎回読み込まれるのか？
const Auth = (props) => {
    return (
      // DashboardをrenderしなおすとisSignInが初期化falseとなり一瞬login画面が表示される。
      // login画面がでないようにSpinner表示ができないか。
      props.isLoading ? <AppLoading/> : (
        props.isSignedIn ? (props.children) : (<Redirect to='/login'/>)
      )
    );
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.currentUser.isSignedIn,
    isLoading: state.auth.currentUser.isLoading,
  }
}

export default connect(mapStateToProps)(Auth);