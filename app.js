const { createApp } = Vue

createApp({
  data() {
    return {
        lessons: [
  { id: 1, subject: "Mathematics", location: "Hendon", price: 100, spaces: 5,
    icon: "fa-solid fa-calculator",
    image: "https://img.icons8.com/color/240/calculator--v1.png" },

  { id: 2, subject: "English", location: "Colindale", price: 80, spaces: 3,
    icon: "fa-solid fa-book-open",
    image: "https://img.icons8.com/color/240/book-reading.png" },

  { id: 3, subject: "Biology", location: "Golders Green", price: 90, spaces: 2,
    icon: "fa-solid fa-seedling",               // free alternative to 'leaf'
    image: "https://img.icons8.com/color/240/biology.png" },

  { id: 4, subject: "Chemistry", location: "Brent Cross", price: 70, spaces: 6,
    icon: "fa-solid fa-flask",
    image: "https://img.icons8.com/color/240/test-tube.png" },

  { id: 5, subject: "History", location: "Hendon", price: 50, spaces: 4,
    icon: "fa-solid fa-landmark",
    image: "https://img.icons8.com/color/240/scroll.png" },

  { id: 6, subject: "Physics", location: "Colindale", price: 95, spaces: 7,
    icon: "fa-solid fa-atom",
    image: "https://img.icons8.com/color/240/physics.png" },

  { id: 7, subject: "Art", location: "Brent Cross", price: 60, spaces: 10,
    icon: "fa-solid fa-palette",
    image: "https://img.icons8.com/color/240/art-prices.png" },

  { id: 8, subject: "Geography", location: "Golders Green", price: 85, spaces: 5,
    icon: "fa-solid fa-earth-europe",
    image: "https://img.icons8.com/color/240/globe--v1.png" },

  { id: 9, subject: "Computer Science", location: "Hendon", price: 120, spaces: 2,
    icon: "fa-solid fa-code",
    image: "https://img.icons8.com/color/240/source-code.png" },

  { id: 10, subject: "Economics", location: "Colindale", price: 110, spaces: 8,
    icon: "fa-solid fa-chart-line",
    image: "https://img.icons8.com/color/240/economic-improvement.png" }
],

          
      cart: [],
      showCart: false,
      searchTerm: "",
      sortBy: "subject",
      sortOrder: "asc",
      name: "",
      phone: "",
      orderConfirmed: false
    }
  },
  computed: {
    filteredLessons() {
      const term = this.searchTerm.toLowerCase()
      return this.lessons.filter(l =>
        l.subject.toLowerCase().includes(term) ||
        l.location.toLowerCase().includes(term)
      )
    },
    sortedAndFilteredLessons() {
      return this.filteredLessons.sort((a, b) => {
        const modifier = this.sortOrder === "asc" ? 1 : -1
        if (a[this.sortBy] < b[this.sortBy]) return -1 * modifier
        if (a[this.sortBy] > b[this.sortBy]) return 1 * modifier
        return 0
      })
    },
    isFormValid() {
      const namePattern = /^[A-Za-z ]+$/
      const phonePattern = /^[0-9]+$/
      return namePattern.test(this.name) && phonePattern.test(this.phone)
    }
  },
  methods: {
    addToCart(lesson) {
      if (lesson.spaces > 0) {
        this.cart.push(lesson)
        lesson.spaces--
      }
    },
    removeFromCart(index) {
      const lesson = this.cart[index]
      lesson.spaces++
      this.cart.splice(index, 1)
    },
    checkout() {
      if (this.isFormValid) {
        this.orderConfirmed = true
        this.cart = []
      } else {
        alert("Please enter a valid name and phone number.")
      }
    },
    goHome() {
        this.showCart = false;
      }
  }
}).mount('#app')
