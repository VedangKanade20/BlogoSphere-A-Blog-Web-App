import colors from "colors";
import Blog from "./models/blogModel.js";
import User from "./models/userModel.js";
import blogs from "./data/blogs.js";
import users from "./data/users.js";

const importData = async () => {
  try {
    await Blog.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleBlogs = blogs.map((blog) => {
      return { ...blog, user: adminUser };
    });

    await Blog.insertMany(sampleBlogs);
    console.log("Data imported".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
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
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
