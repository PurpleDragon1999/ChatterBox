// @ts-ignore
const users = [];

// @ts-ignore
function userJoin(id, username, room) {
  const user = { id, username, room };

  users.push(user);

  return user;
}

// Get current user
// @ts-ignore
function getCurrentUser(id) {
  // @ts-ignore
  return users.find((user) => user.id === id);
}

// User leaves chat
// @ts-ignore
function userLeave(id) {
  // @ts-ignore
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    // @ts-ignore
    return users.splice(index, 1)[0];
  }
}

// Get room users
// @ts-ignore
function getRoomUsers(room) {
  // @ts-ignore
  return users.filter((user) => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
};
