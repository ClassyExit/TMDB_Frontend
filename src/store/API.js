import { defineStore } from "pinia";

export const useAPIStore = defineStore("API", {
  state: () => ({}),
  getters: {},
  actions: {
    async getTrendingAPI(media_type = "all", time_window = "day") {
      /*
      Retrieves the trending content for the specified parameters

      PARAMETERS:
      media_type: all | movie | tv | person
      time_window: day | week
      */

      try {
        const response = await fetch(
          `https://tmdb-backend.herokuapp.com/api/trending?media_type=${media_type}&time_window=${time_window}`
        );
        return response.json();
      } catch {
        // Server is idling, fallback to second URL
        const response = await fetch(
          `https://tmdb-backend.autoidleapp.com/api/trending?media_type=${media_type}&time_window=${time_window}`
        );
        return response.json();
      }
    },

    async getMovieCreditsAPI(movie_id) {
      if (!movie_id) return;

      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/movie/credits?movie_id=${movie_id}`
      );
      return response.json();
    },

    async getMovieRecommendationsAPI(movie_id) {
      if (!movie_id) return;

      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/movie/recommendations?movie_id=${movie_id}`
      );
      return response.json();
    },

    async getMovieDetailsAPI(movie_id) {
      if (!movie_id) return;

      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/movie/details?movie_id=${movie_id}`
      );
      return response.json();
    },

    async getPopularMoviesAPI(page = 1) {
      try {
        const response = await fetch(
          `https://tmdb-backend.herokuapp.com/api/movie/popular?page=${page}`
        );
        return await response.json();
      } catch {
        const response = await fetch(
          `https://tmdb-backend.autoidleapp.com/api/movie/popular?page=${page}`
        );
        return response.json();
      }
    },

    async getUpcomingMoviesAPI(page = 1) {
      try {
        const response = await fetch(
          `https://tmdb-backend.herokuapp.com/api/movie/upcoming?page=${page}`
        );
        return response.json();
      } catch {
        const response = await fetch(
          `https://tmdb-backend.autoidleapp.com/api/movie/upcoming?page=${page}`
        );
        return response.json();
      }
    },

    async getLatestMovieAPI() {
      try {
        const response = await fetch(
          `https://tmdb-backend.herokuapp.com/api/movie/latest`
        );
        return response.json();
      } catch {
        const response = await fetch(
          `https://tmdb-backend.autoidleapp.com/api/movie/latest`
        );
        return response.json();
      }
    },

    async getTopRatedMoviesAPI(page = 1) {
      try {
        const response = await fetch(
          `https://tmdb-backend.herokuapp.com/api/movie/toprated?page=${page}`
        );
        return response.json();
      } catch {
        const response = await fetch(
          `https://tmdb-backend.autoidleapp.com/api/movie/toprated?page=${page}`
        );
        return response.json();
      }
    },

    async getPopularTVShowsAPI(page = 1) {
      try {
        const response = await fetch(
          `https://tmdb-backend.herokuapp.com/api/tv/popular?page=${page}`
        );
        return response.json();
      } catch {
        const response = await fetch(
          `https://tmdb-backend.autoidleapp.com/api/tv/popular?page=${page}`
        );
        return response.json();
      }
    },

    async getTVDetailsAPI(tv_id) {
      if (!tv_id) return;

      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/tv/details?tv_id=${tv_id}`
      );
      return response.json();
    },

    async getTVRecommendationsAPI(tv_id) {
      if (!tv_id) return;

      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/tv/recommendations?tv_id=${tv_id}`
      );
      return response.json();
    },

    async getTVCredits(tv_id) {
      if (!tv_id) return;

      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/tv/credits?tv_id=${tv_id}`
      );
      return response.json();
    },

    async getTVReviews(tv_id) {
      if (!tv_id) return;

      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/tv/review?tv_id=${tv_id}`
      );
      return response.json();
    },

    async getMovieReviews(movie_id) {
      if (!movie_id) return;

      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/movie/review?movie_id=${movie_id}`
      );
      return response.json();
    },

    async getMovieGenres() {
      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/genre/movies`
      );
      return response.json();
    },

    async getTVGenres() {
      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/genre/tv`
      );
      return response.json();
    },

    async getMovieDiscover(
      sort_by,
      page,
      vote_average,
      vote_sort,
      with_genres
    ) {
      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/movie/discover?sort_by=${sort_by}&page=${page}&vote_average=${vote_average}&vote_sort=${vote_sort}&with_genres=${with_genres}`
      );

      return response.json();
    },

    async getTVDiscover(
      sort_by,
      page,
      vote_average,
      vote_sort = "gte",
      with_genres
    ) {
      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/tv/discover?sort_by=${sort_by}&page=${page}&vote_average=${vote_average}&vote_sort=${vote_sort}&with_genres=${with_genres}`
      );

      return response.json();
    },

    async getSearchResults(query, page = 1) {
      const type = "multi";

      const response = await fetch(
        `https://tmdb-backend.herokuapp.com/api/search/${type}?query=${query}&page=${page}`
      );

      return response.json();
    },
  },
});
