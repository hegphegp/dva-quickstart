
export default {
  'GET /api/users': {
    code: 200,
    msg: "success",
    list: [
      {id:"001", username:"账号1"},
      {id:"002", username:"账号2"},
      {id:"003", username:"账号3"},
      {id:"004", username:"账号4"},
      {id:"005", username:"账号5"},
      {id:"006", username:"账号6"},
      {id:"007", username:"账号7"},
    ]
  },
  'GET /api/users1': {
    code: 200,
    msg: "success",
    data: [
      {id:"001", username:"账号1"},
      {id:"002", username:"账号2"},
    ]
  },
  'POST /api/users': {
    code: 200,
    msg: "success",
    data: [
      {id:"001", username:"账号1"},
      {id:"002", username:"账号2"},
    ]
  },
};
