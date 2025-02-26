class Api {
  constructor() {
    this._baseUrl = 'https://elartedeproducir.com/api/';
    //this._baseUrl = 'http://localhost:3000/api/';
    this._options = {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    };
  }

  async postContact({ firstName, number }) {
    this._options.method = 'POST';
    this._specificUrl = 'users';
    this._options.body = JSON.stringify({ firstName, number });
    const data = await this._fetchData();
    return data;
  }

  async getData() {
    this._options.method = 'GET';
    this._specificUrl = 'data';
    this._options.body = null;
    const data = await this._fetchData();
    return data;
  }

  async _fetchData() {
    try {
      const res = await fetch(this._baseUrl + this._specificUrl, this._options);
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    } catch (err) {
      console.error(err);
    }
  }

  // Por si algún día regreso a mi backend

  // _fetchData() {
  //   if (this._jwt) this._options.headers.authorization = `Bearer ${this._jwt}`;
  //   return fetch(this._baseUrl + this._specificUrl, this._options)
  //     .then((res) => {
  //       if (res.ok) return res.json();
  //       return Promise.reject(`Error: ${res.status}`);
  //     })
  //     .catch((err) => console.error(err));
  // }

  // getUserInfo(jwt) {
  //   this._jwt = jwt;
  //   this._specificUrl = 'users/current';
  //   this._options.method = 'GET';
  //   delete this._options.body;
  //   return this._fetchData();
  // }

  // getDate() {
  //   this._specificUrl = 'date';
  //   this._options.method = 'GET';
  //   delete this._options.body;
  //   return this._fetchData();
  // }

  // postUser(data) {
  //   const { username, email } = data;
  //   this._specificUrl = 'users';
  //   this._options.method = 'POST';
  //   this._options.body = JSON.stringify({
  //     username,
  //     email,
  //   });
  //   return this._fetchData();
  // }

  // // Protected routes

  // getUsers() {
  //   this._specificUrl = 'users/all';
  //   this._options.method = 'GET';
  //   delete this._options.body;
  //   return this._fetchData();
  // }

  // getNumbers() {
  //   this._specificUrl = 'users/numbers';
  //   this._options.method = 'GET';
  //   delete this._options.body;
  //   return this._fetchData();
  // }

  // getActiveUsers() {
  //   this._specificUrl = 'users/active';
  //   this._options.method = 'GET';
  //   delete this._options.body;
  //   return this._fetchData();
  // }

  // getEngagedUsers() {
  //   this._specificUrl = 'users/engaged';
  //   this._options.method = 'GET';
  //   delete this._options.body;
  //   return this._fetchData();
  // }

  // getClientUsers() {
  //   this._specificUrl = 'users/client';
  //   this._options.method = 'GET';
  //   delete this._options.body;
  //   return this._fetchData();
  // }

  // getAdminUsers() {
  //   this._specificUrl = 'users/admin';
  //   this._options.method = 'GET';
  //   delete this._options.body;
  //   return this._fetchData();
  // }

  // updateToClientUser(id) {
  //   this._specificUrl = `users/client/${id}`;
  //   this._options.method = 'PATCH';
  //   delete this._options.body;
  //   return this._fetchData();
  // }

  // updateReengagetUser(id) {
  //   this._specificUrl = `users/reengage/${id}`;
  //   this._options.method = 'PATCH';
  //   delete this._options.body;
  //   return this._fetchData();
  // }

  // deleteUser(id) {
  //   this._specificUrl = `users/${id} `;
  //   this._options.method = 'DELETE';
  //   delete this._options.body;
  //   return this._fetchData();
  // }

  // postEmail(data) {
  //   const { subject, htmlBody } = data;
  //   this._specificUrl = 'email';
  //   this._options.method = 'POST';
  //   this._options.body = JSON.stringify({
  //     subject,
  //     htmlBody,
  //   });
  //   return this._fetchData();
  // }
}

const api = new Api();
export default api;
