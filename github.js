class GitHub {
  constructor() {
    this.client_id = "52ceaa9a09e293c6fd1e";
    this.client_secret = "6d15de67bab2060a2b9902efa2f1e94111420777";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
