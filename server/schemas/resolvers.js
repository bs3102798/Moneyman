const { AuthenticationError } = require('apollo-server-express');
const { User,
    //Thought
} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // users: async () => {
        //     return User.find().populate('thoughts');
        // },
        // user: async (parent, { username }) => {
        //     return User.findOne({ username }).populate('thoughts');
        // },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            try {
                console.log("I GOT HERE!!!", email, username, password)
                const user = await User.create({ username, email, password });
                const token = signToken(user);
                return { token, user };
            } catch (err) {
                console.log(err)
            }
        },
        login: async (parent, { email, password }) => {
            console.log("logging in!")
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        // addThought: async (parent, { thoughtText }, context) => {
        //     if (context.user) {
        //         const thought = await Thought.create({
        //             thoughtText,
        //             thoughtAuthor: context.user.username,
        //         });

        //         await User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             { $addToSet: { thoughts: thought._id } }
        //         );

        //         return thought;
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        // },
        // addComment: async (parent, { thoughtId, commentText }, context) => {
        //     if (context.user) {
        //         return Thought.findOneAndUpdate(
        //             { _id: thoughtId },
        //             {
        //                 $addToSet: {
        //                     comments: { commentText, commentAuthor: context.user.username },
        //                 },
        //             },
        //             {
        //                 new: true,
        //                 runValidators: true,
        //             }
        //         );
        //             }
        //             throw new AuthenticationError('You need to be logged in!');
        //         },
        //         removeThought: async (parent, { thoughtId }, context) => {
        //             if (context.user) {
        //                 const thought = await Thought.findOneAndDelete({
        //                     _id: thoughtId,
        //                     thoughtAuthor: context.user.username,
        //                 });

        //                 await User.findOneAndUpdate(
        //                     { _id: context.user._id },
        //                     { $pull: { thoughts: thought._id } }
        //                 );

        //                 return thought;
        //             }
        //             throw new AuthenticationError('You need to be logged in!');
        //         },
        //         removeComment: async (parent, { thoughtId, commentId }, context) => {
        //             if (context.user) {
        //                 return Thought.findOneAndUpdate(
        //                     { _id: thoughtId },
        //                     {
        //                         $pull: {
        //                             comments: {
        //                                 _id: commentId,
        //                                 commentAuthor: context.user.username,
        //                             },
        //                         },
        //                     },
        //                     { new: true }
        //                 );
        //             }
        //             throw new AuthenticationError('You need to be logged in!');
        //         },
    },
};

module.exports = resolvers;
