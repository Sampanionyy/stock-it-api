const Materiel = require('../models/materiel.model');

// 1. Renvoyer tous les matériels
exports.getAllMateriels = async (req, res) => {
    try {
        const materiels = await Materiel.find();
        res.status(200).json(materiels);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

// 2. Recherche un matériel par référence
exports.getMaterielByReference = async (req, res) => {
    try {
        const { reference } = req.params;
        const materiel = await Materiel.findOne({ reference });
        if (!materiel) {
            return res.status(404).json({ message: 'Matériel non trouvé' });
        }
        res.status(200).json(materiel);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

// 3. Recherche un matériel dont la description contient un mot donné
//    Ex: GET /materiels/search?mot=carte
exports.searchMaterielByDescription = async (req, res) => {
    try {
        const { mot } = req.query;
        if (!mot) {
            return res.status(400).json({ message: 'Paramètre "mot" requis' });
        }
        
        // recherche insensible à la casse
        const regex = new RegExp(mot, 'i');
        const materiels = await Materiel.find({ description: regex });
        res.status(200).json(materiels);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};

// 4. Insérer un matériel
exports.createMateriel = async (req, res) => {
    try {
        const nouveau = new Materiel(req.body);
        const saved = await nouveau.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: 'Données invalides', error: err.message });
    }
};

// 5. Modifier un matériel (par ID)
exports.updateMateriel = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Materiel.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updated) {
            return res.status(404).json({ message: 'Matériel non trouvé' });
        }
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json({ message: 'Données invalides', error: err.message });
    }
};

// 6. Supprimer un matériel (par ID)
exports.deleteMateriel = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Materiel.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Matériel non trouvé' });
        }
        res.status(200).json({ message: 'Matériel supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
};
