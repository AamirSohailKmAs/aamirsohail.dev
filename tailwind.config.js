module.exports = {
 darkMode: "class",
 content: [
  "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
  "./vendor/laravel/jetstream/**/*.blade.php",
  "./storage/framework/views/*.php",
  "./resources/views/**/*.blade.php",
 ],
 theme: {
  extend: {
   colors: {
    brand: {
     DEFAULT: "#25CEDE",
     dark: "#2C2F33",
     red: "#DB0815",
    },
   },
   boxShadow: {
    "neo-morph": "-5px -5px 15px #3b4451, 5px 5px 15px #000000",
   },
  },
 },
 plugins: [],
};
