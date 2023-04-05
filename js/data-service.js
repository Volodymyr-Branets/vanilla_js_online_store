class DataService {
  constructor(api) {
    this.api = api;
  }

  // Get data from server
  async getData() {
    if (!this.data) {
      this.data = await (await fetch(this.api)).json();
    }
    return this.data;
  }

  // Get data item by id
  async getDataItemById(id) {
    const data = await this.getData();
    return data.find((item) => item.id === id);
  }
}
