import { defineStore } from "pinia";
import axios from "axios";

export const useDressBooking = defineStore("dress-booking", {
  state: () => ({
    booking: false,
    bookings: [],
    date: "",
    form: {
      dress_id: "",
      quantity: 1,
      email: localStorage.getItem("email") ?? "",
      phone_number: localStorage.getItem("phone_number") ?? "",
    },
    success: null,
    errors: [],
    error: [],
  }),
  actions: {
    async getAwaylableDressDates(dress_id) {
      this.form.dress_id = dress_id;
      axios
        .get("/v1/client/rent/booking/available", {
          params: { dress_id },
        })
        .then((response) => {
          this.bookings = response.data.data;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    getBusyDates(date) {
      const d = date.toLocaleDateString("en-CA");

      return (
        date < new Date(+new Date() - 1000 * 60 * 60 * 24 * 1) ||
        date > new Date(+new Date() + 1000 * 60 * 60 * 24 * 13) ||
        this.bookings.find(
          (item) => item.date === d && item.booking[0].free < 1
        )
      );
    },
    async changeDate(date) {
      console.log("xx", date);
    },
    saveBooking(e) {
      e.preventDefault();
      this.errors = [];
      axios
        .post("/v1/client/rent/booking/save", {
          ...this.form,
          date: this.date
            ? new Date(this.date).toLocaleDateString("en-CA")
            : "",
        })
        .then((response) => {
          this.$patch({
            booking: response.data.data,
            success: true,
          });
          localStorage.setItem("email", this.form.email);
          localStorage.setItem("phone_number", this.form.phone_number);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
});
