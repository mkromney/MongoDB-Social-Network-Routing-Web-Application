
const { User, Thought } = require('../models');

module.exports = {
  // GET all users
  async getUsers(req, res) {
    try {
      const users = await User.find();

      const userObj = {
        users,
      };

      res.json(userObj);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },

  // GET a single user by its id
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json({
        user,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },

  // POST Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // PUT Update a user by its id
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const userId = req.params.userId;
  
      // First, find the user and remove it
      const user = await User.findOneAndRemove({ _id: userId });
  
      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }
  
      // Next, delete all thoughts associated with the user
      await Thought.deleteMany({ users: userId });
  
      res.json({ message: 'User and associated thoughts successfully deleted' });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  // Add a friend to a user
  async addFriend(req, res) {
    const { friendId } = req.body; // Extract friendId from the request body
  
    try {
      const friend = await User.findById(friendId);
  
      if (!friend) {
        return res.status(404).json({ message: 'Friend not found :(' });
      }
  
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: { friendId, friendUsername: friend.username } } },
        { runValidators: true, new: true }
      );
  
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID :(' });
      }
  
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove friend from a user
  async removeFriend(req, res) {
    const { friendId } = req.params;
  
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: { friendId } } }, // Remove the friend based on friendId
        { runValidators: true, new: true }
      );
  
      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID :(' });
      }
  
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
