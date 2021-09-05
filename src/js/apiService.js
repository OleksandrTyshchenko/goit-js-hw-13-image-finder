export default {
    apiKey: '23251325-a34046964fe94b5c989f15293',
    searchQuery: '',
    perPage: 12,
    page: 1,

    fetchPhoto() {
        const url = `https://pixabay.com/api/?q=${this.query}&image_type=photo&orientation=horizontal&per_page=${this.perPage}&key=${this.apiKey}&page=${this.page}`;
        return fetch(url)
            .then(res => {
                this.incrementPage();
                return res.json();
            })
            .catch(err => console.log(err));
    },

    resetPage() {
        this.page = 1;
    },

    incrementPage() {
        this.page += 1;
    },

    get query() {
        return this.searchQuery.trim();
    },

    set query(value) {
        this.searchQuery = value;
    },

};