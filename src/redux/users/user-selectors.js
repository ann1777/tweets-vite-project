export const selectUser = (state) => state.users.data;

export const selectFilter = (state) => state.users.filter;

export const selectFilteredUsers = (state) => {
  const users = selectUser(state);
  const filter = selectFilter(state);
  const filteredUsers = (filter) => {
    switch (filter) {
      case "Show All":
        return users;
      case "Follow":
        return users.filter((user) => user.following === false);
      case "Following":
        return users.filter((user) => user.following === true);
      default:
        return users;
    }
  };
  return filteredUsers(filter);
};
