import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updateDoctor = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      succes: true,
      message: "Succesfull updated",
      data: updateDoctor,
    });
  } catch (err) {
    res.status(500).json({ succes: false, message: "Failed to update" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({ succes: true, message: "Succesfull deleted" });
  } catch (err) {
    res.status(500).json({ succes: false, message: "Failed to delete" });
  }
};
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await User.findById(id).select("-password");

    res
      .status(200)
      .json({ succes: true, message: "Doctorfound", data: doctor });
  } catch (err) {
    res.status(404).json({ succes: false, message: "no Doctorfound" });
  }
};
export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res
      .status(200)
      .json({ success: true, message: "Doctors found", data: doctors });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch doctors" });
  }
};
