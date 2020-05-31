import React from 'react';
import {Link} from 'dva/router'

class ListBody extends React.Component{

  removeItem(i){
    this.props.dispatch({type:"list/removeItem",index:i}) //通过props获取dispatch方法，list表示数据模型（namespace），removeItem表示reducers或者effects。
  }

  removeUserItem(item){
    this.props.dispatch({type:"users/fetchRemoveItem",item})
  }

  render(){
    const that = this;
    let listDom = [];
    let userList = [];
    let userData = this.props.users.list;   //users：数据模型
    if (userData.length>=1){
      userData.forEach(function (item, index) {
        userList.push(<li key={index} onClick={that.removeUserItem.bind(that,item)}>{item.username}</li>)
      })
    }

    return(
      <div>
        <Link to="/">to counter</Link>
        <h2>请尝试点击条目。</h2>
        {listDom}
        <h2>用户列表：</h2>
        {userList}
      </div>
    )
  }
}

export default ListBody;

