/*
  Imagining which services will be required from the backend.

  url, method, purpose
  /login, POST, login
  /register, POST, register
  /logout, POST, logout
  /order, POST, send order information to BE
  /orderInfo, GET, get previously posted info in two other pages
  /order, GET, get order status, if ok -> proceed to placed order page
  if not -> proceed to order error.
  /user, GET, get user info (which has firstName, lastName, password, order history etc)
  /oldOrder, GET, get order info (after clicking into order history)
  /track, GET, get tracking information about package.
*/