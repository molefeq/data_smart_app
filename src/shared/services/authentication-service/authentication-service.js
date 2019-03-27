const authenticationService = {
  isAuthenticated() {
    const user = this.getUserDetails();

    return Boolean(user) && Boolean(user.token);
  },
  authenticate(user) {
    localStorage.setItem("user", JSON.stringify(user));
  },
  getUserDetails() {
    if (localStorage["user"] === null || localStorage["user"] === undefined) {
      return null;
    }

    return JSON.parse(localStorage["user"]);
  },
  getToken() {
    const user = this.getUserDetails();

    if(!Boolean(user)){
      return null;
    }
    
    return user.token;
  },
  getUsername() {
    const user = this.getUserDetails();

    if(!Boolean(user)){
      return null;
    }

    return user.username;
  },
  getUserId() {
    const user = this.getUserDetails();

    if(!Boolean(user)){
      return null;
    }

    return user.id;
  },
  signOut() {
    localStorage.clear();
    sessionStorage.clear();
  }
};

export default authenticationService;
