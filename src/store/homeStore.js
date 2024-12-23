import { defineStore } from "pinia";
import { useAPIStore } from "./API";

export const useHomeStore = defineStore("Home", {
  state: () => ({
    popularMovies: [],
    popularTVShows: [],
    upcomingMovies: [],
    trending: [],
    isLoading: {
      popularMovies: false,
      popularTVShows: false,
      upcomingMovies: false,
      trending: false,
    },
  }),
  actions: {
    async getPopularMoviesHome(page) {
      /*
              Get the popular movies to display
      
              NOTE: Only for the homepage -> limit the amount to show 
              and use movies page to show more
            */
      this.isLoading.popularMovies = true;
      const movies = await useAPIStore().getPopularMoviesAPI((page = page));
      this.popularMovies = movies;

      this.isLoading.popularMovies = false;
    },

    async getUpcomingMovies(page) {
      /* Get the upcoming movies for the home screen */

      this.isLoading.upcomingMovies = true;

      const upcoming = await useAPIStore().getUpcomingMoviesAPI((page = page));
      this.upcomingMovies = upcoming;

      this.isLoading.upcomingMovies = false;
    },

    async getPopularTVHome(page) {
      /* 
            Retrieve the popular tv shows to display on home screen
        */

      this.isLoading.popularTVShows = true;
      const popularTVShows = await useAPIStore().getPopularTVShowsAPI(
        (page = page)
      );
      this.popularTVShows = popularTVShows;

      this.isLoading.popularTVShows = false;
    },

    async getTrendingContent(media_type, time_window) {
      this.isLoading.trending = true;

      const data = await useAPIStore().getTrendingAPI(media_type, time_window);

      // Update the trending state. If there is already content, write over that, otherwise
      // add the new content
      this.trending = data;

      this.isLoading.trending = false;
    },
  },
});
