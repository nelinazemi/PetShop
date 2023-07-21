import Login from "../Models/LoginModel.js";

export const getAdmin = async function(req, res){
    try {
        // check if the user is admin
        const admin = await Login.find({username: req.body.username});
        if (admin) {
          //check if password matches
          const result = req.body.password === admin.password;
          if (result) {
            res.render("/adminroutes");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "not allowed" });
        }
      } catch (error) {
        res.status(400).json({message: error.message});
      }
}


export const saveAdmin = async(req, res) => {
    const admin = new Login({
        username: req.body.username,
        password: req.body.password,
    });
    try {
        const savedAdmin = await admin.save();
        res.json(savedAdmin);
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
}


export const getAdminById = async(req, res) => {
    try {
        const admin = await Login.findById(req.params.id);
        res.json(admin);
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
}



