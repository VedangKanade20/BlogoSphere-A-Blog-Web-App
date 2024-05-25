import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import blogs from "./data/blogs.js";
import users from "./data/users.js";
import Blog from "./models/blogModel.js";
import User from "./models/userModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Blog.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    // const adminUser = createdUsers[0]._id;
    // const author = createdUsers[0].author;
    const userMap = createdUsers.reduce((map, user) => {
      map[user.email] = user._id;
      return map;
    }, {});

    // const sampleBlogs = blogs.map((blog) => {
    //   return { ...blog, user: adminUser, author: author };
    // });

    const sampleBlogs = blogs.map((blog, index) => ({
      ...blog,
      // user: userMap,
      author: userMap[users[index % users.length].email], // Ensure author is a valid ObjectId
    }));

    await Blog.insertMany(sampleBlogs);
    console.log("Data imported".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Blog.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed".red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

// import dotenv from "dotenv";
// import colors from "colors";
// import connectDB from "./config/db.js";
// import blogs from "./data/blogs.js";
// import users from "./data/users.js";
// import Blog from "./models/blogModel.js";
// import User from "./models/userModel.js";

// dotenv.config();

// connectDB();

// const importData = async () => {
//   try {
//     await Blog.deleteMany();
//     await User.deleteMany();

//     // Insert users into the database
//     await User.insertMany(users);

//     // Get all users from the database
//     const allUsers = await User.find();

//     // Create a mapping between user names and their corresponding ObjectIds
//     const userMap = allUsers.reduce((map, user) => {
//       map[user.name] = user._id;
//       return map;
//     }, {});

//     // Map user names to ObjectIds for each blog
//     const sampleBlogs = blogs.map((blog, index) => ({
//       ...blog,
//       user: userMap[blog.user],
//       author: userMap[users[index % users.length].name], // Ensure author is a valid ObjectId
//     }));

//     // Insert blogs into the database
//     await Blog.insertMany(sampleBlogs);

//     console.log("Data imported".green.inverse);
//     process.exit();
//   } catch (err) {
//     console.error(`${err}`);
//     process.exit(1);
//   }
// };

// const destroyData = async () => {
//   try {
//     await Blog.deleteMany();
//     await User.deleteMany();

//     console.log("Data destroyed".red.inverse);
//     process.exit();
//   } catch (err) {
//     console.error(`${err}`);
//     process.exit(1);
//   }
// };

// if (process.argv[2] === "-d") {
//   destroyData();
// } else {
//   importData();
// }
