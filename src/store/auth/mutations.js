export const LOGIN_OK = (state, user) => {
  state.User.firstName = user.data.first_name
  state.User.lastName = user.data.last_name
  state.User.ID = user.data.id
  state.User.userName = user.data.username
  state.User.email = user.data.email
  state.loggedIn = true
}
