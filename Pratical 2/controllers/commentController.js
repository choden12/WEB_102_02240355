// src/controllers/commentController.js

const dataStore = require('../models');

// GET all comments
const getAllComments = (req, res) => {
    res.status(200).json(dataStore.comments);
};

// GET comment by ID
const getCommentById = (req, res) => {
    const commentId = parseInt(req.params.id);
    const comment = dataStore.comments.find(c => c.id === commentId);

    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    res.status(200).json(comment);
};

// POST create a new comment
const createComment = (req, res) => {
    const { userId, videoId, text } = req.body;

    if (!userId || !videoId || !text) {
        return res.status(400).json({ error: 'Required fields missing' });
    }

    const user = dataStore.users.find(u => u.id === parseInt(userId));
    const video = dataStore.videos.find(v => v.id === parseInt(videoId));

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (!video) {
        return res.status(404).json({ error: 'Video not found' });
    }

    const newComment = {
        id: dataStore.nextIds.comments++,
        userId: parseInt(userId),
        videoId: parseInt(videoId),
        text,
        createdAt: new Date().toISOString()
    };

    dataStore.comments.push(newComment);
    res.status(201).json(newComment);
};

// PUT update a comment
const updateComment = (req, res) => {
    const commentId = parseInt(req.params.id);
    const comment = dataStore.comments.find(c => c.id === commentId);

    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    const { text } = req.body;
    if (text) comment.text = text;
    comment.updatedAt = new Date().toISOString();

    res.status(200).json(comment);
};

// DELETE a comment
const deleteComment = (req, res) => {
    const commentId = parseInt(req.params.id);
    const commentIndex = dataStore.comments.findIndex(c => c.id === commentId);

    if (commentIndex === -1) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    dataStore.comments.splice(commentIndex, 1);
    res.status(200).json({ message: 'Comment deleted successfully' });
};

module.exports = {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment
};