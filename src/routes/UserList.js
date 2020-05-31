import {connect} from 'dva'
import ListBody from "../components/ListBody"
import React from "react";

class UserList extends React.Component {
  render() {
    return (
      <ListBody {...this.props} />      //将自身的props传给子组件。连接之后的组件可以拥有dispatch、索引后的数据模型。
    )
  }
}

function mapStateToProps(state) {      //将数据模型索引到props。
  return {users:state.users}
}

export default connect(mapStateToProps)(UserList)         //将组件与数据模型相连接。
