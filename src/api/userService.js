//mock only for axon test
import http from 'utils/http';

const userService = {
  save,
  get,
};

//mock
function save(data) {
  return http.request(http.base.axon, 'v1/user/save', data, 'post');
}
//mock
function get(id) {
  return http.request(http.base.axon, `v1/user/${id}`);
}

export default userService;
