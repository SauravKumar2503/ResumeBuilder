const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');
const { protect } = require('../middleware/auth');

// @route   POST /api/resumes
// @desc    Create a new resume
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const newResume = new Resume({
      ...req.body,
      userId: req.user.id
    });
    const savedResume = await newResume.save();
    res.status(201).json(savedResume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route   GET /api/resumes
// @desc    Get all resumes for the logged in user
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user.id });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route   GET /api/resumes/:id
// @desc    Get a resume by ID
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    
    if (!resume) {
      return res.status(404).json({ msg: 'Resume not found' });
    }

    // Make sure user owns resume
    if (resume.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    res.json(resume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route   PUT /api/resumes/:id
// @desc    Update a resume
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    
    if (!resume) {
      return res.status(404).json({ msg: 'Resume not found' });
    }

    // Make sure user owns resume
    if (resume.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    const updatedResume = await Resume.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedResume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
