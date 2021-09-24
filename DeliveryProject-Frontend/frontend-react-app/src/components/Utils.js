
/*
  Imagining which services will be required from the backend.
  url, method, purpose
  /login, POST, login 1
  /register, POST, register 1
  /logout, POST, logout 1
  /order, POST, send order information to BE (backend return order ok)
  if not -> proceed to order error.
  /user, GET, get user info (which has firstName, lastName, password, order history etc)
  /user, POST, edit user info
  /track, GET, get tracking information about package.
*/

export const login = (credential) => {
  const loginUrl = `/login?username=${credential.username}&password=${credential.password}`;

  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error("Fail to log in");
    }
  });
};

export const register = (data) => {
  return fetch(`/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (response.status !== 201) {
      throw Error('Fail to register, email has already been registered');
    }
  })
}


export const order = (data) => {
  return fetch(`/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to order');
    };
    return response.json();
  })
}

export const orderHistory = (userID) => {
  return fetch(`/user/orders?userID=${userID}`, {}).
    then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error('Fail to order');
      };
      return response.json();
    })
}

export const getUser = () => {
  return fetch('/user',{
    credentials: 'include'
  }).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error('Fail to order');
    };
    return response.json();
  })
}

export const getTracking = (orderID) => {
  return fetch(`/tracking?orderID=${orderID}`, {}).
    then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw Error('Fail to track');
      };
      return response.json();
    })
}