puts "Seeding the stuff..."

User.destroy_all 
Movie.destroy_all 
Meal.destroy_all 
Tag.destroy_all 

User.create(username: "Hershey", email: "hershey@hershey.com", image: "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg", password: "123")
User.create(username: "Sheba", email: "sheba@sheba.com", image: "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg", password: "456")
User.create(username: "Dickens", email: "dickens@dickens.com", image: "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg", password: "789")
User.create(username: "Tilda", email: "tilda@tilda.com", image: "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg", password: "001")
User.create(username: "Scout", email: "scout@scout.com", image: "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg", password: "002")
User.create(username: "Bandit", email: "bandit@bandit.com", image: "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg", password: "003")

Movie.create(title: "The Exorcist", poster: "https://m.media-amazon.com/images/I/71KnXY8ZfiL._AC_SY741_.jpg", genre: "Horror")
Movie.create(title: "Ratatouille", poster: "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_.jpg", genre: "Family")
Movie.create(title: "Finding Nemo", poster: "https://fffmovieposters.com/wp-content/uploads/73763.jpg", genre: "Family")
Movie.create(title: "The Godfather", poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", genre: "Drama")
Movie.create(title: "The Silence of the Lambs", poster: "http://cdn.shopify.com/s/files/1/1057/4964/products/silence-of-the-lambs-vintage-movie-poster-original-1-sheet-27x41-238.jpg?v=1663218418", genre: "Thriller")
Movie.create(title: "Fargo", poster: "https://m.media-amazon.com/images/I/618dE5Ni6KL._AC_SY580_.jpg", genre: "Comedy")
Movie.create(title: "In the Mood for Love", poster: "https://www.themoviedb.org/t/p/original/8BgGbbWiLNhPtkMkN0gGTnbtvBv.jpg", genre: "International")
Movie.create(title: "Casablanca", poster: "https://m.media-amazon.com/images/I/61Bc+jcl4LL.jpg", genre: "Romance")
Movie.create(title: "Die Hard", poster: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", genre: "Action")
Movie.create(title: "2001: A Space Odyssey", poster: "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", genre: "Science Fiction")
Movie.create(title: "Grizzly Man", poster: "https://m.media-amazon.com/images/I/41PK8ZDJ3yL._AC_SY580_.jpg", genre: "Documentary")

Meal.create(name: "Split Pea Soup", course: "Entree", image: "https://www.cookingclassy.com/wp-content/uploads/2019/09/split-pea-soup-5.jpg", notes: "Don't projectile vomit! Link to recipe.", movie_id: 1, user_id: 1)
Meal.create(name: "Ratatouille", course: "Entree", image: "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg", notes: "No rats were harmed in the making of this dish or film.", movie_id: 2, user_id: 5)
Meal.create(name: "Sashimi", course: "Side", image: "https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png", notes: "Mine. Mine. Mine.", movie_id: 3, user_id: 2)
Meal.create(name: "Cannoli", course: "Dessert", image: "https://assets.bonappetit.com/photos/5bedd7a0c09fe84a28774cb4/5:4/w_3515,h_2812,c_limit/cannoli-1.jpg", notes: "Leave the gun, take the cannoli.", movie_id: 4, user_id: 3)
Meal.create(name: "Rack of Lamb", course: "Entree", image: "https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png", notes: "Pair with fava beans and a nice Chianti", movie_id: 5, user_id: 4)
Meal.create(name: "Hot Dish", course: "Appetizer", image: "https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png", notes: "Oh sure, you betcha.", movie_id: 6, user_id: 6)
Meal.create(name: "Tang Yuan", course: "Dessert", image: "https://www.honestfoodtalks.com/wp-content/uploads/2021/09/colourful-tangyuan-with-a-sprinkle-of-black-sesame-seeds.jpg", notes: "In the mood for glutinous rice balls.", movie_id: 7, user_id: 1)
Meal.create(name: "French 75", course: "Beverage", image: "https://www.liquor.com/thmb/QBzfhalevWw7lCnWRv8MOxBsVao=/735x0/french-75-720x720-primary-17fc1ce34c0a49e2ad60eb4a5705c6a2.jpg", notes: "Pour it again, Sam", movie_id: 8, user_id: 2)
Meal.create(name: "Cinnamon Sugar Popcorn", course: "Snack", image: "https://www.365daysofbakingandmore.com/wp-content/uploads/2021/05/Cinnamon-Sugar-Popcorn-FEATURE.jpg", notes: "Yippee ki yay...", movie_id: 9, user_id: 6)
Meal.create(name: "Something", course: "Side", image: "https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png", notes: "Open the pod bay doors, HAL. Link to recipe.", movie_id: 10, user_id: 4)
Meal.create(name: "Beef Jerky", course: "Snack", image: "https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png", notes: "Don't snap into a Slim Jim.", movie_id: 11, user_id: 3)
Meal.create(name: "Mini Croque Monsieur", course: "Appetizer", image: "https://whereismyspoon.co/wp-content/uploads/2018/07/croque-monsieur-6.jpg", notes: "Link to recipe.", movie_id: 2, user_id: 4)

Tag.create(name: "Halloween", meal_id: 1)
Tag.create(name: "Date Night", meal_id: 8)
Tag.create(name: "Family Night", meal_id: 2)
Tag.create(name: "Family Night", meal_id: 3)
Tag.create(name: "Holiday", meal_id: 9)
Tag.create(name: "Last Minute", meal_id: 9)
Tag.create(name: "Classics", meal_id: 4)
Tag.create(name: "Gluten Free", meal_id: 10)

puts "Done seeding the stuff!"
