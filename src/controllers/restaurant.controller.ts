import { Request, Response } from "express";
import { T } from "../libs/types/common";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Admin Home Page");
  } catch (err) {
    console.log("Error, Admin goHome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Admin Login Page");
  } catch (err) {
    console.log("Error, Admin login page:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Admin Signup Page");
  } catch (err) {
    console.log("Error, Admin singup page:", err);
  }
};

export default restaurantController;
