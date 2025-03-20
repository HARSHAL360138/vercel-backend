const Company = require("../models/Company");

// Get all companies
exports.getCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new company
exports.createCompany = async (req, res) => {
    try {
        const newCompany = await Company.create(req.body);
        res.status(201).json(newCompany);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a company (Edit Feature)
exports.updateCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCompany = await Company.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedCompany) {
            return res.status(404).json({ message: "Company not found" });
        }

        res.status(200).json(updatedCompany);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a company
exports.deleteCompany = async (req, res) => {
    try {
        await Company.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Company deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
